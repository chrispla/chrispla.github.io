const concept = document.body.dataset.concept;
const concepts = {
  signal: { number: '01', name: 'Signal / Noise', heading: 'Teaching machines<br>to listen.', transition: 'A circular colour bloom', description: 'Audio, music, and the ways we understand them.' },
  gallery: { number: '02', name: 'Out of Order', heading: 'Listening,<br><em>understanding.</em>', transition: 'A folding gallery shutter', description: 'Research at the intersection of sound, music, and machine learning.' },
  instrument: { number: '03', name: 'Soft Errors', heading: 'Sound. Music.<br>Understanding.', transition: 'Displaced signal lines', description: 'Computational methods for audio and music understanding.' }
};
const study = concepts[concept];
const portrait = '../assets/corrupted-portrait.jpg';
const publications = [
  { year: '2026', title: 'BEANS-Next and ROOTS: Broadening Audio-Language Capabilities for Bioacoustics', authors: 'C. Plachouras et al.', venue: 'arXiv · Under review', paper: 'https://arxiv.org/abs/2610.10663', code: 'https://earthspecies.github.io/beans-next/', label: 'Project' },
  { year: '2026', title: 'Extending Music Annotation Schemas: Zero-Shot Prediction or Few-Shot Adaptation?', authors: 'C. Plachouras, E. Benetos, J. Pauwels', venue: 'arXiv · Under review', paper: 'https://arxiv.org/abs/2610.06920', code: 'https://github.com/chrispla/music-schema-extension', label: 'Code' },
  { year: '2026', title: 'OmniVideoBench: Towards Audio-Visual Understanding Evaluation for Omni MLLMs', authors: 'Li et al.', venue: 'ICLR 2026', paper: 'https://arxiv.org/abs/2510.10689', code: 'https://github.com/NJU-LINK/OmniVideoBench', label: 'Code' },
  { year: '2025', title: 'Towards a Unified Representation Evaluation Framework Beyond Downstream Tasks', authors: 'C. Plachouras, J. Guinot, G. Fazekas, E. Quinton, E. Benetos, J. Pauwels', venue: 'IJCNN 2025', paper: 'https://arxiv.org/abs/2505.06224', code: 'https://github.com/chrispla/synesis', label: 'Code' },
  { year: '2025', title: 'Learning Music Audio Representations with Limited Data', authors: 'C. Plachouras, E. Benetos, J. Pauwels', venue: 'ICASSP 2025', paper: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=10887766', code: 'https://github.com/chrispla/limited-music-representations', label: 'Code' }
];
const external = (href, text, cls = '') => `<a class="${cls}" href="${href}" target="_blank" rel="noopener noreferrer">${text} <span aria-hidden="true">↗</span></a>`;
const artHero = {
  signal: `<section class="art-hero signal-hero" aria-labelledby="art-title"><div class="signal-field" aria-hidden="true"><img src="${portrait}" alt=""><div class="image-echo echo-one"></div><div class="image-echo echo-two"></div></div><div class="art-heading"><p class="eyebrow">Music · images · experiments</p><h1 id="art-title">signal<span class="signal-slash">/</span><em>noise</em></h1></div><div class="hero-caption"><p>Sometimes the process breaks.<br>Sometimes that's where it begins.</p><a href="#art-work">Explore the work <span aria-hidden="true">↓</span></a></div><span class="vertical-note">CORRUPTED PIPELINE / ORIGINAL IMAGE, 2022</span></section>`,
  gallery: `<section class="art-hero gallery-hero" aria-labelledby="art-title"><div class="gallery-orbit" aria-hidden="true"></div><div class="art-heading"><p class="eyebrow">Sound & other happy accidents</p><h1 id="art-title">a little<br>out of<br><em>order.</em></h1></div><figure class="gallery-image"><img src="${portrait}" alt="The original corrupted portrait in pink and blue"><figcaption>01 / A portrait, interrupted.</figcaption></figure><div class="floating-fragment fragment-one" aria-hidden="true"></div><div class="floating-fragment fragment-two" aria-hidden="true"></div><span class="gallery-mark" aria-hidden="true">+</span><div class="hero-caption"><p>Compositions. Performances.<br>Things that happen in between.</p><a href="#art-work">Enter the collection <span aria-hidden="true">↓</span></a></div></section>`,
  instrument: `<section class="art-hero instrument-hero" aria-labelledby="art-title"><div class="instrument-field"><img class="canvas-fallback" src="${portrait}" alt="A corrupted portrait, displaced into animated horizontal image strips"><canvas id="signal-canvas" aria-hidden="true"></canvas></div><div class="instrument-grid" aria-hidden="true"></div><div class="art-heading"><p class="eyebrow"><span class="live-dot"></span> Image-processing experiment</p><h1 id="art-title">soft<br>errors<span class="acid">_</span></h1><p class="instrument-intro">The unexpected is part of the instrument.</p></div><div class="instrument-controls"><label for="corruption">Signal displacement <output id="corruption-value" for="corruption">35%</output></label><input id="corruption" type="range" min="0" max="100" value="35"><div class="range-legend"><span>almost intact</span><span>beautifully broken</span></div></div><div class="hero-caption"><span class="eyebrow">SOURCE: CORRUPTED PORTRAIT / 2022</span><a href="#art-work">Follow the signal <span aria-hidden="true">↓</span></a></div></section>`
};

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main-content">Skip to content</a>
  <div class="study-bar"><a href="../"><span aria-hidden="true">←</span> All studies</a><label class="concept-picker"><span class="sr-only">Choose design study</span><select id="concept-select">${Object.entries(concepts).map(([key, item]) => `<option value="${key}" ${key === concept ? 'selected' : ''}>${item.number} / ${item.name}</option>`).join('')}</select></label><span class="study-bar-note">Interactive prototype</span></div>
  <div class="site-shell">
    <header class="site-header"><a class="wordmark" href="#main-content">Christos Plachouras<span class="wordmark-sub">Researcher & musician</span></a><div class="header-right"><nav class="local-nav" aria-label="Page navigation"><a data-nav-research href="#publications">Publications</a><a data-nav-research href="#background">Background</a><a data-nav-art href="#art-work" hidden>Selected work</a></nav><div class="mode-switch" role="group" aria-label="Choose Research or Art"><button type="button" data-mode-button="research" aria-pressed="true">Research</button><button type="button" data-mode-button="art" aria-pressed="false">Art <span aria-hidden="true">↗</span></button></div><button class="motion-button" type="button" hidden aria-pressed="false">Pause motion <span aria-hidden="true">Ⅱ</span></button></div></header>
    <main id="main-content" tabindex="-1">
      <div id="research-view">
        <section class="research-hero"><div class="research-intro"><p class="eyebrow">Research / Audio & machine learning</p><h1>${study.heading}</h1><p class="research-deck">${study.description}</p></div><div class="research-bio"><p>I'm Christos, a researcher and musician working on computational methods for understanding audio and music.</p><p>At Queen Mary University of London, I study multimodal audio-language models at the Centre for Digital Music.</p><div class="bio-links">${external('https://chrispla.github.io/CV_Christos_Plachouras_Summer_2026.pdf', 'CV')}${external('https://scholar.google.com/citations?user=bVSgD4MAAAAJ', 'Google Scholar')}${external('https://github.com/chrispla', 'GitHub')}</div></div><div class="research-bottom"><span class="eyebrow">C4DM / Queen Mary University of London</span><span class="research-side-note">Representations · Multimodal models · Evaluation</span></div></section>
        <section class="research-section" id="publications"><div class="section-label"><h2>Selected publications</h2><span class="eyebrow">2025—2026</span></div><div class="publication-list">${publications.map(p => `<article class="publication"><span class="pub-year">${p.year}</span><div><h3><a href="${p.paper}" target="_blank" rel="noopener noreferrer">${p.title}</a></h3><p class="pub-authors">${p.authors}</p><p class="pub-venue">${p.venue}</p></div><div class="pub-links">${external(p.paper, 'Paper')}${external(p.code, p.label)}</div></article>`).join('')}</div>${external('https://scholar.google.com/citations?user=bVSgD4MAAAAJ', 'All publications', 'all-publications')}</section>
        <section class="research-section background-section" id="background"><h2>Background</h2><div class="background-columns"><div><h3>Currently</h3><p>PhD in Artificial Intelligence and Music<br>Queen Mary University of London<br><span class="muted">2023—2027 (expected)</span></p><p>Research on audio representations, multimodal models, and useful evaluation.</p></div><div><h3>Previously</h3><p>Research Intern · Earth Species Project<br>Data Scientist, R&D · Utopia Music<br>R&D Engineer · Audiostack</p><p>MSc · Sound and Music Computing, UPF<br>BSc · Computer Science, New York University</p></div></div></section>
      </div>
      <div id="art-view" hidden>${artHero[concept]}
        <section class="art-work" id="art-work"><div class="section-label"><h2>Selected work</h2><span class="eyebrow">Listen / look / read</span></div><div class="work-grid"><a class="work" href="https://open.spotify.com/album/0q97bCcWClPblKyKPJjoaE" target="_blank" rel="noopener noreferrer"><div class="work-image"><img src="../assets/muffled.png" alt="MUFFLED album artwork" loading="lazy"><span aria-hidden="true">↗</span></div><p class="eyebrow">01 / Album · 2021</p><h3>MUFFLED</h3><p>Compositions by Christos Plachouras.</p></a><a class="work" href="https://www.youtube.com/playlist?list=PL6rrHapQThneqt1rfM0bDmX8uw7_0F22D" target="_blank" rel="noopener noreferrer"><div class="work-image"><img src="../assets/preludes.png" alt="12 Preludes of Tonal Resolution for Piano artwork" loading="lazy"><span aria-hidden="true">↗</span></div><p class="eyebrow">02 / Piano · 2019</p><h3>12 Preludes of Tonal Resolution</h3><p>A collection of compositions for piano.</p></a><a class="work" href="https://www.youtube.com/watch?v=3F1WLZzyLIw" target="_blank" rel="noopener noreferrer"><div class="work-image"><img src="../assets/rach.png" alt="Christos performing at the piano" loading="lazy"><span aria-hidden="true">↗</span></div><p class="eyebrow">03 / Performance · 2018</p><h3>Rachmaninoff, Piano Concerto No. 2</h3><p>I. Moderato · Live at NYUAD Blue Hall.</p></a></div><div class="image-note"><span class="eyebrow">An image-processing accident</span><p>The portrait on this page was made by corrupting an image-processing pipeline in a binary. The movement here explores that image; the original is the starting point.</p><a href="${portrait}" target="_blank" rel="noopener noreferrer">View original image <span aria-hidden="true">↗</span></a></div><div class="writing-row"><h3>Words, too.</h3>${external('https://medium.com/@cplachouras/perspectives-on-music-performance-anxiety-7c3699fc7a8d', 'Perspectives on Music Performance Anxiety')}${external('https://chrispla.github.io/blog.html', 'Reflections')}</div></section>
      </div>
    </main>
    <footer class="site-footer"><span>Christos Plachouras</span><div><a href="mailto:cplachouras@nyu.edu">Email ↗</a>${external('https://github.com/chrispla', 'GitHub')}${external('https://bsky.app/profile/cplachouras.bsky.social', 'Bluesky')}</div><button class="footer-switch" type="button">Visit the art side <span aria-hidden="true">↗</span></button></footer>
  </div>
  <div class="transition-curtain" aria-hidden="true">${Array.from({length: 9}, () => '<span></span>').join('')}</div><div class="sr-only" role="status" id="mode-status"></div>`;

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let mode = 'research';
let paused = reducedMotion.matches;
let switching = false;
let signalFrame = 0;
let canvasReady = false;
let displacement = 0.35;
let signalPhase = 1.7;
let previousSignalTime = 0;
const motionButton = document.querySelector('.motion-button');
const curtain = document.querySelector('.transition-curtain');

function syncMotion() {
  document.body.classList.toggle('motion-paused', paused);
  document.body.classList.toggle('motion-enabled', !paused);
  motionButton.innerHTML = paused ? 'Resume motion <span aria-hidden="true">▷</span>' : 'Pause motion <span aria-hidden="true">Ⅱ</span>';
  motionButton.setAttribute('aria-pressed', String(paused));
  cancelAnimationFrame(signalFrame);
  previousSignalTime = 0;
  if (mode === 'art' && concept === 'instrument' && canvasReady) drawSignal(performance.now());
}
function applyMode(next) {
  mode = next;
  document.body.dataset.mode = mode;
  document.querySelector('#research-view').hidden = mode !== 'research';
  document.querySelector('#art-view').hidden = mode !== 'art';
  document.querySelectorAll('[data-mode-button]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.modeButton === mode)));
  document.querySelectorAll('[data-nav-research]').forEach(link => link.hidden = mode !== 'research');
  document.querySelectorAll('[data-nav-art]').forEach(link => link.hidden = mode !== 'art');
  motionButton.hidden = mode !== 'art';
  document.querySelector('.footer-switch').innerHTML = `Visit the ${mode === 'art' ? 'research' : 'art'} side <span aria-hidden="true">↗</span>`;
  document.querySelector('#mode-status').textContent = `${mode === 'art' ? 'Art' : 'Research'} view`;
  history.replaceState(null, '', `${location.pathname}${mode === 'art' ? '#art' : '#research'}`);
  window.scrollTo({top: 0, behavior: 'instant'});
  syncMotion();
}
async function switchMode(next, button) {
  if (next === mode || switching) return;
  switching = true;
  if (reducedMotion.matches) {
    applyMode(next);
  } else {
    const rect = (button || document.querySelector('.mode-switch')).getBoundingClientRect();
    curtain.style.setProperty('--origin-x', `${rect.left + rect.width / 2}px`);
    curtain.style.setProperty('--origin-y', `${rect.top + rect.height / 2}px`);
    curtain.classList.add('covering');
    await new Promise(resolve => setTimeout(resolve, concept === 'signal' ? 540 : 470));
    applyMode(next);
    curtain.classList.remove('covering');
    curtain.classList.add('revealing');
    await new Promise(resolve => setTimeout(resolve, 620));
    curtain.classList.remove('revealing');
  }
  switching = false;
  // Keep keyboard focus on the corresponding control after a footer switch.
  if (button?.classList.contains('footer-switch')) document.querySelector(`[data-mode-button="${next}"]`).focus({preventScroll:true});
}
document.querySelectorAll('[data-mode-button]').forEach(button => button.addEventListener('click', () => switchMode(button.dataset.modeButton, button)));
document.querySelector('.footer-switch').addEventListener('click', event => switchMode(mode === 'research' ? 'art' : 'research', event.currentTarget));
document.querySelector('#concept-select').addEventListener('change', event => { location.href = `../${event.target.value}/${mode === 'art' ? '#art' : ''}`; });
motionButton.addEventListener('click', () => { paused = !paused; syncMotion(); });
reducedMotion.addEventListener('change', event => { paused = event.matches; syncMotion(); });
document.addEventListener('visibilitychange', () => {
  cancelAnimationFrame(signalFrame);
  if (!document.hidden) syncMotion();
});

const signalImage = new Image();
const canvas = document.querySelector('#signal-canvas');
const context = canvas?.getContext('2d');
let logicalWidth = 0;
let logicalHeight = 0;
function resizeSignal() {
  if (!canvas || !context) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  logicalWidth = rect.width;
  logicalHeight = rect.height;
  canvas.width = Math.round(rect.width * pixelRatio);
  canvas.height = Math.round(rect.height * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}
function drawSignal(time) {
  if (!canvasReady || mode !== 'art' || !context || document.hidden) return;
  if (!logicalWidth || canvas.clientWidth !== logicalWidth || canvas.clientHeight !== logicalHeight) resizeSignal();
  const width = logicalWidth;
  const height = logicalHeight;
  if (!width || !height) return;
  if (!paused && previousSignalTime) signalPhase += Math.min(time - previousSignalTime, 100) / 1800;
  previousSignalTime = time;
  const phase = signalPhase;
  const scale = Math.max(width / signalImage.width, height / signalImage.height);
  const imageWidth = signalImage.width * scale;
  const imageHeight = signalImage.height * scale;
  const x = (width - imageWidth) / 2;
  const y = (height - imageHeight) / 2;
  context.fillStyle = '#150e23';
  context.fillRect(0, 0, width, height);
  const slices = 44;
  const sliceHeight = height / slices;
  for (let index = 0; index < slices; index++) {
    const destinationY = index * sliceHeight;
    const offset = Math.sin(index * 1.49 + phase) * Math.sin(index * 0.21 - phase * 0.36) * displacement * width * 0.12;
    const sourceY = Math.max(0, (destinationY - y) / scale);
    const sourceHeight = Math.min((sliceHeight + 1) / scale, signalImage.height - sourceY);
    if (sourceHeight > 0) context.drawImage(signalImage, 0, sourceY, signalImage.width, sourceHeight, x + offset, destinationY, imageWidth, sourceHeight * scale);
  }
  // Slow, continuous displacement keeps the portrait recognisable without flashing.
  if (!paused) signalFrame = requestAnimationFrame(drawSignal);
}
if (canvas && context) {
  signalImage.addEventListener('load', () => { canvasReady = true; syncMotion(); });
  signalImage.src = portrait;
  document.querySelector('#corruption').addEventListener('input', event => {
    displacement = Number(event.target.value) / 100;
    document.querySelector('#corruption-value').value = `${event.target.value}%`;
    if (paused) drawSignal(performance.now());
  });
  window.addEventListener('resize', () => { resizeSignal(); if (paused && mode === 'art') drawSignal(performance.now()); });
}
const initialHash = location.hash;
applyMode(initialHash === '#art' || initialHash === '#art-work' ? 'art' : 'research');
if (['#publications', '#background', '#art-work'].includes(initialHash)) {
  history.replaceState(null, '', `${location.pathname}${initialHash}`);
  requestAnimationFrame(() => document.querySelector(initialHash)?.scrollIntoView());
}
window.addEventListener('hashchange', () => {
  const targetMode = ['#art', '#art-work'].includes(location.hash) ? 'art' : ['#research', '#publications', '#background'].includes(location.hash) ? 'research' : null;
  if (targetMode && targetMode !== mode) switchMode(targetMode);
});
