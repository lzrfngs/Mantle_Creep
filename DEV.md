## DEV — Change Log

_Newest version first. Drop raw notes in the Inbox; I process them into the next version below._

<!-- Conventions: small version bumps on the third decimal (v0.1.1, v0.1.2 …). Strike shipped work with ~~strikethrough~~ and a short "what changed" note. Status markers: [x] done · [!] dropped/changed · [ ] open. -->

## 📥 Inbox

_Add new notes/requests here as bullets. They get processed into a version below, then cleared._

-
-

---

## v0.6.1 — Compact control panel

- [x] Redesigned controls from twelve large floating draggable cards (which covered the whole upper-left quadrant) into a single compact docked panel on the left edge (~206px wide), with a `Parameters` header and tight two-line rows (name + value, thin slider below).
- [x] Removed the drag, layout-persistence, and reset-layout machinery (no longer needed); hover tooltips now appear beside the panel.
- [x] Cleaned up dead `--card-*` CSS variables and the stale uiScale comment.

---

## v0.6.0 — Art-first UI + preset quality pass

Three highest-impact changes from a critical review, all verified in-browser.

**1. The artwork is the hero.**
- [x] Control cards now hidden on load behind a `controls` toggle in the bottom bar; the canvas reads as a finished, full-bleed piece on open. Reset-layout button only shows when controls are revealed.

**2. Every preset is a polished, distinct pattern.**
- [x] Per-preset defaults baked into a single `PRESET_DEFAULTS` table; clicking a tab snaps every slider to a tuned look (no fiddling needed).
- [x] sp512 — true teardrops now (rounded head + tapering tail) via higher cell count (N=380) and persistence, instead of sterile polka dots.
- [x] sp43 — rich stacked wave-termination banding with diagonal runs, via shorter substrate wavelength (bbK1 65→26) and steps-per-row (1→3); was 6 giant sparse hoops.
- [x] Simulation burn-in (80 rows) discards the start-up transient so no noisy band appears at the top edge of any preset.

**3. Restraint + correctness.**
- [x] Removed the always-on caustic shimmer (`causticStr` base 0.18→0); the default render no longer has a baked-in center glow. Caustics now tied to the Iridescence slider only.
- [x] Fixed bloom/roughness coupling bug: bloom (`BO`) was secretly driven by the Substrate Irregularity (`RO`) slider; now decoupled (`BO:0`).
- [x] Slider overload on first impression solved by hiding controls by default. (Open question: optional further curation into core/advanced groups when revealed.)

---

## v0.5.0 — Working three-preset render pipeline (successful baseline)

Marked as a known-good checkpoint before a UI + preset-quality pass.

- [x] Three Meinhardt presets ported from kaesve.nl and rendering: sp51a (diamond lattice, KE=51), sp512 (teardrops, KE=54), sp43 (wave termination, KE=24).
- [x] Pigment concentration gradient with four-stop palette mapping, seven palettes + invert.
- [x] WebGL post: per-pixel UV warp, 5-tap blur, caustic light, iridescence (vitiligo accent model), surface relief, vignette.
- [x] Twelve draggable floating control cards, persistent tooltip box, save-PNG, layout persistence.
- Known gaps going into next version: control cards occlude the artwork; sp512 and sp43 render too sparse to match their briefs; always-on caustic shimmer creates a center glow; bloom (BO) accidentally wired to the roughness (RO) slider.
