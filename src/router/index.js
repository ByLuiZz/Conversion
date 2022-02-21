import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/VistaHome.vue'
import ViewTiempo from '@/views/ViewTiempo.vue'
import ViewMasa from '@/views/ViewMasa.vue'
import ViewLongitud from '@/views/ViewLongitud.vue'
import ViewAlmacenamiento from '@/views/ViewAlmacenamiento.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/conversortiempo',
    name: 'ViewTiempo',
    component: ViewTiempo
  },
  {
    path: '/conversormasa',
    name: 'ViewMasa',
    component: ViewMasa
  },
  {
    path: '/conversorlongitud',
    name: 'ViewLongitud',
    component: ViewLongitud
  },
  {
    path: '/conversoralmacenamiento',
    name: 'ViewAlmacenamiento',
    component: ViewAlmacenamiento
  },
]


const router = new VueRouter({
  routes
})

export default router