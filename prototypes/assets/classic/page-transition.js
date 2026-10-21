// Two full-page studies. The layout changes only while the veil is opaque.
const pageTransition = (() => {
  const canvas = document.querySelector('#page-transition');
  const ctx = canvas.getContext('2d');
  const requested = new URLSearchParams(location.search).get('transition');
  let style = requested === 'eclipse' ? 'eclipse' : 'ink';
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

  function bloom(radius, color) {
    const {origin} = animation;
    ctx.beginPath();
    for (let i = 0; i <= 128; i++) {
      const angle = i / 128 * Math.PI * 2;
      const r = radius * (1 + Math.sin(angle * 3 + .8) * .045 + Math.sin(angle * 7 - .4) * .025);
      const x = origin.x + Math.cos(angle) * r;
      const y = origin.y + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function paint(phase, progress) {
    const a = animation;
    const p = ease(progress);
    ctx.clearRect(0, 0, a.width, a.height);
    canvas.dataset.phase = phase;
    if (phase === 'covered') {
      ctx.fillStyle = a.color;
      ctx.fillRect(0, 0, a.width, a.height);
    } else if (a.style === 'ink') {
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
    } else if (phase === 'cover') {
      ctx.save();
      ctx.shadowColor = a.fringe;
      ctx.shadowBlur = 30;
      bloom(p * a.radius, a.color);
      ctx.restore();
    } else {
      ctx.fillStyle = a.color;
      ctx.fillRect(0, 0, a.width, a.height);
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.shadowColor = '#000';
      ctx.shadowBlur = 38;
      bloom(p * a.radius, '#000');
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
        a.onCovered();
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
    start({art, origin, onCovered, onComplete}) {
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
        cover:style === 'ink' ? 820 : 780, hold:80, reveal:style === 'ink' ? 900 : 1080,
        started:performance.now(), swapped:false, onCovered, onComplete,
      };
      canvas.hidden = false;
      tick(animation.started);
    },
    cancel() {
      cancelAnimationFrame(frame);
      animation = null;
      canvas.hidden = true;
      delete canvas.dataset.phase;
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    },
  };
})();
