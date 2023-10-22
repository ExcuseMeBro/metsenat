import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/global.css";
import router from "@/router";
import App from "@/App.vue";
import VueApexCharts from "vue3-apexcharts";
import { MotionPlugin } from "@vueuse/motion";
import { VueRecaptchaPlugin } from 'vue-recaptcha/head'

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueApexCharts);
app.use(MotionPlugin);
app.use(VueRecaptchaPlugin, { 
  v2SiteKey: import.meta.env.VITE_GG_API_KEY,
  v3SiteKey: import.meta.env.VITE_GG_API_KEY 
});
app.mount("#app");
