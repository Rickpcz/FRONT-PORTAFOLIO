import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: '/dashboard', component: () => import('../views/Dashboard.vue') },
  { path: '/profile', component: () => import('../views/profile.vue') },
  { path: '/create', component: () => import('../views/createPortafolio.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
