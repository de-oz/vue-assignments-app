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
  position: relative;
  background-color: hsl(0, 0%, 25%);
  color: #dedede;
  border-bottom: solid hsl(0, 0%, 13%) 5px;

  &__heading {
    padding: 1rem 0;
  }

  &__theme-toggle {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
    font-size: 3rem;
    border: 0;
    box-shadow: 0 0 5px currentColor;
    transition: background-color 0.1s;

    &:hover {
      background-color: #6e6e6e;
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
      font-size: 2.5rem;
      right: 1rem;
    }
  } 
}
</style>
