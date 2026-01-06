<template>
  <div className="min-h-screen bg-background">
    <Navigation />
    <main>
      <Hero />
      <About />
      <Technologies />
      <Portfolio />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script lang="js">
import { defineComponent, defineAsyncComponent } from 'vue';

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
  props: {
    data: Object,
  },
});
</script>
