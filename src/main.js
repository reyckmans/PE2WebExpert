import "../scss/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { markRaw } from "vue";
import router from "./router/router.js";
import App from "./App.vue";
import scss from "../scss/main.scss";

const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});
app.use(router);
app.use(pinia);

app.mount("#app");
