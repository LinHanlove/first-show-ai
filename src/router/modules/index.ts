import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/customerService",
    name: "customerService",
    component: () => import("@/views/customerService/index.vue"),
    meta: {
      title: "首展客服",
    },
  },
];
export default routes;
