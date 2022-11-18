<template>
   <TodoHeader
      @toggle-theme="toggleTheme"
      :theme="darkTheme" />

   <TodoPanel @add-item="addItem" />

   <TodoControls
      :todosExist="!!todos.length"
      :activeTodosCount="filteredTodos.active.length"
      :completedTodosCount="filteredTodos.completed.length"
      @clear-all="clearAll"
      @check-all="checkAll"
      @uncheck-all="uncheckAll"
      @fetch-data="(APIData) => (todos = APIData)" />

   <div
      v-show="todos.length"
      class="tabs">
      <TodoTabs
         v-for="(array, tab) of filteredTodos"
         :key="tab"
         :name="tab"
         :isPressed="tab === currentTab"
         :count="array.length"
         @[`show-${tab}`]="currentTab = tab" />
   </div>

   <ul>
      <TodoItem
         v-for="{ id, title, completed } of filteredTodos[currentTab]"
         :key="id"
         :title="title"
         :completed="completed"
         :id="String(id)"
         @toggle-checkbox="updateCompletedStatus(id, $event)"
         @edit-item="editItem(id, $event)"
         @remove-item="removeItem(id)"
         @dragstart="onDragStart" />
   </ul>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoPanel from './components/TodoPanel.vue';
import TodoControls from './components/TodoControls.vue';
import TodoTabs from './components/TodoTabs.vue';
import TodoItem from './components/TodoItem.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
   components: {
      TodoHeader,
      TodoPanel,
      TodoControls,
      TodoItem,
      TodoTabs,
   },

   data() {
      return {
         todos: JSON.parse(localStorage.getItem('todos')) || [],
         previouslyToggled: '',
         currentTab: localStorage.getItem('current-tab') || 'all',
         darkTheme: JSON.parse(localStorage.getItem('theme')) ?? true,
      };
   },

   computed: {
      filteredTodos() {
         return {
            all: this.todos,
            active: this.todos.filter((item) => !item.completed),
            completed: this.todos.filter((item) => item.completed),
         };
      },
   },

   watch: {
      todos: {
         handler() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
         },
         deep: true,
      },

      currentTab() {
         localStorage.setItem('current-tab', this.currentTab);
      },

      darkTheme() {
         localStorage.setItem('theme', JSON.stringify(this.darkTheme));
      },
   },

   methods: {
      addItem(label) {
         const item = { title: label, completed: false, id: uuidv4() };
         this.todos.unshift(item);
      },

      updateCompletedStatus(todoId, e) {
         if (e.type === 'keyup' && e.key !== ' ') return; // return if anything other than the spacebar was pressed on a checkbox
         if (e.type === 'keyup' && e.key === ' ') e.preventDefault(); // prevent spacebar keypress from firing a click event

         const toggledTodo = this.todos.find((item) => item.id === todoId);
         toggledTodo.completed = !toggledTodo.completed;

         if (e.shiftKey && this.previouslyToggled) {
            const indexOfCurrentlyToggled = this.todos.indexOf(toggledTodo);
            const indexOfPreviouslyToggled = this.todos.findIndex(
               (item) => item.id === this.previouslyToggled
            );

            const [minIndex, maxIndex] = [
               Math.min(indexOfCurrentlyToggled, indexOfPreviouslyToggled),
               Math.max(indexOfCurrentlyToggled, indexOfPreviouslyToggled),
            ];

            for (let i = minIndex; i <= maxIndex; i++) {
               this.todos[i].completed = toggledTodo.completed;
            }
         }

         this.previouslyToggled = todoId;
      },

      removeItem(todoId) {
         const todoIndex = this.todos.findIndex((item) => item.id === todoId);
         this.todos.splice(todoIndex, 1);
      },

      editItem(todoId, newTitle) {
         const editedTodo = this.todos.find((item) => item.id === todoId);
         editedTodo.title = newTitle;
      },

      clearAll() {
         this.todos = [];
         this.currentTab = 'all';
      },

      checkAll() {
         this.filteredTodos.active.forEach((item) => (item.completed = true));
      },

      uncheckAll() {
         this.filteredTodos.completed.forEach(
            (item) => (item.completed = false)
         );
      },

      toggleTheme() {
         this.darkTheme = !this.darkTheme;
         document.documentElement.classList.toggle('dark-theme');
      },

      onDragStart(e) {
         e.dataTransfer.dropEffect = 'move';
         e.dataTransfer.effectAllowed = 'move';
         e.dataTransfer.setData('text/plain', 'e.target.textContent');
         e.target.classList.add('todo-item--dragging');
      },

      onDrag(e) {
         e.preventDefault();

         const itemContainer = document.querySelector('ul');
         const itemList = Array.from(itemContainer.children);
         const draggedItem = document.querySelector('.todo-item--dragging');

         const closest = itemList.reduce(
            (closest, child) => {
               const box = child.getBoundingClientRect();
               const offset = e.y - (box.top + box.height / 2);

               if (offset < 0 && offset > closest.offset) {
                  return { offset: offset, element: child };
               } else {
                  return closest;
               }
            },
            { offset: Number.NEGATIVE_INFINITY }
         ).element;

         closest
            ? closest.before(draggedItem)
            : itemContainer.append(draggedItem);
      },

      onDrop(e) {
         e.preventDefault();
         const droppedItem = document.querySelector('.todo-item--dragging');
         const itemList = document.querySelectorAll('li');

         // update the state

         itemList.forEach((item, index) => {
            const checkbox = item.children[0];
            const label = item.children[1];

            this.filteredTodos[this.currentTab][index].completed =
               checkbox.checked;
            this.filteredTodos[this.currentTab][index].id = checkbox.id;
            this.filteredTodos[this.currentTab][index].title =
               label.value ?? label.textContent; // take text either from editing input or label
         });

         droppedItem.classList.remove('todo-item--dragging');
      },
   },

   mounted() {
      window.addEventListener('dragenter', (e) => e.preventDefault());
      window.addEventListener('dragover', this.onDrag);
      window.addEventListener('drop', this.onDrop);

      if (this.darkTheme) document.documentElement.classList.add('dark-theme');
   },
};
</script>

<style lang="scss">
html {
   font: 62.5% / 1.15 sans-serif;
   background-color: #eee;
   color: #000;
   width: 100vw;
}

body {
   font: 1.6rem / 1.25 'Helvetica Neue', Helvetica, Arial, sans-serif;
   background-color: inherit;
   color: inherit;
   overflow-x: hidden;
}

h1 {
   width: 100%;
   margin: 0;
   text-align: center;
}

ul {
   width: 90vw;
   margin: 0 auto;
   padding: 0;
   list-style: none;
}

.icon {
   font-size: 2rem;
   box-shadow: 0 0 1px currentcolor, inset 0 0 3px currentcolor;
   border-radius: 8px;
   cursor: pointer;
}

.btn {
   border: 2px solid currentcolor;
   cursor: pointer;
   border-radius: 10px;
}

.fade {
   opacity: 0.3;
}

.dark-theme {
   background-color: #2b2b2b;
   color: #fff;
}

.tabs {
   width: 90%;
   max-width: 58rem;
   margin: 0 auto;
   position: sticky;
   top: 12rem;
   z-index: 1;
   text-align: center;
}

@media (max-width: 300px) {
   .tabs {
      font-size: 90%;
   }
}

@media (max-width: 400px) {
   html {
      font-size: 50%;
   }
}
</style>
