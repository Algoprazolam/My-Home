import './assets/main.css'
import VueSmoothScroll from 'v-smooth-scroll'

import { createApp } from 'vue'
import App from './index.vue'

const app = createApp(App)
app.use(VueSmoothScroll)
app.mount('#index')

