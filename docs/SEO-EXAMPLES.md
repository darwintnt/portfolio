# 📖 Ejemplos de Implementación SEO

Ejemplos prácticos de cómo implementar SEO en diferentes componentes de tu portafolio.

---

## 📋 Índice

1. [Estructura de Componente con SEO](#estructura-de-componente-con-seo)
2. [Hero Component (Landing)](#hero-component-landing)
3. [About Component](#about-component)
4. [Portfolio Component](#portfolio-component)
5. [Contact Component](#contact-component)
6. [Implementar Blog (Opcional)](#implementar-blog-opcional)

---

## 🏗 Estructura de Componente con SEO

### Componente Básico con Mejores Prácticas

```vue
<template>
  <section
    :id="sectionId"
    class="py-16 px-4"
    :aria-label="$t('about.ariaLabel')"
  >
    <!-- H2 para título de sección -->
    <h2 class="text-3xl font-bold mb-8">
      {{ $t('about.title') }}
    </h2>

    <!-- Contenido con jerarquía semántica -->
    <div class="content">
      <h3 class="text-xl font-semibold mb-4">
        {{ $t('about.subtitle') }}
      </h3>

      <p class="text-gray-700 mb-4">
        {{ $t('about.description') }}
      </p>

      <!-- Imagen optimizada -->
      <img
        src="/images/profile.webp"
        :alt="$t('about.imageAlt')"
        width="400"
        height="400"
        loading="lazy"
        class="rounded-lg shadow-lg"
      />
    </div>
  </section>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  sectionId: {
    type: String,
    default: 'about',
  },
});
</script>
```

---

## 🦸 Hero Component (Landing)

### Hero.vue - Version SEO Optimizada

```vue
<template>
  <section
    id="hero"
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    aria-label="Hero section - Introduction"
  >
    <div class="container mx-auto px-4 text-center">
      <!-- H1 ÚNICO - Principal heading de la página -->
      <h1 class="text-5xl md:text-7xl font-bold mb-6">
        {{ $t('hero.greeting') }}
        <span class="text-blue-400">{{ $t('hero.name') }}</span>
      </h1>

      <!-- Subtítulo como H2 o p con clase destacada -->
      <p class="text-2xl md:text-3xl text-gray-300 mb-8" role="doc-subtitle">
        {{ $t('hero.title') }}
      </p>

      <!-- Descripción corta -->
      <p class="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
        {{ $t('hero.description') }}
      </p>

      <!-- CTAs con aria-labels descriptivos -->
      <div class="flex gap-4 justify-center flex-wrap">
        <a
          href="#portfolio"
          class="btn btn-primary"
          :aria-label="$t('hero.viewWorkAriaLabel')"
        >
          {{ $t('hero.viewWork') }}
        </a>

        <a
          href="#contact"
          class="btn btn-secondary"
          :aria-label="$t('hero.contactAriaLabel')"
        >
          {{ $t('hero.contact') }}
        </a>
      </div>
    </div>

    <!-- Decorative image - aria-hidden si es solo decorativa -->
    <div class="absolute bottom-0 left-0 right-0 opacity-10" aria-hidden="true">
      <svg><!-- ... --></svg>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
```

### Traducciones para Hero (es.json)

```json
{
  "hero": {
    "greeting": "Hola, soy",
    "name": "Darwin Gómez",
    "title": "Software Engineer",
    "description": "Desarrollador FullStack especializado en Backend con más de 6 años de experiencia creando aplicaciones web escalables y de alto rendimiento.",
    "viewWork": "Ver mi trabajo",
    "viewWorkAriaLabel": "Ver la sección de portafolio con mis proyectos",
    "contact": "Contáctame",
    "contactAriaLabel": "Ir a la sección de contacto"
  }
}
```

---

## 👤 About Component

### About.vue - Con Schema.org MicroData

```vue
<template>
  <section id="about" class="py-20 bg-gray-50" aria-labelledby="about-title">
    <div class="container mx-auto px-4">
      <h2 id="about-title" class="text-4xl font-bold text-center mb-12">
        {{ $t('about.title') }}
      </h2>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Imagen con datos estructurados -->
        <div class="text-center md:text-left">
          <img
            :src="profileImage"
            :alt="$t('about.imageAlt')"
            width="500"
            height="500"
            loading="lazy"
            class="rounded-lg shadow-2xl mx-auto"
            itemprop="image"
          />
        </div>

        <!-- Contenido con microdata -->
        <div itemscope itemtype="https://schema.org/Person">
          <h3 class="text-2xl font-semibold mb-4" itemprop="jobTitle">
            {{ $t('about.subtitle') }}
          </h3>

          <p class="text-gray-700 mb-6 leading-relaxed" itemprop="description">
            {{ $t('about.description1') }}
          </p>

          <p class="text-gray-700 mb-6 leading-relaxed">
            {{ $t('about.description2') }}
          </p>

          <!-- Lista de habilidades -->
          <div class="mb-6">
            <h4 class="text-xl font-semibold mb-3">
              {{ $t('about.skills.title') }}
            </h4>
            <ul class="grid grid-cols-2 gap-3" itemprop="knowsAbout">
              <li
                v-for="skill in skills"
                :key="skill"
                class="flex items-center text-gray-700"
              >
                <svg
                  class="w-5 h-5 text-green-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ skill }}
              </li>
            </ul>
          </div>

          <!-- Datos de contacto con microdata -->
          <div class="flex gap-4">
            <a
              :href="`mailto:${email}`"
              class="btn btn-outline"
              itemprop="email"
              :aria-label="`Enviar email a ${email}`"
            >
              {{ $t('about.downloadCV') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const profileImage = computed(() => '/images/profile.webp');
const email = 'darwin@darwintnt.co'; // Actualiza con tu email

const skills = computed(() => [
  'Vue.js / Nuxt.js',
  'Node.js / Express',
  'TypeScript',
  'Python / Django',
  'PostgreSQL / MongoDB',
  'Docker / Kubernetes',
  'AWS / GCP',
  'REST APIs / GraphQL',
]);
</script>
```

---

## 💼 Portfolio Component

### Portfolio.vue - Optimizado para SEO

```vue
<template>
  <section
    id="portfolio"
    class="py-20 bg-white"
    aria-labelledby="portfolio-title"
  >
    <div class="container mx-auto px-4">
      <h2 id="portfolio-title" class="text-4xl font-bold text-center mb-4">
        {{ $t('portfolio.title') }}
      </h2>

      <p class="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
        {{ $t('portfolio.subtitle') }}
      </p>

      <!-- Grid de proyectos -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="project in projects"
          :key="project.id"
          class="project-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
          itemscope
          itemtype="https://schema.org/CreativeWork"
        >
          <!-- Imagen del proyecto con lazy loading -->
          <div class="relative aspect-video overflow-hidden">
            <img
              :src="project.image"
              :alt="project.imageAlt"
              width="600"
              height="400"
              loading="lazy"
              class="w-full h-full object-cover hover:scale-105 transition-transform"
              itemprop="image"
            />
          </div>

          <!-- Contenido del proyecto -->
          <div class="p-6">
            <h3 class="text-xl font-bold mb-2" itemprop="name">
              {{ project.title }}
            </h3>

            <p class="text-gray-600 mb-4" itemprop="description">
              {{ project.description }}
            </p>

            <!-- Tags de tecnologías -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                itemprop="keywords"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links del proyecto -->
            <div class="flex gap-4">
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800 font-semibold"
                itemprop="url"
                :aria-label="`Ver demo en vivo de ${project.title}`"
              >
                {{ $t('portfolio.viewDemo') }}
                <svg
                  class="inline w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="text-gray-700 hover:text-gray-900 font-semibold"
                itemprop="codeRepository"
                :aria-label="`Ver código fuente de ${project.title} en GitHub`"
              >
                {{ $t('portfolio.viewCode') }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// Cargar proyectos desde JSON o API
import portfolioData from '@/assets/data/portfolio.json';

const projects = computed(() => {
  return portfolioData[locale.value] || portfolioData.es;
});
</script>
```

### Estructura de portfolio.json

```json
{
  "es": [
    {
      "id": "project-1",
      "title": "E-commerce Platform",
      "description": "Plataforma de comercio electrónico escalable con Vue.js y Node.js, procesando más de 10,000 transacciones mensuales.",
      "image": "/images/projects/ecommerce.webp",
      "imageAlt": "Captura de pantalla de plataforma de ecommerce mostrando catálogo de productos",
      "technologies": ["Vue.js", "Node.js", "PostgreSQL", "Stripe"],
      "demo": "https://demo.example.com",
      "github": "https://github.com/darwintnt/project"
    }
  ],
  "en": [
    {
      "id": "project-1",
      "title": "E-commerce Platform",
      "description": "Scalable e-commerce platform built with Vue.js and Node.js, processing over 10,000 monthly transactions.",
      "image": "/images/projects/ecommerce.webp",
      "imageAlt": "Screenshot of ecommerce platform showing product catalog",
      "technologies": ["Vue.js", "Node.js", "PostgreSQL", "Stripe"],
      "demo": "https://demo.example.com",
      "github": "https://github.com/darwintnt/project"
    }
  ]
}
```

---

## 📧 Contact Component

### Contact.vue - Con Schema ContactPage

```vue
<template>
  <section
    id="contact"
    class="py-20 bg-gray-50"
    aria-labelledby="contact-title"
    itemscope
    itemtype="https://schema.org/ContactPage"
  >
    <div class="container mx-auto px-4 max-w-4xl">
      <h2 id="contact-title" class="text-4xl font-bold text-center mb-4">
        {{ $t('contact.title') }}
      </h2>

      <p class="text-gray-600 text-center mb-12">
        {{ $t('contact.subtitle') }}
      </p>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Información de contacto -->
        <div itemscope itemtype="https://schema.org/Person">
          <h3 class="text-2xl font-semibold mb-6">
            {{ $t('contact.infoTitle') }}
          </h3>

          <!-- Email -->
          <div class="flex items-start mb-4">
            <svg
              class="w-6 h-6 text-blue-600 mr-3 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
            <div>
              <p class="font-semibold">{{ $t('contact.email') }}</p>
              <a
                :href="`mailto:${contactEmail}`"
                class="text-blue-600 hover:text-blue-800"
                itemprop="email"
              >
                {{ contactEmail }}
              </a>
            </div>
          </div>

          <!-- LinkedIn -->
          <div class="flex items-start mb-4">
            <svg
              class="w-6 h-6 text-blue-600 mr-3 mt-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
            <div>
              <p class="font-semibold">LinkedIn</p>
              <a
                :href="linkedinUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800"
                itemprop="sameAs"
                aria-label="Visitar perfil de LinkedIn"
              >
                {{ linkedinHandle }}
              </a>
            </div>
          </div>

          <!-- GitHub -->
          <div class="flex items-start mb-4">
            <svg
              class="w-6 h-6 text-blue-600 mr-3 mt-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <div>
              <p class="font-semibold">GitHub</p>
              <a
                :href="githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800"
                itemprop="sameAs"
                aria-label="Visitar perfil de GitHub"
              >
                {{ githubHandle }}
              </a>
            </div>
          </div>
        </div>

        <!-- Formulario de contacto -->
        <div>
          <h3 class="text-2xl font-semibold mb-6">
            {{ $t('contact.formTitle') }}
          </h3>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Nombre -->
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                {{ $t('contact.form.name') }}
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :placeholder="$t('contact.form.namePlaceholder')"
              />
            </div>

            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                {{ $t('contact.form.email') }}
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :placeholder="$t('contact.form.emailPlaceholder')"
              />
            </div>

            <!-- Mensaje -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-1"
              >
                {{ $t('contact.form.message') }}
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                :placeholder="$t('contact.form.messagePlaceholder')"
              ></textarea>
            </div>

            <!-- Submit button -->
            <button
              type="submit"
              class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              :disabled="isSubmitting"
              :aria-label="$t('contact.form.submitAriaLabel')"
            >
              {{
                isSubmitting
                  ? $t('contact.form.sending')
                  : $t('contact.form.send')
              }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const contactEmail = 'darwin@darwintnt.co';
const linkedinUrl = 'https://linkedin.com/in/darwintnt';
const linkedinHandle = 'linkedin.com/in/darwintnt';
const githubUrl = 'https://github.com/darwintnt';
const githubHandle = 'github.com/darwintnt';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    // Implementa tu lógica de envío aquí
    // Por ejemplo, enviar a una API o usar EmailJS
    console.log('Form submitted:', form);

    // Reset form
    form.name = '';
    form.email = '';
    form.message = '';

    alert(t('contact.form.successMessage'));
  } catch (error) {
    console.error('Error sending form:', error);
    alert(t('contact.form.errorMessage'));
  } finally {
    isSubmitting.value = false;
  }
};
</script>
```

---

## 📝 Implementar Blog (Opcional)

### ¿Por qué añadir un blog?

- **Mejora SEO**: Contenido fresco y relevante
- **Demuestra experiencia**: Comparte conocimiento
- **Aumenta tráfico**: Más páginas indexadas
- **Engagement**: Conecta con la audiencia

### Opción 1: Blog con Markdown + Vite

```bash
npm install -D vite-plugin-md vite-plugin-pages
```

### Opción 2: Headless CMS

- **Contenido**: https://www.contentstackcom
- **Strapi**: https://strapi.io
- **Sanity**: https://www.sanity.io

### Estructura de Blog Post SEO-Optimizado

```vue
<!-- BlogPost.vue -->
<template>
  <article
    class="max-w-4xl mx-auto py-16 px-4"
    itemscope
    itemtype="https://schema.org/BlogPosting"
  >
    <!-- Título -->
    <h1 class="text-4xl font-bold mb-4" itemprop="headline">
      {{ post.title }}
    </h1>

    <!-- Metadata -->
    <div class="flex items-center text-gray-600 mb-8">
      <time :datetime="post.datePublished" itemprop="datePublished">
        {{ formatDate(post.datePublished) }}
      </time>
      <span class="mx-2">•</span>
      <span>{{ post.readingTime }} min de lectura</span>
      <span class="mx-2">•</span>
      <span itemprop="author" itemscope itemtype="https://schema.org/Person">
        <span itemprop="name">{{ post.author }}</span>
      </span>
    </div>

    <!-- Imagen destacada -->
    <img
      :src="post.image"
      :alt="post.imageAlt"
      width="1200"
      height="630"
      class="w-full rounded-lg mb-8"
      itemprop="image"
    />

    <!-- Contenido del post -->
    <div
      class="prose prose-lg max-w-none"
      itemprop="articleBody"
      v-html="post.content"
    ></div>

    <!-- Tags -->
    <div class="mt-8 flex flex-wrap gap-2">
      <span
        v-for="tag in post.tags"
        :key="tag"
        class="px-3 py-1 bg-gray-200 rounded-full text-sm"
        itemprop="keywords"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useSEO, createBreadcrumbStructuredData } from '@/composables/useSEO';

const route = useRoute();
const { locale } = useI18n();

// Cargar post (desde API, archivo, etc.)
const post = computed(() => {
  // Tu lógica aquí
});

onMounted(() => {
  // Configurar SEO para el post
  useSEO(
    {
      title: post.value.title,
      description: post.value.excerpt,
      keywords: post.value.tags.join(', '),
      image: post.value.image,
      url: `/blog/${post.value.slug}`,
      type: 'article',
      publishedTime: post.value.datePublished,
      modifiedTime: post.value.dateModified,
      section: 'Technology',
      tags: post.value.tags,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.value.title,
      description: post.value.excerpt,
      image: post.value.image,
      datePublished: post.value.datePublished,
      dateModified: post.value.dateModified,
      author: {
        '@type': 'Person',
        name: 'Darwin Gómez',
        url: 'https://www.darwintnt.co',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Darwin Gómez',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.darwintnt.co/logo.png',
        },
      },
    }
  );
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>
```

---

## 🎯 Mejores Prácticas Generales

### 1. Jerarquía de Headings

```html
<!-- ✅ CORRECTO -->
<h1>Título Principal (solo uno)</h1>
<h2>Sección 1</h2>
<h3>Subsección 1.1</h3>
<h3>Subsección 1.2</h3>
<h2>Sección 2</h2>

<!-- ❌ INCORRECTO -->
<h1>Título 1</h1>
<h1>Título 2</h1>
<!-- Múltiples H1 -->
<h3>Sin H2 antes</h3>
<!-- Salta niveles -->
```

### 2. Alt Text Descriptivo

```html
<!-- ❌ MAL -->
<img src="image.jpg" alt="imagen" />
<img src="profile.jpg" alt="foto" />

<!-- ✅ BIEN -->
<img
  src="ecommerce-dashboard.jpg"
  alt="Dashboard de plataforma de ecommerce mostrando métricas de ventas en tiempo real"
/>
<img
  src="profile.jpg"
  alt="Darwin Gómez, Software Engineer, sonriendo frente a computadora"
/>
```

### 3. Links Descriptivos

```html
<!-- ❌ MAL -->
<a href="/project">Haz click aquí</a>
<a href="/contact">Más info</a>

<!-- ✅ BIEN -->
<a href="/project">Ver proyecto de E-commerce Platform</a>
<a href="/contact">Contactar para consultas o colaboraciones</a>
```

---

## 📚 Recursos de Referencia

- **MDN Web Docs**: HTML Semantics
- **Schema.org**: Tipos de datos estructurados
- **WCAG**: Guidelines de accesibilidad
- **Google Developers**: SEO Basics

---

**Próximos pasos**: Implementa estos ejemplos en tus componentes y valida con las herramientas de SEO.
