const portrait = document.querySelector('#portrait');
const context = portrait.getContext('2d');
const panel = document.querySelector('#portrait-panel');
const pageShell = document.querySelector('.page-shell');
const normalImage = new Image();
const noiseImage = new Image();
const normalBuffer = document.createElement('canvas');
const noiseBuffer = document.createElement('canvas');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const modeNav = document.querySelector('.mode-nav');
const modeLinks = [...modeNav.querySelectorAll('[data-mode]')];
const fallback = document.querySelector('#portrait-fallback');
let mode = 'research';
// Only the reduced-motion preference holds the portrait still.
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
// While leaving the music page, a live copy of it covers the incoming page and an eclipse opens through it.
let ghost = null;
// How the music portrait moves: strip offset amount, number of strips, speed, edge fade width in px,
// and how far each strip strays from the shared wave toward its own motion.
const motion = {displacement:.26, strips:68, speed:2.55, fade:160, randomness:.4};
// Fixed per-strip random values, so strips stray the same way every time and move smoothly rather than flicker.
const hash = n => { const value = Math.sin(n * 12.9898) * 43758.5453; return value - Math.floor(value); };
function wander(index, time) {
  const slow = .35 + hash(index + .1) * .5, fast = .8 + hash(index + .7) * .9;
  return (Math.sin(time * slow + hash(index + .3) * 6.283) + .6 * Math.sin(time * fast + hash(index + .9) * 6.283)) / 1.6;
}
// Where the face sits in each source image, as fractions of its width and height.
const faces = {research:{x:.505, y:.37}, art:{x:.447, y:.455}};
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
  const feather = Math.min(motion.fade, imageWidth * .45) / imageWidth;
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
function drawStrips(target, buffer, stripWidth, stripHeight, gutter) {
  const scale = buffer.height / stripHeight;
  const strip = buffer.height / motion.strips;
  for (let index = 0; index < motion.strips; index++) {
    // Strips meet on whole buffer rows: overlapping them shows as bright seams wherever the edge fade is see-through.
    const top = Math.round(index * strip);
    const rows = Math.round((index + 1) * strip) - top;
    const y = top / scale;
    const h = rows / scale;
    const wave = Math.sin(index * 1.49 + phase) * Math.sin(index * .21 - phase * .36);
    const offset = (wave + (wander(index, phase) - wave) * motion.randomness) * motion.displacement * (stripWidth - gutter * 2) * .12;
    target.drawImage(buffer, 0, top, buffer.width, rows, offset, y, stripWidth, h);
  }
}
function drawPortrait() {
  if (!ready || !context || !width || !height) return;
  if (ghost) {
    ghost.context.clearRect(0, 0, ghost.width, ghost.height);
    drawStrips(ghost.context, ghost.buffer, ghost.width, ghost.height, ghost.spill);
  }
  context.clearRect(0, 0, width, height);
  if (mode === 'research') {
    context.drawImage(normalBuffer, 0, 0, width, height);
    return;
  }
  drawStrips(context, noiseBuffer, width, height, spill);
}
function createCover() {
  const layer = document.createElement('div');
  layer.className = 'art-cover';
  layer.setAttribute('aria-hidden', 'true');
  layer.inert = true;
  const copy = pageShell.cloneNode(true);
  copy.style.transform = `translateY(${-scrollY}px)`;
  layer.append(copy);
  const canvas = copy.querySelector('#portrait');
  const coverContext = canvas.getContext('2d');
  coverContext.setTransform(ratio(), 0, 0, ratio(), 0, 0);
  // The music buffer is rebuilt at research size once the page switches, so the copy keeps its own.
  const buffer = document.createElement('canvas');
  buffer.width = noiseBuffer.width;
  buffer.height = noiseBuffer.height;
  buffer.getContext('2d').drawImage(noiseBuffer, 0, 0);
  ghost = {layer, context:coverContext, buffer, width, height, spill};
  return layer;
}
function removeCover() {
  ghost?.layer.remove();
  ghost = null;
}
// The eclipse grows from the face in the incoming portrait, following how that image is fitted.
function faceOrigin() {
  const element = portrait.hidden ? fallback : portrait;
  const rect = element.getBoundingClientRect();
  const image = mode === 'art' ? noiseImage : normalImage;
  const imageWidth = image.naturalWidth;
  const imageHeight = image.naturalHeight;
  if (!imageWidth || !imageHeight) return rect;
  let scale, left, top;
  if (mode === 'art') {
    // Contained between the canvas's transparent gutters; the fallback image has none.
    const gutter = portrait.hidden ? 0 : spill;
    scale = Math.min((rect.width - gutter * 2) / imageWidth, rect.height / imageHeight);
    left = rect.left + (rect.width - imageWidth * scale) / 2;
    top = rect.top + (rect.height - imageHeight * scale) / 2;
  } else {
    // Covers the slot, centred sideways and anchored to the top.
    scale = Math.max(rect.width / imageWidth, rect.height / imageHeight);
    left = rect.left + (rect.width - imageWidth * scale) / 2;
    top = rect.top;
  }
  const x = left + faces[mode].x * imageWidth * scale;
  const y = top + faces[mode].y * imageHeight * scale;
  return {left:x, top:y, width:0, height:0, bottom:y};
}
function finishCrossing() {
  if (!crossing) return;
  const completed = crossing;
  if (mode !== completed.next) applyMode(completed.next, completed.hash);
  crossing = null;
  pageTransition.cancel();
  removeCover();
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
  const moving = mode === 'art' || ghost;
  if (!paused && lastTime && moving) phase += Math.min(time - lastTime, 100) / 1800 * motion.speed;
  lastTime = time;
  drawPortrait();
  if (moving && !paused) frame = requestAnimationFrame(render);
}
function refresh() {
  cancelAnimationFrame(frame);
  // Keep the clock running mid-transition so the moving portrait doesn't hitch.
  if (!crossing) lastTime = 0;
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
  portrait.setAttribute('aria-label', art ? 'Animated corrupted pink and blue portrait' : 'Portrait of Christos Plachouras');
  fallback.src = art ? artSource : `${asset}profile.jpg?v=4`;
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
  crossing = {next, hash, focus:document.activeElement};
  document.body.dataset.crossing = 'true';
  pageShell.inert = true;
  document.querySelector('#main').setAttribute('aria-busy', 'true');
  if (mode === 'art' && ready && !portrait.hidden) {
    // A live copy keeps the music page moving, where a view-transition snapshot would freeze it.
    const layer = createCover();
    const images = [...layer.querySelectorAll('img')].map(image => image.decode().catch(() => {}));
    Promise.race([Promise.all(images), new Promise(resolve => setTimeout(resolve, 150))]).then(() => {
      if (crossing?.next !== next || ghost?.layer !== layer) return;
      document.body.append(layer);
      drawPortrait();
      applyMode(next, hash);
      pageTransition.cover({origin:faceOrigin(), layer, onComplete:finishCrossing});
    });
    return;
  }
  pageTransition.start({
    origin:faceOrigin,
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
    new Promise((resolve,reject) => { normalImage.onload=resolve; normalImage.onerror=reject; normalImage.src=`${asset}profile.jpg?v=4`; }),
    new Promise((resolve,reject) => { noiseImage.onload=resolve; noiseImage.onerror=reject; noiseImage.src=artSource; })
  ]).then(() => { ready=true; fallback.hidden=true; sizePortrait(); refresh(); }).catch(() => { portrait.hidden=true; fallback.hidden=false; });
}
