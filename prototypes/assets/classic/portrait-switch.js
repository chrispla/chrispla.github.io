const portrait = document.querySelector('#portrait');
const context = portrait.getContext('2d');
const panel = document.querySelector('#portrait-panel');
const crossingCanvas = document.querySelector('#crossing-portrait');
const crossingContext = crossingCanvas.getContext('2d');
const normalImage = new Image();
const noiseImage = new Image();
const normalBuffer = document.createElement('canvas');
const noiseBuffer = document.createElement('canvas');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('#motion-toggle');
const modeButton = document.querySelector('#mode-toggle');
const fallback = document.querySelector('#portrait-fallback');
let mode = 'research';
let paused = reducedMotion.matches;
let ready = false;
let frame = 0;
let phase = 1.7;
let lastTime = 0;
let crossing = null;
let width = 0;
let height = 0;
let spill = 0;
const displacement = 0.4;
const ratio = () => Math.min(devicePixelRatio || 1, 2);
const clamp = value => Math.max(0, Math.min(1, value));
const smooth = value => { const x = clamp(value); return x * x * (3 - 2 * x); };
const lerp = (a, b, t) => a + (b - a) * t;

function sizePortrait() {
  const rect = portrait.getBoundingClientRect();
  width = Math.round(rect.width);
  height = Math.round(rect.height);
  spill = mode === 'art' ? Math.round((rect.width - document.querySelector('#art-portrait-slot').getBoundingClientRect().width) / 2) : 0;
  portrait.width = Math.round(width * ratio());
  portrait.height = Math.round(height * ratio());
  context?.setTransform(ratio(), 0, 0, ratio(), 0, 0);
  if (ready && width && height) preparePortraits();
}
function preparePortraits() {
  normalBuffer.width = noiseBuffer.width = width;
  normalBuffer.height = noiseBuffer.height = height;
  const normal = normalBuffer.getContext('2d');
  const noise = noiseBuffer.getContext('2d');
  normal.save();
  normal.translate(width / 2, height / 2);
  normal.rotate(-Math.PI / 2);
  const size = Math.min(width, 162);
  normal.drawImage(normalImage, -size / 2, -size / 2, size, size);
  normal.restore();
  const imageArea = width - spill * 2;
  const scale = Math.min(imageArea / noiseImage.width, height / noiseImage.height);
  const imageWidth = noiseImage.width * scale;
  const imageHeight = noiseImage.height * scale;
  const imageLeft = (width - imageWidth) / 2;
  // Preserve the full portrait and let its feathered strips move through transparent gutters.
  noise.drawImage(noiseImage, imageLeft, (height - imageHeight) / 2, imageWidth, imageHeight);
  const feather = Math.min(32, imageWidth * .07) / imageWidth;
  const edgeFade = noise.createLinearGradient(imageLeft, 0, imageLeft + imageWidth, 0);
  edgeFade.addColorStop(0, 'transparent');
  edgeFade.addColorStop(feather * .45, 'rgba(0,0,0,.35)');
  edgeFade.addColorStop(feather, '#000');
  edgeFade.addColorStop(1 - feather, '#000');
  edgeFade.addColorStop(1 - feather * .45, 'rgba(0,0,0,.35)');
  edgeFade.addColorStop(1, 'transparent');
  noise.globalCompositeOperation = 'destination-in';
  noise.fillStyle = edgeFade;
  noise.fillRect(0, 0, width, height);
  noise.globalCompositeOperation = 'source-over';
}
function drawPortrait() {
  if (!ready || !context || !width || !height) return;
  context.clearRect(0, 0, width, height);
  if (mode === 'research') {
    context.drawImage(normalBuffer, 0, 0);
    return;
  }
  const strip = height / 44;
  for (let index = 0; index < 44; index++) {
    const y = index * strip;
    const h = Math.min(strip + 1, height - y);
    const offset = Math.sin(index * 1.49 + phase) * Math.sin(index * .21 - phase * .36) * displacement * (width - spill * 2) * .12;
    context.drawImage(noiseBuffer, 0, y, width, h, offset, y, width, h);
  }
}
function snapshot() {
  const copy = document.createElement('canvas');
  copy.width = portrait.width;
  copy.height = portrait.height;
  const snapshotContext = copy.getContext('2d');
  snapshotContext.drawImage(portrait, 0, 0);
  return copy;
}
function drawCrossing(time) {
  if (!crossing) return;
  const raw = clamp((time - crossing.started) / 1050);
  const t = smooth(raw);
  const rect = {
    left: lerp(crossing.from.left, crossing.to.left, t),
    top: lerp(crossing.from.top, crossing.to.top, t),
    width: lerp(crossing.from.width, crossing.to.width, t),
    height: lerp(crossing.from.height, crossing.to.height, t)
  };
  Object.assign(crossingCanvas.style, {left:`${rect.left}px`, top:`${rect.top}px`, width:`${rect.width}px`, height:`${rect.height}px`});
  crossingCanvas.width = Math.max(1, Math.round(rect.width * ratio()));
  crossingCanvas.height = Math.max(1, Math.round(rect.height * ratio()));
  crossingContext.setTransform(ratio(), 0, 0, ratio(), 0, 0);
  const strips = 44;
  for (let index = 0; index < strips; index++) {
    const syA = index * crossing.before.height / strips;
    const syB = index * crossing.after.height / strips;
    const dy = index * rect.height / strips;
    const dh = rect.height / strips + 1;
    const blend = smooth((t - index / strips * .18) / .82);
    const shift = Math.sin(raw * Math.PI) * Math.sin(index * .7 + phase) * rect.width * .045;
    crossingContext.globalAlpha = 1 - blend;
    crossingContext.drawImage(crossing.before, 0, syA, crossing.before.width, crossing.before.height / strips, shift, dy, rect.width, dh);
    crossingContext.globalAlpha = blend;
    crossingContext.drawImage(crossing.after, 0, syB, crossing.after.width, crossing.after.height / strips, -shift, dy, rect.width, dh);
  }
  crossingContext.globalAlpha = 1;
  if (raw >= 1) finishCrossing();
}
function finishCrossing() {
  const returnFocus = crossing?.returnFocus;
  crossing = null;
  crossingCanvas.hidden = true;
  portrait.style.visibility = '';
  delete document.body.dataset.crossing;
  modeButton.disabled = false;
  if (returnFocus && document.activeElement === document.body) modeButton.focus({preventScroll:true});
  lastTime = 0;
}
function render(time) {
  if (document.hidden) return;
  if (!paused && lastTime && mode === 'art' && !crossing) phase += Math.min(time - lastTime, 100) / 1800;
  lastTime = time;
  drawPortrait();
  drawCrossing(time);
  if (crossing || (mode === 'art' && !paused)) frame = requestAnimationFrame(render);
}
function refresh() {
  cancelAnimationFrame(frame);
  lastTime = 0;
  motionButton.innerHTML = paused ? 'resume motion <span aria-hidden="true">▷</span>' : 'pause motion <span aria-hidden="true">Ⅱ</span>';
  motionButton.setAttribute('aria-pressed', String(paused));
  if (ready) render(performance.now());
}
function switchMode(next, animate = true) {
  if (crossing || (next === mode && ready)) return;
  cancelAnimationFrame(frame);
  const shouldAnimate = animate && ready && !reducedMotion.matches && crossingContext;
  const before = shouldAnimate ? snapshot() : null;
  const from = shouldAnimate ? portrait.getBoundingClientRect() : null;
  const art = next === 'art';
  mode = next;
  if (shouldAnimate) document.body.dataset.crossing = 'true';
  document.body.dataset.mode = mode;
  document.querySelector('#intro').hidden = art;
  document.querySelector('#art-stage').hidden = !art;
  document.querySelector('#research-panel').hidden = art;
  document.querySelector('#art-panel').hidden = !art;
  document.querySelector(art ? '#art-portrait-slot' : '#research-portrait-slot').append(panel);
  modeButton.setAttribute('aria-checked', String(art));
  motionButton.hidden = !art;
  portrait.setAttribute('aria-label', art ? 'Animated corrupted pink and blue portrait' : 'Portrait of Christos Plachouras');
  fallback.src = art ? artSource : `${asset}real-profile.png`;
  history.replaceState(null, '', `${location.pathname}${art ? '#art' : ''}`);
  window.scrollTo({top:0, behavior:'instant'});
  sizePortrait();
  drawPortrait();
  if (shouldAnimate) {
    const to = portrait.getBoundingClientRect();
    crossing = {before, after:snapshot(), from, to, art, returnFocus:document.activeElement === modeButton, started:performance.now()};
    portrait.style.visibility = 'hidden';
    crossingCanvas.hidden = false;
    modeButton.disabled = true;
  }
  document.querySelector('#mode-status').textContent = `${art ? 'Art' : 'Research'} view`;
  refresh();
}
modeButton.addEventListener('click', () => switchMode(mode === 'research' ? 'art' : 'research'));
modeButton.addEventListener('keydown', event => {
  if (!['ArrowLeft','ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  switchMode(event.key === 'ArrowRight' ? 'art' : 'research');
});
motionButton.addEventListener('click', () => { paused = !paused; refresh(); });
reducedMotion.addEventListener('change', event => {
  paused = event.matches;
  if (event.matches && crossing) finishCrossing();
  refresh();
});
document.addEventListener('visibilitychange', () => {
  cancelAnimationFrame(frame);
  if (!document.hidden) { if (crossing) finishCrossing(); refresh(); }
});
window.addEventListener('resize', () => { if (crossing) finishCrossing(); sizePortrait(); refresh(); });
window.addEventListener('hashchange', () => {
  const hash = location.hash;
  if (hash === '#home' || hash === '#intro') { window.scrollTo({top:0, behavior:'instant'}); return; }
  const target = ['#art','#albums','#compositions','#performances','#writing'].includes(hash) ? 'art' : ['#background','#research'].includes(hash) ? 'research' : null;
  if (target && target !== mode) {
    switchMode(target);
    history.replaceState(null, '', `${location.pathname}${hash}`);
    if (hash !== '#art') document.querySelector(hash)?.scrollIntoView();
  }
});
const initialHash = location.hash;
switchMode(['#art','#albums','#compositions','#performances','#writing'].includes(initialHash) ? 'art' : 'research', false);
if (!['','#art','#intro','#home'].includes(initialHash)) {
  history.replaceState(null, '', `${location.pathname}${initialHash}`);
  requestAnimationFrame(() => document.querySelector(initialHash)?.scrollIntoView());
}
if (context) {
  Promise.all([
    new Promise((resolve,reject) => { normalImage.onload=resolve; normalImage.onerror=reject; normalImage.src=`${asset}real-profile.png`; }),
    new Promise((resolve,reject) => { noiseImage.onload=resolve; noiseImage.onerror=reject; noiseImage.src=artSource; })
  ]).then(() => { ready=true; fallback.hidden=true; sizePortrait(); refresh(); }).catch(() => { portrait.hidden=true; fallback.hidden=false; });
}
