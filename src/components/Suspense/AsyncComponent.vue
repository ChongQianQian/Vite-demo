<template>
  <div>异步数据请求功能</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AsyncComponent",
  setup() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ result: "yuanxi" });
      }, 2000);
    });
  },
});
</script>

<style scoped></style>
