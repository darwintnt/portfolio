import { createI18n } from 'vue-i18n';
import es from './locales/es.json';
import en from './locales/en.json';

// Tipos para las locales soportadas
export type Locale = 'es' | 'en';

// Constantes de configuración
export const SUPPORTED_LOCALES: Locale[] = ['es', 'en'];
export const DEFAULT_LOCALE: Locale = 'es';
export const FALLBACK_LOCALE: Locale = 'es';
export const LOCALE_STORAGE_KEY = 'portfolio-locale';

/**
 * Detecta el idioma del navegador y devuelve una locale soportada
 * @returns Locale soportada basada en el idioma del navegador o DEFAULT_LOCALE
 */
export function getBrowserLocale(): Locale {
  const browserLang = navigator.language.split('-')[0];
  return SUPPORTED_LOCALES.includes(browserLang as Locale)
    ? (browserLang as Locale)
    : DEFAULT_LOCALE;
}

/**
 * Obtiene el idioma guardado en localStorage o detecta el del navegador
 * @returns Locale preferida del usuario
 */
export function getPreferredLocale(): Locale {
  const storedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale;

  if (storedLocale && SUPPORTED_LOCALES.includes(storedLocale)) {
    return storedLocale;
  }

  return getBrowserLocale();
}

/**
 * Guarda el idioma seleccionado en localStorage
 * @param locale - Idioma a guardar
 */
export function saveLocale(locale: Locale): void {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

// Mensajes de traducción
const messages = {
  es,
  en,
};

// Crear instancia de i18n
const i18n = createI18n({
  legacy: false, // Usar Composition API
  locale: getPreferredLocale(),
  fallbackLocale: FALLBACK_LOCALE,
  messages,
  globalInjection: true, // Permitir uso de $t en templates
});

export default i18n;
