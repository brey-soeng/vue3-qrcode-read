import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import VueQrcodeReader from "vue3-qrcode-reader"

import router from '@/router'

const app = createApp(App)
app.use(VueQrcodeReader)
app.use(router)
app.use(ElementPlus,{ size: 'small', zIndex: 3000 })
app.mount('#app')
