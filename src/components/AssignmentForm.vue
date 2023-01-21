<template>
  <form
    @submit.prevent="addItem"
    class="assignment-form">
    <h2 class="assignment-form__heading">
      <label for="new-assignment-input">New Assignment</label>
    </h2>
    <input
      name="new-assignment-input"
      id="new-assignment-input"
      ref="titleInput"
      class="assignment-form__input"
      autocomplete="off"
      v-model.trim="newAssignmentTitle" />
    <button
      type="submit"
      class="btn assignment-form__submit-button">
      Add
    </button>
  </form>
</template>

<script>
export default {
  emits: ['addItem'],

  data() {
    return {
      newAssignmentTitle: '',
    };
  },

  methods: {
    addItem() {
      if (this.newAssignmentTitle === '') return;

      this.$emit('addItem', this.newAssignmentTitle);

      this.newAssignmentTitle = '';

      this.$refs.titleInput.focus();
    },
  },

  mounted() {
    this.$refs.titleInput.focus();
  },
};
</script>

<style lang="scss" scoped>
.assignment-form {
  max-width: 35rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid #565656 5px;
  border-radius: 8px;

  &__heading {
    text-align: center;
    margin: 1rem auto;
    font-weight: normal;
    font-size: 2rem;
  }

  &__input {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #558eaf;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:focus {
      box-shadow: 0 0 6px #558eaf;
    }
  }

  &__submit-button {
    width: 100%;
    color: #fff;
    margin: 1rem 0 2rem;
    padding: 0.5rem 0;
    background-color: hsl(210, 60%, 40%);
    border: 2px solid hsl(210, 60%, 20%);

    &:hover {
      background-color: hsl(210, 60%, 30%);
    }
  }
}
</style>
