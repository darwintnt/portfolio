/**
 * Generates public/sitemap.xml.
 *
 * This site is a single-page SPA with client-side i18n (no vue-router, no real
 * per-language URLs), so the sitemap advertises only the canonical homepage.
 * Google ignores changefreq/priority, and hreflang alternates would point to
 * URLs that do not exist (e.g. /en/ returns 404).
 *
 * Run with: node scripts/generate-sitemap.js (wired as a prebuild hook)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://www.darwintnt.co';

// Update manually ONLY when the homepage content meaningfully changes.
// Google uses lastmod only when it is consistently and verifiably accurate;
// auto-dating it on every build trains crawlers to distrust it.
const SITE_LASTMOD = '2026-09-23';

/**
 * Builds the sitemap.xml content.
 */
function generateSitemap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${SITE_LASTMOD}</lastmod>
  </url>
</urlset>
`;
}

/**
 * Saves the sitemap to public/sitemap.xml.
 */
function saveSitemap() {
    try {
        const sitemapContent = generateSitemap();
        const publicDir = path.resolve(__dirname, '../public');
        const sitemapPath = path.join(publicDir, 'sitemap.xml');

        // Create the public directory if it does not exist
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir, { recursive: true });
        }

        fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

        console.log('✅ Sitemap generated at:', sitemapPath);
    } catch (error) {
        console.error('❌ Failed to generate sitemap:', error);
        process.exit(1);
    }
}

saveSitemap();
