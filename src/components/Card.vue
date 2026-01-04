<template>
  <div class="card">
    <v-lazy-image :src="data.image" alt="img" />
    <div class="card-body">
      <h2 class="text-md mb-2 font-bold text-red-500">
        {{ data.title }}
      </h2>
      <p class="text-xs mb-2">{{ data.description }}</p>
      <div class="flex gap-2 flex-wrap">
        <p
          v-for="(tool, idx) in data.tools"
          :key="idx"
          class="bg-[#222831] text-xs text-white rounded-md py-1 px-2 inline-block"
        >
          {{ tool }}
        </p>
      </div>
    </div>
    <div class="card-footer">
      <a
        v-if="data.github_link"
        :href="data.github_link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github link"
      >
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
        >
          <path
            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
          />
        </svg>
      </a>

      <a
        :href="data.link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VLazyImage from 'v-lazy-image';

export default defineComponent({
  name: 'Card',
  components: {
    VLazyImage,
  },
  props: {
    data: Object,
  },
});
</script>
<style scoped>
@reference "tailwindcss";
img {
  max-height: 200px;
  min-height: 200px;
  width: 100%;
}
.card {
  max-width: 320px;
  width: 100%;
  min-height: 400px;
  max-height: 400px;
  @apply flex flex-col justify-between shadow bg-white rounded-md overflow-hidden;
}

.card-body {
  @apply p-2;
}

.card-footer {
  @apply flex gap-4 justify-center items-center py-4;
}
</style>
