import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import * as echarts from "echarts";
import 'animate.css';
import {debounce,throttle} from '@u/common.ts'
const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.config.globalProperties.$echarts = echarts;
app.mount("#app");

app.directive('debounce', {
  // 防抖
  beforeMount(el, binding) {
    debounce(el,binding)
  },
})

app.directive('throttle', {
  // 节流
  beforeMount(el, binding, vnode) {
    throttle(el,binding)
  },
})