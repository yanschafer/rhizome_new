import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import AosVue from "aos-vue";

import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { Video } from '@splidejs/splide-extension-video';
import '@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css';

import Tooltip from 'primevue/tooltip';

const app = createApp(App)

app.directive('tooltip', Tooltip);
app.use(createPinia())
app.use(AosVue)
app.use( VueSplide, Video );
app.use(router)
app.mount('#app')
