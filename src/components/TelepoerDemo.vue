<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>

  <ModelButton></ModelButton>
</template>

<script>
// 2. teleport:是以个全局的组件，可以直接使用 

import ModelButton from './ModelButton.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  components:{
      ModelButton
  }
}
</script>