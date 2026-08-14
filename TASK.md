# Rebuild Task — Interactive Good Night / Sleepcall Page

## Goal
Rebuild the supplied saved webpage as a clean, maintainable, mobile-first Vite + Vanilla JavaScript project.
The result should feel visually and behaviorally equivalent to the reference, but the implementation must be rewritten cleanly rather than copying the saved browser dump verbatim.

## Reference files
- `reference/original/original.html` — saved page containing the complete DOM and inline behavior.
- `reference/original/original.css` — original custom styling.
- `reference/original/original.js` — original external interaction script.
- `public/assets/*` — original GIF/JPG/PNG visual assets.
- `reference/snapshot/` — untouched extracted snapshot of the supplied archive for visual comparison.

## Original interaction flow
1. Initial state shows the full-screen wallpaper, dark overlay, gift image, and text `Klik Kadonya!`.
2. Clicking the gift:
   - starts background music;
   - animates/scales the gift away;
   - opens a SweetAlert text input asking for the visitor name.
3. Name validation:
   - required;
   - maximum 10 characters;
   - invalid input should show an error and return to name input.
4. After valid name:
   - show a short greeting popup with the flower GIF;
   - show a left/right choice popup with a panda GIF.
5. Both left/right branches are playful and ultimately continue:
   - show confirmation/reconsideration popup(s);
   - use the supplied panda/thinking/cute/yay GIFs similarly to the original;
   - preserve the joke that switching choices still leads to sleepcall.
6. Main scene after popup flow:
   - wallpaper transition/zoom;
   - default sticker appears in a circular glass-like frame;
   - falling white snowflake/heart-like particles are spawned continuously with a sensible DOM cap;
   - typed text appears in sequence using TypeIt:
     - `Good Night ya! Ayo kita sleepcall, hehe`
     - `Jangan lupa kirim balasannya ke WhatsApp aku`
   - a bordered translucent/skewed message card appears;
   - finally reveal the `💌 Balas` button.
7. Reply button:
   - show success SweetAlert;
   - open WhatsApp with a URL-encoded message based on the visitor name.

## Required architecture
- `src/config.js` is the single place for:
  - copy/text;
  - WhatsApp number;
  - music URL;
  - asset paths;
  - max name length.
- Keep all app logic in small named functions; avoid mutable globals when possible.
- Build the UI from clean semantic HTML created in `src/main.js` or extracted into modules if useful.
- Use CSS classes instead of repeatedly mutating large `style="..."` strings.
- No inline event handlers.
- Encode WhatsApp message with `encodeURIComponent`.
- Audio failure/autoplay restrictions must not break the interaction.
- Avoid creating more than ~100 falling particle elements.
- Support mobile widths around 320px and desktop without horizontal overflow.
- Preserve the dark romantic/glassmorphism look and original animation feel.
- Add `prefers-reduced-motion` fallbacks.
- Keep keyboard focus and basic accessibility reasonable.

## Acceptance criteria
- `npm install` then `npm run dev` starts the project.
- `npm run build` completes without errors.
- No console errors during normal interaction.
- Gift click -> name -> choice flow -> typed final message -> WhatsApp reply works end-to-end.
- All original supplied visual assets are used from `/public/assets`.
- The user can change the WhatsApp number and wording only by editing `src/config.js`.
- No external CSS dump, Font Awesome kit, or browser-saved HTML cruft is required for the final implementation.
- The final source is understandable to another developer.

## Nice-to-have improvements
- Use CSS-generated snowflakes/hearts instead of Font Awesome dependency.
- Add a small mute/unmute control after audio begins.
- Pause particle creation when the tab is hidden.
- Preload critical images.
- Keep layout stable on iOS/Android viewport changes using `100dvh` with fallback.

## Do not
- Do not delete `reference/` until the rebuild is finished and verified.
- Do not replace the project with React/Vue/Next unless there is a compelling blocker.
- Do not redesign the experience into a different product.
- Do not add a backend; none is needed.
