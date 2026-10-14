# Research / Art prototypes

Three standalone directions for Christos Plachouras's website. Open `index.html` through a static server to compare them. Each starts in Research; switch to Art in the header. Append `#art` for a direct art link.

[Open the private Sites preview](https://christos-research-art-studies.awarepig1.chatgpt.site/).

- **Signal / Noise:** editorial research, an immersive pink/purple image field, and a circular transition.
- **Out of Order:** a typeset reading room, floating gallery fragments, and a folding shutter.
- **Research / Art (revised Soft Errors):** the current site's compact research scale, full intro/background/research, and a prominent toggle. The portrait expands and blends into the full-height art image, with moving slices that fade at their ends. Uppercase “MUSIC” runs vertically down the right edge beside the portrait on desktop; it is hidden on mobile. Art has a still dark background and fixed 40% portrait displacement. Large album covers come first, including the sunset cover for **Songs of Adelina — Coming soon**, followed by compositions, performances, and writing. Section navigation links are omitted.

The revised direction uses Lora for headings and the vertical MUSIC lettering, with Manrope for text and controls.

The research views have no continuous animation or canvas loop. Art motion has a pause control and respects `prefers-reduced-motion`. Canvas work also stops when the tab is hidden. Artwork and research links come from the existing website. The source portrait is the user's supplied corrupted image; its pixels are preserved.

Run from the repository root:

```sh
python3 -m http.server 8765
```

Visit `http://localhost:8765/prototypes/`. The original homepage is separate from these studies. There are no package dependencies or build step.
