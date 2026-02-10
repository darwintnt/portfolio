/**
 * Tipos TypeScript para las traducciones
 * Proporciona autocompletado y type-safety para las claves de traducción
 */

// Importar las traducciones de español como tipo base
import type es from './locales/es.json';

// Tipo que representa la estructura de las traducciones
export type MessageSchema = typeof es;

// Tipo para las claves de traducción (nested)
export type TranslationKey = keyof MessageSchema;

// Declaración de módulo para vue-i18n
declare module 'vue-i18n' {
  // Define los tipos de esquema de mensaje
  export interface DefineLocaleMessage extends MessageSchema {}
}

// Helper type para extraer claves anidadas
type NestedKeys<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}.${NestedKeys<T[K]>}`
          : K
        : never;
    }[keyof T]
  : never;

// Tipo completo de todas las claves de traducción posibles
export type TranslationKeys = NestedKeys<MessageSchema>;

// Ejemplos de uso con IntelliSense:
// const key: TranslationKeys = 'hero.title';        // ✅ válido
// const key: TranslationKeys = 'nav.home';          // ✅ válido
// const key: TranslationKeys = 'invalid.key';       // ❌ error de TypeScript
