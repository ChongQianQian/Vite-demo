<!--
 * @Author: 云乐
 * @Date: 2020-12-10 19:29:33
 * @LastEditTime: 2020-12-15 15:53:12
 * @LastEditors: 云乐
 * @Description: 数据注入和接收
-->
<template>
  <div>
    <!-- 数据注入和接收 -->
    <!-- <p>要注入的数值count：{{ count }}</p>
    <button @click="count = 2">点击改变count数据</button>
    <First></First> -->

    <!-- 文件上传和下载 -->
    <FileDown></FileDown>
  </div>
</template>

<script>
import First from "./Privide/First.vue";
import FileDown from "./File/FileDown.vue";

import { ref } from "vue";

export default {
  components: {
    First,
    FileDown
  },
  provide() {
    return {
      age: 12,
      count: this.count,
    };
  },
  setup() {
    const count = ref("1");
    return { count };
  },
};
</script>

<style scoped></style>
