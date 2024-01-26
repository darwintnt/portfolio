<template>
  <section class="portfolio">
    <div class="text-center mb-6 flex flex-col gap-8">
      <h2 class="text-[40px] font-semibold text-red-500">Portafolio</h2>
      <p>
        At Meta, we're building innovative new ways to help people feel closer to <br/>
        each other, and the makeup of our company reflects the diverse <br/>
        perspectives of the people who use our technologies.
      </p>
    </div>
    <div class="flex gap-4 flex-col md:flex-row justify-center mt-8">
      <Card />
      <Card />
      <Card />
    </div>
  </section>
</template>
<script>
import { defineComponent, defineAsyncComponent } from 'vue'
export default defineComponent({
  components: {
    Card: defineAsyncComponent(() => import('../components/Card.vue')),
  },
})
</script>
<style lang="css">
.portfolio {
  @apply p-10 md:py-20 items-center;
    background-image: url(../assets/textura.svg);
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
}
</style>
