import { useHead } from '@unhead/vue';
import { computed, isRef } from 'vue';
import type { Ref } from 'vue';
import { useI18n } from 'vue-i18n';

/**
 * Composable para gestionar metadatos SEO dinámicos
 * Incluye soporte para Open Graph, Twitter Cards, hreflang y JSON-LD
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

const SITE_URL = 'https://www.darwintnt.co';
const SITE_NAME = 'Darwin Gómez | Software Engineer';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;
export function useSEO(
  metadata?: SEOMetadata | Ref<SEOMetadata>,
  structuredData?: StructuredData | Ref<StructuredData>
) {
  const { locale } = useI18n();

  // Normalizar metadata y structuredData para soportar refs reactivas
  const getMeta = (): SEOMetadata | undefined =>
    isRef(metadata) ? metadata.value : metadata;

  const getSD = (): StructuredData | undefined =>
    isRef(structuredData) ? structuredData.value : structuredData;

  // Construir URL completa basada en el idioma
  const currentUrl = computed(() => {
    const path = getMeta()?.url || '';
    const lang = locale.value === 'es' ? '' : `/${locale.value}`;
    return `${SITE_URL}${lang}${path}`;
  });

  // Construir URLs alternativas para hreflang
  const alternateUrls = computed(() => ({
    es: `${SITE_URL}${getMeta()?.url || ''}`,
    en: `${SITE_URL}/en${getMeta()?.url || ''}`,
  }));

  // Construir título completo
  const fullTitle = computed(() => {
    const meta = getMeta();
    if (!meta?.title) return SITE_NAME;
    return `${meta.title} | Darwin Gómez`;
  });

  // Configurar metadatos
  if (metadata) {
    useHead({
      // Getters reactivos: se actualizan cuando cambia el idioma
      title: () => fullTitle.value,
      htmlAttrs: {
        lang: () => locale.value,
      },
      meta: [
        // Meta tags básicos
        {
          name: 'description',
          content: () => getMeta()?.description ?? '',
        },
        {
          name: 'keywords',
          content: () => getMeta()?.keywords ?? '',
        },
        {
          name: 'author',
          content: () => getMeta()?.author || 'Darwin Gómez',
        },

        // Open Graph
        {
          property: 'og:title',
          content: () => fullTitle.value,
        },
        {
          property: 'og:description',
          content: () => getMeta()?.description ?? '',
        },
        {
          property: 'og:type',
          content: () => getMeta()?.type || 'website',
        },
        {
          property: 'og:url',
          content: () => currentUrl.value,
        },
        {
          property: 'og:image',
          content: () => getMeta()?.image || DEFAULT_IMAGE,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        // Alt text para accesibilidad en compartir social
        {
          property: 'og:image:alt',
          content: () => fullTitle.value,
        },
        {
          property: 'og:site_name',
          content: SITE_NAME,
        },
        {
          property: 'og:locale',
          content: () => (locale.value === 'es' ? 'es_CO' : 'en_US'),
        },
        {
          property: 'og:locale:alternate',
          content: () => (locale.value === 'es' ? 'en_US' : 'es_CO'),
        },

        // Twitter / X Cards
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: () => fullTitle.value,
        },
        {
          name: 'twitter:description',
          content: () => getMeta()?.description ?? '',
        },
        {
          name: 'twitter:image',
          content: () => getMeta()?.image || DEFAULT_IMAGE,
        },
        {
          name: 'twitter:image:alt',
          content: () => fullTitle.value,
        },

        // Metadatos adicionales de artículo (si aplica)
        {
          property: 'article:published_time',
          content: () => getMeta()?.publishedTime ?? '',
        },
        {
          property: 'article:modified_time',
          content: () => getMeta()?.modifiedTime ?? '',
        },
        {
          property: 'article:section',
          content: () => getMeta()?.section ?? '',
        },
      ],
      link: [
        // Canonical
        {
          rel: 'canonical',
          href: () => currentUrl.value,
        },
        // Hreflang para SEO multiidioma
        {
          rel: 'alternate',
          hreflang: 'es',
          href: () => alternateUrls.value.es,
        },
        {
          rel: 'alternate',
          hreflang: 'en',
          href: () => alternateUrls.value.en,
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: () => alternateUrls.value.es,
        },
      ],
      // JSON-LD reactivo para datos estructurados
      script: [
        {
          type: 'application/ld+json',
          children: () => {
            const sd = getSD();
            return sd ? JSON.stringify(sd) : '';
          },
        },
      ],
    });
  }

  return {
    currentUrl,
    alternateUrls,
    fullTitle,
  };
}

/**
 * Función helper para crear datos estructurados de WebSite
 */
export function createWebSiteStructuredData(locale: string): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      locale === 'es'
        ? 'Portafolio de Darwin Gómez, Full Stack Software Engineer especializado en desarrollo web y backend'
        : 'Portfolio of Darwin Gómez, Full Stack Software Engineer specialized in web development and backend',
    inLanguage: locale === 'es' ? 'es-CO' : 'en-US',
  };
}

/**
 * Función helper para crear datos estructurados de Person
 */
export function createPersonStructuredData(locale: string): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Darwin Gómez',
    url: SITE_URL,
    image: `${SITE_URL}/profile-picture.jpg`,
    jobTitle: 'Software Engineer',
    description:
      locale === 'es'
        ? 'Ingeniero de software FullStack especializado en Backend con más de 8 años de experiencia'
        : 'FullStack Software Engineer specialized in Backend with over 8 years of experience',
    sameAs: [
      'https://github.com/darwintnt',
      'https://www.linkedin.com/in/darwintnt',
    ],
    knowsAbout: [
      'Software Engineering',
      'Web Development',
      'Backend Development',
      'Frontend Development',
      'Vue.js',
      'Angular',
      'Node.js',
      'TypeScript',
      'Next.js',
      'Nest.js',
      'Laravel',
      'PHP',
    ],
    nationality: {
      '@type': 'Country',
      name: 'Colombia',
    },
  };
}

/**
 * Función helper para crear datos estructurados de BreadcrumbList
 */
export function createBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>
): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Función helper para crear datos estructurados de ProfilePage
 */
export function createProfilePageStructuredData(
  locale: string
): StructuredData {
  const person = createPersonStructuredData(locale);

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2024-01-01T00:00:00+00:00',
    dateModified: new Date().toISOString(),
    mainEntity: person,
  };
}
