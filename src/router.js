import { createRouter, createWebHistory } from "vue-router";
import Main from "./pages/MainComp.vue";
import NotFound from "./pages/NotFound.vue";
import Cart from "./pages/Cart.vue";
import ProductDetails from "./components/ProductDetails.vue";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/productdetails",
    component: ProductDetails,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/:CatchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
