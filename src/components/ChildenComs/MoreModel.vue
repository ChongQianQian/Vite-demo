<template>
  <div>
    <input :value="title" @input="onInputChange" />
    <input :value="title2" @input="onInputChange2" />
    <p @click="onChange">{{ title }}</p>
    <p @click="onChange">{{ title2 }}</p>
  </div>
</template>

<script>
// 若需要新增多个 v-model 则需要给每一个model添加名称
//1.在父组件中 v-model:title  title就是一个新命名的名称
//2.在子组件中 使用
// props: {
//     title: {
//       type: String,
//       default: "我是子组件默认的props数据",
//     },
//     第二个v-model名称
//   },
//3.方法触发："update:title"
import { onMounted, ref, watch, reactive } from "vue";
export default {
  props: {
    title: {
      type: String,
      default: "我是子组件默认的props数据",
    },
    title2: {
      type: String,
      default: "我是子组件默认的props数据",
    },
  },
  setup(props, ctx) {
    function onChange() {
      ctx.emit("update:title", "子组件改变父组件数据");
    }
    return { onChange };
  },
  methods: {
    onInputChange(e) {
      this.$emit("update:title", e.target.value);
    },
    onInputChange2(e) {
      this.$emit("update:title2", e.target.value);
    },
  },
};
</script>

<style scoped>
</style>