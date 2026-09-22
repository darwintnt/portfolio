import { onBeforeUnmount, onMounted } from 'vue';

/**
 * Scroll-linked "travel" drift for decorative shapes (transform-only).
 *
 * - hero: drifts down with scrollY (toward About) + slight ring rotation.
 * - about: counter-drifts by how far the section has entered the viewport.
 *
 * rAF-throttled passive window listener; never binds under
 * `prefers-reduced-motion: reduce`.
 */
export function useDecorTravel({ driftEl, ringEl, mode }) {
  let raf = 0;
  let listening = false;

  const apply = () => {
    raf = 0;
    const drift = driftEl.value;
    if (!drift) return;

    if (mode === 'hero') {
      const y = window.scrollY * 0.15;
      drift.style.transform = `translate3d(0, ${y}px, 0)`;
      const ring = ringEl?.value;
      if (ring) ring.style.transform = `rotate(${window.scrollY * 0.02}deg)`;
      return;
    }

    const rect = drift.parentElement.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.min(
      1,
      Math.max(0, (vh - rect.top) / (vh + rect.height))
    );
    drift.style.transform = `translate3d(0, ${-(progress * 30).toFixed(2)}px, 0)`;
  };

  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(apply);
  };

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    listening = true;
    window.addEventListener('scroll', onScroll, { passive: true });
    apply();
  });

  onBeforeUnmount(() => {
    if (listening) window.removeEventListener('scroll', onScroll);
    if (raf) cancelAnimationFrame(raf);
  });
}
