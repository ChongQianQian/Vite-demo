<template>
  <input
    type="text"
    :value="modelValue"
    @input="onInputChange"
    v-bind="$attrs"
  />
</template>

<script>
//v-modal默认写法
export default {
  props: {
    modelValue: { //默认写法
      type: String,
      default: "",
    },
  },
  methods: {
    onInputChange(e) {
      //派发
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
