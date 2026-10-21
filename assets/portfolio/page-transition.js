// Reveal the incoming page from the outgoing portrait in one motion.
const pageTransition = (() => {
  let active = null;

  function polygon(radius, origin) {
    const points = [];
    for (let i = 0; i < 96; i++) {
      const angle = i / 96 * Math.PI * 2;
      const r = radius * (1 + Math.sin(angle * 3 + .8) * .045 + Math.sin(angle * 7 - .4) * .025);
      points.push(`${(origin.x + Math.cos(angle) * r).toFixed(2)}px ${(origin.y + Math.sin(angle) * r).toFixed(2)}px`);
    }
    return `polygon(${points.join(',')})`;
  }

  return {
    available: typeof document.startViewTransition === 'function',
    start({origin, onChange, onComplete}) {
      const width = document.documentElement.clientWidth;
      const height = innerHeight;
      const point = {
        x: Math.max(0, Math.min(width, origin.left + origin.width / 2)),
        y: origin.bottom > 0 && origin.top < height ? Math.max(0, Math.min(height, origin.top + origin.height / 2)) : height * .25,
      };
      const radius = Math.hypot(Math.max(point.x, width - point.x), Math.max(point.y, height - point.y)) * 1.18 + 50;
      const state = {cancelled:false};
      active = state;
      const root = document.documentElement;
      root.style.setProperty('--eclipse-from', polygon(0, point));
      root.style.setProperty('--eclipse-to', polygon(radius, point));
      root.classList.add('eclipse-reveal');
      state.transition = document.startViewTransition(() => {
        if (!state.cancelled) onChange();
      });
      // Escape, resize, or reduced motion can skip a pending snapshot.
      state.transition.ready.catch(() => {});
      const complete = () => { if (active === state) onComplete(); };
      state.transition.finished.then(complete, complete);
    },
    cancel() {
      const state = active;
      active = null;
      if (state) state.cancelled = true;
      state?.transition?.skipTransition();
      document.documentElement.classList.remove('eclipse-reveal');
      document.documentElement.style.removeProperty('--eclipse-from');
      document.documentElement.style.removeProperty('--eclipse-to');
    },
  };
})();
