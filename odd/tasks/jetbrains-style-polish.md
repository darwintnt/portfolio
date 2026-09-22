# JetBrains-Style Polish — hierarchy by size, alternating bands, colored chips, default light

## Objective
Transfer the JetBrains Academy patterns analyzed live: hierarchy expressed by SIZE
not weight, alternating color blocks between sections, colored tech chips, and
light-mode as the default theme.

## Problem / Why
The page's visual hierarchy leans on font-weight contrast (bold vs regular). The user
approved a sober, editorial direction inspired by JetBrains Academy (hierarchy 96 → 48 →
16px at a consistent semibold weight), wants section rhythm via color bands, per-tech
colored chips, and a default light experience (stored preference still wins).

## Scope
- Branch `feat/dark-warm-redesign` (continuation of the iterative change list).
- Size hierarchy on page-level headings (hero h1 + section h2 in About, Technologies,
  Portfolio, Contact). Card-internal titles keep their current weight.
- Alternating bands: Technologies = dark band, Contact = accent band; other sections stay base.
- Colored chips: deterministic 6-color palette mapped per tech name, AA in both themes.
- Default light mode via pre-paint script; stored `localStorage.theme` still wins.

## Constraints
- Quicksand Variable max weight = 700 (use font-semibold 600 for headings).
- Dark theme tokens untouched; light overrides already exist.
- NEVER stage `public/sitemap.xml` (build regenerates it) or `.atl/`.
- pnpm, not npm. `rtk` prefix for tooling. zsh has no fd — use rg.

## Tasks
- [x] T1 Default light mode — flip pre-paint script logic in index.html
      (add `light` class unless stored theme === 'dark'), default meta theme-color → #FAF6F0.
      **Done** — d9d8427. Fresh visit → html.light + body #FAF6F0; stored dark → dark + meta #1a202c.
      Extra fix a0b54cd: moved meta tag before script so the dark-branch meta update actually applies.
