# 🖼️ Guía de Optimización de Imágenes y Assets

Guía completa para optimizar imágenes y assets para máximo SEO y performance.

---

## 📋 Assets Necesarios para SEO

### 1. Open Graph Image (OBLIGATORIO)

**Especificaciones**:

- **Tamaño**: 1200x630px
- **Formato**: JPG o PNG
- **Peso**: < 300KB
- **Ubicación**: `/public/og-image.jpg`

**Contenido recomendado**:

- Tu nombre completo
- Título profesional (Software Engineer)
- Logo o branding
- Colores de tu marca
- Fondo profesional

**Herramientas para crear**:

- [Canva](https://www.canva.com/) - Plantillas gratis
- [Figma](https://www.figma.com/) - Diseño profesional
- [OG Image Generator](https://og-image.vercel.app/) - Generador automático

**Ejemplo de diseño**:

```
┌──────────────────────────────────────┐
│                                      │
│         Darwin Gómez                 │
│      Software Engineer               │
│                                      │
│   [Logo o icono]                     │
│                                      │
│   Vue.js • Node.js • TypeScript      │
│                                      │
└──────────────────────────────────────┘
```

---

### 2. Profile Picture (OBLIGATORIO)

**Especificaciones**:

- **Tamaño**: 400x400px (mínimo)
- **Formato**: JPG o WebP
- **Peso**: < 100KB
- **Ubicación**: `/public/profile-picture.jpg`

**Características**:

- Foto profesional
- Fondo neutro o blanco
- Buena iluminación
- Enfoque en rostro

---

### 3. Favicons (OBLIGATORIO)

**Archivos necesarios**:

```
/public/
  ├── favicon.svg              # Vector (preferido)
  ├── favicon.ico              # Fallback IE
  ├── favicon-16x16.png        # Icon pequeño
  ├── favicon-32x32.png        # Icon mediano
  ├── apple-touch-icon.png     # iOS (180x180)
  ├── android-chrome-192x192.png
  └── android-chrome-512x512.png
```

**Generador recomendado**: [RealFaviconGenerator](https://realfavicongenerator.net/)

### Proceso:

1. Crea un ícono base (512x512px, SVG si es posible)
2. Sube a RealFaviconGenerator
3. Descarga el paquete completo
4. Copia todos los archivos a `/public/`

---

## 📸 Imágenes del Portfolio

### Screenshots de Proyectos

**Especificaciones por imagen**:

- **Tamaño**: 1200x800px (ratio 3:2)
- **Formato**: WebP (con fallback JPG)
- **Peso**: < 200KB cada una
- **Ubicación**: `/public/images/projects/`

**Buenas prácticas**:

- Usa screenshots reales de tus proyectos
- Muestra la interfaz principal o dashboard
- Resalta las características principales
- Añade sombras o mockups para profesionalismo

---

## 🎨 Logos de Tecnologías

**Ubicación**: `/src/assets/logos/`

**Formato recomendado**: SVG (vectorial)

**Tecnologías comunes**:

- vue.svg
- react.svg
- nodejs.svg
- typescript.svg
- python.svg
- docker.svg
- etc.

**Fuentes**:

- [Simple Icons](https://simpleicons.org/) - SVGs de casi todas las tecnologías
- [Dev Icons](https://devicon.dev/) - Iconos de desarrollo
- [SVG Repo](https://www.svgrepo.com/) - Repositorio de SVGs

---

## ⚡ Optimización de Imágenes

### Herramientas Recomendadas

#### Online (Gratis)

1. **[Squoosh](https://squoosh.app/)** ⭐
   - Compresión avanzada
   - Comparación visual
   - Múltiples formatos (WebP, AVIF)

2. **[TinyPNG](https://tinypng.com/)**
   - Compresión con pérdida mínima
   - API disponible

3. **[Optimizilla](https://imagecompressor.com/)**
   - Batch compression
   - Ajuste de calidad

#### Desktop

1. **ImageOptim** (Mac) ⭐
   - Compresión sin pérdida
   - Batch processing
   - Gratis

2. **RIOT** (Windows)
   - Optimización avanzada
   - Comparación lado a lado

#### CLI / Automatizado

```bash
# Sharp (Node.js)
npm install sharp

# Script de optimización
import sharp from 'sharp';

sharp('input.jpg')
  .resize(1200, 630)
  .webp({ quality: 85 })
  .toFile('output.webp');
```

---

## 🔄 Conversión a WebP

### ¿Por qué WebP?

- ✅ 30% más pequeño que JPG
- ✅ 80% más pequeño que PNG
- ✅ Soporte en todos los navegadores modernos
- ✅ Mantiene calidad visual

### Conversión Masiva

#### Opción 1: CLI (cwebp)

```bash
# Instalar
brew install webp  # Mac
apt-get install webp  # Linux

# Convertir una imagen
cwebp -q 85 input.jpg -o output.webp

# Batch conversion
for file in *.jpg; do
  cwebp -q 85 "$file" -o "${file%.jpg}.webp"
done
```

#### Opción 2: Sharp (Node.js)

```javascript
// convert-to-webp.js
import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const inputDir = './public/images';
const outputDir = './public/images/webp';

const files = await readdir(inputDir);

for (const file of files) {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    await sharp(join(inputDir, file))
      .webp({ quality: 85 })
      .toFile(join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')));

    console.log(`✅ ${file} → webp`);
  }
}
```

#### Opción 3: Vite Plugin

```bash
npm install -D vite-plugin-image-optimizer
```

```javascript
// vite.config.js
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
  plugins: [
    ViteImageOptimizer({
      jpg: { quality: 85 },
      png: { quality: 85 },
      webp: { quality: 85 },
    }),
  ],
};
```

---

## 📐 Responsive Images

### Uso con `<picture>` Element

```html
<picture>
  <!-- WebP modern -->
  <source
    srcset="/images/hero-mobile.webp"
    type="image/webp"
    media="(max-width: 768px)"
  />
  <source
    srcset="/images/hero-desktop.webp"
    type="image/webp"
    media="(min-width: 769px)"
  />

  <!-- JPG fallback -->
  <source srcset="/images/hero-mobile.jpg" media="(max-width: 768px)" />
  <source srcset="/images/hero-desktop.jpg" media="(min-width: 769px)" />

  <!-- Default -->
  <img
    src="/images/hero-desktop.jpg"
    alt="Darwin Gómez, Software Engineer"
    width="1200"
    height="800"
    loading="lazy"
  />
</picture>
```

### Uso con srcset

```html
<img
  src="/images/project-800.webp"
  srcset="
    /images/project-400.webp   400w,
    /images/project-800.webp   800w,
    /images/project-1200.webp 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Screenshot del proyecto"
  width="800"
  height="600"
  loading="lazy"
/>
```

---

## 🎯 Lazy Loading

### Nativo (Recomendado)

```html
<!-- Imágenes fuera del viewport inicial -->
<img
  src="/image.webp"
  alt="Descripción"
  loading="lazy"
  width="800"
  height="600"
/>

<!-- Imágenes above the fold (hero) -->
<img
  src="/hero.webp"
  alt="Descripción"
  loading="eager"  <!-- o sin loading -->
  width="1200"
  height="800"
/>
```

### Con v-lazy-image (Ya instalado)

```vue
<template>
  <v-lazy-image
    src="/images/project.webp"
    src-placeholder="/images/project-blur.jpg"
    alt="Proyecto"
  />
</template>

<script setup>
import VLazyImage from 'v-lazy-image';
</script>

<style>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.3s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
```

### Blur Placeholder

Genera placeholders pequeños:

```bash
# Sharp
sharp input.jpg
  .resize(20, 20)
  .blur(5)
  .toFile('placeholder.jpg')
```

---

## 📊 Checklist de Imágenes

### Pre-Launch

- [ ] **Todas las imágenes están optimizadas**
  - [ ] Tamaño adecuado (no sobredimensionadas)
  - [ ] Formato WebP con fallback JPG
  - [ ] Peso < 200KB por imagen

- [ ] **Alt text descriptivo en todas las imágenes**
  - [ ] Describe el contenido
  - [ ] Incluye keywords relevantes (natural)
  - [ ] No usa "imagen de" o "foto de"

- [ ] **Lazy loading implementado**
  - [ ] `loading="lazy"` en imágenes below the fold
  - [ ] `loading="eager"` en hero/above fold

- [ ] **Dimensiones especificadas**
  - [ ] `width` y `height` en todas las imágenes
  - [ ] Previene layout shift (CLS)

- [ ] **Assets SEO creados**
  - [ ] og-image.jpg (1200x630)
  - [ ] profile-picture.jpg
  - [ ] Favicons completos

---

## 🎨 Estructura Recomendada

```
public/
├── images/
│   ├── og-image.jpg              # Open Graph (1200x630)
│   ├── og-image-en.jpg           # OG versión inglés
│   ├── profile-picture.jpg       # Tu foto (400x400)
│   ├── hero-bg.webp              # Background hero
│   ├── projects/                 # Screenshots de proyectos
│   │   ├── project-1.webp
│   │   ├── project-1.jpg         # Fallback
│   │   ├── project-2.webp
│   │   └── ...
│   └── blur/                     # Placeholders blur
│       ├── project-1-blur.jpg
│       └── ...
├── favicon.svg
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
└── android-chrome-512x512.png

src/
└── assets/
    ├── logos/                    # Logos tecnologías (SVG)
    │   ├── vue.svg
    │   ├── nodejs.svg
    │   ├── typescript.svg
    │   └── ...
    └── icons/                    # Iconos UI (SVG)
        ├── github.svg
        ├── linkedin.svg
        └── ...
```

---

## 🔍 Testing Performance

### Lighthouse

```bash
# CLI
npm install -g lighthouse
lighthouse https://www.darwintnt.co --view

# Verificar métricas
# - LCP < 2.5s
# - CLS < 0.1
# - Performance score > 90
```

### WebPageTest

1. Ve a: https://www.webpagetest.org/
2. Ingresa tu URL
3. Selecciona ubicación y dispositivo
4. Analiza filmstrip view y waterfall
5. Identifica imágenes pesadas

### Chrome DevTools

```
1. Abre DevTools (F12)
2. Tab "Network"
3. Filtra por "Img"
4. Recarga página
5. Revisa:
   - Tamaño de transferencia
   - Tiempo de carga
   - Imágenes sin comprimir
```

---

## 💡 Tips Avanzados

### 1. AVIF (Siguiente generación)

Formato aún mejor que WebP (50% más pequeño):

```html
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="..." />
</picture>
```

**Soporte**: Chrome 85+, Firefox 93+

### 2. Preload de imágenes críticas

```html
<!-- En <head> para imagen del hero -->
<link rel="preload" as="image" href="/images/hero.webp" type="image/webp" />
```

### 3. CDN para imágenes

Servicios como:

- **Cloudinary** - Optimización automática
- **Imgix** - Transform on-the-fly
- **Cloudflare Images** - Integrado con CDN

### 4. Generar múltiples tamaños automáticamente

```javascript
// generate-sizes.js
import sharp from 'sharp';

const sizes = [400, 800, 1200, 1600];
const input = 'original.jpg';

for (const size of sizes) {
  await sharp(input)
    .resize(size)
    .webp({ quality: 85 })
    .toFile(`output-${size}.webp`);
}
```

---

## ✅ Quick Wins

### Optimizaciones de 5 minutos

1. **Comprime todas las imágenes**
   - Usa Squoosh o TinyPNG
   - Objetivo: reducir 50-70% del peso

2. **Añade loading="lazy"**
   - A todas las imágenes excepto hero
   - Mejora inicial page load

3. **Especifica width y height**
   - Previene layout shift
   - Mejor CLS score

4. **Convierte JPG a WebP**
   - 30% más pequeño
   - Misma calidad visual

---

## 📚 Recursos

### Herramientas Online

- [Squoosh](https://squoosh.app/) - Compresor de imágenes
- [TinyPNG](https://tinypng.com/) - Optimizador
- [Canva](https://www.canva.com/) - Diseño de OG images
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Favicons

### Documentación

- [Web.dev: Optimize Images](https://web.dev/fast/#optimize-your-images)
- [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Can I Use WebP](https://caniuse.com/webp)

### APIs y Services

- [Cloudinary](https://cloudinary.com/)
- [Imgix](https://imgix.com/)
- [ImageKit](https://imagekit.io/)

---

**Next Steps**: Una vez optimizadas tus imágenes, ejecuta Lighthouse para verificar mejoras en LCP y Performance score. 🚀
