import { createApp, h } from "vue";
import App from "./App.vue";
import "./index.css";
// import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const app = createApp(App)
//   .component("comp", {
//     render() {
//       return h("div", "i am a comp");
//     },
//   })
  .mount("#app");

// app.config.productionTip = false;
// app.use(Antd);
