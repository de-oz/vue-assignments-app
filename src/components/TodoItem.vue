<template>
  <div class="todo-item">
    <input
      name="todo-description"
      type="checkbox"
      class="checkbox"
      :id="id"
      :checked="isCompleted"
      @change="$emit('checkbox-toggled')"
    />
    <label v-if="!isEditing" :for="id" class="todo-label">{{ title }}</label>
    <input
      v-else
      name="todo-description"
      class="todo-edit"
      ref="labelInput"
      autocomplete="off"
      v-model.lazy.trim="newTitle"
    />
    <div v-if="!isEditing" class="todo-controls">
      <font-awesome-icon
        @click="editItem"
        icon="fa-solid fa-pen"
        size="lg"
        class="icon"
      />
      <font-awesome-icon
        @click="removeItem"
        icon="fa-solid fa-trash"
        size="lg"
        class="icon danger"
      />
    </div>
    <div v-else class="todo-controls">
      <font-awesome-icon
        @click="saveEdit"
        icon="fa-solid fa-check"
        size="lg"
        class="icon"
      />
      <font-awesome-icon
        @click="cancelEdit"
        icon="fa-solid fa-x"
        size="lg"
        class="icon danger"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { required: true, type: String },
    completed: { default: false, type: Boolean },
    id: { required: true, type: Number },
  },
  data() {
    return {
      newTitle: this.title,
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
      this.$nextTick(() => this.$refs.labelInput.focus());
    },
    saveEdit() {
      if (this.newTitle) {
        this.$emit("item-edited", this.newTitle);
        this.isEditing = false;
      }
    },
    cancelEdit() {
      this.isEditing = false;
    },
    removeItem() {
      this.$emit("item-removed");
    },
  },
};
</script>

<style scoped>
.todo-item {
  max-width: 60rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  min-height: 40px;
  margin: 1.5rem auto;
  padding: 1rem 0;
  border-bottom: 2px solid #888;
}

/* CUSTOM CHECKBOX */

.todo-item > .checkbox {
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

.todo-item > .todo-label,
.todo-item > .todo-edit {
  padding: 8px 5px 5px;
  margin-left: 1rem;
  border: 0;
  cursor: pointer;
  flex: 1;
  outline: none;
  color: #000;
  touch-action: manipulation;
}

/* TODO CONTROLS */

.todo-item > .todo-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1.5rem;
  width: 75px;
  opacity: 0;
  transition: 0.3s;
}

.todo-controls > * + * {
  margin-left: 5px;
}

.todo-item > .todo-edit {
  width: 70%;
  background-color: inherit;
  outline: 1px solid #28f;
}

.todo-item:hover .todo-controls {
  opacity: 1;
}

/* CUSTOM CHECK MARK */

.todo-item > [type="checkbox"]::after {
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

.todo-item > [type="checkbox"]:checked::after {
  opacity: 1;
}
</style>