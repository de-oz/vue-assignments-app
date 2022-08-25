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
      background-color: #565656;
      border-color: #121212;
    }

    &--delete {
      background-color: #d44;
      border-color: #a11;
    }

    &--check {
      background-color: #273;
      border-color: #051;
    }

    &--uncheck {
      background-color: #e74;
      border-color: #b41;
    }
  }
}
</style>
