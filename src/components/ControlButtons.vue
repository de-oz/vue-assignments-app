<template>
  <div v-if="isEmpty" class="controls">
    <button type="button" class="btn btn--generate" @click="fetchData">
      Generate data
    </button>
  </div>
  <div v-else class="controls">
    <button
      type="button"
      class="btn btn--delete"
      @click="$emit('list-cleared')"
    >
      Clear All
    </button>
    <button type="button" class="btn btn--check" @click="$emit('checked-all')">
      Check All
    </button>
    <button
      type="button"
      class="btn btn--uncheck"
      @click="$emit('unchecked-all')"
    >
      Uncheck All
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    isEmpty: { required: true, type: Boolean },
  },
  methods: {
    fetchData() {
      axios
        .get(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
        .then((res) => this.$emit("data-fetched", res.data))
        .catch((err) => console.log(`Error: ${err}`));
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35rem;
  margin: 2rem auto;

  * {
    flex: 1;
  }

  * + * {
    margin-left: 1rem;
  }

  .btn {
    color: #fff;

    &--generate {
      font-size: 1.8rem;
      background-color: hsl(180, 100%, 25%);
      border-color: hsl(180, 100%, 10%);
    }

    &--delete {
      background-color: hsl(0, 90%, 40%);
      border-color: hsl(0, 90%, 20%);
    }

    &--check {
      background-color: hsl(120, 50%, 30%);
      border-color: hsl(120, 50%, 15%);
    }

    &--uncheck {
      background-color: hsl(30, 100%, 40%);
      border-color: hsl(30, 100%, 25%);
    }
  }
}
</style>
