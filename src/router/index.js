import Swal from "sweetalert2";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/Home.vue") },
  { path: "/register", component: () => import("../views/Register.vue") },
  { path: "/login", component: () => import("../views/Login.vue") },
  { path: "/dashboard", component: () => import("../views/Dashboard.vue") },
  { path: "/profile", component: () => import("../views/profile.vue") },
  { path: "/create", component: () => import("../views/createPortafolio.vue") },
  { path: "/...", component: () => import("../views/NotFound.vue") },
  {
    path: "/portafolio/:username",
    component: () => import("../views/PortfolioPublic.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard de navegación global
router.beforeEach((to, from, next) => {
  const publicRoutes = ["/", "/register", "/login"];
  const isAuthenticated = localStorage.getItem("auth");

  if (publicRoutes.includes(to.path) || to.path.startsWith("/portafolio/")) {
    next();
  } else if (!isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

let inactivityTimer;

const resetInactivityTimer = () => {
  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(() => {
    localStorage.removeItem("auth");
    Swal.fire({
      icon: 'error',
      title: 'Tu sesión ha expirado por inactividad.',
      text: 'Por favor, inicia sesión nuevamente para continuar.',
      showConfirmButton: true,
      timer: 10000
    });
    router.push("/login"); 
  }, 120 * 60 * 1000);
};

const setupInactivityListener = () => {
  window.addEventListener("mousemove", resetInactivityTimer);
  window.addEventListener("keydown", resetInactivityTimer);
  window.addEventListener("click", resetInactivityTimer);
  window.addEventListener("scroll", resetInactivityTimer);

  resetInactivityTimer();
};

setupInactivityListener();

export default router;