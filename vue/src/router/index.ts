import { createRouter, createWebHistory } from "vue-router";

import DataView from "../views/DataView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import OauthView from "@/views/OauthView.vue";

const routerHistory = createWebHistory();
const routes = [
  { path: "/", component: PortfolioView },
  { path: "/data", component: DataView },
  { path: "/oauth", component: OauthView },
];

const router = createRouter({
  history: routerHistory,
  routes,
});

export default router;
