<template>
  <li
    class="todo-item"
    :class="{ 'todo-item--completed': isCompleted }"
    draggable="true"
  >
    <input
      name="todo-status"
      type="checkbox"
      class="todo-item__checkbox"
      :class="{ fade: isCompleted }"
      :id="id"
      :checked="isCompleted"
      @click="toggleCheckbox"
      @keyup.shift="toggleCheckbox"
    />
    <label
      v-if="!isEditing"
      :for="id"
      class="todo-item__title"
      :class="{ fade: isCompleted }"
      >{{ title }}</label
    >
    <input
      v-else
      name="todo-title"
      class="todo-item__editing-input"
      :class="{ fade: isCompleted }"
      ref="labelEditingInput"
      autocomplete="off"
      v-model.trim="modifiedTitle"
      @keydown.enter="saveEdit"
    />
    <div v-if="!isEditing" class="todo-item__control-buttons">
      <font-awesome-icon
        icon="fa-solid fa-pen"
        class="icon"
        @click="editItem"
      />
      <font-awesome-icon
        icon="fa-solid fa-trash"
        class="icon"
        @click="removeItem"
      />
    </div>
    <div v-else class="todo-item__control-buttons">
      <font-awesome-icon
        icon="fa-solid fa-check"
        class="icon"
        @click="saveEdit"
      />
      <font-awesome-icon
        icon="fa-solid fa-xmark"
        class="icon"
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

  emits: ["checkbox-toggled", "item-edited", "item-removed"],

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
    toggleCheckbox(e) {
      this.$emit("checkbox-toggled", e);
    },

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
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  max-width: 60rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem auto;
  padding: 1.5rem 0;
  cursor: move;
  border-radius: 2.5rem;
  box-shadow: 0 0 7px hsl(5, 100%, 70%);
  transition: box-shadow 0.1s;

  &:hover {
    box-shadow: 0 0 7px 2px #999;
  }

  &--completed {
    box-shadow: 0 0 7px hsl(205, 70%, 50%, 0.4);
  }

  /* CUSTOM CHECKBOX */

  &__checkbox {
    width: 3.5rem;
    height: 3.5rem;
    color: inherit;
    background-color: inherit;
    margin-left: 1rem;
    border: 3px solid currentcolor;
    border-radius: 10px;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
  }

  /* TODO TITLE AND EDIT INPUT */

  &__title {
    flex: 1;
    padding: 0.8rem 0.5rem 0.5rem;
    margin-left: 1rem;
    cursor: pointer;
    touch-action: manipulation;
    transition: opacity 0.3s;
    overflow: auto;
  }

  &__editing-input {
    color: inherit;
    background-color: inherit;
    width: 70%;
    flex: 1;
    padding: 0.8rem 0.5rem 0.5rem;
    margin-left: 1rem;
    border: 0;
    outline: 0;
    box-shadow: inset 0 -5px 3px -3px hsl(205, 70%, 45%);
  }

  &__title:not(:hover) {
    user-select: none;
  }

  /* TODO ITEM CONTROLS */

  &__control-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    opacity: 0;
    transition: opacity 0.3s;

    * {
      width: 2rem;
      padding: 0.6rem;
      color: hsl(185, 25%, 40%);
      transition: color 0.15s;

      &:last-child:hover {
        color: hsl(0, 80%, 55%);
        box-shadow: 0 0 5px currentcolor, inset 0 0 5px currentcolor;
      }

      &:first-child:hover {
        color: hsl(215, 60%, 45%);
        box-shadow: 0 0 5px currentcolor, inset 0 0 5px currentcolor;
      }
    }

    * + * {
      margin-left: 0.8rem;
    }
  }

  &:hover > &__control-buttons {
    opacity: 1;
  }

  /* CUSTOM CHECK MARK */

  &__checkbox::after {
    box-sizing: content-box;
    color: currentcolor;
    content: "";
    position: absolute;
    top: 50%;
    left: 1.8rem;
    width: 14px;
    height: 6px;
    transform: translateY(-65%) rotate(-45deg);
    border: solid;
    border-width: 0 0 5px 5px;
    opacity: 0;
  }

  &__checkbox:checked::after {
    opacity: 1;
  }
}

@media (max-width: 400px) {
  .todo-item {
    &__checkbox {
      border-radius: 8px;
    }

    &__checkbox::after {
      left: 1.82rem;
      width: 11px;
      height: 5px;
      border-width: 0 0 4px 4px;
    }

    &__control-buttons {
      * + * {
        margin-left: 0.3rem;
      }
    }
  }
}
</style>
