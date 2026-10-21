// Regenerate the vector excerpt with LilyPond 2.26 (no browser runtime needed).
// LILYPOND_BIN=/path/to/lilypond node prototypes/assets/score/render-prelude.mjs
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('prelude-excerpt.ly', import.meta.url));
const temporary = mkdtempSync(join(tmpdir(), 'prelude-engraving-'));
try {
  execFileSync(process.env.LILYPOND_BIN || 'lilypond', [
    '-dbackend=svg', '-dno-point-and-click', '-dcrop', '-o', join(temporary, 'prelude'), source,
  ], { stdio: 'inherit' });
  const svg = readFileSync(join(temporary, 'prelude.cropped.svg'), 'utf8');
  const viewBox = svg.match(/viewBox="([^"]+)"/)[1];
  const content = svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '')
    .replace(/<style[\s\S]*?<\/style>/, '');
  writeFileSync(new URL('prelude-excerpt.svg', import.meta.url),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">\n<g id="prelude-score">${content}</g>\n</svg>\n`);
  const page = new URL('../../instrument/index.html', import.meta.url);
  writeFileSync(page, readFileSync(page, 'utf8').replace(
    /(<svg class="prelude-notation"[^>]*viewBox=")[^"]+/, `$1${viewBox}`));
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
