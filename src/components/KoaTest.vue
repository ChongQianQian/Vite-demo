<!--
 * @Author: 云乐
 * @Date: 2021-02-08 17:29:47
 * @LastEditTime: 2021-02-19 10:35:10
 * @LastEditors: 云乐
 * @Description: 测试koa开发的接口
-->
<template>
  <div>测试koa开发的接口{{ count }}</div>
</template>

<script>
import axios from "axios";

export default {
  name: "KoaTest",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },

  mounted() {
    axios
      .get("http://localhost:7005/home")
      .then((res) => {
        console.log(res);
        this.count = "这是接口返回的数据" + res.data;
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  },
};
</script>