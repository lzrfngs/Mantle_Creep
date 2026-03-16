# Shells — Daily Plan (v2)

*Updated March 16, 2026 — revised after Day 1 reference gathering.*

## Workflow

Stay in conversation mode (Cowork or Claude chat). Bring screenshots of both reference implementations AND your current output every session. The AI can reason about the gap between the two. Don't use Claude Code for this project — the visual feedback problem hasn't been solved there.

The fundamental shift from v1 of this plan: **the algorithm is no longer the hard problem.** kaesve.nl has working JavaScript code with verified parameters for every pattern type you need. The hard problem is now the rendering — making the output feel like pigment on shell rather than pixels on screen. That's where your creative energy should go.

---

## Captured reference parameters

These are your verified parameter sets from Day 1. Every value below is confirmed to produce the pattern shown in the corresponding screenshot.

### sp51a — Diamond lattice chevrons
System: Activator-substrate-inhibitor
Source density: 0.01 | Steps per line: 100 | dt: 1
Activator a: Da=0.005, ra=0.01, ba=0, sa=0
Substrate b: Db=0.4, rb=0, bb=0.015, sb=1
Inhibitor c: Dc=0, rc=0.001, sc=1
Init: Activator at specific positions, Substrate constant, Inhibitor at specific positions
Boundary: Wrap vertically only

### sp512 — Teardrops
System: Crossings with a secondary additive inhibitor
Source density: 0.01 | Steps per line: 20 | dt: 1
Activator a: Da=0.01, ra=0.01, ba=0.08
Substrate b: Db=0.005, rb=0.0015, sb=0.1
Substrate c: Dc=0.4, rc=0.015, sc=1
Init: Activator at specific positions, Substrate constant, Inhibitor at specific positions
Boundary: Wrap vertically only

### Observable preset 0 — Stalactites (candidate 3rd pattern)
activatorDiffusion=0.004, activatorRemovalRate=0.080, activatorProductionRate=0
inhibitorDiffusion=0.014, inhibitorRemovalRate=0.019
substanceCDiffusion=0, substanceCRemovalRate=0
autocatalysisSaturation=1, inhibitorConstant=0.006, hormoneLife=0.053
numExecutions=100, numIterations=13, numCells=100
concentrationMin=-0.4, concentrationMax=0.3

### Observable preset 12 — Nested hearts (candidate 4th pattern)
activatorDiffusion=0.015, activatorRemovalRate=0.08, activatorProductionRate=0.1
inhibitorDiffusion=0.01, inhibitorRemovalRate=0.014
substanceCDiffusion=0, substanceCRemovalRate=0
autocatalysisSaturation=0.25, inhibitorConstant=0.05, hormoneLife=0.11
numExecutions=100, numIterations=12, numCells=100
concentrationMin=-0.4, concentrationMax=0.3

---

## The plan

Day 1 is done. You gathered references and narrowed scope. The plan now starts at Day 2.

Each day has ONE objective. If you finish early, stop. If you hit a wall, stop and bring the problem back the next day with screenshots.

---

### Day 2 (Today): Extract kaesve.nl's simulation code
**Time: 1-2 hours**

**The one thing:** Get the actual JavaScript source code from kaesve.nl/projects/shells/ and understand its structure.

Open the page in your browser. Right-click → View Page Source (or open DevTools → Sources tab). Find the JavaScript that runs the simulation. You're looking for the update loop — the function that computes one row from the previous row. Copy the entire JS file into a text file and save it as `kaesve-source.js` in your shells-versions folder.

Then bring that source code to a Claude conversation and ask: "This is working simulation code from kaesve.nl. Explain the update equations, the system types it supports, and how presets work. Don't modify anything."

Understanding the code before touching it is the single most important thing you can do. The previous failures all came from half-understanding the equations and then making changes that broke them.

**Success criterion:** You have the kaesve.nl source saved locally and a plain-English explanation of how its simulation loop works.
**Confidence: High.** This is reading and copying, not coding.

---

### Day 3: Port the simulation engine
**Time: 1-2 hours**

**The one thing:** Replace your current simulation internals with kaesve.nl's proven code, keeping your UI shell.

