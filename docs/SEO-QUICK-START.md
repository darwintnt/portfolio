# 🚀 Guía Rápida de SEO - Start Here

**Implementación de SEO técnico completo para tu portafolio Vue.js + Vite**

---

## ⚡ Quick Start

### 1. ✅ Ya está implementado

Tu proyecto ahora tiene:

- ✅ Gestión dinámica de metadatos con `@unhead/vue`
- ✅ Soporte multiidioma con hreflang (es/en)
- ✅ Datos estructurados JSON-LD (Person, WebSite, ProfilePage)
- ✅ robots.txt y sitemap.xml optimizados
- ✅ Optimizaciones de performance en Vite
- ✅ Open Graph y Twitter Cards

### 2. 🎯 Tareas inmediatas (Hacer AHORA)

Antes de lanzar tu sitio, completa estas tareas:

#### A. Crear imágenes necesarias

```bash
# Ubicación: /public/

1. og-image.jpg (1200x630px)
   - Para redes sociales (Facebook, LinkedIn, etc.)
   - Incluye tu nombre y título profesional

2. profile-picture.jpg (400x400px mínimo)
   - Para Schema.org Person

3. Favicons
   - Genera en: https://realfavicongenerator.net/
   - Coloca todos los archivos en /public/
```

#### B. Actualizar información personal

Edita el archivo: `src/composables/useSEO.ts`

```typescript
// Líneas 18-22
const SITE_URL = 'https://www.darwintnt.co'; // ✅ Verificar URL
const SITE_NAME = 'Darwin Gómez | Software Engineer';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`; // ⚠️ Crear imagen
const TWITTER_HANDLE = '@darwintnt'; // ⚠️ Actualizar con tu handle real
const FB_APP_ID = ''; // Opcional
```

#### C. Optimizar imágenes existentes

```bash
# Convierte tus imágenes a WebP
# Herramientas:
# - https://squoosh.app/ (online)
# - https://tinypng.com/ (online)
# - ImageOptim (mac)

# O instala plugin de Vite
npm install -D vite-plugin-image-optimizer
```

#### D. Verificar y mejorar accesibilidad

```bash
# Verifica que todas las imágenes tengan alt text descriptivo

# ❌ MAL
<img src="/project.jpg" alt="proyecto" />

# ✅ BIEN
<img src="/project.jpg" alt="Dashboard de aplicación e-commerce mostrando métricas de ventas" />
```

### 3. 📊 Validar tu SEO

#### A. Antes del launch (local)

```bash
# 1. Build del proyecto
npm run build

# 2. Preview
npm run preview

# 3. Auditar con Lighthouse
# - Abre Chrome DevTools
# - Tab "Lighthouse"
# - Run audit (Performance, SEO, Accessibility)

# Objetivos:
# - Performance > 90
# - SEO > 95
# - Accessibility > 90
```

#### B. Después del launch (producción)

**Google Search Console** (ESENCIAL)

1. Ve a: https://search.google.com/search-console
2. Añade tu propiedad (dominio)
3. Verifica propiedad (HTML tag o Google Analytics)
4. Envía sitemap: `https://www.darwintnt.co/sitemap.xml`

**Validar Open Graph**

- Facebook: https://developers.facebook.com/tools/debug/
- LinkedIn: https://www.linkedin.com/post-inspector/
- Twitter: https://cards-dev.twitter.com/validator

**Validar Datos Estructurados**

- Google Rich Results: https://search.google.com/test/rich-results
- Schema Validator: https://validator.schema.org/

---

## 📁 Archivos importantes

### Configuración SEO

```
src/
  composables/
    useSEO.ts          # ⭐ Composable principal de SEO
    useLanguage.ts     # Gestión de idiomas

  i18n/
    index.ts           # Configuración de vue-i18n
    locales/
      es.json         # Traducciones español
      en.json         # Traducciones inglés

public/
  robots.txt          # ⭐ Configuración para crawlers
  sitemap.xml         # ⭐ Mapa del sitio (autogenerado en build)
  site.webmanifest    # ⭐ PWA manifest

scripts/
  generate-sitemap.js # Script para generar sitemap automáticamente

docs/
  SEO.md             # 📚 Documentación completa
  SEO-CHECKLIST.md   # ✅ Checklist detallado
  SEO-EXAMPLES.md    # 💡 Ejemplos de implementación
```

