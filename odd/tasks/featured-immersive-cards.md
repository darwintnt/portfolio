# Featured Projects — Immersive Image Cards

## Objective
Redesign the Featured Projects cards in `src/components/Portfolio.vue` from the current
"white card with top image + orange left border" layout to an **immersive image card**:
the project image fills the entire card, a dark scrim sits on top of it, and all content
(title, description, chips, links) is layered over the image, anchored to the bottom.
Agency/portfolio visual style. "Other Projects" cards stay untouched.

## Problem
The current featured card is a generic portfolio-card layout (white surface, top image,
side accent border). The site has moved to a sober, editorial, JetBrains-inspired language
(size hierarchy, flat sections, immersive visuals). Featured cards should read as
premium, image-led artifacts.

## Why
User picked "imagen inmersiva" (option 2) from three proposed directions
(editorial / immersive / bento) after approving the hero blob background as-is.

## Scope
- `src/components/Portfolio.vue` — featured card block only (lines 23–122).
- `src/style.css` — one scoped addition: force dark-shade chip colors inside immersive
  cards (scrim is dark in both themes, so light-theme chip shades would fail contrast).
- OUT of scope: Other Projects cards, portfolio.json data, i18n keys, grid distribution
  (3+1 stays per prior decision), Hero/About.

## Constraints
- Grid: keep `md:grid-cols-2 lg:grid-cols-3 gap-8` (3 featured + 1 in second row).
- Keep `v-lazy-image`, data flow, `chipColorClass`, existing i18n keys.
- Dark scrim must be ALWAYS on (text readability), not hover-only; hover keeps image zoom.
- Text over scrim is theme-independent (white on dark scrim in both themes).
- Chips inside immersive cards must use the DARK shade pairs in both themes.
- No new dependencies. Respect `prefers-reduced-motion` (existing transitions fine).

## Design spec
- Card: `group relative rounded-3xl overflow-hidden aspect-[4/5] bg-surface`
  + hover lift `-translate-y-1` and neutral deep shadow `rgba(22,17,32,0.25)`
  (keep the 250ms transition language; no orange glow — image covers the card).
- Image: absolute inset-0, w-full h-full object-cover, `group-hover:scale-105`.
- Scrim: always-on `bg-gradient-to-t from-[#161120]/90 via-[#161120]/40 to-transparent`
  covering the image (aria-hidden, pointer-events-none).
- Content: `flex flex-col justify-end p-8` over the scrim:
  - Tag: `✦ {{ t('portfolio.featuredProject') }}` in `.font-accent`, `text-sm`,
    color `#fb923c` (dark-shade orange, works on scrim in both themes).
  - Title: `text-white text-2xl md:text-3xl font-semibold tracking-tight mb-3`,
    `group-hover:text-[#fb923c]` (size hierarchy: hierarchy by size, weight 600).
  - Description: `text-white/70 text-sm leading-relaxed mb-6 line-clamp-3`.
  - Chips: `.chip !px-2.5 !py-0.5` with dark shades forced (CSS below).
  - Links row: GitHub (if present) + external link, `text-white/60 hover:text-[#fb923c]`.
- Remove from featured card: `bg-surface border-border border-l-4 border-l-accent/80`
  card border stack, the old hover-only `from-[#161120]/70` gradient overlay div, the
  `aspect-video` image wrapper, `bg-background` placeholder.

## CSS addition (style.css, after the html.light chip block)
Six rules forcing dark chip shades inside immersive cards, e.g.:

```css
/* Immersive project cards — scrim is dark in both themes */
.card-immersive .chip-c-orange,
html.light .card-immersive .chip-c-orange {
  --chip-text: #fb923c;
  --chip-bg: rgba(251, 146, 60, 0.12);
  --chip-border: rgba(251, 146, 60, 0.3);
}
```
(Repeat for blue #60a5fa, green #4ade80, purple #c084fc, pink #f472b6, cyan #22d3ee —
same values as the base dark rules.)
Specificity note: `html.light .chip-c-*` (0,2,1) beats plain `.card-immersive .chip-c-*`
(0,2,0), so both selectors are listed in each rule. Card root carries `card-immersive`.

## Tasks
- [x] T1: Rewrite featured card in Portfolio.vue to immersive layout (scrim, overlay
      content, aspect-[4/5], hover zoom/lift; remove dead classes) + add
      `card-immersive` root class. — commit 90842b9, build exit 0.
- [x] T2: Add the six `.card-immersive .chip-c-*` dark-shade override rules to style.css
      (after the html.light chip block, with both selectors per rule). — commit d78ce51,
      build exit 0.
