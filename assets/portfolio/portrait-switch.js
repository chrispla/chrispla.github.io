const portrait = document.querySelector('#portrait');
const context = portrait.getContext('2d');
const panel = document.querySelector('#portrait-panel');
const pageShell = document.querySelector('.page-shell');
const normalImage = new Image();
const noiseImage = new Image();
const normalBuffer = document.createElement('canvas');
const noiseBuffer = document.createElement('canvas');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const motionButton = document.querySelector('#motion-toggle');
const modeNav = document.querySelector('.mode-nav');
const modeLinks = [...modeNav.querySelectorAll('[data-mode]')];
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
  // Keep the buffers at device resolution so the portraits stay sharp on high-density screens.
  normalBuffer.width = noiseBuffer.width = Math.round(width * ratio());
  normalBuffer.height = noiseBuffer.height = Math.round(height * ratio());
  const normal = normalBuffer.getContext('2d');
  const noise = noiseBuffer.getContext('2d');
  normal.setTransform(ratio(), 0, 0, ratio(), 0, 0);
  noise.setTransform(ratio(), 0, 0, ratio(), 0, 0);
  normal.imageSmoothingQuality = noise.imageSmoothingQuality = 'high';
  normal.save();
  normal.translate(width / 2, height / 2);
  const cover = Math.max(width / normalImage.width, height / normalImage.height);
  const coverWidth = normalImage.width * cover;
  const coverHeight = normalImage.height * cover;
  // Keep the top of the photo and centre it sideways; any excess is cropped from the bottom.
  normal.drawImage(normalImage, -coverWidth / 2, -height / 2, coverWidth, coverHeight);
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
    context.drawImage(normalBuffer, 0, 0, width, height);
    return;
  }
  const strip = height / 44;
  for (let index = 0; index < 44; index++) {
    const y = index * strip;
    const h = Math.min(strip + 1, height - y);
    const offset = Math.sin(index * 1.49 + phase) * Math.sin(index * .21 - phase * .36) * displacement * (width - spill * 2) * .12;
    context.drawImage(noiseBuffer, 0, y * ratio(), noiseBuffer.width, h * ratio(), offset, y, width, h);
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
  document.querySelector('#main').removeAttribute('aria-busy');
  const focus = completed.focus;
  if (focus && focus !== document.body) {
    (focus.isConnected && focus.getClientRects().length ? focus : modeLinks.find(link => link.dataset.mode === mode)).focus({preventScroll:true});
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
  document.querySelector('#art').hidden = !art;
  document.querySelector('#research-panel').hidden = art;
  document.querySelector('#art-panel').hidden = !art;
  document.querySelector(art ? '#art-portrait-slot' : '#research-portrait-slot').append(panel);
  modeLinks.forEach(link => {
    if (link.dataset.mode === mode) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  motionButton.hidden = !art;
  portrait.setAttribute('aria-label', art ? 'Animated corrupted pink and blue portrait' : 'Portrait of Christos Plachouras');
  fallback.src = art ? artSource : `${asset}profile.jpg`;
  const targetHash = hash ?? (art ? '#art' : '');
  history.replaceState(null, '', `${location.pathname}${location.search}${targetHash}`);
  window.scrollTo({top:0, behavior:'instant'});
  if (hash && hash !== '#art') document.querySelector(hash)?.scrollIntoView();
  sizePortrait();
  document.querySelector('#mode-status').textContent = `${art ? 'Music' : 'Research'} view`;
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
  const origin = (portrait.hidden ? fallback : portrait).getBoundingClientRect();
  pageShell.inert = true;
  document.querySelector('#main').setAttribute('aria-busy', 'true');
  pageTransition.start({
    origin,
    onChange:() => applyMode(next, hash),
    onComplete:finishCrossing,
  });
}

document.addEventListener('wheel', event => { if (crossing) event.preventDefault(); }, {passive:false});
document.addEventListener('keydown', event => {
  if (!crossing) return;
  if (event.key === 'Escape') finishCrossing();
  if (['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(event.key)) event.preventDefault();
});
modeLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Preserve native new-tab and modifier-click behavior for these real links.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (link.dataset.mode === mode && !crossing) window.scrollTo({top:0, behavior:'instant'});
    else switchMode(link.dataset.mode);
  });
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
  const target = ['#art','#albums','#compositions','#performances'].includes(hash) ? 'art' : ['#research','#background','#publications'].includes(hash) ? 'research' : null;
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
    new Promise((resolve,reject) => { normalImage.onload=resolve; normalImage.onerror=reject; normalImage.src=`${asset}profile.jpg`; }),
    new Promise((resolve,reject) => { noiseImage.onload=resolve; noiseImage.onerror=reject; noiseImage.src=artSource; })
  ]).then(() => { ready=true; fallback.hidden=true; sizePortrait(); refresh(); }).catch(() => { portrait.hidden=true; fallback.hidden=false; });
}