---

## 🔧 Comandos útiles

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

# Formatear código
npm run format
```

---

## 📚 Documentación completa

Para información detallada, consulta:

1. **[SEO.md](./SEO.md)** - Guía completa de SEO técnico
   - Optimización de performance
   - Core Web Vitals
   - SEO multiidioma
   - Datos estructurados
   - Errores comunes y soluciones

2. **[SEO-CHECKLIST.md](./SEO-CHECKLIST.md)** - Checklist paso a paso
   - Tareas pre-launch
   - Validaciones
   - KPIs a monitorear

3. **[SEO-EXAMPLES.md](./SEO-EXAMPLES.md)** - Ejemplos prácticos
   - Implementación en componentes
   - Uso de Schema.org
   - Blog posts (opcional)

---

## 🎯 Uso del composable useSEO

### Ejemplo básico

```vue
<script setup>
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { useSEO, createPersonStructuredData } from '@/composables/useSEO';

const { locale } = useI18n();

onMounted(() => {
  useSEO(
    {
      title: 'Mi Página',
      description: 'Descripción de mi página',
      keywords: 'vue, seo, portafolio',
      url: '/',
    },
    createPersonStructuredData(locale.value)
  );
});
</script>
```

### Ya está implementado en

- ✅ `App.vue` - SEO global con múltiples schemas

---

## ⚠️ Errores comunes

### 1. Metadatos no se ven en Facebook/Twitter

**Solución**:

- Asegúrate de que la imagen OG existe y es accesible
- Usa las herramientas de debug (links arriba)
- Limpia la caché de la red social

### 2. Google no indexa mi sitio

**Solución**:

- Espera 1-2 semanas (indexación toma tiempo)
- Verifica que robots.txt permite crawling
- Envía sitemap en Google Search Console
- Solicita indexación manualmente (URL Inspection)

### 3. Performance es baja (LCP alto)

**Solución**:

- Optimiza y comprime imágenes
- Usa formato WebP
- Implementa lazy loading
- Verifica que usas `loading="lazy"` en imágenes

---

## 🆘 Soporte

### Si algo no funciona:

1. Verifica que ejecutaste `npm install` después de los cambios
2. Asegúrate de que `@unhead/vue` está instalado
3. Revisa la consola del navegador por errores
4. Consulta la documentación completa en [SEO.md](./SEO.md)

### Herramientas de Debug

```javascript
// En consola del navegador, verifica:
console.log(document.head.querySelectorAll('meta'));
console.log(document.head.querySelector('title'));
```

---

## ✨ Próximos pasos opcionales

Una vez que tu SEO básico esté funcionando:

1. **Implementar Prerendering o SSG**
   - Mejor indexación para SPAs
   - Herramientas: vite-ssg, Nuxt.js

2. **Añadir Blog**
   - Más contenido = mejor SEO
   - Usa Markdown o Headless CMS

3. **PWA Completo**
   - Service Worker
   - Offline support
   - Instalable

4. **Analytics Avanzado**
   - Google Tag Manager
   - Events tracking
   - Conversion funnels

---

## 🎉 Checklist Final Pre-Launch

- [ ] Imágenes OG creadas (1200x630px)
- [ ] Favicons generados y añadidos
- [ ] Imágenes optimizadas (WebP, comprimidas)
- [ ] Alt text en todas las imágenes
- [ ] Información personal actualizada en useSEO.ts
- [ ] Build de producción exitoso
- [ ] Lighthouse audit > 90 en todas las métricas
- [ ] Datos estructurados validados
- [ ] Open Graph validado en Facebook/Twitter
- [ ] Sitio registrado en Google Search Console
- [ ] Sitemap enviado

---

**¿Listo para lanzar?** Una vez completado este checklist, tu portafolio tendrá un SEO técnico sólido. 🚀

**¿Necesitas ayuda?** Consulta la documentación completa en los otros archivos de la carpeta `/docs/`.
