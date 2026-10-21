# Research / Music website

The selected design is now `index.html`. Research and music share one site, with clickable labels and a portrait-centred Eclipse transition.

## Branch and publishing

Keep this work on `codex/research-art-prototypes`. GitHub Pages publishes the root of `master`; pushing this feature branch does not update the public site. Do not merge or deploy this revision without a separate request.

This cleanup is saved to the branch only. The private Sites preview has not been republished.

## Local preview

Run `python3 -m http.server 8767 --bind 127.0.0.1` from the repository root, then open `http://127.0.0.1:8767/`. Add `#art` to open music directly. No build step or package installation is required.

The old prototype URLs redirect to this homepage. Earlier designs remain recoverable in Git history; their historical assets are retained outside the active site's asset folder.

## Files

- `index.html`: page structure and album content.
- `assets/portfolio/`: styles, research content, work listings, artwork, and portrait animation.
- `assets/score/`: the LilyPond excerpt and vector engraving.

To regenerate the prelude excerpt with LilyPond 2.26, run `node assets/score/render-prelude.mjs`. Set `LILYPOND_BIN` when the executable is outside PATH.

Research has no continuous animation. Music motion can be paused and respects reduced-motion preferences. Escape or a resize completes an active transition. Browsers without view-transition support switch immediately.

The legacy blog's template assets are based on Editorial by HTML5 UP; see `LICENSE.txt`.
