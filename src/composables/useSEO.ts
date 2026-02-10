import { useHead } from '@unhead/vue';
import { computed } from 'vue';
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
// const TWITTER_HANDLE = '';
// const FB_APP_ID = '';

export function useSEO(
  metadata?: SEOMetadata,
  structuredData?: StructuredData
) {
  const { locale } = useI18n();

  // Construir URL completa basada en el idioma
  const currentUrl = computed(() => {
    const path = metadata?.url || '';
    const lang = locale.value === 'es' ? '' : `/${locale.value}`;
    return `${SITE_URL}${lang}${path}`;
  });

  // Construir URLs alternativas para hreflang
  const alternateUrls = computed(() => ({
    es: `${SITE_URL}${metadata?.url || ''}`,
    en: `${SITE_URL}/en${metadata?.url || ''}`,
  }));

  // Construir título completo
  const fullTitle = computed(() => {
    if (!metadata?.title) return SITE_NAME;
    return `${metadata.title} | Darwin Gómez`;
  });

  // Configurar metadatos
  if (metadata) {
    useHead({
      title: fullTitle.value,
      htmlAttrs: {
        lang: locale.value,
      },
      meta: [
        // Meta tags básicos
        {
          name: 'description',
          content: metadata.description,
        },
        ...(metadata.keywords
          ? [
              {
                name: 'keywords',
                content: metadata.keywords,
              },
            ]
          : []),
        {
          name: 'author',
          content: metadata.author || 'Darwin Gómez',
        },

        // Open Graph
        {
          property: 'og:title',
          content: fullTitle.value,
        },
        {
          property: 'og:description',
          content: metadata.description,
        },
        {
          property: 'og:type',
          content: metadata.type || 'website',
        },
        {
          property: 'og:url',
          content: currentUrl.value,
        },
        {
          property: 'og:image',
          content: metadata.image || DEFAULT_IMAGE,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'og:site_name',
          content: SITE_NAME,
        },
        {
          property: 'og:locale',
          content: locale.value === 'es' ? 'es_CO' : 'en_US',
        },
        {
          property: 'og:locale:alternate',
          content: locale.value === 'es' ? 'en_US' : 'es_CO',
        },
        // ...(FB_APP_ID ? [{
        //   property: 'fb:app_id',
        //   content: FB_APP_ID,
        // }] : []),

        // // Twitter Cards
        // {
        //   name: 'twitter:card',
        //   content: 'summary_large_image',
        // },
        // {
        //   name: 'twitter:site',
        //   content: TWITTER_HANDLE,
        // },
        // {
        //   name: 'twitter:creator',
        //   content: TWITTER_HANDLE,
        // },
        // {
        //   name: 'twitter:title',
        //   content: fullTitle.value,
        // },
        // {
        //   name: 'twitter:description',
        //   content: metadata.description,
        // },
        // {
        //   name: 'twitter:image',
        //   content: metadata.image || DEFAULT_IMAGE,
        // },

        // Metadatos adicionales de artículo (si aplica)
        ...(metadata.publishedTime
          ? [
              {
                property: 'article:published_time',
                content: metadata.publishedTime,
              },
            ]
          : []),
        ...(metadata.modifiedTime
          ? [
              {
                property: 'article:modified_time',
                content: metadata.modifiedTime,
              },
            ]
          : []),
        ...(metadata.section
          ? [
              {
                property: 'article:section',
                content: metadata.section,
              },
            ]
          : []),
        ...(metadata.tags
          ? metadata.tags.map((tag) => ({
              property: 'article:tag',
              content: tag,
            }))
          : []),
      ],
      link: [
        // Canonical
        {
          rel: 'canonical',
          href: currentUrl.value,
        },
        // Hreflang para SEO multiidioma
        {
          rel: 'alternate',
          hreflang: 'es',
          href: alternateUrls.value.es,
        },
        {
          rel: 'alternate',
          hreflang: 'en',
          href: alternateUrls.value.en,
        },
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: alternateUrls.value.es, // El idioma predeterminado
        },
      ],
      // JSON-LD para datos estructurados
      ...(structuredData
        ? {
            script: [
              {
                type: 'application/ld+json',
                children: JSON.stringify(structuredData),
              },
            ],
          }
        : {}),
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
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
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
        : 'FullStack Software enginer specialized in Backend with over 8 years of experience',
    sameAs: [
      'https://github.com/darwintnt',
      'https://linkedin.com/in/darwintnt',
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
