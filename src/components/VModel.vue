<template>
  <div>
    下面是v-model示例：
    <p>{{ pageTitle }}</p>

    下面是子组件内容：
    <ChildComponent v-model="pageTitle"  placeholder="今日待办" autofocus></ChildComponent>
  </div>
</template>

<script>
import { ref } from "vue";
import ChildComponent from "./ChildenComs/ChildComponent.vue";
import MoreChileCom from "./ChildenComs/MoreChileCom.vue";

export default {
  components: {
    ChildComponent,
    MoreChileCom
  },
  setup() {
    const pageTitle = ref("我是来自父组件的字符串");
    return {
      pageTitle,
    };
  },
};
</script>

<style scoped>
</style>
