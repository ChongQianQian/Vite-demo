<template>

  <!-- 1.composition api -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <!-- 与现有的 API 配合 this使用 -->
  <!-- <CompositionDemo/> -->

  <!-- 2.teleport传送门 -->
  <!-- <TelepoerDemo></TelepoerDemo> -->
  
  <!-- 3.Fragments:vue3.x组件可以拥有多个根； -->
  <!-- <FragmentsDemo></FragmentsDemo> -->

  <!-- 6.渲染函数 API -->
  <!-- <RenderHDemo></RenderHDemo> -->

  <!-- 8.v-model使用的变化：子组件更改父组件的数据 -->
  <!-- <VModel></VModel>   -->

  <!-- 12.Suspense -->
  <!-- <SuspenseDemo></SuspenseDemo> -->

  <!-- 13.transiton类名变更 -->
  <!-- <TransitonTest></TransitonTest> -->

  <!--14-1 keyCode作为v-on修饰符被移除； -->
  <!-- <KeyCodeRemove></KeyCodeRemove> -->

  <!--14-2 $on $off 和 $once被移除 -->
  <!-- <button @click="sendMsg">emit event</button>
  <MittDemo></MittDemo> -->

  <!-- 4.Emits Component Option -->
  <!-- <EmitsComponentOption @click="handleClick" @myclick="myclick"></EmitsComponentOption> -->
  

  <!-- 实例方法定义组件 -->
  <!-- <comp></comp> -->


  <!-- 实际案例 -->
  <!-- <Todos></Todos> -->
  <div></div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CompositionDemo from './components/CompositionDemo.vue'
import TelepoerDemo from './components/TelepoerDemo.vue'
import FragmentsDemo from './components/FragmentsDemo.vue'
import EmitsComponentOption from './components/EmitsComponentOption.vue'
import TransitonTest from './components/TransitonTest.vue'
import KeyCodeRemove from './components/KeyCodeRemove.vue'
import MittDemo from './components/MittDemo.vue'
import VModel from './components/VModel.vue'; 
import SuspenseDemo from './components/SuspenseDemo.vue';
import RenderHDemo from './components/RenderHDemo.vue'; 

// import Todos from './components/todos/Todos.vue' //局部注册组件

//事件派发和监听
import mitt from 'mitt'
export const emiter = mitt()

export default {
  name: 'App',
  components: {
    HelloWorld,
    CompositionDemo,
    TelepoerDemo,
    FragmentsDemo,
    EmitsComponentOption,
    TransitonTest,
    KeyCodeRemove,
    MittDemo,
    VModel,
    SuspenseDemo,
    RenderHDemo
    // Todos
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
