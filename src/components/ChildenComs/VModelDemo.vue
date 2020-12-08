<template>
  <div>
    <!-- 默认的model显示方式 -->
    <!-- v-bind="$attrs":默认会把来自父组件的属性添加上去 -->

    <input :value="modelValue" @input="onInputChange"/>
    <p @click="onChange">{{modelValue}}</p>
  </div>
</template>

<script>
import { onMounted, ref, watch, reactive } from 'vue';
export default {
  props: {
    modelValue: {
      type: String,
      default: "我是子组件默认的props数据",
    },
  },
  setup(props,ctx){
      function onChange(){
          ctx.emit("update:modelValue","子组件改变父组件数据")
      }
      return {onChange}
  },
  methods: {
    onInputChange(e) {
      this.$emit("update:modelValue", e.target.value);
    }
  },
};
</script>

<style scoped>
</style>