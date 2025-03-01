import { createRouter, createWebHistory } from "vue-router";
import routes from "./modules/index";
import type { App } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export async function setupRouter(app: App) {
  app.use(router);

  // 路由准备就绪后挂载APP实例
  await router.isReady();
}

export default router;
