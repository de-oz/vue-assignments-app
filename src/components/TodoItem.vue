<template>
  <div class="todo-item">
    <input
      name="todo-description"
      type="checkbox"
      class="todo-checkbox"
      :id="id"
      :checked="isCompleted"
      @click="toggleCheckbox($event)"
      @keyup.shift="toggleCheckbox($event)"
    />
    <label v-if="!isEditing" :for="id" class="todo-label">{{ title }}</label>
    <input
      v-else
      name="todo-description"
      class="todo-edit"
      ref="labelEditingInput"
      autocomplete="off"
      v-model.trim="modifiedTitle"
      @keydown.enter="saveEdit"
    />
    <div v-if="!isEditing" class="todo-controls">
      <font-awesome-icon
        icon="fa-solid fa-pen"
        class="icon"
        @click="editItem"
      />
      <font-awesome-icon
        icon="fa-solid fa-trash"
        class="icon danger"
        @click="removeItem"
      />
    </div>
    <div v-else class="todo-controls">
      <font-awesome-icon
        icon="fa-solid fa-check"
        class="icon"
        @click="saveEdit"
      />
      <font-awesome-icon
        icon="fa-solid fa-x"
        class="icon danger"
        @click="cancelEdit"
      />
    </div>
  </div>
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

<style scoped>
.todo-item {
  max-width: 80rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  margin: 1.5rem auto;
  padding: 1rem 0;
  border-bottom: 2px solid #888;
}

/* CUSTOM CHECKBOX */

.todo-item > .todo-checkbox {
  border: 3px solid #0b0c0c;
  width: 40px;
  height: 40px;
  border-radius: 1rem;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

/* TODO LABEL AND EDIT INPUT */

.todo-item > .todo-label {
  flex: 1;
  padding: 0.8rem 0.5rem 0.5rem;
  margin-left: 1rem;
  cursor: pointer;
  touch-action: manipulation;
  transition: 0.4s;
}

.todo-item > .todo-edit {
  width: 70%;
  flex: 1;
  background-color: inherit;
  padding: 0.8rem 0.5rem 0.5rem;
  margin-left: 1rem;
  border: 0;
  box-shadow: inset 0 0 2px #39f;
}

.todo-item > .todo-checkbox:checked + .todo-label {
  opacity: 0.4;
  text-decoration: line-through 1px;
}

.todo-label:not(:hover) {
  user-select: none;
}

/* TODO CONTROLS */

.todo-item > .todo-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  margin-left: 1.5rem;
}

.todo-controls > * + * {
  margin-left: 5px;
}

.todo-item > .todo-label + .todo-controls {
  opacity: 0;
  transition: 0.3s;
}

.todo-item:hover > .todo-label + .todo-controls {
  opacity: 1;
}

/* CUSTOM CHECK MARK */

.todo-item > .todo-checkbox::after {
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

.todo-item > .todo-checkbox:checked::after {
  opacity: 1;
}
</style>