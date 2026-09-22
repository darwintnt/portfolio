<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
      isScrolled
        ? 'bg-background/85 backdrop-blur-md border-border'
        : 'bg-transparent border-transparent',
    ]"
  >
    <nav class="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
      <a href="#" class="text-2xl font-bold tracking-tight text-primary">
        DG
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-sm font-medium transition-colors duration-200 relative group"
          :class="
            activeSection === link.href.slice(1)
              ? 'text-accent'
              : 'text-muted hover:text-primary'
          "
        >
          {{ link.name }}
          <span
            class="absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300"
            :class="
              activeSection === link.href.slice(1)
                ? 'w-full'
                : 'w-0 group-hover:w-full'
            "
          ></span>
        </a>

        <!-- Language Switcher -->
        <LanguageSwitcher />
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-primary hover:text-accent transition-colors"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <svg
          v-if="isMobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-surface/95 backdrop-blur-lg border-b border-border"
    >
      <div class="px-6 py-6 space-y-4">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="block text-base font-medium transition-colors duration-200 py-2"
          :class="
            activeSection === link.href.slice(1)
              ? 'text-accent'
              : 'text-muted hover:text-primary'
          "
          @click="closeMobileMenu"
        >
          {{ link.name }}
        </a>

        <!-- Language Switcher Mobile -->
        <div class="pt-4">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';

interface NavLink {
  name: string;
  href: string;
}

const SECTION_IDS = ['about', 'technologies', 'portfolio', 'contact'] as const;

const { t } = useI18n();
const isScrolled = ref<boolean>(false);
const isMobileMenuOpen = ref<boolean>(false);
const activeSection = ref<string | null>(null);

const navLinks = computed<NavLink[]>(() => [
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.technologies'), href: '#technologies' },
  { name: t('nav.portfolio'), href: '#portfolio' },
  { name: t('nav.contact'), href: '#contact' },
]);

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 24;

  // Scroll-spy: highlight the last section whose top passed the viewport probe
  const probe = window.scrollY + window.innerHeight / 3;
  let current: string | null = null;
  for (const id of SECTION_IDS) {
    const section = document.getElementById(id);
    if (section && section.offsetTop <= probe) {
      current = id;
    }
  }

  // At the bottom of the page, always highlight the last section
  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 4;
  if (atBottom) {
    current = SECTION_IDS[SECTION_IDS.length - 1];
  }

  activeSection.value = current;
};

const toggleMobileMenu = (): void => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = (): void => {
  isMobileMenuOpen.value = false;
};

onMounted((): void => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted((): void => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
