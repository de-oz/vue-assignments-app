<template>
  <div id="app">
    <ToDoList />
    <ToDoItem v-for="item in ToDoItems" :key="item.id" :label="item.label" :completed="item.completed" />
  </div>
</template>

<script>
import ToDoList from './components/ToDoList.vue';
import ToDoItem from './components/ToDoItem.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {
    ToDoList,
    ToDoItem
  },
  data() {
    return {
      ToDoItems: [{label: "First item", completed: false, id: uuidv4()},
      {label: "Second item", completed: true, id: uuidv4()},
      {label: "Three item", completed: false, id: uuidv4()}]
    }
  }
}
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
</style>
