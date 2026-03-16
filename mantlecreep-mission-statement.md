# Shells — Project Mission Statement

## Project Goal

Build an interactive, browser-based generative art tool that produces biologically accurate shell pigmentation patterns — specifically the chevron, wave, spot, and stripe formations found on mollusc shells like the Asari clam (*Ruditapes philippinarum*). The tool should give users real-time slider control over the underlying biological parameters, producing patterns that range from tight geometric precision to wild, organic turbulence.

The north star is the work of A.A. Murakami, specifically *A Thousand Layers of Stomach* — an installation that uses generative code to drive a customized knitting machine, printing hundreds of lines of textile the way a mollusc builds its shell: line by line, one row at a time.

## Why This Project Exists

Shell pigmentation is one of the most visually striking examples of biological computation. The patterns aren't designed — they emerge from simple chemical rules (reaction-diffusion, activator-inhibitor dynamics) running along the growing edge of a shell over the animal's lifetime. The shell surface is literally a space-time plot of a one-dimensional process.

This project exists to make that process interactive and visible. The goal is not a biology simulation for its own sake — it's a creative tool that uses biological algorithms as its engine, the way a photographer uses the chemistry of film development. The magic is in the unpredictability: the collisions, bifurcations, substrate depletion, and pigment bleeding that make each pattern unique.

## Desired Outcome

A single-file HTML tool (no dependencies, runs in any browser) that:

- Generates shell-like patterns in real time on a static canvas swatch
- Offers slider controls over biological parameters (activator/inhibitor diffusion, substrate replenishment, hormone rate, etc.) and visual effects (bleed, roughness, turbulence, erosion, bloom)
- Can reproduce the full range of Meinhardt shell pattern types — spots, waves, chevrons, standing patterns — through parameter presets and manual tuning
- Includes colour palettes with genuine hue/saturation shifts through the gradient (not just light-to-dark monochrome)
- Feels organic, unpredictable, and alive — not mechanical or sterile

The finished tool should be something worth showing to people. A person should be able to open it, move a few sliders, and produce something beautiful without understanding the biology underneath.

## User-Facing Description (for when it ships)

> An interactive pattern generator inspired by the pigmentation of mollusc shells. The patterns emerge from the same biological algorithms that produce the stripes, chevrons, and spots on real shells — reaction-diffusion chemistry simulated one row at a time, the way a clam builds its shell over a lifetime. Adjust the sliders to explore the space between order and chaos.

## Plan / How to Get There

### The algorithm (mostly solved)
The core engine uses a Meinhardt-style activator-inhibitor-substrate model with a hormone (C) variable that drives global oscillation. The simulation runs as a 1D array scanned row-by-row — each horizontal line of pixels is one timestep of the mantle edge. Chevron shapes emerge from nucleation sites that fire waves in opposing directions; collisions and annihilations create the characteristic V-shapes and bifurcations.

The current approach captures the transient wavefront phase (where chevrons form) and stacks these "bursts" vertically, which mirrors the biological cycle of activation and rest.

### Effects layer (in progress)
The raw simulation output needs biological post-processing to look real:

- **Pigment concentration gradient** — map raw activator values to a continuous colour gradient rather than binary on/off. Stripe centres are saturated, edges show lighter fringes.
- **Substrate-driven edge irregularity** — use local substrate depletion to modulate the threshold per cell, producing ragged stripe terminations that emerge from the simulation state rather than generic noise.
- **Turbulence / drift / erosion** — spatial warping, horizontal drift accumulation, and fractal-noise erosion to break mechanical regularity.
- **Bloom and bleed** — gaussian blur halos and edge softening to simulate pigment diffusion beyond the activation zone.
- **Hue-shifting colour palettes** — three-stop gradients where the midtone genuinely shifts in hue and saturation, not just lightness.

### Scale and range (needs work)
The tool needs stronger control over pattern scale — from dense micro-texture to large, open, flowing shapes. The simulation resolution needs to decouple from canvas resolution so that "zooming in" actually means simulating fewer cells stretched across the canvas, not blurring a dense pattern.

