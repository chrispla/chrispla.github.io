const asset = 'assets/portfolio/';
const artSource = 'assets/portfolio/corrupted-portrait.jpg';
document.querySelector('#background').innerHTML = classicContent.background;
document.querySelector('#research').innerHTML = classicContent.research;
document.querySelectorAll('#research-panel a[target="_blank"]').forEach(link => { link.rel = 'noopener noreferrer'; if (!link.textContent.trim() && link.title) link.setAttribute('aria-label', link.title); });
document.querySelectorAll('#background img').forEach(image => { image.alt = image.closest('.boxed').querySelector('strong')?.textContent || ''; });
const compositions = [
  ['YDMC.png','You Drive Me Crazy','Christos Plachouras, September 2021','https://www.youtube.com/watch?v=bwhKTjzDogI&ab_channel=ChristosPlachouras'],
  ['newtime.png','New Time','Christos Plachouras, August 2020','https://www.youtube.com/watch?v=kdwFy86QjOU&ab_channel=ChristosPlachouras'],
  ['ascending.png','Ascending','NYU Bleep Bloop, September 2019','https://www.youtube.com/watch?v=PEVUPg_hrss'],
  ['quartet.png','Piece for String Quartet','Omer Quartet, live at NYUAD Blue Hall, March 2019','https://www.youtube.com/watch?v=JR-bvfh0kKI&ab_channel=ChristosPlachouras']
];
const performances = [
  ['rach.png','Rachmaninoff — Piano Concerto No. 2, I. Moderato','Christos Plachouras, Ioannis Potamousis. NYUAD Blue Hall, December 2018','https://www.youtube.com/watch?v=3F1WLZzyLIw&ab_channel=ChristosPlachouras'],
  ['bach.png','Bach — Partita No. 2 in C minor, I. Simfonia','Christos Plachouras, live at NYUAD Blue Hall, May 2018','https://www.youtube.com/watch?v=kMOaC0guYuw&ab_channel=ChristosPlachouras'],
  ['messiaen.png','Messiaen — Vingt Regards, II. Regard de l’étoile','Christos Plachouras, Athens, October 2016','https://www.youtube.com/watch?v=uGTZf6e6SzY&ab_channel=ChrisPla'],
  ['jack.png','Making music online','Making music online in real time with musicians across the world, 2020','https://www.youtube.com/watch?v=xErPiqM0SUM&feature=emb_title']
];
function renderWorks(target, items) {
  document.querySelector(target).innerHTML = items.map(([image,title,description,url]) => `<article class="music-entry"><a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${title.replaceAll('"','&quot;')}"><img src="${asset}${image}" alt="" loading="lazy"></a><div><h3><a href="${url}" target="_blank" rel="noopener noreferrer">${title} <span aria-hidden="true">↗</span></a></h3><p>${description}</p></div></article>`).join('');
}
renderWorks('#composition-list',compositions); renderWorks('#performance-list',performances);

const albumHover = window.matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)');
document.querySelectorAll('.album-cover').forEach(cover => {
  function resetCover() {
    cover.classList.remove('is-tilting');
    cover.style.removeProperty('--tilt-x');
    cover.style.removeProperty('--tilt-y');
  }
  cover.addEventListener('pointermove',event => {
    if (!albumHover.matches || event.pointerType !== 'mouse') return;
    const bounds = cover.closest('.album').getBoundingClientRect();
    const x = Math.max(0,Math.min(1,(event.clientX-bounds.left)/bounds.width));
    const y = Math.max(0,Math.min(1,(event.clientY-bounds.top)/cover.offsetHeight));
    cover.style.setProperty('--tilt-x',`${(0.5-y)*6}deg`);
    cover.style.setProperty('--tilt-y',`${(x-0.5)*6}deg`);
    cover.style.setProperty('--shine-x',`${(0.5-x)*18}%`);
    cover.style.setProperty('--shine-y',`${(0.5-y)*12}%`);
    cover.style.setProperty('--shine-angle',`${125+(x-0.5)*18+(y-0.5)*8}deg`);
    cover.style.setProperty('--shine-opacity',`${0.45+Math.hypot(x-0.5,y-0.5)*0.65}`);
    cover.classList.add('is-tilting');
  });
  cover.addEventListener('pointerleave',resetCover);
  cover.addEventListener('pointercancel',resetCover);
  albumHover.addEventListener('change',resetCover);
});
