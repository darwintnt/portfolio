# Feature: Hero blob background (Haikei blob scene)

## Objective
Replace the hero's geometric SectionDecor with a token-recolorized Haikei "blob scene" SVG, added as a third `SectionDecor` variant, softly animated with CSS `d` morphing.

## Problem / Why
User generated a blob-scene SVG in Haikei (`blob-scene-haikei.svg`, untracked, project root) and wants it behind the hero, replacing the current geometric hero decorations. It must recolor with our theme tokens and stay purely decorative.

## Scope
- New `variant: 'blob'` in `SectionDecor.vue`; `Hero.vue` switches to it.
- Old hero geometric SVG variant becomes dead code -> remove it. `about` variant untouched.
- Recolor the 6-step Haikei ramp with `--blob-ramp-1..6` tokens (dark base + `html.light` overrides).
- CSS `d: path()` morph animation (progressive enhancement; `prefers-reduced-motion` opt-out).
- Keep scroll drift (useDecorTravel hero mode, transform-only).

## Constraints
- Strip Haikei's background `<rect>` (page bg shows through).
- Rename gradient ids uniquely (blob- prefixed) to avoid id collisions.
- SVG inline in the component; wrapper oversized vertically (~-inset-y 14%) so parallax drift never reveals edges.
- aria-hidden, pointer-events-none, z-0, clipped by section overflow-hidden.
- No new dependencies. No locale/copy changes. Never stage sitemap.xml / .atl / .playwright-mcp.

## Tasks
- [x] T1: Add 'blob' variant to SectionDecor (inline SVG, no rect, token stop-colors) — 12 paths + 12 recolorized gradients inlined, rect stripped, ids namespaced blob-grad-*; Haikei path fills mapped by concentric order (outer→inner = ramp 6→1).
- [x] T2: Hero.vue swaps to blob variant; remove dead hero geometric variant — Hero uses variant="blob", hero geometric SVG removed, ringEl plumbing dropped from both files.
- [x] T3: --blob-ramp tokens (dark + light) + CSS d morph keyframes — :root + html.light ramps in style.css; blob-morph-a/b keyframes (±1.5% perturbed paths) under prefers-reduced-motion: no-preference, morph-b offset -7s.
- [x] T4: Verify build + Playwright live (both themes, drift, morph, 375px, console) — build exit 0; 0 Haikei hexes in src/; dark rgb(249,115,22)/morph 14s; light rgb(194,65,12); drift 60px@400; scrollWidth 375; console 0 errors.

## Acceptance criteria
- Blob visible behind hero in dark and light, using ramp tokens only (no Haikei hexes left).
- Blob drifts on scroll; morph animates in supporting browsers; static under reduced-motion.
- About decor + travel unchanged; build exit 0; console 0 errors; no horizontal scroll.

## Progress / evidence
- T1–T3 committed as e508c07 `feat(design): blob scene variant with token ramp` (SectionDecor.vue, Hero.vue, style.css: +195/−98).
- T3 morph committed as eae37e3 `feat(motion): css d morph for hero blob` (SectionDecor.vue classes + style.css keyframes: +49/−2).
- Discovery: Haikei paths carry their own solid fill hexes (#f8ede2…#fbae3c), distinct from the 12 gradient stop hexes; gradients are unreferenced (0 url(#…) uses). Path fills recolorized by concentric order (outermost→innermost = ramp-6→ramp-1 per group) so the ramp reads identically to the original scene; gradient defs kept per spec, recolorized too.
- Playwright (CDP cache disabled, localhost:5173): dark — 12 paths, stop var(--blob-ramp-2) → rgb(249,115,22), .blob-morph-a animation blob-morph-a 14s, morph-b delay -7s, drift translate3d(0,60px,0) at scrollY 400, inset -112px bleed (14% of 800), aria-hidden + pointer-events none; light — html.light, ramp-1 → rgb(194,65,12), blob 1280×1024 visible; about decor intact (1 path, -inset-4, counter-drift -17.53px); 375×667 scrollWidth 375; console 0 errors (only pre-existing manifest icon warning).
- Morph generation: throwaway script perturbed only coordinate values (M/L anchors kept) with ±1.5% of each value; same command structure M+5C+L+Z verified (max delta 6.7 on a 900-unit canvas); results hardcoded into style.css.
