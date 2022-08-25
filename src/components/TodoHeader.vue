<template>
  <header class="header">
    <h1 class="header__heading">To-Do App</h1>
    <font-awesome-icon
      icon="fa-solid fa-moon"
      class="icon header__theme-toggle"
    />
    <!-- <font-awesome-icon icon="fa-solid fa-sun" class="icon" /> -->
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #5bc;
  color: #000;
  border-bottom: solid #178 10px;

  &__heading {
    padding: 1rem 0;
  }

  &__theme-toggle {
    color: inherit;
    background-color: inherit;
    position: absolute;
    top: 50%;
    right: 2%;
    font-size: 3rem;
    transform: translateY(-50%);
    border: 0;
    box-shadow: 0 0 7px #000;
  }
}
</style>
