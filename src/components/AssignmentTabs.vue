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

<style lang="scss">
$tab: hsl(200, 10%, 45%);

.tabs .tabs__tab {
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  text-transform: capitalize;

  &--selected {
    background-color: $tab;
    color: #fff;
  }

  &:hover {
    background-color: lighten($tab, 15%);
  }
}
</style>
