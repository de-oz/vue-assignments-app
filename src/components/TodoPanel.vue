<template>
  <form @submit.prevent="addItem">
    <h1>To-Do List</h1>
    <!-- todo addition panel -->
    <div class="new-task">
      <h2 class="form-title">
        <label for="new-todo">New Task</label>
      </h2>
      <input
        name="new-todo"
        id="new-todo"
        ref="todoTitle"
        autocomplete="off"
        v-model.lazy.trim="title"
      />
      <button type="submit" class="btn btn__add">
        <font-awesome-icon class="icon__add" icon="fa-solid fa-plus" />
      </button>
    </div>
    <!-- button group -->
    <button
      v-if="isEmpty"
      @click="fetchData"
      type="button"
      class="btn btn__generate"
    >
      Generate data
    </button>
    <div v-else class="btn-group">
      <button
        @click="$emit('list-cleared')"
        type="button"
        class="btn btn__delete"
      >
        Clear All
      </button>
      <button
        @click="$emit('checked-all')"
        type="button"
        class="btn btn__check"
      >
        Check All
      </button>
      <button
        @click="$emit('unchecked-all')"
        type="button"
        class="btn btn__uncheck"
      >
        Uncheck All
      </button>
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

<style scoped>
.form-title {
  margin: 1rem auto;
  width: 100%;
}

[type="submit"] {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  color: #005;
  font-size: 2rem;
  padding: 1rem;
  background-color: #ddf;
  border: 3px solid #bbf;
}

.new-task {
  max-width: 45rem;
  padding: 1.5rem;
  margin: 2rem auto;
  box-shadow: 0 0 15px 5px #ddd;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.new-task input {
  max-width: 70%;
  font-size: 2rem;
  border: 2px solid #558eaf;
  border-radius: 3px;
}

.btn__generate {
  color: #222;
  background-color: #2bd;
  border-color: #08a;
}

.btn__delete {
  color: #fff;
  background-color: #d44;
  border-color: #a11;
}

.btn__check {
  color: #fff;
  background-color: #273;
  border-color: #051;
}

.btn__uncheck {
  color: #fff;
  background-color: #e74;
  border-color: #b41;
}

.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35rem;
  margin: 2rem auto;
}

.btn-group > * {
  flex: 1;
}

.btn-group > * + * {
  margin-left: 1rem;
}
</style>