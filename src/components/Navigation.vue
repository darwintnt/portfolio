<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-background/90 backdrop-blur-xs' : 'bg-transparent',
    ]"
  >
    <nav class="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
      <a href="#" class="text-lg font-medium tracking-tight"> DG </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-10">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-sm tracking-widest uppercase text-muted-foreground"
        >
          {{ link.name }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden text-foreground"
        @click="toggleMobileMenu"
        aria-label="Toggle menu"
      >
        <svg
          v-if="isMobileMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
          width="20"
          height="20"
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
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white">
      <div class="px-6 py-6 space-y-4">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="block text-sm tracking-widest uppercase text-muted-foreground"
          @click="closeMobileMenu"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface NavLink {
  name: string;
  href: string;
}

const isScrolled = ref<boolean>(false);
const isMobileMenuOpen = ref<boolean>(false);

const navLinks: NavLink[] = [
  { name: 'About', href: '#about' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Contact', href: '#contact_me' },
];

const handleScroll = (): void => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = (): void => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = (): void => {
  isMobileMenuOpen.value = false;
};

onMounted((): void => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted((): void => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
