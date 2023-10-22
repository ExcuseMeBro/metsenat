import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth.store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // *** MAIN ***
    {
      path: "/",
      component: () => import("@/layouts/Default.vue"),
      children: [
        {
          path: "/",
          name: "Asosiy",
          component: () => import("@/pages/Home.vue"),
          meta: {
            title: "Asosiy",
            protected: false,
          },
        },
        {
          path: "/grants",
          name: "Grantlar",
          component: () => import("@/pages/Grants.vue"),
          meta: {
            title: "Grantlar",
            protected: false,
          },
        },
        {
          path: "/register",
          name: "Ro'yhatdan o'tish",
          component: () => import("@/pages/Register.vue"),
          meta: {
            title: "Ro'yhatdan o'tish",
            protected: false,
          },
        },
        {
          path: "/tax",
          name: "Soliq imtiyozlari",
          component: () => import("@/pages/Tax.vue"),
          meta: {
            title: "Soliq imtiyozlari",
            protected: false,
          },
        },
      ],
    },
    // *** DASHBOARD ***
    {
      path: "/dashboard",
      redirect: "/dashboard/main/",
      component: () => import("@/layouts/Dashboard.vue"),
      children: [
        {
          path: "/dashboard/main",
          name: "Dashboard",
          component: () => import("@/pages/Dashboard.vue"),
          meta: {
            title: "Dashboard",
            protected: false,
          },
        },
      ],
    },
    // *** AUTH ***
    {
      path: "/auth",
      redirect: "/auth/login",
      component: () => import("@/layouts/Auth.vue"),
      children: [
        {
          path: "/auth/login",
          name: "Login",
          component: () => import("@/pages/Login.vue"),
          meta: {
            title: "Tizimga kirish",
          },
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from) => {
  document.title = `METSENAT | ${to.meta.title}`;
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const isAuthenticated = authStore.user !== null;
  if (to.meta.protected && !isAuthenticated) {
    next({ name: "Asosiy" });
  } else {
    next();
  }
});

export default router;
