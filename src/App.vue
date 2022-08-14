<template>
  <div id="app">
    <TodoList
      @submitted-item="addItem"
      @list-cleared="clearAll"
      @items-checked="checkAll"
      @items-unchecked="uncheckAll"
    />
    <ul>
      <li v-for="item in TodoItems" :key="item.id">
        <TodoItem
          :label="item.label"
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
      TodoItems: [
        { label: "First item", completed: false, id: uuidv4() },
        { label: "Second item", completed: true, id: uuidv4() },
        { label: "Three item", completed: false, id: uuidv4() },
      ],
    };
  },
  methods: {
    addItem(description) {
      const item = { label: description, completed: false, id: uuidv4() };
      this.TodoItems.push(item);
    },
    completedStatusUpdate(todoId) {
      const toggledTodo = this.TodoItems.find((item) => item.id === todoId);
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeItem(todoId) {
      const todoIndex = this.TodoItems.findIndex((item) => item.id === todoId);
      this.TodoItems.splice(todoIndex, 1);
    },
    editItem(todoId, newLabel) {
      const editedTodo = this.TodoItems.find((item) => item.id === todoId);
      editedTodo.label = newLabel;
    },
    clearAll() {
      this.TodoItems = [];
    },
    checkAll() {
      this.TodoItems.forEach((item) => (item.completed = true));
    },
    uncheckAll() {
      this.TodoItems.forEach((item) => (item.completed = false));
    },
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