<template>
  <div id="app">
    <TodoList
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
          @checkbox-toggled="completedStatusUpdate(item.id)"
          @item-edited="editItem(item.id, $event)"
          @item-removed="removeItem(item.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    TodoList,
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
    completedStatusUpdate(todoId) {
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
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #ddd;
}
</style>