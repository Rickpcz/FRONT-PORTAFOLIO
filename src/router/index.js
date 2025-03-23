import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("../views/Home.vue") },
  { path: "/register", component: () => import("../views/Register.vue") },
  { path: "/login", component: () => import("../views/Login.vue") },
  { path: "/dashboard", component: () => import("../views/Dashboard.vue") },
  { path: "/profile", component: () => import("../views/profile.vue") },
  { path: "/create", component: () => import("../views/createPortafolio.vue") },
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

export default router;
