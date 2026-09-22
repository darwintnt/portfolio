# Feature: Dark Warm Portfolio Redesign ("Cálido Nocturno")

## Objective
Redesign the portfolio UX-UI to a dark-mode warm direction with strong personality, fixing: plain look, weak color system, and poor content distribution.

## Approved Design Direction
- **Palette**: Background `#161120` (warm eggplant), Surface/Card `#221B30`, Foreground `#F4F0FA`, Muted `#A79FB8`, Accent `#FB923C`→`#F97316` (warm orange), soft accent `#FED7AA` @15%.
- **Typography**: Plus Jakarta Sans (headings 700/800 + body), Caveat (handwritten accent only: "Open to Work" badge, personal phrases, footer signature).
- **Layout**: Asymmetric hero (not centered) with big name + framed avatar + differentiated CTAs; portfolio cards with rounded corners, warm hover overlay, chip-style tech tags; warmer contact section; marquee kept with chip aesthetics on dark.
- **Intocable**: dark-mode only (single theme), i18n ES/EN, SEO via @unhead/vue, data structure (portfolio.json), PWA, GA.

## Constraints
- Vue 3.5 + Vite 8 + Tailwind CSS 4 + vue-i18n 11. No new heavy deps unless necessary.
- Keep component structure (Navigation, Hero, About, Technologies, Portfolio, Contact, Footer) — restyle + reorganize, not rebuild from scratch.
- Accessibility: 4.5:1 contrast, focus states, prefers-reduced-motion.

## Tasks
- [ ] T1: Rewrite style.css design tokens (colors, fonts via Google Fonts import, utility classes .text-primary/.button-primary, chip, warm animations; remove dot texture + Manrope `*` selector)
- [ ] T2: Restyle Hero — asymmetric layout, big name, Caveat "Open to Work" badge, avatar, 2 distinct CTAs (solid orange + outline), social links
- [x] T3: Restyle Navigation + Footer — transparent-on-scroll nav, warm active states, Caveat signature in footer
- [x] T4: Restyle About + Technologies — 2-col About, chip marquee with warm hover, card surfaces
- [x] T5: Restyle Portfolio — rounded cards, warm hover overlay, chip tags, featured section separation
- [x] T6: Restyle Contact — warm centered section, distinct CV buttons, social links
- [ ] T7: Verify build + both locales + a11y spot check

## Verification
- `npm run build` passes
- Manual check ES/EN locales render correctly
- Contrast: orange #F97316 on #161120, #F4F0FA on #221B30 ≥ 4.5:1

## Progress
- Started: 2026-09-22
- Delivery strategy: ask-on-risk (single feature branch, ordinary repo policy — no PR requested yet)
- TDD: not enabled (no test runner in project; visual redesign verified via build + manual)
- T3 done: Navigation transparent over hero → `bg-background/85 backdrop-blur-md` + `border-border` on scroll > 24px; scroll-spy active link `text-accent` (probe at viewport/3, bottom-of-page pins last section); mobile menu `bg-surface/95`; LanguageSwitcher untouched. Footer: `border-t border-border bg-surface/40`, links `hover:text-accent`, Caveat signature `{{ t('hero.title') }} 🇨🇴`.
- T4 done: About two-column with Hero's warm-glow frame (rounded-[2rem] + accent blur + soft-accent border); Technologies marquee items → `.chip` (icon+name); shared section-heading pattern (orange uppercase tracking-widest text-xs overline + font-extrabold heading) applied to About + Technologies overlines reuse `about.greeting` / `about.technologies`. `.chip` utility extended (inline-flex, gap, nowrap, transform transition, hover translateY(-2px), reduced-motion opt-out).
- Verification (T3+T4): `npm run build` exit 0; `rg "e0f9ff|103242|Manrope" src/` → only Contact.vue and Portfolio.vue hits (About clean).
- T5 done: Portfolio cards → `bg-surface border-border rounded-3xl` + warm hover (`-translate-y-1`, `border-accent/60`, glow shadow `rgba(249,115,22,0.15)`, 250ms). Featured cards get accent `border-l-4` + Caveat `✦ portfolio.featuredProject` tag (existing key, no new locale entries). Images: hover warm overlay gradient `from-[#161120]/70` + `group-hover:scale-105`. Tech tags → `.chip` with `!px-2.5 !py-0.5`. Links `text-muted hover:text-accent`. Heading pattern applied (overline = `nav.portfolio`). Data flow from portfolio.json untouched.
- T6 done: Contact wrapped in `bg-surface/60 border-border rounded-3xl` card with radial warm glow `rgba(249,115,22,0.06)` behind; heading pattern (overline = `nav.contact`). CV buttons: `.button-primary` for current-locale CV, `.button-outline` for the other (locale-aware via `useI18n().locale`); exact Google Drive links kept. Social links → rounded-full icon buttons `border-border hover:border-accent hover:text-accent` + focus-visible ring. Location line muted with warm accent dot. No suitable Caveat closing-phrase key exists → skipped per task rules.
- Verification (T5+T6): `npm run build` exit 0 (built in 467ms); `rg "e0f9ff|103242|Manrope" src/` → zero hits; `rg "button-primary" src/components/Contact.vue` → 2 hits (both CV buttons).
