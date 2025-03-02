import { createApp } from "vue";
import { setupRouter } from "./router";
import { Icon } from "vant";
import { setupAssets } from "@/plugins";
import App from "./App.vue";

const app = createApp(App);

function setupPlugins() {
  // 引入静态资源
  setupAssets();
}

function setupApp() {
  // 挂载路由
  setupRouter(app);

  app.use(Icon);

  app.mount("#app");
}

setupPlugins();

setupApp();
