/**
 * Script para generar sitemap.xml automáticamente
 * Ejecutar con: node scripts/generate-sitemap.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración
const SITE_URL = 'https://www.darwintnt.co';
const LANGUAGES = ['es', 'en'];
const DEFAULT_LANGUAGE = 'es';

// Rutas de la aplicación (añade más si tienes rutas adicionales)
const routes = [
    {
        path: '/',
        changefreq: 'weekly',
        priority: '1.0',
    },
    // Añade más rutas aquí si usas Vue Router
    // {
    //   path: '/about',
    //   changefreq: 'monthly',
    //   priority: '0.8',
    // },
];

/**
 * Genera el contenido del sitemap.xml
 */
function generateSitemap() {
    const today = new Date().toISOString().split('T')[0];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

    // Generar URLs para cada idioma
    LANGUAGES.forEach((lang) => {
        routes.forEach((route) => {
            const isDefault = lang === DEFAULT_LANGUAGE;
            const langPrefix = isDefault ? '' : `/${lang}`;
            const url = `${SITE_URL}${langPrefix}${route.path}`;

            xml += `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>`;

            // Añadir hreflang alternates
            LANGUAGES.forEach((altLang) => {
                const altIsDefault = altLang === DEFAULT_LANGUAGE;
                const altLangPrefix = altIsDefault ? '' : `/${altLang}`;
                const altUrl = `${SITE_URL}${altLangPrefix}${route.path}`;
                xml += `
    <xhtml:link rel="alternate" hreflang="${altLang}" href="${altUrl}" />`;
            });

            // x-default apunta al idioma predeterminado
            const defaultUrl = `${SITE_URL}${route.path}`;
            xml += `
    <xhtml:link rel="alternate" hreflang="x-default" href="${defaultUrl}" />`;

            xml += `
  </url>`;
        });
    });

    xml += `
  
</urlset>`;

    return xml;
}

/**
 * Guarda el sitemap en public/sitemap.xml
 */
function saveSitemap() {
    try {
        const sitemapContent = generateSitemap();
        const publicDir = path.resolve(__dirname, '../public');
        const sitemapPath = path.join(publicDir, 'sitemap.xml');

        // Crear directorio public si no existe
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
        }

        // Guardar sitemap
        fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

        console.log('✅ Sitemap generado exitosamente en:', sitemapPath);
        console.log(`📄 Total de URLs: ${LANGUAGES.length * routes.length}`);
    } catch (error) {
        console.error('❌ Error al generar sitemap:', error);
        process.exit(1);
    }
}

// Ejecutar
saveSitemap();
