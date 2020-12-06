<!--
 * @Author: 云乐
 * @Date: 2020-12-06 18:21:39
 * @LastEditTime: 2020-12-06 18:26:08
 * @LastEditors: 云乐
 * @Description: 
-->
<template>
    <div>
        <!-- <input v-on:keyup.13="submit"> -->
       <input v-on:keyup.enter="submit">
       <p>测试keycode</p>
    </div>
</template>
<script>
export default {
    methods: {
        submit(){
            alert("提交")
        }
    },
}
</script>
<style lang="">
    
</style>