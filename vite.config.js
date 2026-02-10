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

    // Habilitar minificación
    minify: 'esbuild',

    // Optimizar CSS
    cssMinify: true,

    // Code splitting para mejor caching
    rollupOptions: {
      output: {
        // Separar chunks por funcionalidad
        manualChunks: {
          // Vendor chunks (librerías de terceros)
          'vue-vendor': ['vue'],
          'i18n-vendor': ['vue-i18n', '@unhead/vue'],

          // Componentes por sección (si crecen)
          // 'components-core': [
          //   './src/components/Navigation.vue',
          //   './src/components/Footer.vue',
          // ],
        },

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

    // Source maps para producción (opcional, desactiva si no los necesitas)
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
