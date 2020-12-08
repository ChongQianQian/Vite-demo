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