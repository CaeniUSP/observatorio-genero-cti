// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home             from '../views/Home.vue'
import TodasPublicacoes from '../views/TodasPublicacoes.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',             name: 'Home',             component: Home },
    { path: '/publicacoes',  name: 'TodasPublicacoes',  component: TodasPublicacoes },
    // outras rotas que precisar…
  ]
})
