# Feature: hero-about-illustration

**Objective**: Abstract/geometric SVG illustration decorating the hero background, with the same motif continuing into About and visually traveling between the two sections on scroll.

**Problem**: The sober typographic hero (photo removed) feels bare; the user wants personality via geometric decoration that connects Hero → About.

**Why**: User request: "para decorar el hero de fondo y el about me como que dicha ilustracion viaje entre esas dos secciones".

**Scope (authorized)**: Hero.vue, About.vue, one new decorative SVG component, small style.css additions if needed, this doc. NO text/i18n/data changes, NO token redesign.

**Constraints**:

- Decorative only: `aria-hidden="true"`, `pointer-events-none`, no layout shift, text stays protagonist.
- Theme-adaptive via CSS variables (light #F4F4F4 / dark warm eggplant both must look right).
- Colors: thin strokes (1–1.5px) from muted/border tokens at low opacity; small filled dots using accent + chip family (orange/blue/green/pink) with existing dark/light shade pairs.
- No horizontal scroll at 375px; SVG clipped inside sections.
- Motion: transform-only (translate/rotate), rAF + passive scroll listener, `prefers-reduced-motion: reduce` disables all drift.
- Pure inline SVG — no CDN, no assets, no deps.

**Tasks**:

- [x] T1: Geometric hero decoration (rings, dashed arc, dots, thin cross/plus marks) integrated behind hero text — `SectionDecor.vue` variant `hero` (ring top-right clipped, small ring bottom-left, dashed arc, 5 dots, 2 plus marks) at `z-[1]` under text (`3957e20`)
- [x] T2: Matching decoration in About around/behind the photo frame (same motif family) — `SectionDecor.vue` variant `about` inside photo column `-inset-4`, ring behind frame corner + dashed arc + 3 dots (`3957e20`)
- [x] T3: Scroll "travel" motion — coordinated drift between the two sections (subtle, direction-aware) — `useDecorTravel.js` composable: hero translateY(scrollY*0.15)+ring rotate(scrollY*0.02deg), about counter-drift −(entryProgress\*30px); rAF + passive, reduced-motion opt-out (`bcb127f`)
- [x] T4: Verify build + live Playwright (transforms change with scroll, both themes, 375px, console clean) and close this doc — see evidence below

**Acceptance criteria**:

- `pnpm run build` exit 0
- Console 0 errors (only pre-existing manifest-icon warning allowed)
- Decorations visible in light and dark; no horizontal scroll at 375px
- Decorative transforms change while scrolling hero → about; disabled under reduced motion

**Checks**: `pnpm run build`; Playwright computed probes with CDP cache-disabled hard reload.

**Progress**: complete. All tasks T1–T4 done and verified.

**Verification evidence** (T4):

- `pnpm run build`: exit 0 (✓ built in 440ms, T1+T2 and T3 both verified; sitemap.xml regenerated, unstaged)
- `rtk rg -n "aria-hidden" src/components/SectionDecor.vue`: line 9 present
- Playwright (CDP cache-disabled hard reload, http://localhost:5173): hero decor exists ✓; about decor exists ✓; hero transform `matrix(1,0,0,1,0,0)` → `matrix(1,0,0,1,0,60)` after scrollTo(0,400) ✓ changes with scroll; about transform `matrix(1,0,0,1,0,-17.28)` ✓ counter-drift; dark stroke `rgb(167,159,184)`, light stroke `rgb(94,85,104)` — visible in both themes ✓; 375px scrollWidth 375 = innerWidth 375 in both themes ✓ no horizontal scroll; reduced-motion `reduce`: transform `none` before/after scroll ✓ static
- Console: 0 errors; only pre-existing manifest-icon warning on fresh load (mid-session "Failed to resolve component: SectionDecor" warnings were HMR artifacts during live edits, not present on fresh load)
- Headline readability over decor confirmed via screenshot (decor low-contrast, edge-positioned)
