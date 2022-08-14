<template>
  <div class="item">
    <input
      name="todo-description"
      type="checkbox"
      :id="id"
      :checked="isCompleted"
      @change="$emit('checkbox-toggled')"
    />
    <label v-if="!isEditing" :for="id">{{ label }}</label>
    <input
      v-else
      type="text"
      v-model.lazy.trim="newLabel"
      name="todo-description"
    />
    <font-awesome-icon
      v-if="!isEditing"
      @click="toggleEditMode"
      icon="fa-solid fa-pen"
      size="lg"
      class="icon"
    />
    <font-awesome-icon
      v-if="!isEditing"
      @click="removeItem"
      icon="fa-solid fa-trash fa-3x"
      size="lg"
      class="icon"
    />
    <font-awesome-icon
      v-if="isEditing"
      @click="editItem"
      icon="fa-solid fa-check"
      size="lg"
      class="icon"
    />
    <font-awesome-icon
      v-if="isEditing"
      @click="toggleEditMode"
      icon="fa-solid fa-xmark"
      size="lg"
      class="icon"
    />
  </div>
</template>

<script>
export default {
  props: ["label", "completed", "id"],
  data() {
    return {
      newLabel: this.label,
      isEditing: false,
    };
  },
  computed: {
    isCompleted() {
      return this.completed;
    },
  },
  methods: {
    toggleEditMode() {
      this.isEditing = !this.isEditing;
    },
    editItem() {
      if (this.newLabel && this.newLabel != this.label) {
        this.$emit("item-edited", this.newLabel);
        this.isEditing = false;
      }
    },
    removeItem() {
      this.$emit("item-removed");
    },
  },
};
</script>

<style scoped>
.icon {
  padding: 5px;
}
</style>