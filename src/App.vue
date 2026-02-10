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
import { defineComponent, defineAsyncComponent, onMounted } from 'vue';
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
    const { t, locale } = useI18n();

    // Configurar SEO principal
    onMounted(() => {
      const description =
        locale.value === 'es'
          ? 'Desarrollador FullStack especializado en Backend con más de 6 años de experiencia en el desarrollo de aplicaciones web escalables y de alto rendimiento.'
          : 'FullStack Developer specialized in Backend with over 6 years of experience developing scalable and high-performance web applications.';

      const keywords =
        locale.value === 'es'
          ? 'Darwin Gómez, Software Engineer, Desarrollador Web, Backend Developer, Frontend Developer, Vue.js, Node.js, TypeScript, Colombia, Desarrollador FullStack'
          : 'Darwin Gómez, Software Engineer, Web Developer, Backend Developer, Frontend Developer, Vue.js, Node.js, TypeScript, Colombia, FullStack Developer';

      // Configurar metadatos SEO
      useSEO(
        {
          title: locale.value === 'es' ? 'Inicio' : 'Home',
          description,
          keywords,
          type: 'website',
          url: '/',
        },
        // Combinar múltiples datos estructurados
        {
          '@context': 'https://schema.org',
          '@graph': [
            createWebSiteStructuredData(locale.value),
            createPersonStructuredData(locale.value),
            createProfilePageStructuredData(locale.value),
          ],
        }
      );
    });

    return {};
  },
});
</script>
