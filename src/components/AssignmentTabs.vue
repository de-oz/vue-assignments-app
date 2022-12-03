<template>
  <button
    type="button"
    class="tabs__tab"
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
  display: inline-block;
  padding: 0.4rem 1rem;
  margin: 0 0.7rem;
  border-radius: 5px;
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background-color: hsl(200, 10%, 60%);
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
