<!--
  Componente de ejemplo que demuestra diferentes patrones de uso de i18n
  Este archivo es solo para referencia y no está siendo usado en la app
-->
<template>
  <div class="examples-container">
    <section class="example">
      <h2>1. Traducción Simple</h2>
      <p>{{ t('hero.title') }}</p>
      <p>{{ t('hero.subtitle') }}</p>
    </section>

    <section class="example">
      <h2>2. Traducción con Variables</h2>
      <p>{{ t('welcome', { name: userName }) }}</p>
      <!-- JSON: "welcome": "Bienvenido, {name}!" -->
    </section>

    <section class="example">
      <h2>3. Traducción con Plurales</h2>
      <p>{{ t('projects', 0) }}</p>
      <p>{{ t('projects', 1) }}</p>
      <p>{{ t('projects', projectCount) }}</p>
      <!-- JSON: "projects": "sin proyectos | 1 proyecto | {count} proyectos" -->
    </section>

    <section class="example">
      <h2>4. Traducción con HTML (v-html)</h2>
      <p v-html="t('richText')"></p>
      <!-- JSON: "richText": "Texto con <strong>negritas</strong> y <em>cursivas</em>" -->
    </section>

    <section class="example">
      <h2>5. Listas de Traducciones</h2>
      <ul>
        <li v-for="(item, index) in skills" :key="index">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="example">
      <h2>6. Traducción Condicional</h2>
      <p>{{ isLoggedIn ? t('user.loggedIn') : t('user.loggedOut') }}</p>
    </section>

    <section class="example">
      <h2>7. Información del Idioma Actual</h2>
      <div>
        <p>Idioma: {{ currentLocale }}</p>
        <p>Nombre: {{ currentLanguage?.name }}</p>
        <p>Nombre Nativo: {{ currentLanguage?.nativeName }}</p>
      </div>
    </section>

    <section class="example">
      <h2>8. Botones de Cambio de Idioma</h2>
      <div class="button-group">
        <button
          v-for="lang in availableLocales"
          :key="lang.code"
          @click="changeLocale(lang.code)"
          :class="{ active: isCurrentLocale(lang.code) }"
        >
          {{ lang.nativeName }}
        </button>
      </div>
    </section>

    <section class="example">
      <h2>9. Toggle Idioma</h2>
      <button @click="toggleLocale">
        Cambiar Idioma ({{ currentLocale }})
      </button>
    </section>

    <section class="example">
      <h2>10. Componentes de UI</h2>
      <div class="ui-components">
        <LanguageSwitcher />
        <LanguageSwitcherDropdown />
      </div>
    </section>

    <section class="example">
      <h2>11. Traducción con Computed</h2>
      <p>{{ welcomeMessage }}</p>
    </section>

    <section class="example">
      <h2>12. Traducción en Script</h2>
      <button @click="showAlert">
        {{ t('common.confirm') }}
      </button>
    </section>

    <section class="example">
      <h2>13. Formato de Fechas (Nativo)</h2>
      <p>{{ formattedDate }}</p>
    </section>

    <section class="example">
      <h2>14. Traducción de Arrays</h2>
      <div>
        <h3>{{ t('technologies.title') }}</h3>
        <ul>
          <li v-for="tech in technologies" :key="tech">
            {{ tech }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLanguage } from '../composables/useLanguage';
import LanguageSwitcher from './LanguageSwitcher.vue';
import LanguageSwitcherDropdown from './LanguageSwitcherDropdown.vue';

const {
  t,
  currentLocale,
  currentLanguage,
  availableLocales,
  changeLocale,
  toggleLocale,
  isCurrentLocale,
} = useLanguage();

// Datos de ejemplo
const userName = ref('Darwin');
const projectCount = ref(12);
const isLoggedIn = ref(true);
const technologies = ref(['Vue.js', 'TypeScript', 'Vite', 'Tailwind CSS']);

// Computed para traducción dinámica
const welcomeMessage = computed(() => {
  return t('welcome', { name: userName.value });
});

// Skills traducidas
const skills = computed(() => {
  // Suponiendo que tienes algo así en tu JSON:
  // "skills": ["Diseño", "Desarrollo", "Testing"]
  return t('about.skills', []);
});

// Formato de fecha usando el locale actual
const formattedDate = computed(() => {
  const date = new Date();
  return date.toLocaleDateString(currentLocale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
});

// Uso de traducción en funciones
const showAlert = () => {
  alert(t('common.success'));
};
</script>

<style scoped>
.examples-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.example {
  margin-bottom: 3rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: #f9fafb;
}

.example h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
}

.button-group {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background-color: #f3f4f6;
}

button.active {
  background-color: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.ui-components {
  display: flex;
  gap: 1rem;
  align-items: center;
}

ul {
  list-style: disc;
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}
</style>
