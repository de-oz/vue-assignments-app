<template>
  <form @submit.prevent="addItem" class="list">
    <h1>To-do List</h1>
    <label for="new-todo">Add the task: </label>
    <input name="new-todo" id="new-todo" v-model.lazy.trim="label" />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      label: "",
    };
  },
  methods: {
    addItem() {
      this.$emit("itemSubmitted", this.label);
    },
  },
};
</script>
