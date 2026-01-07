<template>
  <section id="portfolio" class="py-24 relative">
    <div class="container mx-auto px-6">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-3xl md:text-4xl font-bold mb-12">
          Featured <span class="text-gradient">Projects</span>
        </h3>

        <!-- Featured Projects -->
        <div class="space-y-24 mb-24">
          <div
            v-for="(project, index) in featuredProjects"
            :key="project.title"
            :class="[
              'grid md:grid-cols-12 gap-4 items-center',
              index % 2 === 1 ? 'md:text-right' : '',
            ]"
          >
            <div
              :class="['md:col-span-7', index % 2 === 1 ? 'md:order-2' : '']"
            >
              <div class="relative group rounded-lg overflow-hidden bg-card">
                <div
                  class="aspect-video from-primary/10 to-primary/5 flex items-center justify-center"
                >
                  <v-lazy-image
                    :src="project.image"
                    alt="Captura del proyecto"
                  />
                </div>
                <div
                  class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            <div
              :class="['md:col-span-5', index % 2 === 1 ? 'md:order-1' : '']"
            >
              <p class="font-mono text-primary text-sm mb-2">
                Featured Project
              </p>
              <h4 class="text-2xl font-bold text-foreground mb-4">
                {{ project.title }}
              </h4>
              <div class="bg-card p-6 rounded-lg mb-4 card-glow">
                <p class="text-muted-foreground text-sm">
                  {{ project.description }}
                </p>
              </div>
              <div
                :class="[
                  'flex flex-wrap gap-2 mb-4',
                  index % 2 === 1 ? 'md:justify-end' : '',
                ]"
              >
                <span
                  v-for="tech in project.tools"
                  :key="tech"
                  class="text-xs font-mono text-muted-foreground text-primary font-semibold"
                >
                  {{ tech }}
                </span>
              </div>
              <div
                :class="['flex gap-4', index % 2 === 1 ? 'md:justify-end' : '']"
              >
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

        <!-- Other Projects -->
        <h4 class="text-xl font-bold text-center mb-8 text-foreground">
          Other Noteworthy <span class="text-gradient">Projects</span>
        </h4>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          <div
            v-for="project in otherProjects"
            :key="project.title"
            class="group p-6 rounded-lg bg-card shadow bg-white hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-glow"
          >
            <div class="flex items-center justify-between mb-4">
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
                class="feather feather-folder text-gradient"
              >
                <path
                  d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                ></path>
              </svg>
              <div class="flex gap-3">
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
            <h5
              class="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-gradient"
            >
              {{ project.title }}
            </h5>
            <p class="text-muted-foreground text-sm mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tools"
                :key="tech"
                class="text-xs font-mono text-muted-foreground text-gradient font-semibold"
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
import portfolios from '@/assets/data/portfolio.json';
import VLazyImage from 'v-lazy-image';
const featuredProjects = portfolios.filter((project) => project.principal);
const otherProjects = portfolios.filter((project) => !project.principal);
</script>
