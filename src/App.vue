<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- 1.composition api -->
  <HelloWorld msg="Hello Vue 3.0 + Vite" />

  <!-- 2.teleport传送门 -->
  <TelepoerDemo></TelepoerDemo>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TelepoerDemo from './components/TelepoerDemo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TelepoerDemo
  }
}
</script>
