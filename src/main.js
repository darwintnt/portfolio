import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from './i18n';

const app = createApp(App);

// Usar plugin i18n
app.use(i18n);

// Establecer el atributo lang del documento para SEO y accesibilidad
document.documentElement.lang = i18n.global.locale.value;

app.mount('#app');
