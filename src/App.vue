<template>
  <div>
    <Navbar />
    <Hero />
    <Technologies />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<script lang="js">
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(() => import('@/components/Navbar.vue')),
    Hero: defineAsyncComponent(() => import('@/components/Hero.vue')),
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
