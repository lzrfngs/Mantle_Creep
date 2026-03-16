# Shells — Project Mission Statement

## Project Goal

Build an interactive, browser-based generative art tool that produces a curated set of 3-4 mollusc shell pigmentation patterns with exceptional visual quality. The focus is not comprehensiveness — tools like kaesve.nl and Chris Viau's Observable notebook already catalog the full range of Meinhardt patterns. This project's identity is in how the patterns are rendered: inky, organic, with the color bleeding, substrate irregularity, and pigment concentration gradients that make real shell surfaces feel alive.

The two anchor patterns are:

- **sp51a — Diamond lattice chevrons.** Open, airy diamond grid formed by an activator-substrate-inhibitor system. Closest to the Asari clam (*Ruditapes philippinarum*) aesthetic and to A.A. Murakami's *A Thousand Layers of Stomach.*
- **sp512 — Teardrops.** Inverted heart/teardrop formations from an activator with secondary additive inhibitor. Organic, heavy, almost calligraphic.

A third and fourth pattern will be discovered through parameter exploration during development.

## Why This Project Exists

Shell pigmentation is one of the most visually striking examples of biological computation. The patterns aren't designed — they emerge from simple chemical rules (reaction-diffusion, activator-inhibitor dynamics) running along the growing edge of a shell over the animal's lifetime. The shell surface is literally a space-time plot of a one-dimensional process.

This project exists to make that process interactive and beautiful. The goal is not a biology simulation for its own sake — it's a creative tool that uses biological algorithms as its engine, the way a photographer uses the chemistry of film development. The magic is in the unpredictability: the collisions, bifurcations, substrate depletion, and pigment bleeding that make each pattern unique.

What distinguishes this from existing Meinhardt simulators is the rendering. Existing tools output raw activator values as black/white pixels. This tool will render them as pigment — with concentration gradients within stripes, substrate-driven edge irregularity, hue shifts through the color stops, and the kind of organic imperfection that makes the difference between "a simulation" and "something beautiful."

## Desired Outcome

A single-file HTML tool (no dependencies, runs in any browser) that:

- Generates 3-4 curated shell-like patterns via preset buttons, each visually distinct and polished
- Renders patterns with continuous pigment gradients, substrate-driven edge irregularity, and multi-hue color palettes — not binary on/off
- Offers slider controls for fine-tuning within each preset's parameter space, plus visual effect controls (bleed, roughness, scale)
- Produces static canvas output (not animation) that can be exported as PNG
- Feels organic, unpredictable, and alive — not mechanical or sterile

The finished tool should be something worth showing to people. A person should be able to open it, click a preset, and produce something beautiful without understanding the biology underneath.

## User-Facing Description (for when it ships)

> A pattern generator inspired by the pigmentation of mollusc shells. Each pattern emerges from the same reaction-diffusion chemistry that produces the stripes, chevrons, and teardrops on real shells — simulated one row at a time, the way a clam builds its shell over a lifetime. Choose a pattern, adjust the sliders, and explore the space between order and chaos.

## Plan / How to Get There

### Phase 1: Working engine with verified parameters (Days 1-3)
Port the simulation internals from kaesve.nl's proven JavaScript implementation into the existing UI shell. The kaesve.nl tool uses Meinhardt's book equations with multiple system types (activator-substrate-inhibitor, secondary additive inhibitor, hormone model). The target parameter sets have been captured from working output:

**sp51a (Diamond lattice):** Activator-substrate-inhibitor system. Da=0.005, ra=0.01, Db=0.4, rb=0, bb=0.015, sb=1, Dc=0, rc=0.001, source density=0.01, 100 steps/line.

**sp512 (Teardrops):** Secondary additive inhibitor. Da=0.01, ra=0.01, ba=0.08, Db=0.005, rb=0.0015, sb=0.1, Dc=0.4, rc=0.015, source density=0.01, 20 steps/line.

This is a translation task (porting known-good code), not a creative task (inventing equations). Much more likely to succeed than the from-scratch attempts.

### Phase 2: Rendering and effects layer (Days 4-7)
This is the creative core of the project — what makes it more than another Meinhardt simulator:

