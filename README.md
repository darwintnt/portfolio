# 🚀 Darwin Gómez - Portfolio

> Portfolio profesional construido con Vue 3 + Vite, optimizado para SEO y performance.

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646CFF?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

---

## ✨ Características

- 🎨 **Diseño moderno y responsive** con Tailwind CSS
- 🌍 **Multiidioma** (Español/Inglés) con vue-i18n
- ⚡ **Performance optimizado** - Core Web Vitals
- 🔍 **SEO técnico completo** - Open Graph, Schema.org, hreflang
- 📱 **Mobile-first** y PWA-ready
- 🎯 **Lazy loading** de componentes e imágenes
- 📊 **Analytics** - Google Analytics integrado

---

## 🛠 Tech Stack

- **Framework**: Vue 3 (Composition API)
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **i18n**: Vue I18n 9
- **SEO**: @unhead/vue
- **Imágenes**: v-lazy-image

---

## 🚀 Quick Start

### Requisitos

- Node.js >= 18
- npm o yarn

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/darwintnt/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview de build
npm run preview
```

---

## 📁 Estructura del Proyecto

```
portfolio/
├── docs/               # 📚 Documentación
│   ├── SEO.md         # Guía completa de SEO
│   ├── SEO-CHECKLIST.md
│   ├── SEO-EXAMPLES.md
│   ├── SEO-QUICK-START.md
│   └── I18N.md        # Internacionalización
├── public/            # Archivos estáticos
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── scripts/           # Scripts de build
│   ├── generate-sitemap.js
│   └── validate-translations.js
├── src/
│   ├── components/    # Componentes Vue
│   ├── composables/   # Composables reutilizables
│   │   ├── useSEO.ts  # ⭐ SEO management
│   │   └── useLanguage.ts
│   ├── i18n/          # Traducciones
│   │   ├── locales/
│   │   │   ├── es.json
│   │   │   └── en.json
│   │   ├── index.ts
│   │   └── types.ts
│   ├── assets/        # Assets (imágenes, logos)
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo

# Producción
npm run build            # Build optimizado
npm run preview          # Preview del build

# Utilidades
npm run sitemap:generate # Genera sitemap.xml
npm run i18n:validate    # Valida traducciones
npm run format           # Formatea código con Prettier
npm run format:check     # Verifica formato
```

---

## 🔍 SEO y Performance

Este proyecto implementa las mejores prácticas de SEO técnico:

### Características SEO

- ✅ **Metadatos dinámicos** por idioma
- ✅ **Open Graph** y Twitter Cards
- ✅ **Datos estructurados** (Schema.org JSON-LD)
- ✅ **hreflang tags** para multiidioma
- ✅ **Canonical URLs** dinámicas
- ✅ **Sitemap.xml** generado automáticamente
- ✅ **robots.txt** optimizado

### Performance

- ✅ **Code splitting** automático
- ✅ **Lazy loading** de componentes
- ✅ **Manual chunks** para mejor caching
- ✅ **Optimización de assets**
- ✅ **Preconnect** para recursos externos
- ✅ **Font display: swap**

### Objetivos Core Web Vitals

| Métrica | Objetivo | Estado |
| ------- | -------- | ------ |
| LCP     | < 2.5s   | ✅     |
| INP     | < 200ms  | ✅     |
| CLS     | < 0.1    | ✅     |

**🎯 Para guía completa de SEO, ver**: [`docs/SEO-QUICK-START.md`](./docs/SEO-QUICK-START.md)

---

## 🌍 Internacionalización

### Idiomas soportados

- 🇪🇸 Español (predeterminado)
- 🇬🇧 Inglés

### Cambiar idioma

El sitio detecta automáticamente el idioma del navegador y guarda la preferencia del usuario en localStorage.

```javascript
// Programáticamente
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
locale.value = 'en'; // Cambiar a inglés
```

**Documentación completa**: [`docs/I18N.md`](./docs/I18N.md)

---

## 🎨 Personalización

### Colores (Tailwind)

Edita `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      // ...
    }
  }
}
```

### Metadatos SEO

Edita `src/composables/useSEO.ts`:

```typescript
const SITE_URL = 'https://www.tu-dominio.com';
const SITE_NAME = 'Tu Nombre | Título';
const TWITTER_HANDLE = '@tu_handle';
```

### Contenido

- **Textos**: Edita `src/i18n/locales/es.json` y `en.json`
- **Proyectos**: Edita `src/assets/data/portfolio.json`
- **Imágenes**: Coloca en `public/images/`

---

## 📊 Analytics

Google Analytics está configurado en `index.html`:

```javascript
// Actualiza el ID de tracking
gtag('config', 'G-TU-ID-AQUI');
```

---

## 🚀 Deployment

### Netlify

```bash
# Build command
npm run build

# Publish directory
dist
```

### Vercel

```bash
# El proyecto ya está configurado para Vercel
vercel --prod
```

### GitHub Pages

```bash
npm run build
# Deploy la carpeta dist/
```

---

## ✅ Pre-Launch Checklist

Antes de lanzar tu portafolio, completa:

- [ ] Crear imagen OG (1200x630px) en `/public/og-image.jpg`
- [ ] Generar favicons completos
- [ ] Optimizar todas las imágenes (WebP, comprimidas)
- [ ] Actualizar información personal en `useSEO.ts`
- [ ] Ejecutar Lighthouse audit (score > 90)
- [ ] Validar datos estructurados
- [ ] Registrar sitio en Google Search Console
- [ ] Enviar sitemap.xml

**Checklist completo**: [`docs/SEO-CHECKLIST.md`](./docs/SEO-CHECKLIST.md)

---

## 🛡 Buenas Prácticas

### Commits

Este proyecto usa Husky + Prettier para mantener código limpio:

```bash
npm run format      # Formatea antes de commit
```

### Testing SEO

```bash
# Lighthouse CI
npx lighthouse https://tu-dominio.com --view

# Validar datos estructurados
# https://search.google.com/test/rich-results
```

---

## 📚 Documentación

- 📘 [SEO Quick Start](./docs/SEO-QUICK-START.md) - Empieza aquí
- 📗 [Guía Completa de SEO](./docs/SEO.md) - Todo sobre SEO técnico
- 📕 [Checklist SEO](./docs/SEO-CHECKLIST.md) - Paso a paso
- 📙 [Ejemplos SEO](./docs/SEO-EXAMPLES.md) - Implementaciones prácticas
- 📓 [Internacionalización](./docs/I18N.md) - Gestión de idiomas

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👨‍💻 Autor

**Darwin Gómez**

- Website: [darwintnt.co](https://www.darwintnt.co)
- GitHub: [@darwintnt](https://github.com/darwintnt)
- LinkedIn: [darwin-gomez](https://linkedin.com/in/darwintnt)

---

## 🙏 Agradecimientos

- [Vue.js](https://vuejs.org/) - Framework progresivo
- [Vite](https://vitejs.dev/) - Build tool ultrarrápido
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [@unhead/vue](https://unhead.unjs.io/) - Gestión de head tags

---

## 🔗 Links Útiles

- **Demo en vivo**: https://www.darwintnt.co
- **Repositorio**: https://github.com/darwintnt/portfolio
- **Issues**: https://github.com/darwintnt/portfolio/issues

---

**⭐ Si este proyecto te fue útil, considera darle una estrella en GitHub!**
