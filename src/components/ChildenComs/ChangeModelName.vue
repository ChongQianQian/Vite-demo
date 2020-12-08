<template>
  <div>
    <input :value="title" @input="onInputChange"/>
    <p @click="onChange">{{title}}</p>
  </div>
</template>

<script>
// 若需要更改 model 名称
//1.在父组件中 v-model:title  title就是一个新命名的名称
//2.在子组件中 使用
// props: {
//     title: { 
//       type: String,
//       default: "我是子组件默认的props数据",
//     },
//   },
//3.方法触发："update:title"
import { onMounted, ref, watch, reactive } from 'vue';
export default {
  props: {
    title: { 
      type: String,
      default: "我是子组件默认的props数据",
    },
  },
  setup(props,ctx){
      function onChange(){
          ctx.emit("update:title","子组件改变父组件数据")
      }
      return {onChange}
  },
  methods: {
    onInputChange(e) {
      this.$emit("update:title", e.target.value);
    }
  },
};
</script>

<style scoped>
</style>