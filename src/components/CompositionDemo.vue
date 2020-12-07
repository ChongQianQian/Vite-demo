<template>
  <div>
    <!-- 访问vue2中的数据 -->
    <p>{{ key }}</p>
    <button @click="double2">改变vue3中的数据</button>


    <!-- 访问vue3中的数据 -->
    <p>{{ set.data2 }}</p>
    <button @click="double">改变vue2中的数据</button>

    <!-- 如果传入 ref 的是一个对象，将调用 reactive 方法进行深层响应转换。 -->
    <p>{{data3.str}}</p>

  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  data() {
    return {
      key: 1,
    };
  },
  setup() {
    const set = reactive({
      data2: 1,
    });
    function double() {
      // this.key = this.key * 2; //访问失败
      set.data2 = set.data2 * 2;
    }
    const data3=ref({
      str:"11",
      str2:"22"
    })
    const name = ref("单值")
    return { set, double,data3 ,name};
  },
  methods: {
    double2() {
      this.set.data2=this.set.data2*2
      this.key=this.key*2
    }
  },
};
</script>
