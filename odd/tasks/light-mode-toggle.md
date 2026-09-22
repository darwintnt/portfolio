# Feature: light-mode-toggle

## Objective
Add a dark/light theme toggle in the header next to the language switcher. Dark stays the default; light is opt-in and persisted in localStorage.

## Problem / Why
The warm-dark redesign is dark-only. User asked: "en el header agrega una opcion para cambiar de dark-mode a light-mode, al lado de la opcion que hay de idiomas".

## Scope / Constraints
- Tailwind 4 class-based theming: current @theme dark tokens stay as default; an unlayered `html.light { ... }` override AFTER the @theme block redefines the vars.
- Light palette (locked): --color-background #FAF6F0, --color-surface #FFFFFF, --color-foreground #241A2E, --color-muted #5E5568, --color-soft-accent #FFE8CC, --color-border #E8E0EF, --color-accent #C2410C, --color-ring #EA580C. Dark values untouched.
- .button-primary keeps its hardcoded orange gradient + dark text in both modes (6.6:1 already).
- FOUC prevention: inline script in index.html <head> before CSS: if localStorage 'theme' === 'light' → add class 'light' to <html>.
- Toggle UI in Navigation.vue next to the desktop LanguageSwitcher AND inside the mobile menu. Sun icon in dark mode (click → light), moon in light mode (click → dark), inline SVG stroke icons, aria-label/title from new i18n key nav.theme (EN "Toggle theme", ES "Cambiar tema").
- State source of truth = class on documentElement; localStorage key 'theme'.
- If index.html has meta theme-color, swap it in the toggle handler too.

## Tasks
- [x] T1: html.light token overrides in src/style.css + pre-paint script in index.html (+ meta theme-color swap if present)
- [x] T2: Toggle button in Navigation.vue (desktop next to LanguageSwitcher + mobile menu) + nav.theme key in both locales
- [x] T3: Verify (build exit 0, light AA contrast audit: fg/bg, muted/bg, muted/surface, accent/bg ≥4.5:1; dark values untouched) + commits

## Acceptance criteria
- Toggle visible next to language option in header, works in both locales.
- Choice persists across reloads; no flash of wrong theme.
- Light palette passes AA for all text uses; dark default unchanged.

## Constraints
- Branch: feat/dark-warm-redesign (work-unit commits, Conventional Commits, no AI attribution).
- Do not touch public/sitemap.xml or untracked .atl/.
- No test runner exists → TDD off; verification = build + contrast calc + rg checks.
- zsh has no `fd` → use `rg`.

## Progress / Evidence
- T1 (commit e773c40): `html.light` unlayered override added after @theme in src/style.css with the 8 locked light tokens; body switched from hardcoded dark hexes to `var(--color-background)`/`var(--color-foreground)` (same dark values, so the override actually reaches the page); gentle bg/color transition on body guarded in the existing `prefers-reduced-motion` block; pre-paint script added in index.html before theme-color meta (adds `light` class + swaps meta to #FAF6F0 when saved theme is light). `rg "html.light" src/style.css` → present at lines 22–32; @theme dark values untouched.
- T2 (commit cf6f56d): icon-only sun/moon toggle (inline lucide SVGs, stroke="currentColor") added in Navigation.vue next to desktop LanguageSwitcher and inside the mobile menu next to the mobile language control; Contact-style icon button classes (rounded-full border-border hover:border-accent hover:text-accent + focus-visible ring); state read from documentElement.classList on mount, click toggles class + localStorage 'theme' + meta theme-color; `nav.theme` added to es.json ("Cambiar tema") and en.json ("Toggle theme") — no other keys touched. `rg -c "lucide-sun|lucide-moon" Navigation.vue` → 4 (2 icons × 2 placements).
- T3: `npm run build` → exit 0 (✓ built in 447ms). Contrast audit (WCAG relative luminance): foreground/bg 15.45:1, muted/bg 6.56:1, muted/surface 7.06:1, accent/bg 4.81:1, accent/surface 5.18:1, button dark-text on #F97316 6.60:1 — all ≥4.5:1 PASS. sitemap.xml and .atl/ left untouched.

## Next step
Done — all tasks complete and verified. Feature closed on feat/dark-warm-redesign.
