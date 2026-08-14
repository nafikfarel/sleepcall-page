# Agent Instructions

You are reconstructing a small interactive webpage from a user-provided reference archive.

1. Read `TASK.md` fully before editing code.
2. Inspect all three files in `reference/original/` to understand exact visual/behavioral details.
3. Treat `public/assets/` as approved source assets; reuse them.
4. Work autonomously. Do not stop after planning. Implement, run, test, fix, and verify.
5. Prefer the simplest maintainable solution: Vite + Vanilla JS + SweetAlert2 + TypeIt.
6. Centralize user-customizable content in `src/config.js`.
7. Never hardcode copy, WhatsApp number, or remote audio URL in multiple places.
8. Reproduce behavior, not browser-save cruft. Do not paste the giant inline SweetAlert/Font Awesome styles from the reference.
9. Run `npm install`, `npm run build`, and any useful local smoke checks before declaring completion.
10. If browser automation is available, test the complete interaction at mobile and desktop viewport widths.
11. Fix issues you discover without asking for confirmation unless a truly missing product decision blocks progress.
12. At the end, summarize changed files, how to run it, and which values the user can personalize in `src/config.js`.
