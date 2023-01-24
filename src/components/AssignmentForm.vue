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

<style lang="scss">
$submit: hsl(210, 60%, 40%);

.assignment-form {
  width: 35rem;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 5px solid #565656;
  border-radius: 0.5rem;

  &__heading {
    font-weight: normal;
    font-size: 2rem;
  }

  &__input {
    padding: 0.5rem;
    margin: 1rem 0;
    border: 2px solid #558eaf;
    border-radius: 0.5rem;
    transition: background-color 0.3s;

    &:focus {
      box-shadow: 0 0 3px;
    }
  }

  &__submit-button {
    color: #fff;
    margin-bottom: 1.5rem;
    padding: 0.5rem 0;
    background-color: $submit;
    border: 2px solid darken($submit, 15%);

    &:hover {
      background-color: darken($submit, 10%);
    }
  }
}
</style>
