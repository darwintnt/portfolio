<template>
  <section id="about" class="py-32 relative">
    <!-- Decorative background -->
    <div
      class="absolute inset-0 bg-linear-to-b from-transparent via-surface/50 to-transparent"
    ></div>

    <div class="container mx-auto px-6 relative">
      <div class="max-w-6xl mx-auto">
        <!-- Section heading: overline + big heading -->
        <div class="text-center mb-16">
          <p
            class="text-accent uppercase tracking-widest text-xs font-semibold mb-3"
          >
            {{ t('about.greeting') }}
          </p>
          <h2
            class="text-4xl md:text-5xl font-bold text-primary tracking-tight"
          >
            {{ t('about.title').split(' ')[0] }}
            <span class="text-accent">{{ t('about.titleHighlight') }}</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-5 gap-16 items-center">
          <div class="md:col-span-3 space-y-6">
            <p class="text-lg md:text-xl text-muted leading-relaxed">
              {{ t('about.description') }}
              <span class="text-accent font-bold">
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

          <div class="md:col-span-2">
            <div class="relative max-w-sm mx-auto">
              <!-- Warm glow frame (same treatment as Hero) -->
              <div
                class="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-accent/40 via-accent-strong/20 to-transparent blur-2xl opacity-70"
                aria-hidden="true"
              ></div>
              <div
                class="relative rounded-[2rem] overflow-hidden border border-soft-accent/20 bg-surface"
              >
                <div class="aspect-square flex items-center justify-center">
                  <img
                    src="@/assets/hero2.webp"
                    :alt="t('about.greeting')"
                    class="w-full h-full object-cover object-top"
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
