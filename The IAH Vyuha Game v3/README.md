# The IAH Vyuha: Echoes of Hampi

A dependency-free, offline-first, first-person strategy-adventure prototype. **Vyuha** is the final game identity for this iteration: a tactical formation/strategy theme that fits the original brief's emphasis on planning, mystery, action, adaptive difficulty, long-form chapters and an AI-agent layer.

## What this build covers

The original design brief called for a professional first-person web game, open-world exploration with optional checkpoints, responsive Laptop/PC/Mobile/Tablet support, adventure/action enemies, story-driven chapters, a hidden repeatable progression layer, an AI agent behind the hint control, strategy, stronger shooting as powers are completed, 3D-style rendering/physics/coordinates, mouse rotation, WASD movement, sound, offline play, commercial-readiness and a real-world-inspired environment. The current build implements those gameplay requirements as an offline web prototype; it does not claim production-grade cloud AI, licensed Google satellite packaging, or a generated Genie 3 asset.

## Core design

- **Strategy before fire:** each phase opens with a tactical stance: Veil, Hunter or Trickster.
- **Long-form story:** 3 narrative chapters, 6 phases each, with mixed objectives instead of one-step chapter completion.
- **Hidden replay layer:** an 8-phase Echo cycle continues after the story and changes pressure/objectives without exposing an "infinite loop" label.
- **Human-like enemies:** Resonance Wardens are rendered as humanoid silhouettes with stalking, strafing, retreating, sentinel and feint behaviors.
- **Escape intelligence:** Phase Echo creates a short-lived decoy, allowing repositioning and tactical escapes.
- **Adaptive agent:** a local policy learner tracks aggregate gameplay signals and tunes encounter intensity. It stores no identity data and does not transmit telemetry in this prototype.
- **Distinct areas:** Sunken Mandala Court, Whisper Bazaar, Sky-Step Observatory, River Memory Court and Naga Crucible are designed as different gameplay spaces rather than repeated building blocks.
- **Offline audio:** procedural WebAudio BGM/SFX keeps the prototype self-contained.

## Repository structure

```text
.
├── index.html
├── game.js
├── sw.js
├── manifest.json
├── qa_runtime_test.js
├── GENIE3_SCENE_BRIEF.md
├── COMMERCIAL_READINESS.md
├── LICENSE-THIRD-PARTY.md
├── README.md
├── package.json
├── serve.sh
└── serve.bat
```

Backups are intentionally kept outside the GitHub-ready package so the default repository stays clean.

## Run locally

Use any static HTTP server; a server is recommended because service workers require HTTP(S).

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000/`. For QA initialization, use `http://localhost:8000/?autostart=1`.

## Controls

Desktop: `WASD` move, mouse look, `Left Click` / `Space` fire, `Right Click` / `Shift` Phase Echo, `H` hint, `Esc` pause.

Mobile/tablet: virtual stick, turn buttons, fire, Phase Echo and the hint orb.

## GitHub

This repository is intentionally dependency-light and can be pushed as a static site. Recommended first commit:

```bash
git init
git add .
git commit -m "Initial The IAH Vyuha prototype"
git branch -M main
git remote add origin <YOUR_GITHUB_REPOSITORY_URL>
git push -u origin main
```

To publish it as a free playable demo, enable **GitHub Pages** for the repository and serve from the repository root.

## QA

Run:

```bash
npm test
```

The test suite performs syntax checks, initializes the game in a mocked DOM, verifies 3 x 6 story phases, validates humanoid enemy roles, exercises Phase Echo and validates the hidden 8-phase cycle and adaptive-agent updates.

A separate browser smoke test can be run with the optional local Playwright environment.

## Commercial roadmap

The prototype is not represented as a final commercial release. Before launch, add licensed/authorized assets, accessibility review, browser/device certification, secure save/account infrastructure, consented analytics, payments, privacy documentation, rate limits and security hardening.

## Real-world imagery / Genie 3

The repository does not bundle Google satellite tiles. For an online edition, use Google Maps Platform under its current terms and attribution requirements. `GENIE3_SCENE_BRIEF.md` is a production handoff brief for an authorized Genie workflow; it does not claim that a Genie 3 asset was generated locally in this repository.
