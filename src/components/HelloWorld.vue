<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <!-- reactive声明方式:必须得使用data.xxx -->
  <p>data中的数据是： {{ data.counter }}</p>
  <p>data中的双数据是：{{ data.doubleCounter }}</p>
  <button @click="data.change">双击改变</button>

  <!-- ref声明方式 -->
  <p>data中的数据是： {{ data2 }}</p>

  <!-- refs方式 -->
  <p>refs转换的数据：{{doubleCounter}}</p>

  <!-- ref -->
  <p ref="desc"></p>
</template>

<script>
// 1.composition api:组合式 API: 一组低侵入式的、函数式的 API，使得我们能够更灵活地「组合」组件的逻辑。

//如果setup嫌弃代码比较多的话，可以抽取出来
//reactive声明方式:必须得使用data.xxx,为了方便可以使用 torefs()来解构出来
import { computed, onMounted, onUnmounted, reactive, ref, toRefs, watch } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() { //data依然可以使用
    return {
      count: 0,
    };
  },
  setup() {
    //data相关的处理：这样可以集中的处理data中的逻辑；
    const data = userCounter();

    //other data:other data的数据处理逻辑
    let data2 = ref("其他数据"); //使用ref来声明单值的相应式数据
    data2 = 2; //不会报错

    //other data:使用torefs()
    const {counter,doubleCounter} = userCounterTorefs()

    //other data:使用元素的引用ref：
    const desc = ref(null)
    watch(()=>data.counter,(value,oldvalue)=>{
       //desc.value == <p></p>
      const p = desc.value
      p.textContent  = `counter change from ${oldvalue} to ${value}`
    })

    return { data, data2 ,counter,doubleCounter,desc}; //通过上下文的方式返回出去
  },
};

function userCounter() {
  // reactive: 接收一个普通对象然后返回该对象的响应式代理，等同于2.x中的Vue.observable()；
  const data = reactive({
    counter: 1, //单个数据
    doubleCounter: computed(() => data.counter * 2),
    change: () => {
      data.counter++;
    },
  });

  let timer;
  onMounted(() => {
    timer = setInterval(() => {
      data.counter++;
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });
 
  return data; //这个需要使用data.counter获取数据，笔记麻烦
}

function userCounterTorefs() {
  const data = reactive({
    counter: 1, //单个数据
    doubleCounter: computed(() => data.counter * 2),
    change: () => {
      data.counter++;
    },
  });

  let timer;
  onMounted(() => {
    timer = setInterval(() => {
      data.counter++;
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });
 
 return toRefs(data) //这样就会变成单值相应式的数据
}
</script>
