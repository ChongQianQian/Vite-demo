<template>
  <div>
    下面是v-model示例：
    <p>{{ pageTitle }}</p>

    下面是子组件内容：
    <!-- <ChildComponent v-model="pageTitle"  placeholder="今日待办" autofocus autocomplete="off"></ChildComponent> -->
    <!-- <VModelDemo v-model="pageTitle"></VModelDemo> -->
    <ChangeModelName v-model:title="pageTitle" @update:title="getChildData"></ChangeModelName>
    <!-- <MoreModel v-model:title="pageTitle" v-model:title2="pageTitle2"></MoreModel> -->

  </div>
</template>

<script>
import { ref } from "vue";
import ChildComponent from "./ChildenComs/ChildComponent.vue";
import VModelDemo from "./ChildenComs/VModelDemo.vue";
import ChangeModelName from "./ChildenComs/ChangeModelName.vue";
import MoreModel from "./ChildenComs/MoreModel.vue";


export default {
  components: {
    ChildComponent,
    VModelDemo,
    ChangeModelName,
    MoreModel
  },
  setup() {
    const pageTitle = ref("我是来自父组件的字符串");
    const pageTitle2=ref("我是来自父组件的字符串2")

    function getChildData(e){
      console.log(e) //pageTitle
    }

    return {
      pageTitle,
      pageTitle2,
      getChildData
    };
  },
  // methods:{
  //   getChildData(e){
  //     console.log(e) //pageTitle
  //     console.log("getChildData")
  //   }
  // }
};
</script>

<style scoped>
</style>
