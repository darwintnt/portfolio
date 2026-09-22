<template>
  <!-- Decorative geometric illustration (hero/about backgrounds). Purely
       presentational: aria-hidden, pointer-events-none, clipped by section. -->
  <div
    ref="driftEl"
    class="section-decor section-decor--fade pointer-events-none absolute z-0"
    :class="variant === 'hero' ? 'inset-0' : '-inset-4'"
    aria-hidden="true"
  >
    <!-- Hero: large clipped ring (top-right), small ring (bottom-left),
         dashed arc, dots + thin plus marks. Subtle, edges-first. -->
    <svg
      v-if="variant === 'hero'"
      class="h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g ref="ringEl" class="section-decor__ring">
        <circle
          cx="1280"
          cy="80"
          r="300"
          stroke="var(--decor-stroke)"
          stroke-opacity="0.45"
          stroke-width="1.25"
        />
        <circle
          cx="1020"
          cy="230"
          r="4"
          fill="var(--decor-dot-accent)"
          fill-opacity="0.75"
        />
      </g>
      <circle
        cx="140"
        cy="780"
        r="120"
        stroke="var(--decor-stroke)"
        stroke-opacity="0.4"
        stroke-width="1"
      />
      <path
        d="M 760 120 A 500 500 0 0 1 1180 520"
        stroke="var(--decor-stroke)"
        stroke-opacity="0.5"
        stroke-width="1"
        stroke-dasharray="6 10"
        stroke-linecap="round"
      />
      <circle
        cx="980"
        cy="260"
        r="6"
        fill="var(--decor-dot-accent)"
        fill-opacity="0.8"
      />
      <circle
        cx="1180"
        cy="640"
        r="5"
        fill="var(--decor-dot-blue)"
        fill-opacity="0.75"
      />
      <circle
        cx="700"
        cy="90"
        r="4"
        fill="var(--decor-dot-green)"
        fill-opacity="0.8"
      />
      <circle
        cx="240"
        cy="480"
        r="7"
        fill="var(--decor-dot-pink)"
        fill-opacity="0.7"
      />
      <circle
        cx="900"
        cy="800"
        r="4"
        fill="var(--decor-dot-accent)"
        fill-opacity="0.7"
      />
      <path
        d="M 640 694 v 12 M 634 700 h 12"
        stroke="var(--decor-stroke)"
        stroke-opacity="0.5"
        stroke-width="1.25"
        stroke-linecap="round"
      />
      <path
        d="M 1120 154 v 12 M 1114 160 h 12"
        stroke="var(--decor-stroke)"
        stroke-opacity="0.5"
        stroke-width="1.25"
        stroke-linecap="round"
      />
    </svg>

    <!-- About: same motif family — ring tucked behind the frame corner,
         dashed arc, three dots echoing the hero palette. -->
    <svg
      v-else
      class="h-full w-full"
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="30"
        cy="30"
        r="80"
        stroke="var(--decor-stroke)"
        stroke-opacity="0.45"
        stroke-width="1.25"
      />
      <path
        d="M 250 380 A 130 130 0 0 0 380 250"
        stroke="var(--decor-stroke)"
        stroke-opacity="0.5"
        stroke-width="1"
        stroke-dasharray="6 10"
        stroke-linecap="round"
      />
      <circle
        cx="352"
        cy="66"
        r="5"
        fill="var(--decor-dot-accent)"
        fill-opacity="0.8"
      />
      <circle
        cx="34"
        cy="330"
        r="4"
        fill="var(--decor-dot-blue)"
        fill-opacity="0.75"
      />
      <circle
        cx="366"
        cy="344"
        r="6"
        fill="var(--decor-dot-green)"
        fill-opacity="0.8"
      />
    </svg>
  </div>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'hero',
    validator: (value) => ['hero', 'about'].includes(value),
  },
});
</script>
