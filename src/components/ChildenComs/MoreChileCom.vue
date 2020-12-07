<template>
  <!-- v-bind="$attrs":默认会把来自父组件的属性添加上去 -->
  <div>
    <input :value="title" @input="onInputChange" v-bind="$attrs" autocomplete="off"/>

    <!-- <p>{{ message }}</p> -->
    <!-- <input v-model="message" /> -->
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
export default {
  props: {
    propName: {
      type: Number,
      default: "Default title",
    },
    modelValue: {
      type: String,
      default: "我是子组件默认的props数据",
    },
  },
  setup() {
    const message = ref("我是setup里面的字符串");

    return { message };
  },
  methods: {
    onInputChange(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style scoped>
</style>