<template>
  <div>
    <!-- 新增待办 -->
    <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo" />

    <!-- 待办列表渲染 -->
    <ul>
      <li
        v-for="todo in filterTodos"
        :key="todo.id"
        :class="{ completed: todo.completed, editing: todo === editedTodo }"
      >
        <!-- 待办状态 -->
        <div class="view">
          <input type="checkbox" v-model="todo.completed" />
          <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
          <button @click="remove(todo)">x</button>
        </div>

        <!-- 编辑待办输入框 -->
        <div class="edit">
          <input
            type="text"
            class="edit"
            v-model="todo.title"
            v-todo-focus="todo === editedTodo"
            @blur="doneEidt(todo)"
            @keyup.enter="oneEidt(todo)"
            @keyup.escape="cancelEdit(todo)"
          />
        </div>
      </li>
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
  </div>
</template>

<script>
import { reactive, toRefs, computed, watchEffect } from "vue";

//对数据进行过滤
const filters = {
  all(todos) {
    return todos;
  },
  Active(todos) {
    return todos.filter((todo) => !todo.completed); //留下是未完成的
  },
  completed(todos) {
    return todos.filter((todo) => todo.completed); //留下是完成的
  },
};

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
  setup() {
    const state = reactive({
      //reactive: 接收一个普通对象然后返回该对象的响应式代理
      newTodo: "",
      todos: todoSorage.fetch(),
      beforeEditCache: "", //缓存编辑前的todo
      editedTodo: null,
      visibility: "all",
      filterTodos: computed(() => {
        //未来只要 visibility 或者 state.todos变化都会触发computed
        return filters[state.visibility](state.todos);
      }),
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
    function editTodo(todo) {
      state.beforeEditCache = todo.title;
      state.editedTodo = todo;
    }
    function cancelEdit(todo) {
      todo.title = state.beforeEditCache = todo.title;
      state.editedTodo = null;
    }
    function doneEidt(todo) {
      state.editedTodo = null; //因为有双向数据绑定 所以是不用担心修改的数据
    }
    //副作用
    watchEffect(() => {
      todoSorage.save(state.todos);
    });
    return {
      ...toRefs(state), //变成单值响应式的数据
      addTodo,
      remove, //暴露到上下文中
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
ul {
  width: 50%;
  background-color: wheat;
}
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
