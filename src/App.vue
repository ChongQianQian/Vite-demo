<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

  <!-- 1.composition api -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->

  <!-- 2.teleport传送门 -->
  <!-- <TelepoerDemo></TelepoerDemo> -->
  
  <!-- 3.Fragments:vue3.x组件可以拥有多个根； -->
  <!-- <FragmentsDemo></FragmentsDemo> -->

  <!-- 4.Emits Component Option -->
  <!-- <EmitsComponentOption @click="handleClick" @myclick="myclick"></EmitsComponentOption> -->
  
  <!-- 5.自定义渲染器(custom renderer) -->

  <!-- 实例方法定义组件 -->
  <!-- <comp></comp> -->

  <!-- transiton类名变更 -->
  <!-- <TransitonTest></TransitonTest> -->

  <!-- keyCode作为v-on修饰符被移除； -->
  <!-- <KeyCodeRemove></KeyCodeRemove> -->

  <!-- $on $off 和 $once被移除 -->
  <button @click="sendMsg">emit event</button>

  <MittDemo></MittDemo>
  <div></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TelepoerDemo from './components/TelepoerDemo.vue'
import FragmentsDemo from './components/FragmentsDemo.vue'
import EmitsComponentOption from './components/EmitsComponentOption.vue'
import TransitonTest from './components/TransitonTest.vue'
import KeyCodeRemove from './components/KeyCodeRemove.vue'
import MittDemo from './components/MittDemo.vue'

//事件派发和监听
import mitt from 'mitt'
export const emiter = mitt()

export default {
  name: 'App',
  components: {
    HelloWorld,
    TelepoerDemo,
    FragmentsDemo,
    EmitsComponentOption,
    TransitonTest,
    KeyCodeRemove,
    MittDemo
  },
  methods:{
    handleClick(){
      console.log("点击拉") // emits 选项 不加会触发两次
    },
    myclick(){
      console.log("子组件触发父组件") // emits 选项 不加会触发两次
    },
    sendMsg(){
      //派发事件
      emiter.emit("someEvent","我是msg")
    }
  },
  setup() {
  }
}
</script>
