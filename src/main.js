import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { Button, message } from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";
import EditTodos from './components/todos/EditTodos.vue'

const app = createApp(App)
  // .component("EditTodos",EditTodos) //全局注册组件
  // .mount("#app");

app.config.productionTip = false;
app.config.globalProperties.$message = message;
app.use(Button)
app.mount("#app")
app.component("EditTodos",EditTodos) //全局注册组件