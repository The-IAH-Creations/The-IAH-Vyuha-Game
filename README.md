# The IAH Vyuha: Echoes of Hampi — v2.0.0

A single-file, offline-first first-person strategy-adventure prototype built from the original IAH game brief. The playable build is now consolidated into **`The_IAH_Vyuha.html`**: HTML, CSS, rendering, game logic, AI-agent logic, controls, audio, story, enemies and progression are contained in one file.

## Product direction

**The IAH Vyuha** is positioned as a premium-style browser game prototype rather than a claim of AAA production parity. Its design targets cinematic presentation, strategic combat, mystery exploration, adaptive encounters and long-session replayability while remaining dependency-free.

## What is implemented

- 3 story chapters × 6 authored phases with mixed objective types.
- A concealed 8-phase Echo progression that continues after the story.
- Five differentiated Hampi-inspired resonance districts.
- Human-like Resonance Wardens with stalking, strafing, retreating, feints, line-of-sight and telegraphed ranged attacks.
- Ashen Naga boss encounter with a three-power progression and stronger shooting impact.
- Phase Echo decoy for tactical repositioning.
- Veil / Hunter / Trickster strategy choices before phases.
- Local adaptive field agent behind the Hint button; aggregate-only local learning, no remote telemetry in this build.
- Procedural WebAudio BGM/SFX with no external audio dependency.
- 3D-style raycasting, collision physics, coordinates, mouse look, WASD movement and pointer-lock support.
- Responsive desktop/tablet/mobile controls.
- Cinematic HUD treatment, scanlines, vignette, mission state and adaptive render density for better device performance.
- Commercial expansion placeholders using USD/GBP/CHF without pay-to-win mechanics.
- Standalone HTML operation: the core game can be opened locally without internet.

## Run

### Standalone
Open `The_IAH_Vyuha.html` in a modern browser. Core gameplay does not require a network connection.

### Hosted / GitHub Pages
The repository can also serve the same file through a static host. `index.html` is retained as a compatibility launcher for environments expecting the conventional filename.

## Controls

**Desktop:** WASD / Arrow keys to move, mouse to look, Left Click / Space to fire, Right Click / Shift for Phase Echo, H for the AI hint, Esc to pause.

**Mobile / tablet:** virtual stick, turn, fire and Phase Echo buttons plus the Hint orb.

## Architecture

`The_IAH_Vyuha.html` is the source-of-truth playable artifact. Supporting files are intentionally non-runtime documentation/hosting aids:

- `README.md` — product, run, deployment and architecture notes.
- `CHANGELOG.md` — release history.
- `RELEASE_QA.md` — QA evidence and known limitations.
- `COMMERCIAL_READINESS.md` — production gates and legal/business checklist.
- `GENIE3_SCENE_BRIEF.md` — authorized external-generation handoff brief.
- `manifest.json` / `sw.js` — optional PWA/static-host support.
- `qa_runtime_test.js` / `qa_release_test.js` — regression checks that extract/test the single HTML source.

## QA

Run:

```bash
npm test
```

The regression suite checks JavaScript syntax, required DOM IDs, chapter/phase structure, enemy roles, Phase Echo, the hidden Echo cycle, adaptive-agent behavior, title/metadata consistency and the v2 single-file build.

A full cross-browser/device certification still requires testing on the actual target browsers and hardware.

## Commercial readiness

This is **commercial-architecture-ready**, not a legally certified or store-certified finished game. Before monetized public release, add licensed final art/audio, accessibility certification, privacy/consent flows if any remote service is introduced, payment processing, security review, account/cloud-save architecture if required, analytics governance, content ratings, store compliance and device/browser certification.

## Google Satellite / Genie 3

The prototype does not scrape, bundle or redistribute Google satellite tiles, and it does not falsely claim a locally generated Genie 3 asset. `GENIE3_SCENE_BRIEF.md` defines a future authorized integration workflow.

## Privacy

The adaptive prototype stores only aggregate gameplay-learning values in browser local storage. It does not collect names, email addresses, account identifiers or remote telemetry. Any future cloud AI/analytics implementation must introduce explicit privacy and consent controls.
