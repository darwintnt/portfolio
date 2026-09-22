<template>
  <section id="portfolio" class="py-32 relative overflow-hidden">
    <!-- Background decorative elements -->

    <div class="container mx-auto px-6 relative">
      <div class="max-w-7xl mx-auto">
        <!-- Section heading: overline + big heading -->
        <div class="text-center mb-20">
          <p
            class="text-accent uppercase tracking-widest text-xs font-semibold mb-3"
          >
            {{ t('nav.portfolio') }}
          </p>
          <h2
            class="text-4xl md:text-5xl font-semibold text-primary tracking-tight"
          >
            {{ t('portfolio.title').split(' ')[0] }}
            <span class="text-accent">{{ t('portfolio.titleFeatured') }}</span>
          </h2>
        </div>

        <!-- Featured Projects -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <div
            v-for="project in featuredProjects"
            :key="project.title"
            class="group bg-surface border border-border border-l-4 border-l-accent/80 rounded-3xl overflow-hidden transition-all duration-[250ms] hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_16px_40px_-12px_rgba(249,115,22,0.15)] h-full flex flex-col"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden">
              <div
                class="aspect-video bg-background flex items-center justify-center"
              >
                <v-lazy-image
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover rounded-none transition-transform duration-[250ms] group-hover:scale-105"
                />
              </div>
              <div
                class="absolute inset-0 bg-gradient-to-t from-[#161120]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms] pointer-events-none"
                aria-hidden="true"
              />
            </div>

            <!-- Project Info -->
            <div class="p-8 flex-1 flex flex-col">
              <span class="font-accent text-accent text-sm leading-none mb-2">
                ✦ {{ t('portfolio.featuredProject') }}
              </span>
              <h3
                class="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors"
              >
                {{ project.title }}
              </h3>
              <p class="text-muted text-sm leading-relaxed mb-6 flex-1">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-6">
                <span
                  v-for="tech in project.tools"
                  :key="tech"
                  class="chip !px-2.5 !py-0.5"
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
                  class="text-muted hover:text-accent transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                  class="text-muted hover:text-accent transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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

        <!-- Other Projects -->
        <h3
          class="text-4xl md:text-5xl font-semibold text-primary tracking-tight text-center mb-16"
        >
          {{ t('portfolio.otherProjects') }}
          <span class="text-accent">{{
            t('portfolio.otherProjectsHighlight')
          }}</span>
        </h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          <div
            v-for="project in otherProjects"
            :key="project.title"
            class="group p-8 rounded-3xl bg-surface border border-border transition-all duration-[250ms] hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_16px_40px_-12px_rgba(249,115,22,0.15)]"
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
                class="feather feather-folder text-accent"
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
                  class="text-muted hover:text-accent transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                  class="text-muted hover:text-accent transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
              class="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors"
            >
              {{ project.title }}
            </h4>
            <p class="text-muted text-base mb-6 leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tools"
                :key="tech"
                class="chip !px-2.5 !py-0.5"
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
