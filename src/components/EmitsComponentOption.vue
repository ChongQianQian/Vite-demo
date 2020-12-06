<template>
    <!-- <div @click="$emit('myclick')">
        <h3>自定义事件</h3>
    </div> -->
    <div @click="$emit('click')">
        <h3>自定义事件</h3>
    </div>
</template>
<script>
export default {
    emits:['click'], //指名 emits 选项 这里的emit就不被作为自定义事件处理，而不是原生的事件
    setup(props) {
        
    }
}
</script>
<style lang="">
    
</style>
