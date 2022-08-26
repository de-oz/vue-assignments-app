<template >
  <TodoHeader @theme-toggled="changeTheme" :theme="darkTheme" />
  <TodoPanel @added-item="addItem" />
  <ControlButtons
    :isEmpty="todoItems?.length === 0"
    @list-cleared="clearAll"
    @checked-all="checkAll"
    @unchecked-all="uncheckAll"
    @data-fetched="generateData"
  />
  <ul>
    <TodoItem
      v-for="item in todoItems"
      :key="item.id"
      :title="item.title"
      :completed="item.completed"
      :id="String(item.id)"
      @checkbox-toggled="updateCompletedStatus(item.id, $event)"
      @item-edited="editItem(item.id, $event)"
      @item-removed="removeItem(item.id)"
    />
  </ul>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoPanel from "./components/TodoPanel.vue";
import ControlButtons from "./components/ControlButtons.vue";
import TodoItem from "./components/TodoItem.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    TodoHeader,
    TodoPanel,
    ControlButtons,
    TodoItem,
  },
  data() {
    return {
      todoItems: [],
      previouslyToggled: "",
      darkTheme: JSON.parse(localStorage.getItem('theme')) ?? true,
    };
  },
  watch: {
    todoItems: {
      handler() {
        localStorage.setItem('todo-items', JSON.stringify(this.todoItems));
      },
      deep: true,
    },
    darkTheme() {
      localStorage.setItem('theme', JSON.stringify(this.darkTheme));
    }
  },
  methods: {
    addItem(description) {
      const item = { title: description, completed: false, id: uuidv4() };
      this.todoItems.unshift(item);
    },
    updateCompletedStatus(todoId, e) {
      if (e.type === "keyup" && e.key !== " ") return; // return if anything other than the spacebar was pressed on a checkbox
      if (e.type === "keyup" && e.key === " ") e.preventDefault(); // prevent spacebar keypress from firing a click event

      const toggledTodo = this.todoItems.find((item) => item.id === todoId);
      toggledTodo.completed = !toggledTodo.completed;

      if (e.shiftKey && this.previouslyToggled) {
        const indexOfCurrentlyToggled = this.todoItems.indexOf(toggledTodo);
        const indexOfPreviouslyToggled = this.todoItems.findIndex(
          (item) => item.id === this.previouslyToggled
        );

        const [minIndex, maxIndex] = [
          Math.min(indexOfCurrentlyToggled, indexOfPreviouslyToggled),
          Math.max(indexOfCurrentlyToggled, indexOfPreviouslyToggled),
        ];

        for (let i = minIndex; i <= maxIndex; i++) {
          this.todoItems[i].completed = toggledTodo.completed;
        }
      }

      this.previouslyToggled = todoId;
    },
    removeItem(todoId) {
      const todoIndex = this.todoItems.findIndex((item) => item.id === todoId);
      this.todoItems.splice(todoIndex, 1);
    },
    editItem(todoId, newTitle) {
      const editedTodo = this.todoItems.find((item) => item.id === todoId);
      editedTodo.title = newTitle;
    },
    clearAll() {
      this.todoItems = [];
    },
    checkAll() {
      this.todoItems.forEach((item) => (item.completed = true));
    },
    uncheckAll() {
      this.todoItems.forEach((item) => (item.completed = false));
    },
    generateData(data) {
      this.todoItems = data;
    },
    changeTheme() {
      this.darkTheme = !this.darkTheme;
      document.body.classList.toggle('dark-theme');
    }
  },
  mounted() {
    this.todoItems = JSON.parse(localStorage.getItem('todo-items'));
    if (this.darkTheme) document.body.classList.add('dark-theme');
  },
};
</script>

<style lang="scss">
body {
  background-color: #eee;
}

.dark-theme {
  background-color: hsl(0, 0%, 17%);
  color: #fff;
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
  padding: 0.8rem;
  box-shadow: inset 0 0 3px hsl(0, 0%, 45%);
  border-radius: 8px;
  cursor: pointer;

  &--standard {
    color: hsl(210, 35%, 45%);
  }

  &--danger {
    color: hsl(0, 80%, 55%);
  }
}

.btn {
  padding: 1rem 1rem 0.8rem;
  border: 2px solid currentColor;
  cursor: pointer;
  border-radius: 8px;
}
</style>
