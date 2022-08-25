<template>
  <li class="todo-item">
    <input
      name="todo-status"
      type="checkbox"
      class="todo-item__checkbox"
      :id="id"
      :checked="isCompleted"
      @click="toggleCheckbox"
      @keyup.shift="toggleCheckbox"
    />
    <label v-if="!isEditing" :for="id" class="todo-item__title">{{
      title
    }}</label>
    <input
      v-else
      name="todo-title"
      class="todo-item__editing-input"
      ref="labelEditingInput"
      autocomplete="off"
      v-model.trim="modifiedTitle"
      @keydown.enter="saveEdit"
    />
    <div v-if="!isEditing" class="todo-item__control-buttons">
      <font-awesome-icon
        icon="fa-solid fa-pen"
        class="icon icon--standard"
        @click="editItem"
      />
      <font-awesome-icon
        icon="fa-solid fa-trash"
        class="icon icon--danger"
        @click="removeItem"
      />
    </div>
    <div v-else class="todo-item__control-buttons">
      <font-awesome-icon
        icon="fa-solid fa-check"
        class="icon icon--standard"
        @click="saveEdit"
      />
      <font-awesome-icon
        icon="fa-solid fa-x"
        class="icon icon--danger"
        @click="cancelEdit"
      />
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: { required: true, type: String },
    completed: { default: false, type: Boolean },
    id: { required: true, type: String },
  },
  data() {
    return {
      modifiedTitle: this.title,
      isEditing: false,
    };
  },
  computed: {
    isCompleted() {
      return this.completed;
    },
  },
  methods: {
    editItem() {
      this.isEditing = true;
      this.$nextTick(() => this.$refs.labelEditingInput.focus());
    },
    saveEdit() {
      if (this.modifiedTitle) {
        this.$emit("item-edited", this.modifiedTitle);
        this.isEditing = false;
      }
    },
    cancelEdit() {
      this.isEditing = false;
    },
    removeItem() {
      this.$emit("item-removed");
    },
    toggleCheckbox(e) {
      this.$emit("checkbox-toggled", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  max-width: 80rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  margin: 1.5rem auto;
  padding: 1rem 0;
  border-bottom: 2px solid #aaa;

  /* CUSTOM CHECKBOX */

  &__checkbox {
    border: 3px solid #454545;
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /* TODO TITLE AND EDIT INPUT */

  &__title {
    flex: 1;
    padding: 0.8rem 0.5rem 0.5rem;
    margin-left: 1rem;
    cursor: pointer;
    touch-action: manipulation;
    transition: 0.4s;
  }

  &__editing-input {
    width: 70%;
    flex: 1;
    background-color: inherit;
    padding: 0.8rem 0.5rem 0.5rem;
    margin-left: 1rem;
    border: 0;
    box-shadow: inset 0 0 3px #39f;
  }

  &__checkbox:checked + &__title {
    opacity: 0.3;
  }

  &__title:not(:hover) {
    user-select: none;
  }

  /* TODO ITEM CONTROLS */

  &__control-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75px;
    margin-left: 1.5rem;
  }

  &__control-buttons > * + * {
    margin-left: 5px;
  }

  &__title + &__control-buttons {
    opacity: 0;
    transition: 0.3s;
  }

  &:hover > &__title + &__control-buttons {
    opacity: 1;
  }

  /* CUSTOM CHECK MARK */

  &__checkbox::after {
    box-sizing: content-box;
    content: "";
    position: absolute;
    top: 50%;
    left: 9px;
    width: 18px;
    height: 7px;
    transform: translateY(-60%) rotate(-45deg);
    border: solid;
    border-width: 0 0 5px 5px;
    opacity: 0;
  }

  &__checkbox:checked::after {
    opacity: 1;
  }
}
</style>
