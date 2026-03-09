<template>
  <section id="portfolio" class="py-32 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div
      class="absolute top-1/4 right-0 w-96 h-96 bg-nova-blue-500/5 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-1/4 left-0 w-96 h-96 bg-nova-purple-500/5 rounded-full blur-3xl"
    ></div>

    <div class="container mx-auto px-6 relative">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold mb-20 text-center">
          {{ t('portfolio.title').split(' ')[0] }}
          <span class="text-gradient">{{ t('portfolio.titleFeatured') }}</span>
        </h2>

        <!-- Featured Projects -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <div
            v-for="project in featuredProjects"
            :key="project.title"
            class="group"
          >
            <div
              class="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-muted/20 hover:border-primary/50 transition-all duration-300 card-glow h-full flex flex-col"
            >
              <!-- Project Image -->
              <div class="relative overflow-hidden">
                <div
                  class="aspect-video from-primary/10 to-primary/5 flex items-center justify-center"
                >
                  <v-lazy-image
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div
                  class="absolute inset-0 bg-linear-to-br from-nova-blue-500/20 to-nova-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <!-- Project Info -->
              <div class="p-8 flex-1 flex flex-col">
                <p
                  class="font-mono text-primary text-xs mb-2 font-semibold uppercase tracking-wider"
                >
                  {{ t('portfolio.featuredProject') }}
                </p>
                <h3
                  class="text-2xl font-bold text-foreground mb-4 group-hover:text-gradient transition-colors"
                >
                  {{ project.title }}
                </h3>
                <p
                  class="text-muted-foreground text-base leading-relaxed mb-6 flex-1"
                >
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    v-for="tech in project.tools"
                    :key="tech"
                    class="text-xs font-mono text-primary font-semibold px-3 py-1 bg-primary/10 rounded-full"
                  >
                    {{ tech }}
                  </span>
                </div>
                <div class="flex gap-4">
                  <a
                    v-if="project.github_link"
                    :href="project.github_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-foreground hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      :width="size || 24"
                      :height="size || 24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-github"
                    >
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                      ></path>
                    </svg>
                  </a>
                  <a
                    :href="project.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-foreground hover:text-primary transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      :width="size || 24"
                      :height="size || 24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-external-link"
                    >
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Projects -->
        <h3 class="text-3xl md:text-4xl font-bold text-center mb-16">
          {{ t('portfolio.otherProjects') }}
          <span class="text-gradient">{{
            t('portfolio.otherProjectsHighlight')
          }}</span>
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <div
            v-for="project in otherProjects"
            :key="project.title"
            class="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-muted/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-glow shadow-lg"
          >
            <div class="flex items-center justify-between mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-folder text-primary"
              >
                <path
                  d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                ></path>
              </svg>
              <div class="flex gap-4">
                <a
                  :href="project.github_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    :width="size || 18"
                    :height="size || 18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                  </svg>
                </a>
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-muted-foreground hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    :width="size || 18"
                    :height="size || 18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-external-link"
                  >
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
            <h4
              class="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
            >
              {{ project.title }}
            </h4>
            <p class="text-muted-foreground text-base mb-6 leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tools"
                :key="tech"
                class="text-sm font-mono text-primary font-semibold"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import portfolios from '@/assets/data/portfolio.json';
import VLazyImage from 'v-lazy-image';

const { t } = useI18n();
const featuredProjects = portfolios.filter((project) => project.principal);
const otherProjects = portfolios.filter((project) => !project.principal);
</script>
