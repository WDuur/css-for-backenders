import './assets/main.css'
import '@fontsource/open-sans/300.css'

import 'highlight.js/styles/stackoverflow-dark.css'
import hljs from 'highlight.js/lib/core'
import CSS from 'highlight.js/lib/languages/css'
import JAVASCRIPT from 'highlight.js/lib/languages/javascript'
import SCSS from 'highlight.js/lib/languages/scss'
import hljsVuePlugin from '@highlightjs/vue-plugin'

hljs.registerLanguage('css', CSS)
hljs.registerLanguage('scss', SCSS)
hljs.registerLanguage('javascript', JAVASCRIPT)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import BaseElementBlock from '@/components/BaseElementBlock.vue'
import BaseElementButton from './components/BaseElementButton.vue'
import IndicatorLabel from './components/IndicatorLabel.vue'
import EndIndication from './components/EndIndication.vue'

const app = createApp(App)
app.use(hljsVuePlugin)
app.component('IndicatorLabel', IndicatorLabel)
app.component('BaseElementBlock', BaseElementBlock)
app.component('BaseElementButton', BaseElementButton)
app.component('EndIndication', EndIndication)

app.use(router)

app.mount('#app')