- **Pigment concentration gradient** — map raw activator values to a continuous colour gradient. Stripe centres saturated, edges lighter.
- **Substrate-driven edge irregularity** — use local substrate depletion to modulate threshold per cell. Ragged terminations that emerge from simulation state.
- **Hue-shifting color palettes** — three-stop gradients where the midtone genuinely shifts in hue and saturation, not just lightness. Informed by photographs of real shells.
- **Scale control** — decouple simulation resolution from canvas resolution for genuine size variation.

### Phase 3: Polish and ship (Days 8-9)
UI cleanup, export quality, final preset tuning, user-facing description.

## Lessons Learned

This project has been a hard-won education in the gap between understanding an algorithm conceptually and making it produce good visual output.

**The architecture matters more than the parameters.** The single biggest mistake was starting with a 2D shader (domain-warped FBM). Shell patterns are fundamentally 1D systems iterated over time. No amount of parameter tuning on the wrong architecture will produce the right result.

**Meinhardt's equations are numerically fragile.** The activator-inhibitor model with `a²/b` autocatalysis blows up easily. The saturation term `(1 + κ·a²)` in the denominator is essential for stability. Gray-Scott is more stable but can't produce the substrate-driven complexity that makes shell patterns interesting.

**Don't derive parameters from first principles — borrow them from working implementations.** The breakthrough came from studying kaesve.nl and Chris Viau's Observable notebook, which have verified parameter-to-output mappings. Every failed attempt before that was blind guessing at values in a high-dimensional, sensitive parameter space.

**AI coding without visual feedback loops is painful.** The core difficulty was that the AI writing the code couldn't see the output. It kept confusing "numerically stable" with "visually correct." The conversation approach with screenshots worked; Claude Code in VS Code did not.

**Scope down, quality up.** The original goal was to reproduce ALL Meinhardt pattern types. That's already been done well by others. The revised goal — a few patterns rendered with exceptional visual quality — is a distinct project with a clear identity.

## Key References and Resources

### Primary (verified working, parameters extracted)
- **kaesve.nl/projects/shells/** — "Fantastic sea shells and how to grow them." JavaScript implementation of Meinhardt's book with multiple system types and preset configurations. Source of the sp51a and sp512 parameter sets.
- **Chris Viau's Observable notebook** — observablehq.com/@biovisualize/seashell-patterns-simulation-4 — JavaScript port of the book's algorithms with interactive sliders and preset patterns.

### Secondary
- **Hans Meinhardt, *The Algorithmic Beauty of Sea Shells*** (Springer, 4th ed.) — the canonical reference. Contains pseudocode, parameter tables, and visual comparisons to real shells.
- **A.A. Murakami, *A Thousand Layers of Stomach*** — the installation that inspired this project. Uses generative code driving a knitting machine to produce shell-pattern textiles.
- **Darren Abbey's Flickr album** — photographs of Meinhardt shell simulations: https://www.flickr.com/photos/darrenabbey/albums/72157621239877456
- **Meinhardt's BASIC source code** — published on his lab page (now archived). The `shell-program.html` and `a-simple-basic-program.html` pages contain the original update equations.
- **Karl Sims' RD Tool** — karlsims.com/rdtool.html — Interactive Gray-Scott reaction-diffusion. Useful for understanding parameter space, not for shell-specific patterns.
- **jasonwebb's Reaction-Diffusion Playground** — github.com/jasonwebb/reaction-diffusion-playground — Live WebGL Gray-Scott demo.

## Open Questions

- How much of kaesve.nl's simulation code can be ported directly vs. needs rewriting for the custom UI?
- Different presets use different equation systems (activator-substrate-inhibitor vs. secondary additive inhibitor vs. hormone model). Should the tool support multiple system types, or should each preset bake in its own equations?
- How far can the effects layer go before it starts feeling like generic texture rather than emergent chemistry?
- What does the third/fourth preset pattern look like? Candidates: sp66c (dense zigzag with hormone), Observable preset 12 (nested hearts), or something discovered through parameter exploration.

---

*Last updated: March 16, 2026*