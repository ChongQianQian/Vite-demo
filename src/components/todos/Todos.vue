<template>
  <div>
    <!-- 新增待办 -->
    <EditTodos
      v-model="newTodo"
      @keyup.enter="addTodo"
      autofocus
      autocomplete="off"
      placeholder="今日待办"
    ></EditTodos>

    <EditTodos2
      v-model:todo-title="newTodo"
      @keyup.enter="addTodo"
      autofocus
      autocomplete="off"
      placeholder="今日待办"
    ></EditTodos2>

    <!-- 待办列表渲染 -->
    <ul>
      <TodoItem v-for="todo in todos" :key="todo.id"
      :todo="todo"
      v-model:edit-todo="editedTodo"
      @remove-todo="remove"></TodoItem>
    </ul>

    <p class="filter">
      <span
        @click="visibility = 'all'"
        :class="{ selected: (visibility = 'all') }"
        >All
      </span>
      <span
        @click="visibility = 'Active'"
        :class="{ selected: (visibility = 'Active') }"
        >Active
      </span>
      <span
        @click="visibility = 'completed'"
        :class="{ selected: (visibility = 'completed') }"
        >completed
      </span>
    </p>
    <p>{{name}}</p>
  </div>
</template>

<script>
import { reactive, toRefs, computed, watchEffect } from "vue";
import EditTodos2 from "./EditTodos2.vue";
import TodoItem from "./TodoItem.vue";
import { ref } from 'vue';

//对数据进行过滤
// const filters = {
//   all(todos) {
//     return todos;
//   },
//   Active(todos) {
//     return todos.filter((todo) => !todo.completed); //留下是未完成的
//   },
//   completed(todos) {
//     return todos.filter((todo) => todo.completed); //留下是完成的
//   },
// };

//存储每次修改之后的数据
const todoSorage = {
  fetch() {
    let todos = JSON.parse(localStorage.getItem("vue3-todos") || "[]");
    todos.forEach((item, index) => {
      item.id = index + 1;
    });
    return todos;
  },
  save(todos) {
    localStorage.setItem("vue3-todos", JSON.stringify(todos));
  },
};
export default {
  components: {
    EditTodos2,
    TodoItem,
  },
  setup() {
    const state = reactive({
      //reactive: 接收一个普通对象然后返回该对象的响应式代理
      newTodo: "",
      todos: todoSorage.fetch(),
      editedTodo: null,
      visibility: "all",
      // filterTodos: computed(() => {
      //   //未来只要 visibility 或者 state.todos变化都会触发computed
      //   return filters[state.visibility](state.todos);
      // }),
    });
    function addTodo() {
      state.todos.push({
        id: state.todos.length + 1,
        title: state.newTodo,
        completed: false,
      });
      state.newTodo = "";
    }
    function remove(todo) {
        state.todos.splice(state.todos.indexOf(todo), 1);
    }
    
    //副作用
    watchEffect(() => {
      todoSorage.save(state.todos);
    });
    const name = ref("胆汁")
    return {
      ...toRefs(state), //变成单值响应式的数据
      addTodo,
      remove, //暴露到上下文中
      // editTodo,
      // cancelEdit,
      // doneEidt,
      name
    };
  },
};
</script>

<style scoped>
ul {
  width: 50%;
  background-color: wheat;
}
</style>
