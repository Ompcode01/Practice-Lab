import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/home.vue";
import categories from "../components/Categories.vue"

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/categories", name: "categories", component: categories },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
