import { createApp } from "vue";
import "@/assets/styles/style.css";
import "@/assets/styles/tailwind.scss";
import { setupRouter } from "./router";
import App from "./App.vue";

const app = createApp(App);

function setupApp() {
  // 挂载路由
  setupRouter(app);

  app.mount("#app");
}

setupApp();
