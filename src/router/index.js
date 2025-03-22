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

// Guard de navegación global
router.beforeEach((to, from, next) => {
  const publicRoutes = ['/', '/register', '/login'];
  const isAuthenticated = localStorage.getItem('auth');

  if (!publicRoutes.includes(to.path) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;