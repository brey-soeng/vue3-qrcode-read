import { createRouter, createWebHistory } from 'vue-router'


import About from '@/views/about'
import Home from '@/views/home'
import QrcodeStream from '@/components/qrcode-reader/QrcodeStream'
import QrcodeCapture from '@/components/qrcode-reader/QrcodeCapture'
const routes = [
    { path: '/', component:Home },
    { path: '/about', component: About },
    { path: '/qr-scanner', component: QrcodeStream },
    { path: '/qr-upload', component: QrcodeCapture }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router