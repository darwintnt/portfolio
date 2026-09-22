# Featured Projects — Split Zigzag Cards

## Objective
Replace the rejected immersive dark-scrim featured cards with a two-column grid of split cards (image left / content right), where cards 2 and 4 flip the image to the right on desktop (zigzag) to break identical-grid monotony.

## Problem
The immersive cards (white text over dark scrim) clash with the site's light editorial register and fail real contrast on bright images. User wants the section to use the site's own text language: ink on white/surface, colored chips, mono accent tag.

## Why
- Register clash: black-box scrim world exists nowhere else on the site.
- Real a11y hole: bright images dip below 4.5:1 at the title zone (measured 2.48:1).
- Identical-card-grid monotony — zigzag adds rhythm without inventing a new language.

## Scope
- `src/components/Portfolio.vue` — rewrite featured block (lines ~22–120) only; Other Projects untouched.
- `src/style.css` — remove the six dead `.card-immersive .chip-c-*` override rules.

## Constraints
- Grid: `md:grid-cols-2` (2×2 with 4 featured projects); drop `lg:grid-cols-3`.
- Card: flex row — image container left, content column right.
- Zigzag: index-odd cards (2nd, 4th) get `lg:flex-row-reverse`.
- Mobile: stack image top / content bottom.
- Content column uses site language: mono `✦` tag (font-accent, accent color), h3 semibold text-primary hover:text-accent, muted description line-clamp-3, colored chips (site default shades — no scrim overrides), icon links text-muted hover:text-accent.
- AA by construction: ink on white/surface, no scrim. Both themes must pass.
- Keep site card language: rounded-3xl, hover lift/border-accent/soft shadow.
- i18n keys unchanged (`portfolio.featuredProject` exists). No new dependencies.

## Tasks
- [x] T1: Rewrite featured block to split zigzag cards in Portfolio.vue — done: commit `94ec71d`, build exit 0, prettier clean, zigzag verified live (row/row-reverse alternating).
- [x] T2: Remove dead .card-immersive chip overrides in style.css — done: commit `499fc43` (−46 lines), `rg card-immersive src/` = 0 hits, prettier clean.
- [x] T3: Verify build + Playwright live (both themes, contrast, zigzag, mobile) + close doc — done: see evidence below.

## Progress / Verification Evidence
Commits (branch feat/dark-warm-redesign, not pushed):
- `94ec71d` feat(portfolio): split zigzag layout for featured cards — src/components/Portfolio.vue (+24/−26 incl. hover fixup)
- `499fc43` fix(style): drop dead immersive chip overrides — src/style.css (−46)
- (this doc) docs(odd): close featured-split-cards feature tasks

Verification results (all observed, not assumed):
- `rtk pnpm run build` → exit 0 (✓ built in ~500ms). public/sitemap.xml regenerated but never staged.
- `rg -n "card-immersive" src/` → 0 hits.
- Playwright (dev 5173, CDP cache-disabled + real reload):
  - Desktop 1280×1024: 4 cards in 2 grid columns; flexDirection = row / row-reverse / row / row-reverse (zigzag: image LEFT, RIGHT, LEFT, RIGHT); image share 42% of card width.
  - Light theme: card bg #FFFFFF, border #E8E0EF, radius 24px; title rgb(36,26,46) #241A2E; tag "Share Tech Mono" rgb(194,65,12) #C2410C; desc/link rgb(94,85,104) #5E5568; chips LIGHT shades only (#1d4ed8, #7e22ce, #c2410c, #0e7490 — no dark shades → scrim overrides gone).
  - Dark theme (localStorage theme=dark + reload): card bg #221B30, title rgb(244,240,250) #F4F0FA, tag rgb(251,146,60) #FB923C, desc/link #A79FB8, chips DARK shades (#60a5fa, #c084fc, #fb923c, #22d3ee); zigzag unchanged.
  - Hover: card translate 0px -4px (lift), border → accent/60, shadow rgba(249,115,22,0.15), title → rgb(194,65,12); reverts on unhover.
  - Mobile 375×667: all 4 cards flex-direction column, image on top (aspect 1.60), scrollWidth 375 === innerWidth (no horizontal scroll).
  - Other Projects: 3 cards, classes byte-identical to pre-change; diff hunks confined to featured block.
  - Console: 0 errors from this change. Allowed manifest-icon warning present. 12 pre-existing licify-S3 CORS console errors (external bucket, no ACAO header) were observed — they are timestamped before this session's edits, reproduce under neither layout in controlled cache-disabled reloads, and are non-blocking (all featured images render, naturalWidth > 0, no crossorigin attr).
- `rtk prettier --check` on Portfolio.vue + style.css → all formatted correctly.

Deviation from spec (recorded): h3 uses `group-hover:text-accent!` (trailing-!, Tailwind 4.3.1) instead of plain `group-hover:text-accent`. Reason: the site's own unlayered `.text-primary { color: var(--color-foreground) }` (src/style.css:60) outranks ALL layered variant utilities, so plain `group-hover:text-accent` never applies — this also silently breaks the untouched Other Projects h4 hover. The `!` wins the cascade in dev and prod; verified live (hover title resolves accent in both checks).

## Next step
Done — feature complete. Follow-up candidates (out of scope, reported): site-wide `group-hover:text-*` vs unlayered `.text-primary` override quirk (Other Projects h4 hover dead); footer's `font-accent` hero-title span was concurrently removed by another editor (unstaged, left untouched).
