<template>
  <section id="technologies" class="py-32 relative overflow-hidden">
    <!-- Background decorative element -->
    

    <div class="container mx-auto px-6 relative">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span class="text-primary">{{ t('technologies.title') }}</span>
        </h3>

        <div class="mb-12 text-center max-w-3xl mx-auto">
          <p class="text-lg md:text-xl text-muted-foreground">
            {{ t('technologies.description') }}
          </p>
        </div>

        <!-- Logo carousel -->
        <div class="relative">
          <div
            class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)]"
          >
            <ul
              class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
            >
              <template v-for="logo in logos">
                <li class="group">
                  <div
                    class="p-4 rounded-xl bg-white transition-all duration-300"
                  >
                    <img
                      :src="logo.src"
                      :alt="logo.alt"
                      width="60"
                      height="60"
                      class="transition-transform"
                    />
                  </div>
                </li>
              </template>
            </ul>
            <ul
              class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
              aria-hidden="true"
            >
              <template v-for="logo in logos">
                <li class="group">
                  <div
                    class="p-4 rounded-xl bg-white transition-all duration-300"
                  >
                    <img
                      :src="logo.src"
                      :alt="logo.alt"
                      width="60"
                      height="60"
                      class="transition-transform"
                    />
                  </div>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { useI18n } from 'vue-i18n';

import Laravel from '@/assets/logos/laravel.svg?url';
import PHP from '@/assets/logos/php.svg?url';
import Angular from '@/assets/logos/angular.svg?url';
import Vue from '@/assets/logos/vuedotjs.svg?url';
import React from '@/assets/logos/react.svg?url';
import AWS from '@/assets/logos/amazonaws.svg?url';
import CSS from '@/assets/logos/css3.svg?url';
import HTML from '@/assets/logos/html5.svg?url';
import JavaScript from '@/assets/logos/javascript.svg?url';
import SQLServer from '@/assets/logos/microsoftsqlserver.svg?url';
import MySQL from '@/assets/logos/mysql.svg?url';
import ElasticSearch from '@/assets/logos/elasticsearch.svg?url';
import Nestjs from '@/assets/logos/nestjs.svg?url';
import Nodejs from '@/assets/logos/nodedotjs.svg?url';
import DigitalOcean from '@/assets/logos/digitalocean.svg?url';
import Python from '@/assets/logos/python.svg?url';
import Tailwind from '@/assets/logos/tailwindcss.svg?url';
import MongoDB from '@/assets/logos/mongodb.svg?url';
import Bootstrap from '@/assets/logos/bootstrap.svg?url';
import Java from '@/assets/logos/java.svg?url';
import SpringBoot from '@/assets/logos/springboot.svg?url';

const { t } = useI18n();

const logos = [
  { src: HTML, alt: 'HTML' },
  { src: CSS, alt: 'CSS' },
  { src: JavaScript, alt: 'JavaScript' },
  { src: Nodejs, alt: 'Nodejs' },
  { src: Nestjs, alt: 'Nestjs' },
  { src: Angular, alt: 'Angular' },
  { src: PHP, alt: 'PHP' },
  { src: Laravel, alt: 'Laravel' },
  { src: Java, alt: 'Java' },
  { src: SpringBoot, alt: 'SpringBoot' },
  { src: Python, alt: 'Python' },
  { src: Vue, alt: 'Vue' },
  { src: React, alt: 'React' },
  { src: MySQL, alt: 'MySQL' },
  { src: SQLServer, alt: 'SQLServer' },
  { src: MongoDB, alt: 'MongoDB' },
  { src: ElasticSearch, alt: 'ElasticSearch' },
  { src: AWS, alt: 'AWS' },
  { src: DigitalOcean, alt: 'DigitalOcean' },
  { src: Tailwind, alt: 'Tailwind' },
  { src: Bootstrap, alt: 'Bootstrap' },
];
</script>
<style scoped>
@reference "tailwindcss";

@keyframes infinite-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.animate-infinite-scroll {
  animation: infinite-scroll 50s linear infinite;
}

.animate-infinite-scroll:hover {
  animation-play-state: paused;
}
</style>
