# The IAH Vyuha — QA and Commercial Readiness

## Product identity

**The IAH Vyuha: Echoes of Hampi** is the renamed v1.3 iteration. The name keeps the requested **The IAH** prefix and adds **Vyuha**, a memorable Sanskrit-derived strategy concept, while keeping the Hampi-inspired mystery setting.

## Full-scenario coverage

The implementation checklist derived from the supplied brief is: first-person web game; novel concept; AI-agent/hint interaction; open exploration; long-running hidden progression; story chapters; action enemies; human-like enemies; strategic play; adaptive agent; mystery; stronger shooting after power completion; 3D-style rendering/physics; coordinate display; mouse turn/backward movement; WASD controls; offline-first operation; BGM/SFX; responsive screens; commercial expansion path.

## Strategy design

The tactical layer is deliberately lightweight enough for offline play. Each phase offers three stances: **Veil** lowers exposure and encounter pressure; **Hunter** raises damage and reward but increases enemy density; **Trickster** strengthens Phase Echo utility and deception. The local agent observes choice, hit/miss, movement tempo and damage events and adjusts a hidden difficulty profile.

The agent is intentionally described as a local adaptive policy learner rather than a hidden claim of human-level NLP/LLM training. No personal identity data or remote telemetry is sent by the prototype. A future cloud model should be opt-in, documented, rate-limited and privacy-reviewed.

## Replay and retention

The story has 18 phases (3 chapters × 6). Post-story Echo play uses 8-phase cycles with increasing pressure and variance. The progression is intentionally concealed in the UI so the user experiences evolving objectives rather than a visible "infinite loop" counter.

## Area differentiation

The five principal spaces have different encounter roles, traversal patterns and landmark identities: Sunken Mandala Court, Whisper Bazaar, Sky-Step Observatory, River Memory Court and Naga Crucible. The objective is to make each district read as a strategic arena, not as interchangeable architecture.

## Combat and movement

Resonance Wardens use humanoid silhouettes rather than hexagon/octagon target shapes. Their roles include stalking, skirmishing, sentry positioning and boss behavior. Movement includes approach, retreat, strafe, flanks, periodic direction changes and telegraphed ranged attacks so players can evade rather than absorb unavoidable damage. Phase Echo gives the player a tactical repositioning tool.

## GitHub readiness

The repository has no build dependency requirement for the game itself. It is static-host friendly, includes a manifest and service worker, and includes documentation, third-party licensing notes and automated QA.

## Verification

The release checklist for this iteration is: JavaScript syntax validation; service-worker syntax validation; runtime QA assertions; HTML integrity checks; manifest parse check; service-worker asset list check; local HTTP browser smoke test. Results are recorded in the release QA log generated with the package.

## Remaining production gates

This is still a prototype. Commercial launch requires licensed art/audio where applicable, formal accessibility testing, device matrix testing, security review, privacy/consent flows for any remote AI or telemetry, billing implementation, account/cloud-save architecture if desired, content ratings, legal review of all third-party services, and live-ops monitoring.
