// Reveal the incoming page from the outgoing portrait in one motion.
const pageTransition = (() => {
  let active = null;

  function outline(radius, origin) {
    const points = [];
    for (let i = 0; i < 96; i++) {
      const angle = i / 96 * Math.PI * 2;
      const r = radius * (1 + Math.sin(angle * 3 + .8) * .045 + Math.sin(angle * 7 - .4) * .025);
      points.push([origin.x + Math.cos(angle) * r, origin.y + Math.sin(angle) * r]);
    }
    return points;
  }
  const polygon = points => `polygon(${points.map(([x, y]) => `${x.toFixed(2)}px ${y.toFixed(2)}px`).join(',')})`;
  // The page with the same eclipse cut out of it: the reversed outline makes a hole.
  function hole(radius, origin, width, height) {
    const edge = 10;
    const outer = [[-edge, -edge], [width + edge, -edge], [width + edge, height + edge], [-edge, height + edge], [-edge, -edge]];
    const inner = outline(radius, origin).reverse();
    return polygon([...outer, ...inner, inner[0], [-edge, -edge]]);
  }
  function geometry(origin) {
    const width = document.documentElement.clientWidth;
    const height = innerHeight;
    const point = {
      x: Math.max(0, Math.min(width, origin.left + origin.width / 2)),
      y: origin.bottom > 0 && origin.top < height ? Math.max(0, Math.min(height, origin.top + origin.height / 2)) : height * .25,
    };
    const radius = Math.hypot(Math.max(point.x, width - point.x), Math.max(point.y, height - point.y)) * 1.18 + 50;
    return {width, height, point, radius};
  }
  const stages = radius => [0, radius * .2, radius];
  const duration = 1360;
  // CSS cubic-bezier(x1, y1, x2, y2), solved for y at a given x.
  function bezier(x1, y1, x2, y2) {
    const at = (a, b, t) => 3 * a * t * (1 - t) ** 2 + 3 * b * t * t * (1 - t) + t ** 3;
    return x => {
      let low = 0, high = 1, t = x;
      for (let i = 0; i < 24; i++) {
        if (at(x1, x2, t) < x) low = t; else high = t;
        t = (low + high) / 2;
      }
      return at(y1, y2, t);
    };
  }
  // Matches the eclipse-grow keyframes: ease into a fifth of the size by halfway, then accelerate away.
  const easeIn = bezier(.15, .7, .35, 1);
  const easeOut = bezier(.65, 0, .85, .3);
  const growth = t => t < .5 ? .2 * easeIn(t / .5) : .2 + .8 * easeOut((t - .5) / .5);

  return {
    available: typeof document.startViewTransition === 'function',
    // Grow the incoming page over a snapshot of the outgoing one.
    start({origin, onChange, onComplete}) {
      const {point, radius} = geometry(origin);
      const state = {cancelled:false};
      active = state;
      const root = document.documentElement;
      const [from, mid, to] = stages(radius).map(r => polygon(outline(r, point)));
      root.style.setProperty('--eclipse-from', from);
      root.style.setProperty('--eclipse-mid', mid);
      root.style.setProperty('--eclipse-to', to);
      root.classList.add('eclipse-reveal');
      state.transition = document.startViewTransition(() => {
        if (!state.cancelled) onChange();
      });
      // Escape, resize, or reduced motion can skip a pending snapshot.
      state.transition.ready.catch(() => {});
      const complete = () => { if (active === state) onComplete(); };
      state.transition.finished.then(complete, complete);
    },
    // Open a growing hole in a live layer that covers the page, which has already changed beneath it.
    // The hole is drawn each frame: Chrome crops composited clip-path animations that contain a hole.
    cover({origin, layer, onComplete}) {
      const {width, height, point, radius} = geometry(origin);
      const state = {cancelled:false};
      active = state;
      const begin = performance.now();
      const step = now => {
        if (state.cancelled) return;
        const t = Math.min(1, (now - begin) / duration);
        layer.style.clipPath = hole(radius * growth(t), point, width, height);
        if (t < 1) requestAnimationFrame(step);
        else if (active === state) onComplete();
      };
      step(begin);
    },
    cancel() {
      const state = active;
      active = null;
      if (state) state.cancelled = true;
      state?.transition?.skipTransition();
      document.documentElement.classList.remove('eclipse-reveal');
      ['--eclipse-from', '--eclipse-mid', '--eclipse-to'].forEach(name => document.documentElement.style.removeProperty(name));
    },
  };
})();
