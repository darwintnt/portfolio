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

        <!-- Featured Projects: split zigzag cards (image one side / content the other) -->
        <div class="grid md:grid-cols-2 gap-8 mb-32">
          <div
            v-for="(project, index) in featuredProjects"
            :key="project.title"
            class="group flex flex-col overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-[250ms] hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_16px_40px_-12px_rgba(249,115,22,0.15)] md:flex-row"
            :class="index % 2 === 1 ? 'lg:flex-row-reverse' : ''"
          >
            <!-- Image: full-width band on mobile, fixed share of the card on md+ -->
            <div
              class="relative aspect-[16/10] shrink-0 overflow-hidden md:aspect-auto md:w-2/5 lg:w-[42%]"
            >
              <v-lazy-image
                :src="project.image"
                :alt="project.title"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-[250ms] group-hover:scale-105"
              />
            </div>
            <!-- Content column: the site's own language (ink on surface, no scrim) -->
            <div class="flex flex-1 min-w-0 flex-col p-8">
              <span class="font-accent text-sm leading-none mb-2 text-accent">
                ✦ {{ t('portfolio.featuredProject') }}
              </span>
              <h3
                class="text-primary text-2xl font-semibold tracking-tight mb-3 transition-colors md:text-3xl group-hover:text-accent!"
              >
                {{ project.title }}
              </h3>
              <p class="text-muted mb-6 text-sm leading-relaxed line-clamp-3">
                {{ project.description }}
              </p>
              <div class="mb-6 flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tools"
                  :key="tech"
                  class="chip !px-2.5 !py-0.5"
                  :class="chipColorClass(tech)"
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
                  aria-label="GitHub"
                  class="text-muted hover:text-accent focus-visible:text-accent transition-colors"
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
                  :aria-label="project.title"
                  class="text-muted hover:text-accent focus-visible:text-accent transition-colors"
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
                :class="chipColorClass(tech)"
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
import { chipColorClass } from '@/utils/chipColor';

const { t } = useI18n();
const featuredProjects = portfolios.filter((project) => project.principal);
const otherProjects = portfolios.filter((project) => !project.principal);
</script>
