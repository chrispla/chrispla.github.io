// Eclipse reveals the new page directly; Ink tide retains its opaque veil.
const pageTransition = (() => {
  const canvas = document.querySelector('#page-transition');
  const ctx = canvas.getContext('2d');
  const requested = new URLSearchParams(location.search).get('transition');
  let style = requested === 'ink' ? 'ink' : 'eclipse';
  let animation = null;
  let frame = 0;
  const clampProgress = value => Math.max(0, Math.min(1, value));
  const ease = value => { const t = clampProgress(value); return t * t * (3 - 2 * t); };

  function wave(progress, fillRight, offset, color) {
    const {width:w, height:h} = animation;
    const edge = y => w * (1.38 - progress * 1.76 + (.5 - y / h) * .34
      + Math.sin(y / h * 6.5 + progress * 2) * .068
      + Math.sin(y / h * 17 - progress * 3) * .018) + offset;
    ctx.beginPath();
    ctx.moveTo(fillRight ? w + 100 : -100, -100);
    ctx.lineTo(edge(0), -100);
    for (let y = 0; y <= h + 12; y += 12) ctx.lineTo(edge(y), y);
    ctx.lineTo(fillRight ? w + 100 : -100, h + 100);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function eclipsePolygon(radius, origin) {
    const points = [];
    for (let i = 0; i < 96; i++) {
      const angle = i / 96 * Math.PI * 2;
      const r = radius * (1 + Math.sin(angle * 3 + .8) * .045 + Math.sin(angle * 7 - .4) * .025);
      points.push(`${(origin.x + Math.cos(angle) * r).toFixed(2)}px ${(origin.y + Math.sin(angle) * r).toFixed(2)}px`);
    }
    return `polygon(${points.join(',')})`;
  }

  function startEclipse(a) {
    // Native page snapshots preserve text, SVG, and canvas pixels on both sides.
    // The new snapshot grows over the old one in one uninterrupted motion.
    if (!document.startViewTransition) {
      a.onChange();
      a.onComplete();
      return;
    }
    const root = document.documentElement;
    root.style.setProperty('--eclipse-from', eclipsePolygon(0, a.origin));
    root.style.setProperty('--eclipse-to', eclipsePolygon(a.radius, a.origin));
    root.classList.add('eclipse-reveal');
    a.transition = document.startViewTransition(() => {
      if (a.cancelled) return;
      a.swapped = true;
      a.onChange();
    });
    a.transition.ready.catch(() => {}); // Escape/resize can skip a pending snapshot.
    const complete = () => {
      if (animation !== a) return;
      a.onComplete();
    };
    a.transition.finished.then(complete, complete);
  }

  function paint(phase, progress) {
    const a = animation;
    const p = ease(progress);
    ctx.clearRect(0, 0, a.width, a.height);
    canvas.dataset.phase = phase;
    if (phase === 'covered') {
      ctx.fillStyle = a.color;
      ctx.fillRect(0, 0, a.width, a.height);
    } else {
      const right = phase === 'cover';
      const direction = right ? -1 : 1;
      // A restrained plum edge, then the opaque tide; no photo displacement.
      ctx.save();
      ctx.shadowColor = a.fringe;
      ctx.shadowBlur = 24;
      wave(p, right, direction * 12, a.fringe);
      ctx.shadowBlur = 0;
      wave(p, right, 0, a.color);
      ctx.restore();
    }
  }

  function tick(time) {
    if (!animation) return;
    const a = animation;
    const elapsed = time - a.started;
    if (elapsed < a.cover) {
      paint('cover', elapsed / a.cover);
    } else {
      // Always draw a completely opaque frame before committing the next page.
      // This also handles a slow or backgrounded animation frame safely.
      if (!a.swapped) {
        paint('covered', 1);
        a.swapped = true;
        a.onChange();
      }
      if (elapsed < a.cover + a.hold) paint('covered', 1);
      else paint('reveal', (elapsed - a.cover - a.hold) / a.reveal);
    }
    if (elapsed >= a.cover + a.hold + a.reveal) {
      a.onComplete();
    } else frame = requestAnimationFrame(tick);
  }

  return {
    available: !!ctx,
    get style() { return style; },
    setStyle(next) { if (['ink', 'eclipse'].includes(next) && !animation) style = next; },
    start({art, origin, onChange, onComplete}) {
      const width = document.documentElement.clientWidth;
      const height = innerHeight;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const point = {
        x: Math.max(0, Math.min(width, origin.left + origin.width / 2)),
        y: origin.bottom > 0 && origin.top < height ? origin.top + origin.height / 2 : height * .25,
      };
      const farthest = Math.hypot(Math.max(point.x, width - point.x), Math.max(point.y, height - point.y));
      animation = {
        style, width, height, origin:point, radius:farthest * 1.18 + 50,
        color:art ? '#15101d' : '#ffffff', fringe:art ? '#38243e' : '#e8e2ed',
        cover:820, hold:80, reveal:900,
        started:performance.now(), swapped:false, onChange, onComplete,
      };
      if (style === 'eclipse') startEclipse(animation);
      else {
        canvas.hidden = false;
        tick(animation.started);
      }
    },
    cancel() {
      cancelAnimationFrame(frame);
      const active = animation;
      animation = null;
      if (active) active.cancelled = true;
      active?.transition?.skipTransition();
      document.documentElement.classList.remove('eclipse-reveal');
      document.documentElement.style.removeProperty('--eclipse-from');
      document.documentElement.style.removeProperty('--eclipse-to');
      canvas.hidden = true;
      delete canvas.dataset.phase;
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    },
  };
})();
