import { createApp, watch } from 'vue';
import { createHead as unheadCreateHead } from '@unhead/vue/client';
import './style.css';
import App from './App.vue';
import i18n from './i18n';

const app = createApp(App);

// Crear instancia de head para gestión de metadatos
const head = unheadCreateHead();
app.use(head);

// Usar plugin i18n
app.use(i18n);

// Establecer el atributo lang del documento para SEO y accesibilidad
document.documentElement.lang = i18n.global.locale.value;

// Observar cambios en el idioma para actualizar el atributo lang
watch(
    () => i18n.global.locale.value,
    (newLocale) => {
        document.documentElement.lang = newLocale;
    }
);

app.mount('#app');
