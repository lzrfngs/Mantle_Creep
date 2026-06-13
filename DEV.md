## DEV — Change Log

_Newest version first. Drop raw notes in the Inbox; I process them into the next version below._

<!-- Conventions: small version bumps on the third decimal (v0.1.1, v0.1.2 …). Strike shipped work with ~~strikethrough~~ and a short "what changed" note. Status markers: [x] done · [!] dropped/changed · [ ] open. -->

## 📥 Inbox

_Add new notes/requests here as bullets. They get processed into a version below, then cleared._

-
-

---

## v0.5.0 — Working three-preset render pipeline (successful baseline)

Marked as a known-good checkpoint before a UI + preset-quality pass.

- [x] Three Meinhardt presets ported from kaesve.nl and rendering: sp51a (diamond lattice, KE=51), sp512 (teardrops, KE=54), sp43 (wave termination, KE=24).
- [x] Pigment concentration gradient with four-stop palette mapping, seven palettes + invert.
- [x] WebGL post: per-pixel UV warp, 5-tap blur, caustic light, iridescence (vitiligo accent model), surface relief, vignette.
- [x] Twelve draggable floating control cards, persistent tooltip box, save-PNG, layout persistence.
- Known gaps going into next version: control cards occlude the artwork; sp512 and sp43 render too sparse to match their briefs; always-on caustic shimmer creates a center glow; bloom (BO) accidentally wired to the roughness (RO) slider.
