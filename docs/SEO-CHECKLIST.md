# ✅ SEO Checklist - Portfolio Darwin Gómez

Usa este checklist para verificar que todo el SEO esté correctamente implementado.

---

## 🎯 Pre-Launch Checklist

### Contenido y Metadatos

- [ ] **Crear imagen OG principal** (1200x630px)
  - [ ] Versión español: `/public/og-image.jpg`
  - [ ] Versión inglés: `/public/og-image-en.jpg`
  - [ ] Incluir logo, nombre y título profesional
- [ ] **Crear foto de perfil** para Schema.org
  - [ ] `/public/profile-picture.jpg` (mínimo 400x400px)
- [ ] **Generar favicons completos**
  - [ ] favicon.svg
  - [ ] favicon-16x16.png
  - [ ] favicon-32x32.png
  - [ ] apple-touch-icon.png (180x180)
  - [ ] android-chrome-192x192.png
  - [ ] android-chrome-512x512.png
  - Usa: https://realfavicongenerator.net/

- [ ] **Verificar textos SEO en ambos idiomas**
  - [ ] Títulos descriptivos y únicos
  - [ ] Descripciones entre 150-160 caracteres
  - [ ] Keywords relevantes (sin stuffing)

### Imágenes

- [ ] **Optimizar todas las imágenes**
  - [ ] Convertir a WebP (cuando sea posible)
  - [ ] Comprimir sin pérdida de calidad
  - [ ] Tamaño máximo recomendado: 200KB por imagen
- [ ] **Verificar alt text en todas las imágenes**
  - [ ] Hero/banner
  - [ ] About (foto de perfil)
  - [ ] Portfolio (screenshots de proyectos)
  - [ ] Logos de tecnologías
  - [ ] Footer/Contact

- [ ] **Añadir loading="lazy" a imágenes below-the-fold**
  - [ ] Portfolio images
  - [ ] Technology logos
  - [ ] Cualquier imagen fuera del viewport inicial

- [ ] **Especificar width y height en imágenes**
  - Previene layout shift (CLS)

### Estructura HTML

- [ ] **Verificar jerarquía de headings**
  - [ ] Solo un H1 por página (en Hero)
  - [ ] H2 para títulos de secciones (About, Portfolio, etc.)
  - [ ] H3 para subtítulos dentro de secciones
  - [ ] No saltarse niveles (H1 → H3 ❌)

- [ ] **IDs en secciones principales** (para navegación)
  - [x] `id="hero"`
  - [x] `id="about"`
  - [x] `id="technologies"`
  - [x] `id="portfolio"`
  - [x] `id="contact"`

- [ ] **Links accesibles**
  - [ ] Todos los links tienen texto descriptivo (no "click aquí")
  - [ ] Links externos tienen `rel="noopener noreferrer"`
  - [ ] Links a redes sociales tienen aria-label

### SEO Técnico

- [ ] **Verificar metadatos dinámicos**
  - [ ] Title se actualiza según idioma
  - [ ] Description se actualiza según idioma
  - [ ] og:image apunta a imagen válida
  - [ ] Canonical URL es correcta

- [ ] **Verificar hreflang tags**
  - [ ] Tag para español (es)
  - [ ] Tag para inglés (en)
  - [ ] Tag x-default apunta a idioma predeterminado

- [ ] **Actualizar datos de contacto en useSEO.ts**
  - [ ] SITE_URL correcto
  - [ ] TWITTER_HANDLE correcto
  - [ ] URLs de redes sociales actualizadas

### Archivos SEO

- [x] **robots.txt configurado**
  - Ubicación: `/public/robots.txt`
- [x] **sitemap.xml generado**
  - Ubicación: `/public/sitemap.xml`
  - Genera automáticamente en cada build

- [x] **site.webmanifest creado**
  - Ubicación: `/public/site.webmanifest`

### Performance

- [ ] **Ejecutar Lighthouse Audit**
  - [ ] Performance > 90
  - [ ] SEO > 95
  - [ ] Accessibility > 90
  - [ ] Best Practices > 90

- [ ] **Verificar Core Web Vitals**
  - [ ] LCP < 2.5s
  - [ ] INP < 200ms
  - [ ] CLS < 0.1

- [ ] **Build de producción optimizado**
  ```bash
  npm run build
  # Verificar tamaño de chunks
  # Total < 500KB ideal
  ```

### Datos Estructurados

- [ ] **Validar JSON-LD en Google Rich Results Test**
  - URL: https://search.google.com/test/rich-results
  - [ ] WebSite schema válido
  - [ ] Person schema válido
  - [ ] ProfilePage schema válido

- [ ] **Actualizar información en Person schema**
  - [ ] Nombre correcto
  - [ ] Título profesional actualizado
  - [ ] URLs de redes sociales correctas
  - [ ] Descripción en ambos idiomas

### Social Media

- [ ] **Validar Open Graph**
  - Facebook Debugger: https://developers.facebook.com/tools/debug/
  - [ ] Imagen se muestra correctamente
  - [ ] Título correcto
  - [ ] Descripción correcta

- [ ] **Validar Twitter Cards**
  - Twitter Validator: https://cards-dev.twitter.com/validator
  - [ ] Card type: summary_large_image
  - [ ] Imagen correcta
  - [ ] Metadata correcto

