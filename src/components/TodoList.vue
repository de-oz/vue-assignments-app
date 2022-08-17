<template>
  <form @submit.prevent="addItem" class="list">
    <h1>To-Do List</h1>
    <label for="new-todo">Add the task: </label>
    <input
      name="new-todo"
      id="new-todo"
      ref="todoTitle"
      v-model.lazy.trim="title"
    />
    <button type="submit">Add</button>
    <button v-if="isEmpty" @click="fetchData" type="button">Generate data</button>
    <div v-else class="controls">
      <button @click="$emit('list-cleared')" type="button">Clear All</button>
      <button @click="$emit('checked-all')" type="button">Check All</button>
      <button @click="$emit('unchecked-all')" type="button">Uncheck All</button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  props: {
    isEmpty: { required: true, type: Boolean },
  },
  data() {
    return {
      title: "",
    };
  },
  methods: {
    addItem() {
      if (this.title === "") return;

      this.$emit("added-item", this.title);
      this.title = "";
    },
    fetchData() {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
        .then((res) => this.$emit("data-fetched", res.data))
        .catch((err) => console.log(`Error: ${err}`));
    },
  },
  mounted() {
    this.$refs.todoTitle.focus();
  },
};
</script>
