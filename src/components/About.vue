<template>
  <section id="about" class="py-32 relative">
    <!-- Decorative background -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent"
    ></div>

    <div class="container mx-auto px-6 relative">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-16 text-center">
          {{ t('about.title').split(' ')[0] }}
          <span class="text-gradient">{{ t('about.titleHighlight') }}</span>
        </h2>

        <div class="grid md:grid-cols-5 gap-16 items-center">
          <div class="md:col-span-3 space-y-6">
            <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {{ t('about.description') }}
              <span class="text-gradient font-bold">
                <a
                  href="https://www.insoftar.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:underline"
                >
                  Insoftar LLC.
                </a>
              </span>
              {{ t('about.descriptionContinue') }}
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
                <div class="aspect-square flex items-center justify-center">
                  <img
                    src="@/assets/hero2.webp"
                    :alt="t('about.greeting')"
                    class="w-full h-full object-cover object-top rounded-2xl"
                    width="600"
                    height="600"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
