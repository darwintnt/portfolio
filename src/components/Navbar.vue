<template>
  <nav class="w-full overflow-hidden bg-[#222831] text-white">
    <div class="w-full py-5 px-10 flex justify-between items-center">
      <span class="text-lg font-bold">Darwin Gómez</span>
      <ul class="hidden md:flex gap-4 justify-end items-center">
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact_me">Contact Me</a></li>
      </ul>

      <button class="space-y-1 group md:hidden">
        <div class="w-6 h-1 bg-white rounded-md"></div>
        <div class="w-6 h-1 bg-white rounded-md"></div>
        <div class="w-6 h-1 bg-white rounded-md"></div>


        <ul
          class="bg-[#222831] w-full pb-8 absolute -top-full group-focus:top-0 right-0 duration-300 flex flex-col gap-4 justify-end text-white z-10"
        >
          <button className="py-8 px-16 relative ml-auto cursor-pointer">
            <div
              className="w-6 h-1 rotate-45 absolute bg-white rounded-md"
            ></div>
            <div
              className="w-6 h-1 -rotate-45 absolute bg-white rounded-md"
            ></div>
          </button>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact_me">Contact me</a></li>
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
