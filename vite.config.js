import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, '/src'),
      },
    ],
  },
  plugins: [
    vue(),
    svgLoader({
      svgo: true,
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],

  // Optimizaciones de build
  build: {
    // Target para navegadores modernos
    target: 'es2015',

    // Code splitting con rolldown
    rollupOptions: {
      output: {
        // Naming para mejor caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];

          // Organizar assets por tipo
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff2?|ttf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }

          return `assets/[ext]/[name]-[hash][extname]`;
        },
      },
    },

    // Configurar chunk size warning
    chunkSizeWarningLimit: 600,

    // Source maps para producción
    sourcemap: false,

    // Reportar tamaños comprimidos
    reportCompressedSize: true,
  },

  // Optimizaciones de servidor de desarrollo
  server: {
    // Mejor performance en HMR
    hmr: {
      overlay: true,
    },
  },

  // Optimizaciones de dependencias
  optimizeDeps: {
    include: ['vue', 'vue-i18n', '@unhead/vue'],
    exclude: [], // Excluir dependencias que no necesitan pre-bundling
  },
});
