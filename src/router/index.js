import { createRouter, createWebHistory } from 'vue-router'


import About from '@/views/about'
import Home from '@/views/home'
import QrcodeStream from '@/components/qrcode-reader/QrcodeStream'
import QrcodeCapture from '@/components/qrcode-reader/QrcodeCapture'
import SortTableJs from '@/views/sort-table-js'
import TableDrag from '@/views/table-drag'
import Clipboard from '@/views/clipboard'
const routes = [
    { path: '/', component:Home },
    { path: '/about', component: About },
    { path: '/qr-scanner', component: QrcodeStream },
    { path: '/qr-upload', component: QrcodeCapture },
    { path: '/sort-table-js', component: SortTableJs },
    { path: '/table-drag-drop', component: TableDrag },
    { path: '/clipboard', component: Clipboard }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router