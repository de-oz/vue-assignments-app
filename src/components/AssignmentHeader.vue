<template>
   <header class="header">
      <h1 class="header__heading">Assignments App</h1>
      <font-awesome-icon
         :icon="`fa-solid fa-${theme ? 'moon' : 'sun'}`"
         class="icon header__theme-toggle"
         @click="$emit('toggleTheme')" />
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
.header {
   position: sticky;
   top: 0;
   z-index: 1;
   color: #dedede;
   background-color: hsl(180, 100%, 20%);
   box-shadow: 0 0 5px 2px hsl(180, 100%, 15%);

   &__heading {
      padding: 0.6rem 0;
      font-size: 2.4rem;
   }

   &__theme-toggle {
      width: 2.5rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 2rem;
      font-size: 2.5rem;
      padding: 0.5rem;
      border: 0;
      box-shadow: 0 0 5px currentcolor;
      transition: background-color 0.15s;

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

      &__theme-toggle {
         width: 2.5rem;
      }
   }
}
</style>
