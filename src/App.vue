<template>
  <div id="todo-app">
    <TodoPanel
      :isEmpty="todoItems?.length === 0"
      @added-item="addItem"
      @list-cleared="clearAll"
      @checked-all="checkAll"
      @unchecked-all="uncheckAll"
      @data-fetched="generateData"
    />
    <ul>
      <li v-for="item in todoItems" :key="item.id">
        <TodoItem
          :title="item.title"
          :completed="item.completed"
          :id="item.id"
          @checkbox-toggled="updateCompletedStatus(item.id)"
          @item-edited="editItem(item.id, $event)"
          @item-removed="removeItem(item.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoPanel from "./components/TodoPanel.vue";
import TodoItem from "./components/TodoItem.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    TodoPanel,
    TodoItem,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    addItem(description) {
      const item = { title: description, completed: false, id: uuidv4() };
      this.todoItems.push(item);
    },
    updateCompletedStatus(todoId) {
      const toggledTodo = this.todoItems.find((item) => item.id === todoId);
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeItem(todoId) {
      const todoIndex = this.todoItems.findIndex((item) => item.id === todoId);
      this.todoItems.splice(todoIndex, 1);
    },
    editItem(todoId, newTitle) {
      const editedTodo = this.todoItems.find((item) => item.id === todoId);
      editedTodo.title = newTitle;
    },
    clearAll() {
      this.todoItems = [];
    },
    checkAll() {
      this.todoItems.forEach((item) => (item.completed = true));
    },
    uncheckAll() {
      this.todoItems.forEach((item) => (item.completed = false));
    },
    generateData(data) {
      this.todoItems = data;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#todo-app h1,
#todo-app form {
  width: 100%;
  text-align: center;
}

#todo-app ul {
  width: 90vw;
  margin: 0 auto;
}

.icon {
  color: #454545;
  background-color: #fff;
  border-radius: 1rem;
  border: 0.2rem solid #ddd;
  cursor: pointer;
  padding: 0.7rem;
}

.danger {
  color: #f33;
}

.btn {
  padding: 0.8rem 1rem 0.7rem;
  border: 0.2rem solid #000;
  cursor: pointer;
  text-transform: capitalize;
  color: #000;
  background-color: #fff;
  border-radius: 1rem;
}

.hidden {
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
</style>