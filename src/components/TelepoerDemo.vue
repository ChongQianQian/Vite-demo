<template>
   <button @click="modelOpen = true">弹出一个模态窗口</button>
    <!-- teleport:是以个全局的组件，可以直接使用 
    to :设置将来要去的地方
    -->
    <teleport to="body">
      <div v-if="modelOpen" class="modal">
        这是一个弹窗 我的父元素是body
        <button @click="modelOpen = false">关闭</button>
      </div>
    </teleport>
</template>

<script>
// 2. teleport:是以个全局的组件，可以直接使用 

export default {
  name: 'HelloWorld',
  data(){
    return{
      modelOpen:false
    }
  }
}
</script>
<style  scoped>
.modal{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: burlywood;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.modal div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
}
/* .modal button{
    width: 30px;
    height: 30px;
    background-color: yellow;
} */

</style>