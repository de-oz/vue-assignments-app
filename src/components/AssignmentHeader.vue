<template>
  <header>
    <div class="header">
      <h1 class="header__heading">Assignments App</h1>
      <font-awesome-icon
        :icon="`fa-solid fa-${theme ? 'moon' : 'sun'}`"
        class="icon header__theme-toggle"
        @click="$emit('toggleTheme')" />
    </div>
  </header>
</template>

<script>
export default {
  props: {
    theme: { default: true, type: Boolean },
  },

  emits: ['toggleTheme'],
};
</script>

<style lang="scss">
$primary: hsl(180, 100%, 20%);

header {
   position: sticky;
   top: 0;
   z-index: 1;
   color: #fff;
   background-color: $primary;
   box-shadow: 0 0 5px 3px darken($primary, 3%);
}

.header {
   max-width: 768px;
   position: relative;
   margin: 0 auto;

   &__heading {
      padding: 0.6rem 0;
      font-size: 2.4rem;
   }

   &__theme-toggle {
      position: absolute;
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);

      &:hover {
         background-color: lighten($primary, 10%);
      }
   }
}
</style>
