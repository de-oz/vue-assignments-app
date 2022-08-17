<template>
  <div class="item">
    <input
      name="todo-description"
      type="checkbox"
      :id="id"
      :checked="isCompleted"
      @change="$emit('checkbox-toggled')"
    />
    <label v-if="!isEditing" :for="id">{{ title }}</label>
    <input
      v-else
      ref="labelInput"
      v-model.lazy.trim="newTitle"
      name="todo-description"
    />
    <div v-if="!isEditing" class="options">
      <font-awesome-icon
        @click="editItem"
        icon="fa-solid fa-pen"
        size="lg"
        class="icon"
      />
      <font-awesome-icon
        @click="removeItem"
        icon="fa-solid fa-trash fa-3x"
        size="lg"
        class="icon"
      />
    </div>
    <div v-else class="options">
      <font-awesome-icon
        @click="saveEdit"
        icon="fa-solid fa-check"
        size="lg"
        class="icon"
      />
      <font-awesome-icon
        @click="cancelEdit"
        icon="fa-solid fa-xmark"
        size="lg"
        class="icon"
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
.icon {
  padding: 5px;
}
</style>