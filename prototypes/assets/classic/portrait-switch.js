const portrait = document.querySelector('#portrait');
const context = portrait.getContext('2d');
const panel = document.querySelector('#portrait-panel');
const pageShell = document.querySelector('.page-shell');
const transitionLab = document.querySelector('.transition-lab');
const transitionPlay = document.querySelector('#transition-play');
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
let initialized = false;
let frame = 0;
let phase = 1.7;
let lastTime = 0;
let crossing = null;
let width = 0;
let height = 0;
let spill = 0;
const displacement = 0.4;
const ratio = () => Math.min(devicePixelRatio || 1, 2);

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
function finishCrossing() {
  if (!crossing) return;
  const completed = crossing;
  if (mode !== completed.next) applyMode(completed.next, completed.hash);
  crossing = null;
  pageTransition.cancel();
  delete document.body.dataset.crossing;
  pageShell.inert = false;
  transitionLab.inert = false;
  modeButton.disabled = false;
  document.querySelector('#main').removeAttribute('aria-busy');
  const focus = completed.focus;
  if (focus && focus !== document.body) {
    (focus.isConnected && focus.getClientRects().length ? focus : modeButton).focus({preventScroll:true});
  }
  refresh();
}
function render(time) {
  if (document.hidden) return;
  if (!paused && lastTime && mode === 'art' && !crossing) phase += Math.min(time - lastTime, 100) / 1800;
  lastTime = time;
  drawPortrait();
  if (mode === 'art' && !paused) frame = requestAnimationFrame(render);
}
function refresh() {
  cancelAnimationFrame(frame);
  lastTime = 0;
  motionButton.innerHTML = paused ? 'resume motion <span aria-hidden="true">▷</span>' : 'pause motion <span aria-hidden="true">Ⅱ</span>';
  motionButton.setAttribute('aria-pressed', String(paused));
  if (ready) render(performance.now());
}
function applyMode(next, hash) {
  const art = next === 'art';
  mode = next;
  initialized = true;
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
  const targetHash = hash ?? (art ? '#art' : '');
  history.replaceState(null, '', `${location.pathname}${location.search}${targetHash}`);
  window.scrollTo({top:0, behavior:'instant'});
  if (hash && hash !== '#art') document.querySelector(hash)?.scrollIntoView();
  transitionPlay.textContent = `Play → ${art ? 'research' : 'art'}`;
  sizePortrait();
  document.querySelector('#mode-status').textContent = `${art ? 'Art' : 'Research'} view`;
  refresh();
}
function switchMode(next, animate = true, hash) {
  if (crossing || (next === mode && initialized)) return;
  if (!animate || reducedMotion.matches || !pageTransition.available) {
    applyMode(next, hash);
    return;
  }
  cancelAnimationFrame(frame);
  crossing = {next, hash, focus:document.activeElement};
  document.body.dataset.crossing = 'true';
  const origin = modeButton.getBoundingClientRect();
  modeButton.disabled = true;
  pageShell.inert = true;
  transitionLab.inert = true;
  document.querySelector('#main').setAttribute('aria-busy', 'true');
  pageTransition.start({
    art:next === 'art', origin,
    onChange:() => applyMode(next, hash),
    onComplete:finishCrossing,
  });
}

// The comparison controls appear only on the two study URLs.
const transitionQuery = new URLSearchParams(location.search).get('transition');
if (['ink', 'eclipse'].includes(transitionQuery)) {
  transitionLab.hidden = false;
  document.body.classList.add('has-transition-lab');
}
function updateStudy() {
  transitionLab.querySelectorAll('[data-transition]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.transition === pageTransition.style));
  });
  document.querySelector('#transition-note').textContent = pageTransition.style === 'ink'
    ? 'a dark tide crosses the page' : 'the next page grows from the switch';
}
transitionLab.querySelectorAll('[data-transition]').forEach(button => {
  button.addEventListener('click', () => {
    pageTransition.setStyle(button.dataset.transition);
    const url = new URL(location.href);
    url.searchParams.set('transition', pageTransition.style);
    history.replaceState(null, '', url);
    updateStudy();
  });
});
transitionPlay.addEventListener('click', () => switchMode(mode === 'research' ? 'art' : 'research'));
updateStudy();
document.querySelector('#page-transition').addEventListener('wheel', event => event.preventDefault(), {passive:false});
document.addEventListener('keydown', event => {
  if (!crossing) return;
  if (event.key === 'Escape') finishCrossing();
  if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) event.preventDefault();
});
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
  const target = ['#art','#albums','#compositions','#performances'].includes(hash) ? 'art' : ['#background','#research'].includes(hash) ? 'research' : null;
  if (target && target !== mode) {
    switchMode(target, true, hash);
  }
});
const initialHash = location.hash;
switchMode(['#art','#albums','#compositions','#performances'].includes(initialHash) ? 'art' : 'research', false);
if (!['','#art','#intro','#home'].includes(initialHash)) {
  history.replaceState(null, '', `${location.pathname}${location.search}${initialHash}`);
  requestAnimationFrame(() => document.querySelector(initialHash)?.scrollIntoView());
}
if (context) {
  Promise.all([
    new Promise((resolve,reject) => { normalImage.onload=resolve; normalImage.onerror=reject; normalImage.src=`${asset}real-profile.png`; }),
    new Promise((resolve,reject) => { noiseImage.onload=resolve; noiseImage.onerror=reject; noiseImage.src=artSource; })
  ]).then(() => { ready=true; fallback.hidden=true; sizePortrait(); refresh(); }).catch(() => { portrait.hidden=true; fallback.hidden=false; });
}
