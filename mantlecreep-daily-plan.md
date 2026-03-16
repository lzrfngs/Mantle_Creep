# Shells — Daily Plan

## Before anything: an honest workflow recommendation

The chat history tells a clear story. Claude Code in VS Code failed because the AI wrote code blind — it couldn't see the output and kept confidently producing junk. The conversation approach worked better (it's what finally produced progress) but was exhausting because every iteration required you to describe what went wrong, the AI to guess a fix, and you to paste and test.

**The biggest remaining risk is the same one that caused every failure: the AI guessing at parameters it hasn't verified.**

The most productive thing you can do is stop generating parameters from scratch and start borrowing them from working implementations. The research turned up several that are live and free right now:

- **kaesve.nl/projects/shells/** — "Fantastic sea shells and how to grow them." JavaScript implementation of Meinhardt's book. If this is working, it's the single most valuable resource for this project. Open it, play with it, screenshot every good parameter set.
- **Karl Sims' RD Tool** — karlsims.com/rdtool.html — Interactive reaction-diffusion in the browser. Uses Gray-Scott, which won't give you chevrons, but will give you verified parameters for spot and stripe regimes.
- **Chris Viau's Observable notebook** — observablehq.com/@biovisualize/seashell-patterns-simulation-4 — JavaScript port of the book's algorithms. View source to extract parameter sets and equations.
- **jasonwebb's Reaction-Diffusion Playground** — jasonwebb.github.io/reaction-diffusion-playground/ — Live demo with visible parameter controls. Good for understanding how F/K values map to pattern types.

**Recommended workflow going forward:** Stay in conversation mode (here in Cowork, or a Claude chat). Bring screenshots of both reference implementations AND your current output. The AI can reason about the gap between the two. Don't use Claude Code for this project — the visual feedback problem hasn't been solved there.

---

## The plan

Each day has ONE objective. If you finish early, stop. If you hit a wall, stop and bring the problem back the next day with screenshots. The worst thing you can do is keep iterating when frustrated — that's what caused the circular failures in the chat.

Confidence ratings are honest. "High" means the task is mechanical and unlikely to fail. "Medium" means it should work but might need a second session. "Low" means there's real risk of getting stuck.

---

### Day 1 (Today): Set up safety net + gather reference parameters
**Time: ~1 hour**

**The one thing:** Create a backup system and collect verified parameters from working implementations.

Do this:

1. Create a folder called `shells-versions` on your computer. Save your current HTML file as `v1-current.html`. From now on, every time you have a version that works even slightly, save a numbered copy before making changes. This is your undo button. You've been overwriting a single file — one bad paste and you lose your best version.

2. Open **kaesve.nl/projects/shells/** in your browser. If it works, spend the rest of your time here. For every pattern you like, screenshot the output AND the parameter panel. Save these screenshots in the same folder. These are gold — they're verified parameter-to-output mappings.

3. If kaesve.nl is down or broken, do the same with **Karl Sims' RD Tool** (karlsims.com/rdtool.html) and **jasonwebb's playground** (jasonwebb.github.io/reaction-diffusion-playground/).

**Success criterion:** You have 5-10 screenshots of patterns you like, each with visible parameter values.
**Confidence: High.** This is just browsing and screenshotting.

---

### Day 2: Transplant one working parameter set
**Time: 1-2 hours**

**The one thing:** Take the single best parameter set from your Day 1 screenshots and get it running in your tool.

Bring the screenshots to a Claude conversation (here or a new chat). Show Claude the reference output, the parameter values, and your current code. Ask Claude to map the reference parameters onto your simulation variables. This is a translation task, not a creative task — Claude should be matching known values, not inventing new ones.

Test the result. If it doesn't look right, screenshot your output next to the reference and bring both back. Iterate, but cap yourself at 4-5 attempts. If it's still not working after that, save what you have and stop.

**Success criterion:** Your tool produces at least one pattern that visually resembles one of your Day 1 reference screenshots.
**Confidence: Medium.** The parameter mapping between different implementations might not be 1:1. Variable names and equation forms differ. This could take some debugging.

---

### Day 3: Presets that actually work
**Time: 1-2 hours**

**The one thing:** Add 3-4 preset buttons, each loading a verified parameter set from your Day 1/2 research.

This is mechanical once you have working parameters. Each preset is just a function that sets all sliders to specific values and regenerates. You should have at least: one spot pattern, one wave/stripe pattern, and one that's your current best attempt at chevrons.

**Success criterion:** Clicking each preset produces a visibly different, interesting pattern. A person who's never seen the tool could click through them and see variety.
**Confidence: High** (if Day 2 succeeded). This is copy-paste work on top of a working base.

---

### Day 4: Study how chevrons actually work
**Time: 1-2 hours**

**The one thing:** Don't write code. Research only.

The chevron pattern is the hardest one and the one you care most about. It failed repeatedly in the chat because nobody had a clear understanding of what specific mechanism produces it. Before touching code, you need to understand it.

Do this:

1. If kaesve.nl's shell tool has a chevron/oblique pattern mode, study what parameters differ from the stripe mode. Screenshot everything.
2. Search for "Meinhardt oblique lines shell" and "travelling waves shell pigmentation." The key biological mechanism is: waves of activation that propagate laterally along the mantle edge. Chevrons form when two wave trains travelling in opposite directions collide.
3. Look at the Darren Abbey Flickr album again. Identify which specific images show the chevron type you want. Save them as named reference files ("target-chevron-1.jpg" etc.).
4. Read the relevant Observable notebook cells from Chris Viau's implementation — even if you can't run it, the code comments may explain the chevron mechanism.

Write down, in your own words, what you think makes chevrons different from straight lines. Bring that understanding to Day 5.

**Success criterion:** You can explain in one paragraph what a chevron pattern requires that a stripe pattern doesn't. You have 2-3 specific reference images saved and named.
**Confidence: High.** This is reading, not coding.

---

### Day 5: Attempt chevrons
**Time: 1-2 hours**

**The one thing:** Try to produce a chevron pattern in your tool, informed by Day 4's research.

This is the riskiest day. The chat showed that chevrons are genuinely difficult — the simulation needs lateral wave propagation with collisions, which may require architectural changes (bidirectional scanning, asymmetric nucleation, or a different model entirely).

Bring your Day 4 research and reference images to Claude. Ask Claude to propose the smallest possible change to the existing code that could introduce diagonal/chevron character. Not a rewrite — a modification.

Cap yourself at 3 attempts. If none of them produce anything chevron-like, save your best version and move on. You can come back to this after the effects layer is done — sometimes a pattern that looks boring as binary black/white becomes interesting when rendered with pigment gradients and color shifts.

**Success criterion:** Some visible diagonal or V-shaped character in the output, even if it's subtle. OR: an honest acknowledgment that this needs more work and a note about what you learned.
**Confidence: Low.** This is the hardest unsolved problem in the project. Be prepared for it to not work yet.

---

### Day 6: Pigment concentration gradient
**Time: 1-2 hours**

**The one thing:** Replace binary on/off rendering with continuous color mapping driven by the raw activator value.

This is the first "effects" change and it's the most impactful one. Right now cells are either foreground or background. The fix: map the activator value to a smooth gradient so stripe centres are fully saturated and edges show lighter fringes. This is a rendering change, not a simulation change — the equations don't change at all.

The prompt from the original chat (the one about "Effect 1 — Pigment concentration gradient within stripes") is still good. Use it, but apply it to whatever your current code looks like after Day 5.

**Success criterion:** Stripes have visible lighter edges that fade into the background. The pattern has grey tones, not just black and white.
**Confidence: Medium-High.** This is a rendering change and shouldn't break the simulation. The risk is getting the tone curve right — too aggressive and everything looks grey, too subtle and you can't see it.

---

### Day 7: Substrate-driven edge irregularity
**Time: 1-2 hours**

**The one thing:** Use local substrate values to modulate the rendering threshold per cell, so stripe edges are ragged rather than clean.

This is "Effect 2" from the original chat. Where the substrate has been depleted by prior activator activity, the local threshold rises, making it harder for weak activator signals to register as pigmented. The result: uneven, frayed stripe terminations that emerge from the simulation state rather than from a noise overlay.

**Success criterion:** Stripe edges are visibly uneven — some terminate abruptly, some taper. The irregularity looks organic, not random.
**Confidence: Medium.** Depends on whether the substrate variable in your simulation actually varies enough spatially to produce visible effects. If the substrate is too uniform, this won't do much.

---

### Day 8: Color with real hue shifts
**Time: 1-2 hours**

**The one thing:** Replace monochrome gradients with three-stop color palettes where the midtone genuinely shifts in hue, not just lightness.

The current palettes fade from dark to light in one hue. Real shell pigment shifts in color — the deep part of a stripe might be purple-brown while the fading edge shifts toward amber or blue. Implement 3-4 palettes where the dark, mid, and light stops are genuinely different hues.

Look at photographs of real shells for color reference. The Asari clam shifts from dark brown through warm amber to cream. Cone shells go from near-black through violet to pale blue.

**Success criterion:** At least two palettes where the midtone is a visibly different hue from the dark and light stops. The color shift should be noticeable without being garish.
**Confidence: High.** This is a rendering/color change with no simulation risk.

---

### Day 9: Scale control and UI cleanup
**Time: 1-2 hours**

**The one thing:** Make the pattern size genuinely adjustable from tiny dense marks to large open shapes, and clean up the interface.

The scale problem from the chat: the pattern felt stuck at one size. The fix is to decouple simulation resolution from canvas resolution — fewer simulated cells stretched across the canvas = bigger shapes. More cells = finer detail.

Also: remove any sliders that don't do anything meaningful. Rename sliders to plain English. Group controls logically. The UI should feel like a creative tool, not a science experiment.

**Success criterion:** Moving the scale control from minimum to maximum produces a dramatically visible change in pattern size. A non-technical person could use the controls without confusion.
**Confidence: Medium-High.**

---

### Day 10: Final pass and ship
**Time: 1-2 hours**

**The one thing:** Polish, export, and call it done (or call it v1).

Review the tool end to end. Fix any visual glitches. Make sure the PNG export works at a reasonable resolution. Add the user-facing description somewhere in the UI. Save the final version as `shells-v1-final.html`.

If chevrons still aren't working (Day 5 was low confidence), decide now whether to ship without them and come back later, or to dedicate another few days. Don't let perfect be the enemy of done.

**Success criterion:** You can open the file, click through presets, adjust sliders, and export an image you'd be comfortable showing someone. That's it.
**Confidence: High** (assuming the previous days went reasonably well).

---

## Contingency: What if I'm still stuck on patterns after Day 5?

If the patterns still aren't interesting enough after the first week, the problem is almost certainly in the simulation engine, not in the effects or rendering. At that point, the most productive move is:

1. Take the source code from whichever reference implementation (kaesve.nl, Chris Viau, etc.) produced the best patterns during your Day 1 research.
2. Ask Claude to port that specific implementation into your existing UI shell — keeping your layout, sliders, color pickers, and export, but replacing the simulation internals entirely with proven code.

This is a different task from "write a Meinhardt simulation from scratch," which is what kept failing. It's a translation task with a known-good source. Much more likely to succeed.

---

## Summary table

| Day | Objective | Risk | Depends on |
|-----|-----------|------|------------|
| 1 | Backup system + reference gathering | Low | Nothing |
| 2 | Transplant one working parameter set | Medium | Day 1 |
| 3 | Working preset buttons | Low | Day 2 |
| 4 | Chevron research (no code) | Low | Nothing |
| 5 | Attempt chevrons | **High** | Day 4 |
| 6 | Pigment concentration gradient | Medium | Days 2-3 |
| 7 | Substrate edge irregularity | Medium | Day 6 |
| 8 | Hue-shifting color palettes | Low | Day 6 |
| 9 | Scale control + UI cleanup | Medium | Days 6-8 |
| 10 | Polish and ship | Low | Everything |

---

*Last updated: March 16, 2026*
