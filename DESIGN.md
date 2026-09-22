# Design

## Theme

Editorial-sober portfolio with light theme as default and a warm dark theme behind a toggle. Light: neutral #F4F4F4 page, white surfaces, near-black ink with opacity hierarchy. Dark: warm eggplant #161120 page, #221B30 surfaces, pale-lavender ink. One orange accent in both. Share Tech Mono as the technical accent voice.

## Colors

| Token | Light | Dark |
|---|---|---|
| background | #F4F4F4 | #161120 |
| surface | #FFFFFF | #221B30 |
| foreground (ink) | #241A2E | #F4F0FA |
| muted | #5E5568 | #A79FB8 |
| accent | #C2410C | #FB923C |
| soft-accent | #FFE8CC | #FED7AA |
| border | #E8E0EF | #3A2F4D |
| ring | #EA580C | #FB923C |

Ink hierarchy by opacity of one ink color (100% / 70% / 50%), JetBrains-inspired. Accent gradient on buttons: #FB923C → #F97316 (fixed across themes). Blob ramp (hero decor): light #C2410C→#EA580C→#FB923C→#FFD9B0→#FAECDC→#F4F4F4; dark #FB923C→#F97316→#9A3412→#3A2F4D→#221B30→#161120.

Chip palette (deterministic hash % 6, dark/light shade pairs): orange #fb923c/#c2410c · blue #60a5fa/#1d4ed8 · green #4ade80/#15803d · purple #c084fc/#7e22ce · pink #f472b6/#be185d · cyan #22d3ee/#0e7490.

## Typography

- Body + headings: Quicksand Variable (300–700). Hierarchy by size at weight 600: h1 96px / h2 48px / card titles 24–30px. `tracking-tight` on display sizes.
- Accent/technical: Share Tech Mono (400) — badges (`✦` tags, "Open to…" badge), footer signature, nav monogram.
- Body text at least 16px, muted for secondary, leading-relaxed for prose.
- No font-weight inflation for emphasis; size does the work.

## Components

- **Buttons**: `.button-primary` orange gradient pill (dark text, hover lift + glow), `.button-outline` bordered pill. Full rounded.
- **Chips**: `.chip` pill with per-tech color from hash; light shades on light bg, dark shades on dark bg; hover lift −2px.
- **Cards**: white/dark surface, 1px border, rounded-3xl, hover −translate-y-1 + border-accent/60 + soft warm shadow. Content hierarchy inside: title weight 600, muted description, chip row, icon links muted → accent on hover.
- **Headings pattern**: small accent uppercase tracking-widest overline + big semibold heading (used per section).
- **Decor**: `SectionDecor.vue` variants — 'blob' (Haikei blob-scene recolorized with token ramp, CSS d-morph 14s alternate) behind hero; 'about' geometric lines behind About; parallax drift via `useDecorTravel.js`.

## Layout

- Sections: `py-24/32`, flat backgrounds (no section bands), max-w-6xl/7xl containers.
- Featured projects: 2-column responsive grid; cards split image left / content right (the editorial register decision).
- Other projects: 3-col grid of uniform small cards.
- Full sections alternate negative space generously; no nested cards.

## Motion

- Entrance: slide-up + fade, staggered delays; suppressed under reduced-motion.
- Hero blob: CSS `d` morph 14s ease-in-out alternate (±1.5% perturbation), morph-b offset −7s.
- Parallax: hero decor translateY(scrollY × 0.15) + counter-drift in About (rAF-throttled, reduced-motion opt-out).
- Hover: card lift, image scale 1.05, title → accent, chip lift. Transitions ~250ms ease.
