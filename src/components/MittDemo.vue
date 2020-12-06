<template>
  <div>
  </div>
</template>
<script>
import { emiter } from "../App.vue";
export default {
  components: {
   
  },
  mounted() {
    emiter.on("someEvent", (parms) => {
      console.log("接收事件");
      console.log(parms);
    });
  },
};
</script>
<style lang=""></style>
