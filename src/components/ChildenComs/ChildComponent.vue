<template>
  <div>
    <input :value="modelValue" @input="onInputChange" v-bind="$attrs"/>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: "我是子组件默认的props数据",
    },
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