<template>
   <div
      v-if="!totalTodos"
      class="controls">
      <button
         type="button"
         class="btn btn--generate"
         @click="fetchData">
         Generate Data
      </button>
   </div>

   <div
      v-else
      class="controls">
      <button
         type="button"
         class="btn btn--clear"
         @click="$emit('clearAll')">
         Clear All
      </button>
      <button
         type="button"
         class="btn btn--check"
         :disabled="!activeTodos"
         @click="$emit('checkAll')">
         Check All
      </button>
      <button
         type="button"
         class="btn btn--uncheck"
         :disabled="!completedTodos"
         @click="$emit('uncheckAll')">
         Uncheck All
      </button>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   props: {
      totalTodos: { required: true, type: Number },
      activeTodos: { required: true, type: Number },
      completedTodos: { required: true, type: Number },
   },

   emits: ['fetchData', 'clearAll', 'checkAll', 'uncheckAll'],

   methods: {
      fetchData() {
         axios
            .get(`https://jsonplaceholder.typicode.com/todos?_limit=15`)
            .then((res) => this.$emit('fetchData', res.data))
            .catch((err) => console.log(`Error: ${err}`));
      },
   },
};
</script>

<style lang="scss" scoped>
.controls {
   position: sticky;
   top: 7rem;
   z-index: 1;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 90%;
   max-width: 40rem;
   margin: 2rem auto;

   .btn {
      color: #fff;
      padding: 1rem 0 0.6rem;
      flex: 1;
      white-space: nowrap;

      & + * {
         margin-left: 1rem;
      }

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

      &--clear {
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

      .btn {
         padding: 0.7rem 0 0.5rem;
         font-size: 11px;
         border-radius: 7px;

         & + * {
            margin-left: 3px;
         }
      }
   }
}
</style>