- [ ] **Validar LinkedIn Post Inspector**
  - URL: https://www.linkedin.com/post-inspector/
  - [ ] Preview correcto

### Accesibilidad (a11y)

- [ ] **Navegación por teclado funcional**
  - [ ] Tab navega por todos los elementos interactivos
  - [ ] Enter activa botones y links
  - [ ] Skip to content link (opcional)

- [ ] **Contraste de colores (WCAG AA)**
  - Mínimo ratio: 4.5:1 para texto normal
  - Mínimo ratio: 3:1 para texto grande

- [ ] **ARIA labels donde sea necesario**
  - [ ] Botón de cambio de idioma
  - [ ] Botones de redes sociales
  - [ ] Navegación mobile (hamburger menu)

- [ ] **Auditar con WAVE o axe DevTools**
  - 0 errores críticos

### Multiidioma

- [ ] **Verificar traducciones completas**

  ```bash
  npm run i18n:validate
  ```

  - [ ] Sin keys faltantes
  - [ ] Traducciones de calidad (no automáticas)

- [ ] **Botón de cambio de idioma visible**
  - [ ] Flags o labels claros
  - [ ] Persiste en localStorage
  - [ ] Actualiza metadatos correctamente

### Testing

- [ ] **Probar en diferentes navegadores**
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

- [ ] **Probar en diferentes dispositivos**
  - [ ] Desktop (> 1280px)
  - [ ] Tablet (768px - 1024px)
  - [ ] Mobile (< 768px)

- [ ] **Probar con JavaScript deshabilitado**
  - [ ] Mensaje de noscript se muestra

### Google Search Console

- [ ] **Registrar sitio en Google Search Console**
  - URL: https://search.google.com/search-console
- [ ] **Verificar propiedad del sitio**
  - Método recomendado: HTML tag o Google Analytics

- [ ] **Enviar sitemap**
  - URL del sitemap: `https://www.darwintnt.co/sitemap.xml`

- [ ] **Solicitar indexación de URLs principales**
  - / (español)
  - /en (inglés)

### Bing Webmaster Tools

- [ ] **Registrar sitio en Bing Webmaster**
  - URL: https://www.bing.com/webmasters
- [ ] **Enviar sitemap**

### Analytics

- [x] **Google Analytics configurado**
  - ID: G-24F6G2V9KG
- [ ] **Verificar que está tracked correctamente**
  - Abrir sitio y verificar en tiempo real en GA

### Post-Launch (Primera semana)

- [ ] **Monitorear Google Search Console**
  - [ ] Cobertura (páginas indexadas)
  - [ ] Rendimiento (impresiones, clicks)
  - [ ] Core Web Vitals
  - [ ] Errores (404s, etc.)

- [ ] **Verificar indexación en Google**
  - [ ] Buscar: `site:darwintnt.co`
  - [ ] Verificar que aparecen ambas versiones de idioma

- [ ] **Revisar PageSpeed Insights**
  - URL: https://pagespeed.web.dev/
  - [ ] Versión móvil
  - [ ] Versión desktop

---

## 🚨 Errores Críticos a Evitar

- ❌ **NO** usar múltiples H1 en la misma página
- ❌ **NO** dejar imágenes sin alt text
- ❌ **NO** usar imágenes sin optimizar (> 500KB)
- ❌ **NO** olvidar hreflang para multiidioma
- ❌ **NO** usar keywords stuffing en metadatos
- ❌ **NO** dejar og:image vacío
- ❌ **NO** olvidar registrar en Google Search Console
- ❌ **NO** usar URLs con query parameters para idiomas (?lang=en) ❌

---

## 📊 KPIs para Monitorear

### Métricas SEO (Google Search Console)

- **Impresiones**: Veces que aparece en resultados de búsqueda
- **Clicks**: Veces que hacen click desde Google
- **CTR**: Click-Through Rate (objetivo: >3%)
- **Posición promedio**: Posición en resultados (objetivo: <10)

### Métricas de Performance (PageSpeed Insights)

- **LCP**: < 2.5s ✅
- **INP**: < 200ms ✅
- **CLS**: < 0.1 ✅
- **FCP**: < 1.8s ✅
- **Performance Score**: > 90 ✅

### Métricas de Analytics

- **Sessions**: Visitas al sitio
- **Bounce Rate**: % que salen sin interactuar (objetivo: <50%)
- **Avg. Session Duration**: Tiempo promedio (objetivo: >2min)
- **Pages/Session**: Páginas vistas por sesión

---

## 🎯 Quick Wins (Máximo Impacto, Mínimo Esfuerzo)

1. **Crear imagen OG** - 30 min, gran impacto en shares
2. **Optimizar imágenes** - 1 hora, mejora LCP significativamente
3. **Añadir alt text** - 30 min, mejora SEO y a11y
4. **Registrar en Search Console** - 15 min, esencial para monitoreo
5. **Generar favicons** - 10 min, profesionalismo

---

## 📝 Notas

- Este checklist es específico para tu portafolio SPA con Vue.js + Vite
- Algunos items ya están implementados (marcados con [x])
- Prioriza los items sin marcar antes del launch
- Revisa este checklist cada vez que hagas cambios importantes

---

**Fecha última actualización**: 2026-02-10
**Próxima revisión**: Después del launch y semanalmente por el primer mes
