<template>
  <form @submit.prevent="addItem" class="list">
    <h1>To-Do List</h1>
    <label for="new-todo">Add the task: </label>
    <input
      name="new-todo"
      id="new-todo"
      ref="todoLabel"
      v-model.lazy.trim="label"
    />
    <button type="submit">Add</button>
    <div class="controls">
      <button @click="clearList" type="button">Clear All</button>
      <button @click="checkAll" type="button">Check All</button>
      <button @click="uncheckAll" type="button">Uncheck All</button>
    </div>
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
      if (this.label === "") return;

      this.$emit("submitted-item", this.label);
      this.label = "";
    },
    clearList() {
      this.$emit("list-cleared");
    },
    checkAll() {
      this.$emit("items-checked");
    },
    uncheckAll() {
      this.$emit("items-unchecked");
    },
  },
  mounted() {
    this.$refs.todoLabel.focus();
  },
};
</script>
