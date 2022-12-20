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

<style lang="scss" scoped>
header {
   position: sticky;
   top: 0;
   z-index: 1;
   color: #dedede;
   background-color: hsl(180, 100%, 20%);
   box-shadow: 0 0 5px 2px hsl(180, 100%, 15%);
}

.header {
   max-width: 80rem;
   position: relative;
   margin: 0 auto;

   &__heading {
      padding: 0.6rem 0;
      font-size: 2.4rem;
   }

   &__theme-toggle {
      width: 2.5rem;
      font-size: 2.5rem;
      padding: 0.5rem;
      position: absolute;
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);
      box-shadow: 0 0 5px currentcolor;
      transition: background-color 0.2s;

      &:hover {
         background-color: hsl(180, 100%, 32%);
      }
   }
}

@media (max-width: 300px) {
   .header {
      &__heading {
         text-align: left;
         margin-left: 1rem;
      }
   }
}
</style>
