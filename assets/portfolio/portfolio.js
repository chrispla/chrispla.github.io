const asset = 'assets/portfolio/';
const artSource = 'assets/portfolio/corrupted-portrait.jpg';
// Email links are assembled only when someone reaches for them, so the address never sits whole in the page.
const reversed = text => [...text].reverse().join('');
document.querySelectorAll('.email-link').forEach(link => {
  const reveal = () => { link.href = `mailto:${reversed(link.dataset.user)}@${reversed(link.dataset.domain)}`; };
  ['pointerenter', 'focus', 'pointerdown', 'click'].forEach(type => link.addEventListener(type, reveal));
});

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
