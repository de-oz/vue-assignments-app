<template>
  <div class="item">
    <input
      name="todo-description"
      type="checkbox"
      :id="id"
      :checked="isCompleted"
      @change="$emit('checkbox-toggled')"
    />
    <label :for="id">{{ label }}</label>
    <font-awesome-icon icon="fa-solid fa-pen" />
    <font-awesome-icon @click="removeItem" icon="fa-solid fa-trash" />
  </div>
</template>

<script>
export default {
  props: ["label", "completed", "id"],
  computed: {
    isCompleted() {
      return this.completed;
    },
  },
  methods: {
    removeItem() {
      this.$emit('removed-item');
    }
  }
};
</script>