Bring Claude your current HTML file and the kaesve.nl source. Ask Claude to: "Replace the simulation class in my HTML with the simulation logic from kaesve.nl. Keep my canvas, layout, color pickers, and export button. Wire up the sp51a parameter set as the default. This is a translation task — do not invent or modify any equations."

The key instruction is "do not invent or modify." Every previous failure came from Claude improvising on the math. The kaesve.nl code works. Port it exactly.

Test with sp51a parameters. If the output doesn't resemble the sp51a screenshot, bring both images back to Claude with the code.

**Success criterion:** Your tool produces the sp51a diamond lattice pattern, recognizably similar to the kaesve.nl output.
**Confidence: Medium.** Porting between codebases always has friction — variable naming, canvas API differences, init conditions. But this is translation, not invention, so the failure modes are debuggable.

**If this fails:** Don't iterate more than 4 times. Instead, take kaesve.nl's entire page source and ask Claude to strip it down to just the simulation + a minimal canvas, then build your UI around that. Start from working code and add, rather than starting from your UI and replacing.

---

### Day 4: Second preset + preset switching
**Time: 1-2 hours**

**The one thing:** Get sp512 (teardrops) working as a second preset and build the preset-switching UI.

sp512 uses a different equation system ("secondary additive inhibitor") than sp51a ("activator-substrate-inhibitor"). Check whether kaesve.nl's code handles both system types — it almost certainly does, since it has a "System" dropdown. If so, your port from Day 3 should already support it; you just need to load the right parameters.

Add two preset buttons to the UI. Clicking one loads sp51a's parameters and regenerates. Clicking the other loads sp512's parameters. This is mechanical wiring — no equation changes.

If you have time left, explore the parameter space between the two presets. Slide values partway between sp51a and sp512 and see what emerges. If anything interesting appears, save those parameters as a candidate third preset.

**Success criterion:** Two preset buttons that each produce a visibly different, recognizable pattern. Switching between them works without errors.
**Confidence: High** (if Day 3 succeeded). This is parameter loading, not algorithm work.

---

### Day 5: Pigment concentration gradient (Effect 1)
**Time: 1-2 hours**

**The one thing:** Replace binary on/off rendering with continuous color mapping driven by the raw activator value.

This is where the project starts to become yours rather than a kaesve.nl clone. The reference tools render activator values as black/white. You're going to render them as pigment.

The change is rendering-only — don't touch the simulation equations. Instead of `pixel = activator > threshold ? foreground : background`, map the activator value through a smooth gradient. The peak of the activator wave gets the deepest pigment color. The edges — where the activator is building up or tailing off — get progressively lighter, more dilute color. Below a floor value, the pixel is background.

Look at the grey tones in the Observable screenshots (especially presets 0 and 7). Those already show some gradient character because Observable maps `concentrationMin` to `concentrationMax` as a continuous range. Your rendering should produce similar softness.

**Success criterion:** Stripes and shapes have visible lighter edges that fade into the background. The pattern has genuine grey/midtone character, not just black and white.
**Confidence: Medium-High.** This is a rendering change with no simulation risk. The tricky part is getting the tone curve right.

---

### Day 6: Substrate-driven edge irregularity (Effect 2)
**Time: 1-2 hours**

**The one thing:** Use local substrate/inhibitor values to modulate the rendering, so edges are ragged and organic rather than clean.

Where the substrate has been depleted by prior activator activity, the local threshold should rise, making it harder for weak signals to register as pigmented. The result: uneven, frayed edges that emerge from the simulation state rather than from a noise overlay.

The specific implementation depends on which variables your ported simulation exposes. For sp51a (activator-substrate-inhibitor), use the substrate `b` values. For sp512, use the secondary inhibitor. Ask Claude to inspect the simulation state and find which array shows the most spatial variation — that's the one to use for modulation.

**Success criterion:** Stripe/shape edges are visibly uneven — some terminate abruptly, some taper, some fray. The irregularity feels organic, not random.
**Confidence: Medium.** Depends on whether the simulation variables actually vary enough spatially. If the effect is too subtle, you may need to amplify it or add a small amount of noise to the modulation.

---

### Day 7: Hue-shifting color palettes
**Time: 1-2 hours**

