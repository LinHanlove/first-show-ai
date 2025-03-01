import { createApp } from "vue";
import { setupRouter } from "./router";
import "@/assets/styles/index.scss";
import App from "./App.vue";

const app = createApp(App);

function setupApp() {
  // 挂载路由
  setupRouter(app);

  app.mount("#app");
}

setupApp();
