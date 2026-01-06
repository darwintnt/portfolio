<template>
  <section id="about" class="py-24 relative">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-3xl md:text-4xl font-bold mb-8">
          About <span class="text-gradient">Me</span>
        </h3>

        <div class="grid md:grid-cols-5 gap-12 items-start">
          <div class="md:col-span-3 space-y-4 text-muted-foreground">
            <p>
              I'm Software Engineer specialized in backend with more than 8
              years of experience in web application development, my last
              position was as Senior Developer for
              <span class="text-gradient font-bold"
                ><a
                  href="https://www.insoftar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Insoftar webpage"
                >
                  Insoftar LLC
                </a></span
              >
              creating custom applications for private sector companies in the
              areas of health, finance, automation and flexible packaging.
            </p>
          </div>

          <div class="md:col-span-2 relative group">
            <div class="relative">
              <div
                class="absolute inset-0 bg-primary/20 rounded-lg translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
              />
              <div
                class="relative bg-card rounded-lg overflow-hidden shadow-md"
              >
                <div
                  class="aspect-square from-primary/20 to-transparent flex items-center justify-center me"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@reference "tailwindcss";
.me {
  background-image: url('@/assets/hero2.webp');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
}
</style>
