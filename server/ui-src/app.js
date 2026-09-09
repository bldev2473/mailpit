import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import mitt from "mitt";

import "./assets/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "bootstrap";
import "vue-css-donut-chart/src/styles/main.css";

import { i18n } from "./stores/i18n";

const app = createApp(App);

app.config.globalProperties.$t = (key, params) => i18n.t(key, params);
app.config.globalProperties.$i18n = i18n;

// Global event bus used to subscribe to websocket events
// such as message deletes, updates & truncation.
const eventBus = mitt();
app.provide("eventBus", eventBus);

app.use(router);
app.mount("#app");