- [x] T2 Bands + chip color classes in src/style.css — `.band-dark` (pinned dark-theme
      foreground vars, band bg #161120 in light / surface-tone in dark) and 6 `.chip-c-*`
      classes via --chip-* var indirection (dark base + html.light overrides + band re-pin).
      **Done** — 76aab5b. Follow-up fix 4f2c6cf: band rules had landed inside
      `@media (prefers-reduced-motion)` (prettier/edit-order artifact) making them inert;
      moved back after `html.light` block, before `body`.
- [x] T3 Size hierarchy — all page-level headings font-semibold (600): hero h1 stays
      text-8xl 96px desktop; section h2 → text-4xl md:text-5xl (48px desktop). Orange
      overlines unchanged.
      **Done** — b6bb37c. Hero h1 600/96px; all 4 section h2s 600/48px (live-verified).
      Portfolio "Other projects" h3 also normalized (page-level). Remaining font-bold only
      on card-internal titles (Portfolio h3/h4), About:29 inline link, dead Card.vue.
- [x] T4 Alternating bands — Technologies section gets `band-dark` + border-y; Contact
      drops the centered card and becomes a full-width `band-accent` section (light:
      #FFE8CC soft-accent, dark: warm tint over background), inner content centered.
      **Done** — b1be6bc. Live: #technologies #161120 in light / #221b30 in dark;
      #contact #FFE8CC in light.
- [x] T5 Colored chips wiring — deterministic hash (char-code sum % 6) mapping tech name →
      chip color class in Technologies marquee and Portfolio tech tags.
      **Done** — a658714 (src/utils/chipColor.ts + wiring in Technologies marquee both lists,
      Portfolio featured + other). 42 marquee chips → 6 distinct classes/colors; Portfolio
      29 chips → 5 distinct; same name always same color (Tailwind/Dokploy/AI → orange).
- [x] T6 Verify — npm run build, chip/band contrast audit both themes, Playwright live
      check (default light, bands alternate, chips colored), close doc.
      **Done** — build EXIT:0; contrast audit all ≥4.5:1 (see evidence); Playwright
      fresh/stored-dark/stored-light + toggle round-trip all pass; console 0 errors
      (only pre-existing manifest-icon warning ×13).

## Authorized scope
Only the files listed above plus this doc + Engram mirror. No i18n changes, no
portfolio.json changes, no push/PR (user decision).

## Acceptance criteria
- Fresh visit (empty localStorage) renders LIGHT mode without flash. ✅ verified live
- Returning user with stored 'dark' still gets dark. ✅ verified live
- Hero 96px / sections 48px, all page-level headings weight 600. ✅ verified live
- Technologies reads as a dark block in light mode; Contact as warm accent band. ✅ verified live
- Same tech name always renders the same chip color; all chip text ≥ 4.5:1 in its context. ✅ verified
- Build passes. ✅ EXIT 0

## Progress / evidence
- T1 commit d9d8427 `feat(theme): default to light mode with stored dark override`
  (index.html pre-paint flips to light-default; Navigation isLight reads DOM synchronously).
  Deviation: static meta theme-color moved BEFORE the script (a0b54cd) — as speced the
  script's dark-branch meta update was a silent no-op (script precedes the meta in <head>,
  querySelector finds nothing). With meta first, stored-dark users now get #1a202c.
  Deviation: d9d8427 also carries the pre-existing uncommitted Navigation.vue monogram
  restyle (href `/` + font-accent text-3xl text-accent) from the prior session — the whole
  file was staged instead of hunk-only staging; left in, disclosed here instead of
  rewriting 7 commits.
- T2 commit 76aab5b `feat(design): color band and chip token classes` (+150 −12 in style.css).
  Fix 4f2c6cf `fix(style): move band rules out of reduced-motion media query` — the band
  block had ended up inside @media (prefers-reduced-motion) and never applied; live check
  caught it (band bg transparent). Structure re-verified: band rules at top level, media
  block restored to original content.
- T3 commit b6bb37c `refactor(typography): express hierarchy through size at semibold weight`
  (Hero h1 semibold; About/Technologies/Portfolio/Contact h2 → text-4xl md:text-5xl semibold;
  Portfolio other-projects h3 semibold; card-internal titles untouched).
- T4 commit b1be6bc `feat(sections): alternating dark and accent color bands`
  (Technologies +band-dark border-y border-border; Contact card wrapper removed, band-accent
  on section; glow div dropped; id stays contact_me).
- T5 commit a658714 `feat(chips): per-tech colored chips via deterministic hash`
  (new src/utils/chipColor.ts; Technologies marquee both lists + Portfolio both chip groups).
- T6 verification:
  - `pnpm run build`: EXIT 0 (two runs: after T5 and after fixes).
  - `rg "font-bold|font-extrabold" src/components/`: only card-internal titles
    (Portfolio.vue:52,209 h3/h4 project names), About.vue:29 inline body link, and
    Card.vue:5 (dead component, zero importers). No page-level hits.
  - Contrast audit (WCAG relative luminance arithmetic):
    dark shades on #161120: orange 8.17, blue 7.28, green 10.62, purple 7.00,
    pink 6.98, cyan 10.24 — all ≥4.5 (worst-case over own 12% tint: 6.82/6.07/8.51/5.86/5.86/8.31).
    light shades on #FFFFFF: orange 5.18, blue 6.70, green 5.02, purple 6.98, pink 6.04,
    cyan 5.36 — all ≥4.5 (worst-case over own 8% tint: 4.62/5.93/4.51/6.12/5.31/4.81).
    Extras: accent #9A3412 on #FFE8CC 6.15:1; #fb923c on #161120 8.17:1.
  - Playwright live (cache disabled, DOM probes): fresh → light + rgb(250,246,240) ✓;
    #technologies rgb(22,17,32) in light, rgb(34,27,48) in dark ✓; #contact rgb(255,232,204) ✓;
    42 marquee chips → 6 chip-c-* classes / 6 distinct colors, dark shades kept inside band
    in light mode ✓; Portfolio 29 chips colored deterministically ✓; h1 600/96px ✓;
    section h2s 600/48px ✓; stored dark → dark + meta #1a202c ✓; toggle dark↔light
    round-trip ✓; console 0 errors, only pre-existing manifest-icon warning per load.
- Docs commit: `docs(odd): close jetbrains-style-polish feature doc`.
- Uncommitted leftovers NOT touched by this feature: Navigation.vue monogram change
  (pre-existing from prior session) and public/sitemap.xml (build artifact — never staged).