### UI polish (later)
Neutral grey interface, preset buttons for known-good parameter sets, export to PNG. Keep the monospace dark aesthetic.

## Lessons Learned

This project has been a hard-won education in the gap between understanding an algorithm conceptually and making it produce good visual output.

**The architecture matters more than the parameters.** The single biggest mistake was starting with a 2D shader (domain-warped FBM). Shell patterns are fundamentally 1D systems iterated over time. No amount of parameter tuning on the wrong architecture will produce the right result.

**Meinhardt's equations are numerically fragile.** The activator-inhibitor model with `a²/b` autocatalysis blows up easily. The saturation term `(1 + κ·a²)` in the denominator is essential for stability. Gray-Scott is more stable but can't produce the substrate-driven complexity that makes shell patterns interesting.

**The hormone/collapse mechanism is the hardest part.** Getting the simulation to fire, saturate, and then genuinely collapse back to a resting state — so it can fire again and produce repeated banding — required understanding the hormone C variable and its role in modulating inhibitor decay. This took many failed iterations.

**AI coding without visual feedback loops is painful.** The core difficulty was that the AI writing the code couldn't see the output. It kept confusing "numerically stable" with "visually correct." The breakthrough came from testing in Node.js to verify spatial structure in ASCII before building the UI — but even that was a poor substitute for actually seeing the canvas. Future iterations should build in a screenshot-and-feedback loop.

**The transient IS the pattern.** The chevron shapes only exist during the initial wavefront expansion from nucleation sites. Once the simulation saturates, the interesting structure is gone. Capturing and stacking these transient bursts — rather than fighting to make the full simulation oscillate indefinitely — was the key architectural insight.

## Key References and Resources

- **Hans Meinhardt, *The Algorithmic Beauty of Sea Shells*** (Springer, 4th ed.) — the canonical reference. Contains pseudocode, parameter tables, and visual comparisons to real shells. Chapter 2 covers the Asari pattern family. The companion CD-ROM contains working HTML simulations but is not available online.
- **Meinhardt & Klingler (1987)** — original paper on the activator-inhibitor-substrate model for shell pigmentation.
- **Meinhardt's BASIC source code** — published on his lab page (now archived). The `shell-program.html` and `a-simple-basic-program.html` pages contain the actual update equations including the hormone C model.
- **A.A. Murakami, *A Thousand Layers of Stomach*** — the installation that inspired this project. Uses generative code driving a knitting machine to produce shell-pattern textiles. [Design Milk coverage](https://design-milk.com), [EverybodyWiki entry](https://everybodywiki.com).
- **Darren Abbey's Flickr album** — photographs of Meinhardt shell simulations showing the target aesthetic: https://www.flickr.com/photos/darrenabbey/albums/72157621239877456
- **Chris Viau's Observable notebook** — *Seashell patterns simulation*, a JavaScript port of Meinhardt's algorithms. Paywalled on Observable but confirmed working.
- **jtpedersen/seashells** (GitHub) — C++ implementation of the book's algorithms.
- **Wolfram, *A New Kind of Science*, Chapter 8** — cellular automaton interpretation of shell patterns. Rule 30/110 families produce chevron-like output without differential equations.
- **Karl Sims** — interactive shell simulations published online with tuned parameters.
- **Softology blog** — post on shell CA patterns with code.
- **Springer article on shell pattern formation** — "the formation of shell patterns proceeds in most species in a strictly linear manner, since new pattern elements are added only along a marginal zone."

## Open Questions

- Can the hormone C model be made to oscillate reliably in JavaScript, or is the burst-and-reset approach the permanent solution?
- Is there a WebGL/shader approach that could run the 1D simulation per-row at GPU speed while keeping the biological accuracy?
- How far can the effects layer go before it starts feeling like generic texture rather than emergent chemistry?
- Would a screenshot-feedback loop (render → capture → send back to AI for evaluation) dramatically improve the AI-assisted development workflow?

---

*Last updated: March 16, 2026*
