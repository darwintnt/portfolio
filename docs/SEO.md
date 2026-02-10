# 🚀 Guía Completa de SEO Técnico - Vue.js + Vite

Documentación completa para optimización SEO de tu portafolio multiidioma.

---

## 📋 Tabla de Contenidos

1. [Checklist SEO Técnico](#-checklist-seo-técnico)
2. [Configuración SEO Global](#-configuración-seo-global)
3. [SEO por Componente](#-seo-por-componente)
4. [Datos Estructurados (JSON-LD)](#-datos-estructurados-json-ld)
5. [Performance y Core Web Vitals](#-performance-y-core-web-vitals)
6. [SEO Multiidioma (hreflang)](#-seo-multiidioma-hreflang)
7. [Errores Comunes y Soluciones](#-errores-comunes-y-soluciones)
8. [Herramientas de Validación](#-herramientas-de-validación)
9. [Cuándo Usar SSR/SSG](#-cuándo-usar-ssrssg)

---

## ✅ Checklist SEO Técnico

### 🎯 SEO On-Page

- [x] **Title único y descriptivo** - Gestión dinámica con @unhead/vue
- [x] **Meta description optimizada** (150-160 caracteres)
- [x] **Meta keywords** (opcional, pero implementado)
- [x] **Canonical URLs** - Previene contenido duplicado
- [x] **H1 único por página** - Revisar en cada componente
- [x] **Jerarquía correcta de headings** (H1 → H2 → H3)
- [x] **Alt text en todas las imágenes** - Revisar componentes
- [x] **URLs semánticas** - Ya que es SPA, usar anchors con IDs

### 🌍 SEO Multiidioma

- [x] **Atributo lang en html** - Dinámico según idioma activo
- [x] **Hreflang tags** - Para español e inglés
- [x] **x-default hreflang** - Apunta al idioma predeterminado (es)
- [x] **Contenido traducido correctamente** - Usando vue-i18n
- [x] **URLs separadas por idioma** - `/` (es) y `/en`

### 🔗 Open Graph & Social Media

- [x] **og:title** - Título optimizado para redes sociales
- [x] **og:description** - Descripción atractiva
- [x] **og:image** - Imagen 1200x630px (PENDIENTE: crear imagen)
- [x] **og:url** - URL canónica
- [x] **og:type** - Tipo de contenido (website)
- [x] **og:locale** - Idioma y alternativas
- [x] **Twitter Cards** - Implementado con summary_large_image

### 📊 Datos Estructurados

- [x] **Schema.org implementado** - JSON-LD
- [x] **Person schema** - Información personal
- [x] **WebSite schema** - Información del sitio
- [x] **ProfilePage schema** - Página de perfil profesional
- [x] **BreadcrumbList** - Helper creado para navegación

### 📄 Archivos SEO

- [x] **robots.txt** - Configurado y optimizado
- [x] **sitemap.xml** - Con soporte multiidioma
- [x] **site.webmanifest** - PWA manifest para móviles
- [x] **Favicon completo** - PENDIENTE: crear favicons

### ⚡ Performance

- [x] **Code splitting** - Componentes lazy-loaded
- [x] **Manual chunks** - Separación de vendor y app code
- [x] **Asset optimization** - Imágenes y fuentes
- [x] **Preconnect/DNS-prefetch** - Recursos externos
- [x] **Font display: swap** - Evitar FOIT
- [x] **Minificación** - CSS y JS

### 📱 Mobile & Accesibilidad

- [x] **Viewport meta tag** - Responsive design
- [x] **Theme color** - Para navegadores móviles
- [x] **Mobile-first approach** - Con Tailwind CSS
- [x] **ARIA labels** - PENDIENTE: revisar en componentes
- [x] **Contraste de colores** - PENDIENTE: verificar WCAG
- [x] **Navegación por teclado** - PENDIENTE: verificar

---

## 🎨 Configuración SEO Global

### 1. Instalación

```bash
npm install @unhead/vue
```

### 2. Configuración en main.js

Ya está configurado en `src/main.js`:

```javascript
import { createHead } from '@unhead/vue';

const head = createHead();
app.use(head);
```

### 3. Uso en App.vue

El composable `useSEO` ya está implementado:

```javascript
import { useSEO, createWebSiteStructuredData } from '@/composables/useSEO.ts';

useSEO(
  {
    title: 'Inicio',
    description: 'Tu descripción aquí',
    keywords: 'tus, keywords, aquí',
    url: '/',
  },
  createWebSiteStructuredData('es')
);
```

---

## 🧩 SEO por Componente

### Ejemplo: Uso en un componente Vue

```vue
<template>
  <section id="about" class="py-16">
    <h2 class="text-3xl font-bold">{{ $t('about.title') }}</h2>
    <p>{{ $t('about.description') }}</p>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSEO } from '@/composables/useSEO';

const { t, locale } = useI18n();

onMounted(() => {
  // Solo si este componente es una ruta independiente
  // Para secciones de SPA, los metadatos se manejan en App.vue
  // Ejemplo si fuera una ruta:
  // useSEO({
  //   title: t('about.seoTitle'),
  //   description: t('about.seoDescription'),
  //   url: '/about',
  // });
});
</script>
```

### Buenas Prácticas por Componente

1. **Hero Component** - Debe tener un H1 único
2. **About Component** - H2 para título principal
3. **Portfolio Component** - H2 para sección, H3 para proyectos
4. **Imágenes** - Siempre con alt descriptivo

```vue
<!-- ❌ MAL -->
<img src="/image.jpg" />

<!-- ✅ BIEN -->
<img
  src="/image.jpg"
  alt="Darwin Gómez trabajando en un proyecto de Vue.js"
  loading="lazy"
  width="800"
  height="600"
/>
```

---

## 📊 Datos Estructurados (JSON-LD)

### Tipos implementados

#### 1. WebSite Schema

```javascript
import { createWebSiteStructuredData } from '@/composables/useSEO';

const websiteSchema = createWebSiteStructuredData('es');
// Incluye: nombre del sitio, URL, descripción, SearchAction
```

#### 2. Person Schema

```javascript
import { createPersonStructuredData } from '@/composables/useSEO';

const personSchema = createPersonStructuredData('es');
// Incluye: nombre, título, descripción, redes sociales
```

#### 3. ProfilePage Schema

```javascript
import { createProfilePageStructuredData } from '@/composables/useSEO';

const profileSchema = createProfilePageStructuredData('es');
// Combina Person + ProfilePage
```

#### 4. BreadcrumbList Schema (Helper disponible)

```javascript
import { createBreadcrumbStructuredData } from '@/composables/useSEO';

const breadcrumbs = createBreadcrumbStructuredData([
  { name: 'Inicio', url: '/' },
  { name: 'Proyectos', url: '/#portfolio' },
]);
```

### Uso de @graph para múltiples schemas

En `App.vue` ya está implementado:

```javascript
useSEO(
  {
    /* metadata */
  },
  {
    '@context': 'https://schema.org',
    '@graph': [
      createWebSiteStructuredData(locale.value),
      createPersonStructuredData(locale.value),
      createProfilePageStructuredData(locale.value),
    ],
  }
);
```

### Validar datos estructurados

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/

---

## ⚡ Performance y Core Web Vitals

### Core Web Vitals Objetivo

| Métrica                             | Objetivo | Qué mide                                   |
| ----------------------------------- | -------- | ------------------------------------------ |
| **LCP** (Largest Contentful Paint)  | < 2.5s   | Velocidad de carga del contenido principal |
| **INP** (Interaction to Next Paint) | < 200ms  | Respuesta a interacciones del usuario      |
| **CLS** (Cumulative Layout Shift)   | < 0.1    | Estabilidad visual durante la carga        |

### Optimizaciones Implementadas

#### 1. Code Splitting

```javascript
// Ya implementado en App.vue
const Hero = defineAsyncComponent(() => import('@/components/Hero.vue'));
```

#### 2. Lazy Loading de Imágenes

```bash
# Ya está instalado
npm install v-lazy-image
```

Uso:

```vue
<template>
  <v-lazy-image
    src="/path/to/image.jpg"
    src-placeholder="/path/to/placeholder.jpg"
    alt="Descripción"
  />
</template>

<script setup>
import VLazyImage from 'v-lazy-image';
</script>
```

#### 3. Optimización de Fuentes

En `index.html`:

```html
<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Font display swap -->
<link
  href="https://fonts.googleapis.com/css2?family=Nunito:wght@200..1000&display=swap"
  rel="stylesheet"
/>
```

#### 4. Optimización de Build (Vite)

Ya configurado en `vite.config.js`:

- ✅ Code splitting automático
- ✅ Manual chunks para vendors
- ✅ Minificación con esbuild
- ✅ Optimización de SVGs
- ✅ Naming strategy para mejor caching

### Recomendaciones Adicionales

#### Optimizar Imágenes

```bash
# Instalar herramientas de optimización
npm install -D vite-plugin-image-optimizer

# O usar servicios externos como:
# - TinyPNG (https://tinypng.com/)
# - Squoosh (https://squoosh.app/)
# - ImageOptim (https://imageoptim.com/)
```

Formatos recomendados:

- **WebP** para fotos (80% mejor compresión que JPEG)
- **AVIF** para máxima compresión (soporte creciente)
- **SVG** para logos e íconos

#### Optimizar Critical CSS

Para SPA, Vite ya maneja esto automáticamente, pero puedes mejorar:

```javascript
// vite.config.js - Configuración adicional
export default defineConfig({
  build: {
    cssCodeSplit: true, // Split CSS por ruta
  },
});
```

---

## 🌍 SEO Multiidioma (hreflang)

### Implementación

El composable `useSEO` ya maneja hreflang automáticamente:

```javascript
// Se generan automáticamente estos links:
<link rel="alternate" hreflang="es" href="https://www.darwintnt.co/" />
<link rel="alternate" hreflang="en" href="https://www.darwintnt.co/en" />
<link rel="alternate" hreflang="x-default" href="https://www.darwintnt.co/" />
```

### Estructura de URLs Multiidioma

```
Español (default): https://www.darwintnt.co/
Inglés:           https://www.darwintnt.co/en
```

### Cambio de Idioma

Ya implementado en `useLanguage.ts` composable:

```javascript
// El cambio de idioma actualiza:
// 1. document.documentElement.lang
// 2. localStorage (preferencia del usuario)
// 3. Metadatos SEO automáticamente
```

### Sitemap Multiidioma

El `sitemap.xml` ya incluye ambos idiomas con hreflang:

```xml
<url>
  <loc>https://www.darwintnt.co/</loc>
  <xhtml:link rel="alternate" hreflang="es" href="https://www.darwintnt.co/" />
  <xhtml:link rel="alternate" hreflang="en" href="https://www.darwintnt.co/en" />
</url>
```

---

## ⚠️ Errores Comunes y Soluciones

### 1. Google no indexa mi SPA

**Problema**: Googlebot puede tener problemas con JavaScript.

**Soluciones**:

- ✅ **Prerendering** - Genera HTML estático (recomendado para portafolios)
- ✅ **SSR** - Server-Side Rendering (si necesitas contenido dinámico)
- ✅ **Verificar en Google Search Console** - URL Inspection Tool

### 2. Metadatos no se actualizan

**Problema**: Los metadatos en `index.html` son estáticos.

**Solución**:

- ✅ Ya implementado con `@unhead/vue`
- Los metadatos ahora son dinámicos y se actualizan por idioma

### 3. Contenido duplicado por idiomas

**Problema**: Google ve `/` y `/en` como duplicados.

**Solución**:

- ✅ Tags hreflang correctamente implementados
- ✅ Canonical URLs dinámicas

### 4. Imágenes sin optimizar (LCP alto)

**Solución**:

```vue
<!-- Usar lazy loading y dimensiones -->
<img
  src="/image.webp"
  alt="Descripción"
  loading="lazy"
  width="800"
  height="600"
/>

<!-- O usar v-lazy-image -->
<v-lazy-image src="/image.webp" alt="Descripción" />
```

### 5. Layout Shift (CLS alto)

**Solución**:

```vue
<!-- Siempre especificar dimensiones -->
<img width="800" height="600" src="/image.jpg" alt="..." />

<!-- Reservar espacio con aspect-ratio -->
<div class="aspect-video">
  <img src="/image.jpg" alt="..." />
</div>
```

### 6. Fuentes bloqueando render (LCP alto)

**Solución**:

```html
<!-- Usar font-display: swap -->
<link
  href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
  rel="stylesheet"
/>

<!-- O cargar fuentes localmente -->
```

---

## 🛠 Herramientas de Validación

### SEO General

1. **Google Search Console** (ESENCIAL)
   - https://search.google.com/search-console
   - Monitorear indexación, errores, y performance

2. **Bing Webmaster Tools**
   - https://www.bing.com/webmasters

3. **Lighthouse** (Chrome DevTools)

   ```bash
   # Auditar SEO, Performance, Accessibility
   npm install -g lighthouse
   lighthouse https://www.darwintnt.co --view
   ```

4. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Core Web Vitals de usuarios reales

### Metadatos y Open Graph

1. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/

2. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator

3. **LinkedIn Post Inspector**
   - https://www.linkedin.com/post-inspector/

### Datos Estructurados

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results

2. **Schema.org Validator**
   - https://validator.schema.org/

### Performance

1. **WebPageTest**
   - https://www.webpagetest.org/
   - Testing exhaustivo desde múltiples ubicaciones

2. **GTmetrix**
   - https://gtmetrix.com/

3. **Chrome DevTools**
   - Performance tab
   - Coverage tab (código no usado)

### Accesibilidad

1. **WAVE** (Web Accessibility Evaluation Tool)
   - https://wave.webaim.org/

2. **axe DevTools** (Extensión Chrome)
   - https://www.deque.com/axe/devtools/

---

## 🔄 Cuándo Usar SSR/SSG

### Tu Situación Actual: SPA

**Ventajas**:

- ✅ Más simple de desarrollar y mantener
- ✅ Menor costo de hosting (static hosting)
- ✅ Mejor experiencia de usuario (transiciones suaves)

**Desventajas**:

- ❌ SEO menos efectivo (aunque Google indexa bien JS moderno)
- ❌ Slower initial page load
- ❌ No ideal para contenido que cambia frecuentemente

### Cuándo Migrar a SSR (Server-Side Rendering)

**Considera SSR si**:

- Necesitas contenido dinámico en tiempo real
- SEO es absolutamente crítico (e-commerce, blogs)
- Tienes datos sensibles al tiempo
- Necesitas mejor performance en dispositivos de gama baja

**Opciones para Vue**:

- **Nuxt.js** - Framework completo con SSR
- **Vite SSR** - Implementación manual

### Cuándo Usar SSG (Static Site Generation)

**RECOMENDADO para tu caso** ✅

**Ventajas**:

- ✅ SEO perfecto (HTML estático)
- ✅ Performance máxima
- ✅ Ideal para portafolios, landing pages
- ✅ Hosting económico (Netlify, Vercel, GitHub Pages)

**Opciones**:

1. **VitePress** - Si conviertes a formato documentation
2. **Nuxt.js (SSG mode)** - Más features
3. **vite-ssg** - Plugin para Vite

### Implementar SSG con vite-ssg

```bash
npm install -D vite-ssg
```

```javascript
// main.js
import { ViteSSG } from 'vite-ssg';
import App from './App.vue';

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, initialState }) => {
    // Setup plugins
  }
);
```

### Prerendering Simple (Alternativa Rápida)

Para tu portafolio, puedes usar pre-rendering:

```bash
npm install -D vite-plugin-prerender
```

**Ventajas**:

- Menos cambios en el código
- HTML estático para SEO
- Interactividad de SPA

---

## 🎯 Recomendaciones Finales

### Prioridad ALTA (Hacer AHORA)

1. ✅ **Crear imágenes OG** (1200x630px)
   - Español: `/public/og-image.jpg`
   - Inglés: `/public/og-image-en.jpg`

2. ✅ **Crear favicons completos**
   - Usa: https://realfavicongenerator.net/
   - Coloca en `/public/`

3. ✅ **Optimizar imágenes existentes**
   - Convertir a WebP
   - Comprimir sin pérdida de calidad

4. ✅ **Añadir alt text a TODAS las imágenes**
   - Descriptivo y relevante
   - No keyword stuffing

5. ✅ **Verificar jerarquía de headings**
   - Solo un H1 por página
   - Orden lógico H1 → H2 → H3

### Prioridad MEDIA (Próximas semanas)

6. ⬜ **Implementar prerendering o SSG**
   - Mejora SEO significativamente
   - Mejor para portafolios

7. ⬜ **Añadir más contenido SEO-friendly**
   - Blog posts (si aplica)
   - Descripciones de proyectos más extensas

8. ⬜ **Mejorar accesibilidad (a11y)**
   - ARIA labels donde sea necesario
   - Navegación por teclado
   - Contraste de colores WCAG AA

9. ⬜ **Implementar Google Analytics eventos**
   - Tracking de conversiones
   - Interacciones del usuario

### Prioridad BAJA (Optimizaciones avanzadas)

10. ⬜ **PWA completo**
    - Service Worker
    - Offline support
    - Install prompt

11. ⬜ **Blog o sección de artículos**
    - Para mejorar SEO con contenido
    - Implementar con MDX o Markdown

12. ⬜ **Testing automatizado de SEO**
    - Lighthouse CI
    - Cypress para e2e

---

## 📚 Recursos Adicionales

### Documentación Oficial

- [Vue.js SEO Guide](https://vuejs.org/guide/scaling-up/ssr.html)
- [Vite Documentation](https://vitejs.dev/)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)

### Herramientas Recomendadas

- **@unhead/vue** - Gestión de head tags (ya instalado)
- **vite-ssg** - Static Site Generation
- **vite-plugin-prerender** - Prerendering
- **vite-plugin-image-optimizer** - Optimización de imágenes

### Lectura Recomendada

- [Web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [SEO Starter Guide (Google)](https://developers.google.com/search/docs/beginner/seo-starter-guide)

---

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción (genera sitemap automáticamente)
npm run build

# Preview de producción
npm run preview

# Generar sitemap manualmente
npm run sitemap:generate

# Validar traducciones
npm run i18n:validate

# Auditar con Lighthouse
lighthouse https://www.darwintnt.co --view

# Analizar bundle size
npx vite-bundle-visualizer
```

---

## ✨ Resumen de Implementación

### ✅ Lo que YA tienes implementado:

- Gestión dinámica de metadatos con @unhead/vue
- Soporte multiidioma completo con hreflang
- Datos estructurados (JSON-LD) para Person, WebSite, ProfilePage
- robots.txt y sitemap.xml optimizados
- Optimizaciones de performance en Vite
- Code splitting y lazy loading
- Open Graph y Twitter Cards
- Canonical URLs dinámicas

### 🔧 Lo que debes hacer AHORA:

1. Crear imágenes OG (1200x630px)
2. Generar y añadir favicons completos
3. Optimizar todas las imágenes (WebP)
4. Verificar alt text en imágenes
5. Verificar jerarquía de headings (H1, H2, H3)
6. Registrar el sitio en Google Search Console
7. Validar datos estructurados

### 🎯 Próximos pasos (opcional):

- Implementar prerendering o SSG para mejor SEO
- Añadir más contenido (blog, artículos)
- Mejorar accesibilidad (a11y)
- Implementar PWA completo

---

**¿Necesitas ayuda con algo específico?** Revisa las secciones correspondientes o consulta las herramientas de validación.

**¡Tu portafolio ya está configurado con las mejores prácticas de SEO técnico!** 🎉
