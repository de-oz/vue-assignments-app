<template>
  <li
    class="assignment-item"
    :class="{ 'assignment-item--completed': completed }"
    draggable="true">
    <input
      name="assignment-status"
      type="checkbox"
      class="assignment-item__checkbox"
      :class="{ fade: completed }"
      :id="id"
      :checked="completed"
      @click="$emit('toggleCheckbox', $event)"
      @keyup.shift="$emit('toggleCheckbox', $event)" />

    <label
      v-if="!isEditing"
      :for="id"
      class="assignment-item__title"
      :class="{ fade: completed }">
      {{ title }}
    </label>
    <input
      v-else
      name="assignment-title"
      class="assignment-item__editing-input"
      :class="{ fade: completed }"
      ref="titleEditingInput"
      autocomplete="off"
      v-model.trim="modifiedTitle"
      @keydown.enter="saveEdit" />

    <div class="assignment-item__control-buttons">
      <font-awesome-icon
        :icon="`fa-solid fa-${isEditing ? 'check' : 'pen'}`"
        class="icon"
        @click="isEditing ? saveEdit() : editItem()" />
      <font-awesome-icon
        :icon="`fa-solid fa-${isEditing ? 'xmark' : 'trash'}`"
        class="icon"
        @click="isEditing ? cancelEdit() : removeItem()" />
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

  emits: ['toggleCheckbox', 'editItem', 'removeItem'],

  data() {
    return {
      modifiedTitle: this.title,
      isEditing: false,
    };
  },

  methods: {
    editItem() {
      this.isEditing = true;
      this.$nextTick(() => this.$refs.titleEditingInput.focus());
    },

    saveEdit() {
      if (this.modifiedTitle) {
        this.$emit('editItem', this.modifiedTitle);
        this.isEditing = false;
      }
    },

    cancelEdit() {
      this.isEditing = false;
    },

    removeItem() {
      this.$emit('removeItem');
    },
  },
};
</script>

<style lang="scss">
$edit: hsl(215, 100%, 45%);
$delete: hsl(0, 80%, 55%);

.assignment-item {
  display: flex;
  column-gap: 1rem;
  align-items: center;
  padding: 1.5rem 0;
  border-radius: 2rem;
  cursor: move;
  box-shadow: 0 0 8px hsl(5, 100%, 70%);

  &:hover {
    box-shadow: 0 0 8px 2px #999;
  }

  &--completed {
    box-shadow: 0 0 8px hsl(205, 70%, 50%, 0.4);
  }

  &--dragging {
    box-shadow: 0 0 10px;
  }

  & + * {
    margin-top: 1.5rem;
  }

  /* CUSTOM CHECKBOX */

  &__checkbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.5rem;
    height: 3.5rem;
    margin-left: 1rem;
    border: 3px solid;
    border-radius: 1rem;
    cursor: pointer;
    -webkit-appearance: none;
    appearance: none;
  }

  /* CUSTOM CHECK MARK */

  &__checkbox::after {
    box-sizing: content-box;
    content: '';
    width: 1.4rem;
    height: 0.6rem;
    border: solid;
    border-width: 0 0 0.5rem 0.5rem;
    transform: translateY(-15%) rotate(-45deg);
    opacity: 0;
  }

  &__checkbox:checked::after {
    opacity: 1;
  }

  /* ASSIGNMENT TITLE AND EDIT INPUT */

  &__title {
    flex: 1;
    padding: 0.6rem;
    overflow-wrap: anywhere;
    hyphens: auto;
    touch-action: manipulation;
    cursor: pointer;
    transition: opacity 0.3s;
  }

  &__editing-input {
    flex: 1;
    padding: 0.6rem;
    background-color: transparent;
    box-shadow: inset 0 -5px 2px -3px hsl(215, 80%, 50%);
  }

  &__title:not(:hover) {
    user-select: none;
  }

  /* ASSIGNMENT ITEM CONTROLS */

  &__control-buttons {
    display: flex;
    column-gap: 0.8rem;
    margin-right: 1rem;

    > *:first-child {
      color: $edit;

      &:hover {
        color: lighten($edit, 10%);
      }
    }

    > *:last-child {
      color: $delete;

      &:hover {
        color: lighten($delete, 10%);
      }
    }
  }
}
</style>
