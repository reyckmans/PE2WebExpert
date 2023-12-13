import '../scss/main.scss'

import { createApp } from "vue";
import {createPinia} from "pinia";

import router from './router/router.js'
import App from './App.vue'
import scss from "../scss/main.scss"

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);

app.mount("#app");


