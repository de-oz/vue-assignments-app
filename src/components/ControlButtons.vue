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
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;

  * {
    flex: 1;
    white-space: nowrap;
  }

  * + * {
    margin-left: 1rem;
  }

  .btn {
    color: #fff;
    padding: 1rem 0 0.7rem;

    &--generate {
      font-size: 1.8rem;
      margin: 2rem 0;
      max-width: 60%;
      background-color: hsl(180, 100%, 25%);
      border-color: hsl(180, 100%, 10%);
      transition: background-color 0.1s;

      &:hover {
        background-color: hsl(180, 100%, 15%);
      }
    }

    &--delete {
      background-color: hsl(0, 90%, 40%);
      border-color: hsl(0, 90%, 20%);
      transition: background-color 0.1s;

      &:hover {
        background-color: hsl(0, 90%, 30%);
      }
    }

    &--check {
      background-color: hsl(120, 50%, 30%);
      border-color: hsl(120, 50%, 15%);
      transition: background-color 0.1s;

      &:hover {
        background-color: hsl(120, 50%, 22%);
      }
    }

    &--uncheck {
      background-color: hsl(30, 100%, 40%);
      border-color: hsl(30, 100%, 25%);
      transition: background-color 0.1s;

      &:hover {
        background-color: hsl(30, 100%, 32%);
      }
    }
  }
}

@media (max-width: 300px) {
  .controls {
    margin: 1rem auto;

    * {
      padding: 0.7rem 0 0.5rem;
      font-size: 11px;
      border-radius: 7px;
    }

    * + * {
      margin-left: 3px;
    }
  }
}
</style>
