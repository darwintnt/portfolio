#!/usr/bin/env node

/**
 * Script para validar que todos los archivos de traducción tienen las mismas claves
 * Uso: node scripts/validate-translations.js
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Colores para la consola
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
};

// Función para obtener todas las claves de un objeto anidado
function getNestedKeys(obj, prefix = '') {
    let keys = [];

    for (const key in obj) {
        const fullKey = prefix ? `${prefix}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            keys = keys.concat(getNestedKeys(obj[key], fullKey));
        } else {
            keys.push(fullKey);
        }
    }

    return keys;
}

// Función principal
function validateTranslations() {
    console.log(`${colors.blue}🔍 Validando archivos de traducción...${colors.reset}\n`);

    // Cargar archivos JSON
    const esPath = resolve(__dirname, '../src/i18n/locales/es.json');
    const enPath = resolve(__dirname, '../src/i18n/locales/en.json');

    let esData, enData;

    try {
        esData = JSON.parse(readFileSync(esPath, 'utf-8'));
        enData = JSON.parse(readFileSync(enPath, 'utf-8'));
    } catch (error) {
        console.error(`${colors.red}❌ Error al leer archivos JSON:${colors.reset}`, error.message);
        process.exit(1);
    }

    // Obtener claves
    const esKeys = getNestedKeys(esData).sort();
    const enKeys = getNestedKeys(enData).sort();

    // Encontrar diferencias
    const missingInEn = esKeys.filter(key => !enKeys.includes(key));
    const missingInEs = enKeys.filter(key => !esKeys.includes(key));

    // Mostrar resultados
    console.log(`${colors.blue}📊 Estadísticas:${colors.reset}`);
    console.log(`   Español (es.json): ${esKeys.length} claves`);
    console.log(`   Inglés (en.json): ${enKeys.length} claves\n`);

    let hasErrors = false;

    if (missingInEn.length > 0) {
        hasErrors = true;
        console.log(`${colors.red}❌ Claves faltantes en en.json:${colors.reset}`);
        missingInEn.forEach(key => console.log(`   - ${key}`));
        console.log('');
    }

    if (missingInEs.length > 0) {
        hasErrors = true;
        console.log(`${colors.red}❌ Claves faltantes en es.json:${colors.reset}`);
        missingInEs.forEach(key => console.log(`   - ${key}`));
        console.log('');
    }

    if (!hasErrors) {
        console.log(`${colors.green}✅ ¡Todas las traducciones están sincronizadas!${colors.reset}`);
        console.log(`${colors.green}✨ Ambos archivos tienen las mismas claves.${colors.reset}\n`);
        process.exit(0);
    } else {
        console.log(`${colors.yellow}⚠️  Por favor, sincroniza los archivos de traducción.${colors.reset}\n`);
        process.exit(1);
    }
}

// Ejecutar validación
validateTranslations();
