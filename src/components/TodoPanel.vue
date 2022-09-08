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
  emits: ["added-item"],

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
  width: 95vw;
  max-width: 50rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: solid #565656 5px;
  border-radius: 5px;

  &__heading {
    width: 100%;
    text-align: center;
    margin: 2.5rem auto 1rem;
    font-weight: normal;
  }

  &__input {
    width: 90%;
    max-width: 35rem;
    padding: 0.5rem;
    font-size: 2rem;
    outline: 0;
    border: 2px solid #558eaf;
    border-radius: 5px;

    &:focus {
      box-shadow: 0 0 6px #558eaf;
    }
  }

  &__submit-button {
    color: #fff;
    width: 90%;
    max-width: 35rem;
    margin: 1rem 0 2.5rem;
    font-size: 2rem;
    padding: 0.8rem 0 0.6rem;
    background-color: hsl(207, 60%, 40%);
    border: 2px solid hsl(210, 60%, 20%);
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.1s;

    &:hover {
      background-color: hsl(207, 60%, 30%);
    }
  }
}
</style>
