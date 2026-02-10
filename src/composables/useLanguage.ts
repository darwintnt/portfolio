import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Locale } from '../i18n';
import { SUPPORTED_LOCALES, saveLocale } from '../i18n';

/**
 * Composable para manejar el idioma de la aplicación
 * Proporciona funcionalidad para cambiar idioma y obtener información del idioma actual
 */
export function useLanguage() {
  const { locale, t, tm } = useI18n();

  /**
   * Idioma actual de la aplicación
   */
  const currentLocale = computed<Locale>(() => locale.value as Locale);

  /**
   * Lista de idiomas soportados con sus nombres
   */
  const availableLocales = computed(() => [
    { code: 'es', name: 'Español', nativeName: 'Español' },
    { code: 'en', name: 'English', nativeName: 'English' },
  ]);

  /**
   * Información del idioma actual
   */
  const currentLanguage = computed(() =>
    availableLocales.value.find((lang) => lang.code === currentLocale.value)
  );

  /**
   * Cambia el idioma de la aplicación
   * @param newLocale - Nuevo idioma a establecer
   */
  const changeLocale = (newLocale: Locale): void => {
    if (!SUPPORTED_LOCALES.includes(newLocale)) {
      console.warn(`Locale "${newLocale}" no soportada. Usando locale actual.`);
      return;
    }

    locale.value = newLocale;
    saveLocale(newLocale);

    // Actualizar atributo lang del documento para SEO y accesibilidad
    document.documentElement.lang = newLocale;
  };

  /**
   * Alterna entre los idiomas disponibles
   */
  const toggleLocale = (): void => {
    const currentIndex = SUPPORTED_LOCALES.indexOf(currentLocale.value);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LOCALES.length;
    changeLocale(SUPPORTED_LOCALES[nextIndex]);
  };

  /**
   * Verifica si un idioma es el actual
   * @param localeToCheck - Idioma a verificar
   */
  const isCurrentLocale = (localeToCheck: Locale): boolean => {
    return currentLocale.value === localeToCheck;
  };

  return {
    // Estado
    currentLocale,
    availableLocales,
    currentLanguage,

    // Métodos
    changeLocale,
    toggleLocale,
    isCurrentLocale,

    // Funciones de traducción de vue-i18n
    t,
    tm,
  };
}
