import { createRouter, createWebHistory } from "vue-router";

import home from "@/Pages/home.vue";
import shop from "@/Pages/shop.vue";
import contact from "@/Pages/contact.vue";
import login from "@/Pages/login.vue";
import detailpage from "@/Pages/detailpage.vue";
import winkelmand from "@/Pages/winkelmand.vue";
import checkoutpage from "@/Pages/checkoutpage.vue";

const routes = [
  // Your routes here
  {
    path: "/",
    name: "home",
    component: home,
    //component: () => import("./Pages/home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: home,
    //component: () => import("./Pages/home.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: shop,
    //component:() => import("./Pages/shop.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
    //component: () => import("./Pages/contact.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: login,
    //component: () => import("./Pages/login.vue"),
  },
  {
    path: "/detailpage/:id",
    name: "detailpage",
    component: detailpage,
    //component: () => import("./Pages/detailpage.vue"),
  },
  {
    path: "/winkelmand",
    name: "winkelmand",
    component: winkelmand,
  },
  {
    path: "/checkoutpage",
    name: "checkoutpage",
    component: checkoutpage,
  },

  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    if (to.name === "about") {
      return { top: 10000000 };
    }
  },
});

export default router;
