import './assets/main.css'
import '@fontsource/open-sans/300.css'

import 'highlight.js/styles/stackoverflow-dark.css'
import hljs from 'highlight.js/lib/core';
import CSS from 'highlight.js/lib/languages/css';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('css', CSS);

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(hljsVuePlugin)

app.use(router)

app.mount('#app')
