import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Dashboard from "../pages/Dashboard.vue";
import NotFound from "../pages/NotFound.vue";
import api from "../services/api";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guest: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { guest: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const isAuthenticated = async () => {
  try {
    await api.get("/me");
    return true;
  } catch {
    return false;
  }
};

router.beforeEach(async (to, from, next) => {
  let auth = false;

  try {
    auth = await isAuthenticated();
  } catch {
    auth = false;
  }

  if (to.meta.guest && auth) {
    return next("/dashboard");
  }

  if (to.meta.requiresAuth && !auth) {
    return next("/login");
  }

  next();
});

export default router;
