<template>
  <header class="header">
    <h1 class="header__heading">To-Do App</h1>
    <font-awesome-icon
      v-if="darkTheme"
      icon="fa-solid fa-moon"
      class="icon header__theme-toggle"
      @click="toggleTheme"
    />
    <font-awesome-icon
      v-else
      icon="fa-solid fa-sun"
      class="icon header__theme-toggle"
      @click="toggleTheme"
    />
  </header>
</template>

<script>
export default {
  props: {
    theme: { default: true, type: Boolean },
  },
  data() {
    return {
      darkTheme: this.theme,
    };
  },
  methods: {
    toggleTheme() {
      this.$emit("theme-toggled");

      this.darkTheme = !this.darkTheme;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: hsl(0, 0%, 25%);
  color: #dedede;
  border-bottom: solid hsl(0, 0%, 13%) 5px;

  &__heading {
    padding: 1rem 0;
  }

  &__theme-toggle {
    position: absolute;
    top: 50%;
    right: 1.2rem;
    font-size: 3rem;
    transform: translateY(-50%);
    border: 0;
    box-shadow: 0 0 5px currentColor;
  }
}
</style>
