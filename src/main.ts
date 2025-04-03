import './assets/main.css'
import '@fontsource/open-sans/300.css'

import 'highlight.js/styles/stackoverflow-dark.css'
import hljs from 'highlight.js/lib/core';
import CSS from 'highlight.js/lib/languages/css';
import JAVASCRIPT from 'highlight.js/lib/languages/javascript';
import SCSS from 'highlight.js/lib/languages/scss';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('css', CSS);
hljs.registerLanguage('scss', SCSS);
hljs.registerLanguage('javascript', JAVASCRIPT);

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(hljsVuePlugin)

app.use(router)

app.mount('#app')
