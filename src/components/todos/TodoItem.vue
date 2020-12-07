<template>
  <li :class="{ completed: todo.completed, editing: todo === editedTodo }">
    <!-- 待办状态 -->
    <div class="view">
      <input type="checkbox" v-model="todo.completed" />
      <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
      <button @click="remove(todo)">x</button>
    </div>

    <!-- 编辑待办输入框 -->
    <!-- <input
          type="text"
          class="edit"
          v-model="todo.title"
          v-todo-focus="todo === editedTodo"
          @blur="doneEidt(todo)"
          @keyup.enter="doneEidt(todo)"
          @keyup.escape="cancelEdit(todo)"
        /> -->
    <EditTodos
      class="edit"
      v-model="todo.title"
      v-todo-focus="todo === editedTodo"
      @blur="doneEidt(todo)"
      @keyup.enter="doneEidt(todo)"
      @keyup.escape="cancelEdit(todo)"
    ></EditTodos>
  </li>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";

export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    editTodo: Object,
  },
  emits: ["remove-todo", "update:edit-todo"],
  setup(props, { emit }) {
    const state = reactive({
      beforeEditCache: "", //缓存编辑前的todo
    });
    function remove(todo) {
      emit("remove-todo", todo);
      //   state.todos.splice(state.todos.indexOf(todo), 1);
    }
    function editTodo(todo) {
      state.beforeEditCache = todo.title;
      emit("update:edit-todo", todo);
    }
    function cancelEdit(todo) {
      todo.title = state.beforeEditCache = todo.title;
      //   state.editedTodo = null;
      emit("update:edit-todo", null);
    }
    function doneEidt(todo) {
      //   state.editedTodo = null; //因为有双向数据绑定 所以是不用担心修改的数据
      emit("update:edit-todo", null);
    }

    return {
      ...toRefs(state),
      remove,
      editTodo,
      cancelEdit,
      doneEidt,
    };
  },
  directives: {
    //自定义指令
    "todo-focus": (el, { value }) => {
      if (value) {
        el.focus(); //自动获取焦点
      }
    },
  },
};
</script>

<style scoped>
.completed label {
  text-decoration: line-through;
}
.edit,
.editing .view {
  display: none;
}

.view,
.editing .edit {
  display: block;
}
</style>
