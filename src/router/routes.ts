import { RouteRecordRaw } from "vue-router";
import HomePage from "@/views/HomePage.vue";



export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    component: HomePage,
  },

  {
    path: "/xqsb",
    name: "心情随笔",
    component: HomePage,
  },

  {
    path: "/jsfx",
    name: "技术分享",
    component: HomePage,
  },

  {
    path: "/ly",
    name: "留言",
    component: HomePage,
  },

  {
    path: "/gyw",
    name: "关于我",
    component: HomePage,
  },

];

