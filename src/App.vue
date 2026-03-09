<template>
  <div class="min-h-screen">
    <Navigation />
    <main>
      <Hero id="hero" />
      <About id="about" />
      <Technologies id="technologies" />
      <Portfolio id="portfolio" />
      <Contact id="contact" />
    </main>
    <Footer />
  </div>
</template>

<script lang="js">
import { defineComponent, defineAsyncComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import {
  useSEO,
  createWebSiteStructuredData,
  createPersonStructuredData,
  createProfilePageStructuredData,
} from '@/composables/useSEO.ts';

export default defineComponent({
  name: 'App',
  components: {
    Navigation: defineAsyncComponent(
      () => import('@/components/Navigation.vue')
    ),
    Hero: defineAsyncComponent(() => import('@/components/Hero.vue')),
    About: defineAsyncComponent(() => import('@/components/About.vue')),
    Technologies: defineAsyncComponent(
      () => import('@/components/Technologies.vue')
    ),
    Portfolio: defineAsyncComponent(() => import('@/components/Portfolio.vue')),
    Contact: defineAsyncComponent(() => import('@/components/Contact.vue')),
    Footer: defineAsyncComponent(() => import('@/components/Footer.vue')),
  },
  setup() {
    const { locale } = useI18n();

    // Metadata SEO reactiva: se actualiza automáticamente al cambiar el idioma
    const seoMetadata = computed(() => ({
      title: locale.value === 'es' ? 'Inicio' : 'Home',
      description:
        locale.value === 'es'
          ? 'Desarrollador FullStack especializado en Backend con más de 8 años de experiencia en el desarrollo de aplicaciones web escalables y de alto rendimiento.'
          : 'FullStack Developer specialized in Backend with over 8 years of experience developing scalable and high-performance web applications.',
      keywords:
        locale.value === 'es'
          ? 'Darwin Gómez, Software Engineer, Desarrollador Web, Backend Developer, Frontend Developer, Vue.js, Node.js, TypeScript, Colombia, Desarrollador FullStack'
          : 'Darwin Gómez, Software Engineer, Web Developer, Backend Developer, Frontend Developer, Vue.js, Node.js, TypeScript, Colombia, FullStack Developer',
      type: 'website',
      url: '/',
    }));

    // Datos estructurados reactivos por idioma
    const structuredData = computed(() => ({
      '@context': 'https://schema.org',
      '@graph': [
        createWebSiteStructuredData(locale.value),
        createPersonStructuredData(locale.value),
        createProfilePageStructuredData(locale.value),
      ],
    }));

    // useSEO llamado sincrónicamente en setup() para que los bots reciban
    // los metadatos en la primera evaluación del componente
    useSEO(seoMetadata, structuredData);

    return {};
  },
});
</script>
