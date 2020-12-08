<template>
  <div>
    渲染函数api示例：
    <p>{{ state.count }}</p>
    <button @click="increment"></button>
  </div>
</template>

<script>
import { reactive, h } from "vue";
export default {
  setup(props, { slots, attrs, emit }) {
    const state = reactive({
      count: 0,
    });
    function increment() {
      state.count++;
    }
    // 返回render函数
    return () =>
      h(
        "div",
        {
          //整个 VNode props 结构是扁平的  
          onClick: increment,
          style: { color: "red" },
          id: "submit",
          innerHTML: state.count,
        },
        // state.count //或者这样写
      );
  },
};
</script>
