<template>

  <HelloWorld msg="Hello Vue 3.0 + Vite" />

  <KoaTest/>
</template>

<script>
import KoaTest from './components/KoaTest.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    KoaTest
  }
}
</script>
