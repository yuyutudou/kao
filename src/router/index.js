import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 登录页面
    {
      path: "/",
      name: "login",
      component: () => import("../components/land/Land.vue"),
    },
    // 首页
    {
      path: "/home",
      name: "home",
      component: () => import("../components/layout/sidebar.vue"),
    },
  ],
});

export default router;
