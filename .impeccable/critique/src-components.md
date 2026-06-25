# Critique: Portfolio - src/components

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Social links lack hover feedback beyond color |
| 2 | Match System / Real World | 3 | Clear technical language for recruiters |
| 3 | User Control and Freedom | 3 | External links open in new tabs appropriately |
| 4 | Consistency and Standards | 2 | Nova-blue/purple tokens unused but present; social icon styling inconsistent (some text-primary class, some fill="currentColor") |
| 5 | Error Prevention | 3 | Static page, no user input flows |
| 6 | Recognition Rather Than Recall | 3 | Simple nav, clear CTAs |
| 7 | Flexibility and Efficiency | 3 | Language switcher present, social links accessible |
| 8 | Aesthetic and Minimalist Design | 3 | Clean, minimal - no glassmorphism or gradient text |
| 9 | Error Recovery | 3 | External links open in new tabs |
| 10 | Help and Documentation | 3 | Purpose is self-evident for recruiters |
| **Total** | | **29/40** | **Good** |

## Anti-Patterns Verdict

**LLM assessment**: The portfolio is clean and professional. The Picton Blue palette gives it a distinctive light-blue feel rather than the typical dark or cream portfolio. Plus Jakarta Sans reads as modern but is indeed ubiquitous in AI-generated UIs. The design avoids most AI slop tells: no gradient text, no glassmorphism, no hero metrics, no numbered section markers. The main aesthetic concern is the monochromatic blue palette - everything feels like it's on the same hue, which can read as flat rather than distinctive.

**Deterministic scan**: 1 finding
- `overused-font` warning in `src/style.css:12` - Plus Jakarta Sans is overused per impeccable's registry

**Visual overlays**: Browser inspection not available in this session.

## Overall Impression

A solid, clean portfolio that communicates professionalism. The recent palette switch to Picton Blue is a meaningful improvement over generic dark themes. The main opportunities are: (1) consider a more distinctive typeface, (2) add visual variety to the palette through a secondary accent color, (3) clean up dead Tailwind tokens, and (4) add prefers-reduced-motion support for the Technologies scroll animation.

## What's Working

1. **Clean information hierarchy** - Section titles, project cards, and navigation all have clear visual weight. The "FEATURED" label is appropriately subdued.

2. **Color restraint** - Moving away from glassmorphism and gradient text was the right call. White cards on `#e0f9ff` background creates good depth without decorative effects.

3. **Consistent interactive states** - Buttons use `bg-primary` with `hover:bg-primary-dark` consistently. Social icons now use `text-primary` with `currentColor`.

## Priority Issues

**[P1] Overused typeface**: Plus Jakarta Sans appears on a huge percentage of AI-generated UIs. Consider a more distinctive face like:
- **DM Sans** (geometric, distinctive)
- **Manrope** (humanist geometric, unique a/g tails)
- **Outfit** (modern, less common)
- **Figtree** (friendly geometric)

**Why it matters**: Recruiters who evaluate many portfolios will recognize the "AI portfolio" aesthetic. A distinctive typeface is a quick way to stand out.

**Fix**: Replace in both `style.css` (line 12) and `tailwind.config.js` (line 7).

---

**[P1] Dead Tailwind tokens**: `nova-blue-*` and `nova-purple-*` color scales in `tailwind.config.js` (lines 10-33) are defined but never used anywhere in the codebase.

**Why it matters**: Technical debt. These tokens confusingly suggest a purple/blue theme that was replaced by Picton Blue.

**Fix**: Delete the `nova-blue` and `nova-purple` blocks from the Tailwind config.

---

**[P2] prefers-reduced-motion missing**: The Technologies section has an infinite scroll animation (`@keyframes animate-infinite-scroll` in style.css) with no reduced-motion alternative.

**Why it matters**: Users with vestibular disorders can experience discomfort with constant motion. WCAG 2.1 Level AA requires reduced-motion support.

**Fix**: Add `@media (prefers-reduced-motion: reduce) { .animate-infinite-scroll { animation: none; } }` to style.css.

---

**[P2] Monochromatic palette**: The entire palette lives on one hue (blue-cyan). This reads as flat rather than designed.

**Why it matters**: A single-hue palette lacks visual interest and makes it harder to create clear hierarchy.

**Fix**: Consider introducing a secondary accent from a different hue - perhaps a warm orange or coral for CTAs/accents, or a deeper navy for text contrast.

---

**[P3] Social icon styling inconsistency**: GitHub/LinkedIn icons use `class="text-primary"` with `fill="currentColor"`, but the email icon also has `class="text-primary"` with `stroke="currentColor"`. The feather-download icons in CV buttons use `stroke="currentColor"` on a dark button.

**Why it matters**: Minor inconsistency. Works fine visually but not systematic.

**Fix**: Standardize - perhaps use `fill="currentColor"` everywhere for icon sets, or ensure all icons consistently use the same approach per context.

## Persona Red Flags

**Jordan (Confused First-Timer)**: Would understand the portfolio immediately - clear sections, Spanish labels, visible navigation. No red flags here. The CV download buttons are prominent. **Passes.**

**Sam (Accessibility-Dependent)**: 
- **Red flag**: The Technologies scroll animation has no `prefers-reduced-motion` fallback - vestibular users get continuous motion.
- **Red flag**: Some muted text (tech stack descriptions?) may have insufficient contrast - `muted: #55b0df` on `background: #e0f9ff` - need to verify 4.5:1 ratio.

**Casey (Distracted Mobile User)**:
- **Red flag**: Technologies scroll animation - constant motion on mobile is battery-draining and potentially disorienting.
- **Pass**: Thumb-friendly tap targets on buttons (p-4 padding). Social icons are 36x36 minimum.

## Minor Observations

1. The `gradient-shift` animation keyframe is defined but unused
2. The `nova-blue-*` and `nova-purple-*` scales pollute the Tailwind namespace unnecessarily
3. Card shadows (`shadow-sm`) are subtle and appropriate
4. The `animate-slide-up` class is used for hero content - good entrance animation

## Questions to Consider

- **Tone**: The palette feels clean but conservative. Is the goal to feel "professional and safe" or "distinctive and memorable"? The current palette leans safe.
- **Typeface**: Plus Jakarta Sans is clean but common. Would you trade familiarity for more personality?
- **Motion**: The Technologies scroll is decorative. Is it essential to the design, or could it be removed without loss?

---

*Snapshot for `src-components` - 29/40*
