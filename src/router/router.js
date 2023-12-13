import {createRouter, createWebHistory} from "vue-router";

import home from '@/Pages/home.vue'
import shop from '@/Pages/shop.vue'
import contact from '@/Pages/contact.vue'
import login from '@/Pages/login.vue'
import detailpage from '@/Pages/detailpage.vue'
import winkeland from "@/Pages/winkeland.vue";
import checkoutpage from "@/Pages/checkoutpage.vue";


const routes = [
    // Your routes here
    {
        path: "/",
        name: 'home',
        component: home
        //component: () => import("./Pages/home.vue"),
    },
    {
        path: "/shop",
        name: 'shop',
        component: shop,
        //component:() => import("./Pages/shop.vue")
    },
    {
        path: "/contact",
        name: 'contact',
        component: contact
        //component: () => import("./Pages/contact.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: login
        //component: () => import("./Pages/login.vue"),
    },
    {
        path: "/detailpage/:id",
        name: "detailpage",
        component: detailpage
        //component: () => import("./Pages/detailpage.vue"),
    },
    {
        path: "/winkelmand",
        name: "winkelmand",
        component: winkeland
    },
    {
        path: "/checkoutpage",
        name: "checkoutpage",
        component: checkoutpage
    },

    // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;