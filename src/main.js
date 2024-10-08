import { createApp } from "vue";
import "./style.css";
import { Icon } from "@iconify/vue";
import router from "./router";
import App from "./App.vue";

createApp(App).use(Icon).use(router).mount("#app");
