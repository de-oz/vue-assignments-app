<template>
  <button
    type="button"
    class="btn tabs__tab"
    :class="{ 'tabs__tab--selected': tab === currentTab }"
    :disabled="tab === currentTab"
    @click="$emit('update:currentTab', tab)">
    {{ tab }} ({{ count }})
  </button>
</template>

<script>
export default {
  props: {
    tab: { required: true, type: String },
    count: { required: true, type: Number },
    currentTab: { required: true, type: String },
  },

  emits: ['update:currentTab'],
};
</script>

<style lang="scss" scoped>
.tabs__tab {
  padding: 0.4rem 1rem;
  margin: 0 0.6rem;
  border-radius: 0.5rem;
  text-transform: capitalize;
  background-color: transparent;

  &:hover {
    background-color: hsl(200, 10%, 65%);
  }

  &--selected {
    background-color: hsl(200, 10%, 45%);
    color: #fff;
  }
}

@media (max-width: 300px) {
  .tabs__tab {
    padding: 0.4rem 0.6rem 0.4rem;
    margin: 0 0.3rem;
  }
}
</style>
