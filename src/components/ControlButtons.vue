<template>
   <div
      v-if="isEmpty"
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
         class="btn btn--delete"
         @click="$emit('list-cleared')">
         Clear All
      </button>
      <button
         type="button"
         class="btn btn--check"
         @[activeTodosNumber&&`click`]="$emit('checked-all')">
         Check All
      </button>
      <button
         type="button"
         class="btn btn--uncheck"
         @[completedTodosNumber&&`click`]="$emit('unchecked-all')">
         Uncheck All
      </button>
   </div>

   <div
      v-show="!isEmpty"
      class="tabs">
      <span
         class="tabs__tab"
         @[!currentTab.all&&`click`]="$emit('show-all')"
         :class="{ 'tabs__tab--selected': currentTab.all }">
         All ({{ activeTodosNumber + completedTodosNumber }})
      </span>
      <span
         class="tabs__tab"
         @[!currentTab.active&&`click`]="$emit('show-active')"
         :class="{ 'tabs__tab--selected': currentTab.active }">
         Active ({{ activeTodosNumber }})
      </span>
      <span
         class="tabs__tab"
         @[!currentTab.completed&&`click`]="$emit('show-completed')"
         :class="{ 'tabs__tab--selected': currentTab.completed }">
         Completed ({{ completedTodosNumber }})
      </span>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   props: {
      isEmpty: { required: true, type: Boolean },
      tab: { required: true, type: String },
      activeTodosNumber: { required: true, type: Number },
      completedTodosNumber: { required: true, type: Number },
   },

   emits: [
      'data-fetched',
      'list-cleared',
      'checked-all',
      'unchecked-all',
      'show-all',
      'show-active',
      'show-completed',
   ],

   methods: {
      fetchData() {
         axios
            .get(`https://jsonplaceholder.typicode.com/todos?_limit=15`)
            .then((res) => this.$emit('data-fetched', res.data))
            .catch((err) => console.log(`Error: ${err}`));
      },
   },

   computed: {
      currentTab() {
         return {
            all: this.tab === 'all',
            active: this.tab === 'active',
            completed: this.tab === 'completed',
         };
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

   * {
      flex: 1;
      white-space: nowrap;
   }

   * + * {
      margin-left: 1rem;
   }

   .btn {
      color: #fff;
      padding: 1rem 0 0.8rem;

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

.tabs {
   width: 90%;
   max-width: 58rem;
   margin: 0 auto;
   position: sticky;
   top: 12rem;
   z-index: 1;
   text-align: center;

   &__tab {
      display: inline-block;
      padding: 0.6rem 1rem 0.4rem;
      margin: 0 0.5rem;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
         background-color: hsl(200, 10%, 60%);
      }

      &--selected {
         background-color: hsl(200, 10%, 45%);
         color: #fff;
      }
   }
}

@media (max-width: 450px) {
   .tabs {
      text-align: center;
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

   .tabs {
      font-size: 90%;

      &__tab {
         padding: 0.5rem 0.5rem 0.3rem;
         margin: 0 0.3rem;
      }
   }
}
</style>
