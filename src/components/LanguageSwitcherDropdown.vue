<template>
  <div class="language-dropdown" ref="dropdownRef">
    <!-- Dropdown Button -->
    <button
      @click="toggleDropdown"
      :aria-label="t('language.changeLanguage')"
      :aria-expanded="isOpen"
      class="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 hover:bg-background/80 border border-border transition-all duration-200"
    >
      <!-- Icono de globo -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <!-- Nombre del idioma -->
      <span class="font-medium text-sm">
        {{ currentLanguage?.nativeName }}
      </span>

      <!-- Icono de flecha -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <transition name="dropdown">
      <div
        v-if="isOpen"
        class="absolute mt-2 right-0 bg-background border border-border rounded-lg shadow-lg overflow-hidden min-w-[150px] z-50"
      >
        <button
          v-for="lang in availableLocales"
          :key="lang.code"
          @click="selectLanguage(lang.code)"
          class="w-full px-4 py-3 text-left hover:bg-background/80 transition-colors flex items-center justify-between gap-2"
          :class="{
            'bg-background/50 font-semibold': isCurrentLocale(lang.code),
          }"
        >
          <span>{{ lang.nativeName }}</span>
          <svg
            v-if="isCurrentLocale(lang.code)"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-primary"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import type { Locale } from '../i18n';

const {
  currentLocale,
  currentLanguage,
  availableLocales,
  changeLocale,
  isCurrentLocale,
  t,
} = useLanguage();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (locale: Locale) => {
  changeLocale(locale);
  isOpen.value = false;
};

// Cerrar dropdown al hacer clic fuera
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.language-dropdown {
  position: relative;
  display: inline-flex;
  align-items: center;
}

/* Animación del dropdown */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
