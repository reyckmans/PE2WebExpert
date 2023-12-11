import '../scss/main.scss'

import { createApp } from "vue";

import router from './router/router.js'
import App from './App.vue'
import scss from "../scss/main.scss"

const app = createApp(App);
app.use(router);

app.mount("#app");