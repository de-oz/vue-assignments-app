<template>
  <TodoHeader @theme-toggled="changeTheme" :theme="darkTheme" />
  <TodoPanel @added-item="addItem" />
  <ControlButtons
    :isEmpty="todoItems?.length === 0"
    :displayedTab="tab"
    :numberOfActiveTodos="activeTodos.length"
    :numberOfCompletedTodos="completedTodos.length"
    @list-cleared="clearAll"
    @checked-all="checkAll"
    @unchecked-all="uncheckAll"
    @data-fetched="($event) => (todoItems = $event)"
    @show-all="tab = `all`"
    @show-active="tab = `active`"
    @show-completed="tab = `completed`"
  />
  <ul>
    <TodoItem
      v-for="item in filteredTodos"
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
      todoItems: JSON.parse(localStorage.getItem("todo-items")) ?? [],
      previouslyToggled: "",
      tab: localStorage.getItem("tab") || "all",
      darkTheme: JSON.parse(localStorage.getItem("theme")) ?? true,
    };
  },

  computed: {
    activeTodos() {
      return this.todoItems.filter((item) => !item.completed);
    },

    completedTodos() {
      return this.todoItems.filter((item) => item.completed);
    },

    filteredTodos() {
      if (this.tab === "active") return this.activeTodos;
      if (this.tab === "completed") return this.completedTodos;
      return this.todoItems;
    },
  },

  watch: {
    todoItems: {
      handler() {
        localStorage.setItem("todo-items", JSON.stringify(this.todoItems));
      },
      deep: true,
    },

    tab() {
      localStorage.setItem("tab", this.tab);
    },

    darkTheme() {
      localStorage.setItem("theme", JSON.stringify(this.darkTheme));
    },
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
      this.tab = "all";
    },

    checkAll() {
      this.activeTodos.forEach((item) => (item.completed = true));
    },

    uncheckAll() {
      this.completedTodos.forEach((item) => (item.completed = false));
    },

    changeTheme() {
      this.darkTheme = !this.darkTheme;
      document.body.classList.toggle("dark-theme");
    },
  },

  mounted() {
    if (this.darkTheme) document.body.classList.add("dark-theme");
  },
};
</script>

<style lang="scss">
html {
  font: 62.5% / 1.15 sans-serif;
}

body {
  background-color: #eee;
  font: 1.6rem / 1.25 "Helvetica Neue", Helvetica, Arial, sans-serif;
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
  box-shadow: inset 0 0 4px currentColor;
  border-radius: 8px;
  cursor: pointer;

  &--standard {
    color: hsl(215, 60%, 45%);
  }

  &--danger {
    color: hsl(0, 80%, 55%);
  }
}

.btn {
  border: 2px solid currentColor;
  cursor: pointer;
  border-radius: 10px;
}

.fade {
  opacity: 0.3;
}

.dark-theme {
  background-color: hsl(0, 0%, 17%);
  color: #fff;
}

@media (max-width: 400px) {
  html {
    font-size: 50%;
  }
}
</style>
