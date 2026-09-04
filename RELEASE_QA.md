# The IAH Vyuha v1.3 — Release QA Log

## Static integrity
- `index.html` exists and is non-empty.
- `index.html` references `game.js` and `sw.js`.
- `manifest.json` parses as JSON.
- HTML title and Open Graph title use The IAH Vyuha.
- No live source file contains the previous product name in the active release metadata.

## Runtime checks
- `node --check game.js`
- `node --check sw.js`
- `npm test`

## Browser smoke test
A local HTTP smoke test is run separately against Chromium when available. The smoke test verifies page load, canvas creation, game start, strategy overlay initialization, and key HUD nodes.

## Commercial boundary
This release is GitHub/static-site ready, but remains a prototype. A commercial launch still needs formal accessibility, device/browser certification, legal review, licensed assets, privacy/consent flows for any remote AI or analytics, payments, security review, and production observability.