**The one thing:** Create 3-4 color palettes where the midtone genuinely shifts in hue, not just lightness.

This is the other half of "not a simulation, a creative tool." Real shell pigment doesn't just go dark→light in one color. The Asari clam shifts from dark brown through warm amber to cream. Cone shells go from near-black through violet to pale blue-grey.

Implement three-stop color interpolation: dark stop, mid stop, light stop. Each stop is a full RGB color. The mid stop should be a genuinely different hue from the endpoints. Build at least 3 palettes:

- **Shell** — dark brown → warm amber → cream (Asari clam reference)
- **Ink** — near-black → deep violet → pale blue-grey (Conus reference)
- **Bone** — charcoal → warm grey-green → ivory

Look at photographs of real shells for color reference. Save a few as palette inspiration files.

**Success criterion:** At least two palettes where the midtone is a visibly different hue from the dark and light stops. The color shift should be noticeable but natural.
**Confidence: High.** Pure rendering/color work, no simulation risk.

---

### Day 8: Scale control + third preset
**Time: 1-2 hours**

**The one thing:** Add genuine pattern size control and finalize your third preset.

Scale: decouple simulation resolution from canvas resolution. A "Scale" slider should change how many cells the simulation runs — fewer cells stretched across the canvas = bigger shapes, more cells = finer detail. The kaesve.nl tool's `numCells` parameter does exactly this (their presets use 100 cells). Try values from 50 (large, open) to 400 (dense, fine).

Third preset: by now you've spent a week with the simulation and have probably stumbled onto at least one interesting parameter combination beyond sp51a and sp512. If not, try the Observable preset 0 (stalactites) or preset 12 (nested hearts) parameters — you have them captured above. Or take sp51a and dramatically change one variable to see what emerges.

**Success criterion:** The Scale slider produces a visible, dramatic change in pattern size. You have three working presets that each feel distinct.
**Confidence: Medium-High.**

---

### Day 9: Polish and ship v1
**Time: 1-2 hours**

**The one thing:** Clean up the UI, verify export, and call it done.

- Remove any sliders that don't produce visible effects
- Rename remaining sliders to plain English where possible
- Make sure PNG export works at reasonable resolution (at least 1200px wide)
- Test each preset + each palette combination
- Add the user-facing description somewhere in the UI or as a tooltip
- Save as `shells-v1-final.html`

If you want a fourth preset, add it. If not, three is fine. Don't let perfect be the enemy of done — you can always do a v2.

**Success criterion:** You can open the file, click through presets, adjust sliders, switch palettes, and export an image you'd be comfortable showing someone.
**Confidence: High.**

---

## If things go wrong

**Day 3 port fails:** Don't iterate endlessly. Take kaesve.nl's complete page, strip it to simulation + canvas, and build your UI around that. Start from working code.

**Effects (Days 5-6) look bad:** The effects depend on having genuine variation in the simulation values. If the ported simulation produces values that are too uniform (all near 0 or all near max), the gradient and edge effects won't have anything to work with. In that case, look at how kaesve.nl's rendering panel works — it has Power, Scale, and concentration min/max controls that map raw values to visible output. Port those too.

**You discover the rendering in kaesve.nl already does most of what you want:** That's fine. The project becomes less about inventing new rendering techniques and more about curating presets + building a polished UI + adding color palettes. That's still a distinct, worthwhile project.

---

## Summary table

| Day | Objective | Risk | Key dependency |
|-----|-----------|------|----------------|
| ~~1~~ | ~~Reference gathering~~ | ~~Low~~ | ~~Done~~ |
| 2 | Extract kaesve.nl source code | Low | Browser DevTools |
| 3 | Port simulation engine | **Medium** | Day 2 source code |
| 4 | Second preset + switching UI | Low | Day 3 engine |
| 5 | Pigment concentration gradient | Medium | Day 3 engine |
| 6 | Substrate edge irregularity | Medium | Day 5 rendering |
| 7 | Hue-shifting color palettes | Low | Day 5 rendering |
| 8 | Scale control + third preset | Medium | Days 3-4 |
| 9 | Polish and ship v1 | Low | Everything |

---

*Last updated: March 16, 2026*