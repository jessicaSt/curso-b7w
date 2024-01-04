
import { createRouter, createWebHistory } from 'vue-router';

import Menu from '../components/Menu.vue';
import ListaFiltrada from '../components/ListaFiltrada.vue';
import ListaParticipantes from '../components/ListaParticipantes.vue';
import ex43 from '../components/ex43.vue';
import ex45 from '../components/ex45.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Menu },
    { path: '/listafiltrada', component: ListaFiltrada },
    { path: '/listaparticipantes', component: ListaParticipantes },
    { path: '/ex43', component: ex43 },
    { path: '/ex45', component: ex45 },
  ]
})


export default router 