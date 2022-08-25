<template>
  <form @submit.prevent="addItem" class="todo-form">
    <h2 class="todo-form__heading">
      <label for="new-todo-input">New Task</label>
    </h2>
    <input
      name="new-todo-input"
      id="new-todo-input"
      ref="todoTitleInput"
      class="todo-form__input"
      autocomplete="off"
      v-model.trim="todoTitle"
    />
    <button type="submit" class="todo-form__submit-button">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todoTitle: "",
    };
  },
  methods: {
    addItem() {
      if (this.todoTitle === "") return;

      this.$emit("added-item", this.todoTitle);

      this.todoTitle = "";

      this.$refs.todoTitleInput.focus();
    },
  },
  mounted() {
    this.$refs.todoTitleInput.focus();
  },
};
</script>

<style lang="scss" scoped>
.todo-form {
  max-width: 45rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 10px #333;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  &__heading {
    width: 100%;
    text-align: center;
    margin: 2.5rem auto 1rem;
  }

  &__input {
    width: 80%;
    padding: 3px;
    font-size: 2rem;
    border: 3px solid #558eaf;
    border-radius: 3px;
  }

  &__submit-button {
    color: #fff;
    width: 80%;
    margin: 1rem 0 2.5rem;
    font-size: 2rem;
    padding: 0.8rem 0 0.5rem;
    background-color: #16d;
    border: 2px solid #036;
    border-radius: 1rem;
    cursor: pointer;
  }
}
</style>
