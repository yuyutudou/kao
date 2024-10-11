import { createRouter, createWebHistory } from "vue-router";
import Land from "../components/land/Land.vue";
import sidebar from "../components/layout/sidebar.vue";
import layout from "../components/layout/layout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 登录页面
    {
      path: "/",
      name: "login",
      component: Land,
    },
    // 首页
    {
      path: "/home",
      name: "home",
      component: sidebar,
      children: [
        {
          path: "/create",
          name: "create",
          component: layout,
        },
      ],
    },
  ],
});

export default router;
