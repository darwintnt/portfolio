<template>
  <section id="about" class="py-32 relative">
    <!-- Decorative background -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent"
    ></div>

    <div class="container mx-auto px-6 relative">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl md:text-5xl font-bold mb-16 text-center">
          About <span class="text-gradient">Me</span>
        </h3>

        <div class="grid md:grid-cols-5 gap-16 items-center">
          <div class="md:col-span-3 space-y-6">
            <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I'm a Software Engineer specialized in backend with more than 8
              years of experience in web application development, my last
              position was as Senior Developer for
              <span class="text-gradient font-bold"
                ><a
                  href="https://www.insoftar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Insoftar webpage"
                  class="hover:underline"
                >
                  Insoftar LLC.
                </a></span
              >
              I architected and delivered custom backend systems for critical
              industries like finance, services and healthcare, focusing on
              scalability, data integrity, and security. I thrive on
              transforming complex business requirements into robust and
              efficient technical solutions.
            </p>
          </div>

          <div class="md:col-span-2 relative group">
            <div class="relative">
              <!-- Gradient border effect -->
              <div
                class="absolute inset-0 bg-linear-to-br from-nova-blue-500 to-nova-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"
              />
              <div
                class="absolute inset-0 bg-linear-to-br from-nova-blue-500 to-nova-purple-500 rounded-2xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"
              />
              <div
                class="relative bg-card rounded-2xl overflow-hidden shadow-2xl border-muted/20"
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
  background-size: 100%;
  background-position: center 25%;
  background-repeat: no-repeat;
  position: relative;
  border-radius: 100%;
}
</style>
