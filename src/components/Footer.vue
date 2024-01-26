<template>
  <div class="p-5 text-center">© {{ date }} Made with 💙 by DarwinTnT</div>
</template>
<script>
export default {
  setup() {
    const date = new Date().getFullYear()

    return {
      date,
    }
  },
}
</script>
<style lang="css"></style>
