<template>
  <nav class="w-screen overflow-hidden">
    <div class="w-screen p-5 flex justify-between items-center">
      <span class="text-lg font-bold">Darwin Gómez</span>
      <ul class="hidden md:flex gap-4 justify-end items-center">
        <li><a href="">Tecnologías</a></li>
        <li><a href="">Portafolio</a></li>
        <li><a href="">Contacto</a></li>
      </ul>

      <!-- Burger Menu -->
      <button class="space-y-1 group md:hidden">
        <div class="w-6 h-1 bg-black rounded-md"></div>
        <div class="w-6 h-1 bg-black rounded-md"></div>
        <div class="w-6 h-1 bg-black rounded-md"></div>

        <!-- Menu -->
        <ul
          class="bg-[#252525] w-screen pb-8 absolute -top-full group-focus:top-0 right-0 duration-300 flex flex-col gap-4 justify-end text-white"
        >
          <button className="px-11 py-8 relative ml-auto">
            <div className="w-6 h-1 rotate-45 absolute bg-white rounded-md"></div>
            <div className="w-6 h-1 -rotate-45 absolute bg-white rounded-md"></div>
          </button>
          <li><a href="">Home</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Resume</a></li>
        </ul>
      </button>
    </div>
  </nav>
</template>
<script>
export default {
  setup() {},
}
</script>
<style scoped>
* {
  font-family: 'Lato', sans-serif;
}
</style>
