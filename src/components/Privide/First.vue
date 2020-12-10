<template>
    <div>
        一级子组件中接收的count数据：
        {{count}}
    </div>
</template>

<script>
    export default {
        inject: ['age','count'],
        computed: {
            name() {
                return this.data 
            }
        },
    }
</script>

<style scoped>

</style>