- [x] T3: Verify — `pnpm run build` exit 0; Playwright live (CDP cache-disabled hard
      reload): 4 featured cards render image-full with bottom-anchored text; title
      computed white + ≥24px weight 600; scrim gradient present; chips inside cards use
      dark shades in light AND dark theme; contrast of tag/title/desc ≥4.5:1 over scrim;
      hover: image scale + card lift; 375px no horizontal scroll; console 0 errors
      (pre-existing manifest icon warning allowed). Close doc with evidence.
      — evidence in Progress log below.

## Checks (functional)
- `pnpm run build` after each task batch.
- rg sweep: no leftover `border-l-accent`, no `aspect-video` in featured block.
- Live Playwright probes per T3 (CDP Network.setCacheDisabled + reload).

## Acceptance criteria
- Featured cards are image-filled with bottom-anchored white text over an always-on dark
  scrim, readable in both themes (AA).
- Chips inside immersive cards use dark shades in both themes.
- Other Projects section unchanged; grid distribution unchanged (3+1).
- Build passes; no horizontal scroll at 375px; no console errors.

## Progress log
- T1 — commit `90842b9` `feat(portfolio): immersive image layout for featured cards`
  (+24/−26 in `src/components/Portfolio.vue`, featured block only; Other Projects
  untouched). `pnpm run build`: exit 0.
- T2 — commit `d78ce51` `feat(portfolio): scrim-safe chip shades inside immersive cards`
  (+46 in `src/style.css`, six rules with the two-selector pattern inserted after the
  `html.light .chip-c-cyan` block, before `.chip:hover`). `pnpm run build`: exit 0.
- T3 — verification (2026-09-22, Playwright against http://localhost:5173, CDP
  `Network.setCacheDisabled(true)` + real `page.reload` after `goto` to avoid
  same-document hash navigation):
  - `rtk pnpm run build`: exit 0.
  - `rg -n "border-l-accent|aspect-video" src/components/Portfolio.vue`: 0 hits.
  - 4 `.card-immersive` cards; computed aspect-ratio `4 / 5`, overflow hidden,
    radius 24px; img absolute fills card exactly (389×487 == card box, object-fit cover).
  - Scrim: computed `linear-gradient(to top, oklab(...0.191745...)/0.9 0%, .../0.4 50%,
    transparent 100%)`, covers card. Tailwind v4 serializes `#161120/90` as an oklab
    `color-mix` of #161120 (L 0.1917 vs pure #161120's 0.1950 — same dark family,
    marginally darker); identity to #161120 verified numerically via forward oklab
    conversion (my first inverse-matrix check was buggy and discarded).
  - Title: font-weight 600, font-size 30px (md:text-3xl at 1280w), color
    `rgb(255,255,255)`; content column justify `flex-end` (bottom-anchored).
  - Chips in LIGHT theme (default): chip-c-blue → `#60a5fa`, chip-c-purple →
    `#c084fc`, chip-c-orange → `#fb923c`, chip-c-pink → `#f472b6` — DARK shades.
    Same values in DARK theme (localStorage `theme=dark` + real reload, `html` class
    empty): identical — T2 specificity pin works in both themes.
  - Contrast over #161120 (WCAG 2.x luminance): tag #fb923c 8.17:1, title white
    18.50:1, desc white/70 9.35:1, links white/60 7.13:1, chip orange text on
    rgba(251,146,60,.12) 6.78:1 — all ≥4.5:1 PASS AA.
  - Hover (real `page.hover` + 450ms settle): card `translate: 0px -4px`, img
    `scale: 1.05`, shadow contains `rgba(22,17,32,0.25) 0px 16px 40px -12px`, title
    → `rgb(251,146,60)`. (Tailwind v4 uses the independent `translate`/`scale`
    properties; `transform` stays `none` — first probe read the wrong property.)
  - 375×667 viewport: `documentElement.scrollWidth === 375` (no horizontal scroll).
  - Console (clean reload, cache disabled): 0 errors, 1 warning — only the allowed
    pre-existing manifest icon warning (`android-chrome-192x192.png`).
  - Other Projects: 3 `group p-8` cards, bg `rgb(255,255,255)`, padding 32px,
    1px border — unchanged.
  - Screenshot: `featured-immersive-grid-light.png` (viewport, light theme).
- Disclosed residual risk (design-level, spec-fixed scrim alphas — no code change):
  with a near-white image pixel behind the upper text band (scrim alpha ≈0.30–0.38
  where the tag/title top edge sits), contrast can dip below 4.5:1 — pixel scan of
  English Tutor (only CORS-readable image; Cloudinary) shows worst band pixel
  [165,164,169] → title 2.48:1 in the upper band; bottom-anchored zones
  (desc/chips/links, scrim alpha ≥0.5) hold AA over any realistic pixel. Real
  screenshots are dark; if a future image is bright, consider `via` alpha ≥0.6 or an
  extra bottom-only scrim layer.
