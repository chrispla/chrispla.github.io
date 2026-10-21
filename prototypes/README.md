# Research / Art prototypes

Three standalone directions for Christos Plachouras's website. Open `index.html` through a static server to compare them. Each starts in Research; switch to Art in the header. Append `#art` for a direct art link.

[Open the private Sites preview](https://christos-research-art-studies.awarepig1.chatgpt.site/).

- **Signal / Noise:** editorial research, an immersive pink/purple image field, and a circular transition.
- **Out of Order:** a typeset reading room, floating gallery fragments, and a folding shutter.
- **Research / Art (revised Soft Errors):** the current site's compact research scale, full intro/background/research, and a prominent toggle. A full-page transition covers the outgoing layout before revealing the other side. The portraits do not morph or travel across the page. The art image keeps its moving slices that fade at their ends. The art portrait is 20% smaller, with the opening three measures of Prelude in A♭ engraved alongside it, one measure per line. On mobile, the notation sits below the portrait. Art has a still dark background and fixed 40% portrait displacement. Large album covers come first, including the sunset cover for **Songs of Adelina — Coming soon**, followed by compositions and performances. Section navigation links are omitted.

Two transition studies are available at `instrument/?transition=ink` and `instrument/?transition=eclipse`. Ink tide sweeps across the viewport with an uneven edge. Eclipse grows a shadow from the switch, then opens a soft aperture onto the next page. The study toolbar chooses either effect and plays it in both directions. The normal page defaults to Ink tide and hides the toolbar. The research layout is retained. Reduced motion switches immediately; Escape or a resize completes an active transition.

The revised direction uses Lora for headings, with Manrope for text and controls. The prelude uses LilyPond’s music engraving, matching the supplied single-stave score. Both original voices, accidentals, slurs, and the opening dynamic are preserved in an external SVG referenced by inline SVG markup. There is no notation library to load at runtime.

To regenerate the excerpt after editing `assets/score/prelude-excerpt.ly`, install LilyPond 2.26 and run `node prototypes/assets/score/render-prelude.mjs` from the repository root. Set `LILYPOND_BIN` if the executable is outside PATH. The helper also updates the inline SVG viewBox.

The research views have no continuous animation or canvas loop. Art motion has a pause control and respects `prefers-reduced-motion`. Canvas work also stops when the tab is hidden. Artwork and research links come from the existing website. The source portrait is the user's supplied corrupted image; its pixels are preserved.

Run from the repository root:

```sh
python3 -m http.server 8765
```

Visit `http://localhost:8765/prototypes/`. The original homepage is separate from these studies. There are no package dependencies or build step.
