<template>
  <input
    type="text"
    :value="todo-title"
    @input="onInputChange"
    v-bind="$attrs"
  />
</template>

<script>
//v-modal自定义写法
export default {
  props: {
    todoTitle: { //默认写法
      type: String,
      default: "",
    },
  },
  methods: {
    onInputChange(e) {
      //派发
      this.$emit("update:todoTitle", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
