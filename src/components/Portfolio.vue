<template>
  <section class="portfolio">
    <div class="text-center mb-6 flex flex-col gap-8">
      <h2 class="text-[40px] font-semibold text-red-500">Portafolio</h2>
      <p class="px-5">
        Over the years I have done several projects in different technologies
        and of various types, <br /> here I show some projects from the most recent to
        the oldest. Some are very simple, others more complex, <br /> with multiple
        challenges in terms of design, development and implementation <br /> that left
        me many lessons along the way.
      </p>
    </div>
    <div class="flex gap-4 flex-col md:flex-row justify-center items-center mt-8 flex-wrap">
      <Card
        v-for="(portfolio, idx) in portfolios"
        :key="idx"
        :data="portfolio"
      />
    </div>
  </section>
</template>
<script>
import { defineComponent, defineAsyncComponent } from 'vue'
import portfolios from '../assets/data/portfolio.json'

export default defineComponent({
  components: {
    Card: defineAsyncComponent(() => import('../components/Card.vue')),
  },
  setup() {
    return {
      portfolios,
    }
  },
})
</script>
<style lang="css">
.portfolio {
  @apply pb-10 md:pb-20 items-center;
}
</style>
