<template>
  <section class="tecnologies flex flex-col" id="technologies">
    <div class="text-center mb-20 flex flex-col gap-8">
      <h2 class="text-[40px] font-semibold text-red-500">Technologies</h2>
      <p>
        During my professional experience, I have handled a wide variety of tools <br /> among which I would like to highlight the following ones
      </p>
    </div>
    <div
      class="w-[300px] md:w-[800px] inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <template v-for="logo in logos">
          <li>
            <img :src="logo.src" :alt="logo.alt" width="70" height="70" />
          </li>
        </template>
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <template v-for="logo in logos">
          <li>
            <img :src="logo.src" :alt="logo.alt" width="70" height="70" />
          </li>
        </template>
      </ul>
    </div>
  </section>
</template>
<script>
import { defineComponent } from 'vue'

import Laravel from '@/assets/logos/laravel.svg?url'
import PHP from '@/assets/logos/php.svg?url'
import Angular from '@/assets/logos/angular.svg?url'
import Vue from '@/assets/logos/vuedotjs.svg?url'
import React from '@/assets/logos/react.svg?url'
import AWS from '@/assets/logos/amazonaws.svg?url'
import CSS from '@/assets/logos/css3.svg?url'
import HTML from '@/assets/logos/html5.svg?url'
import JavaScript from '@/assets/logos/javascript.svg?url'
import SQLServer from '@/assets/logos/microsoftsqlserver.svg?url'
import MySQL from '@/assets/logos/mysql.svg?url'
import ElasticSearch from '@/assets/logos/elasticsearch.svg?url'
import Nestjs from '@/assets/logos/nestjs.svg?url'
import Nodejs from '@/assets/logos/nodedotjs.svg?url'
import DigitalOcean from '@/assets/logos/digitalocean.svg?url'
import Python from '@/assets/logos/python.svg?url'
import Tailwind from '@/assets/logos/tailwindcss.svg?url'
import MongoDB from '@/assets/logos/mongodb.svg?url'
import Bootstrap from '@/assets/logos/bootstrap.svg?url'
import Java from '@/assets/logos/java.svg?url'
import SpringBoot from '@/assets/logos/springboot.svg?url'

export default defineComponent({
  name: 'Technologies',
  setup() {
    const logos = [
      { src: PHP, alt: 'PHP' },
      { src: Laravel, alt: 'Laravel' },
      { src: Java, alt: 'Java' },
      { src: SpringBoot, alt: 'SpringBoot' },
      { src: Nodejs, alt: 'Nodejs' },
      { src: Nestjs, alt: 'Nestjs' },
      { src: Python, alt: 'Python' },
      { src: HTML, alt: 'HTML' },
      { src: CSS, alt: 'CSS' },
      { src: JavaScript, alt: 'JavaScript' },
      { src: Angular, alt: 'Angular' },
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
    ]

    return {
      logos,
    }
  },
})
</script>
<style lang="css">
.tecnologies {
  @apply p-10 md:py-20 items-center;
  width: 100%;
}
</style>
