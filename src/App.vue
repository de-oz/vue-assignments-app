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
      @dragstart="onDragStart"
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

    activeTodos: {
      handler() {
        localStorage.setItem("active-todos", JSON.stringify(this.activeTodos));
      },
      deep: true,
    },

    completedTodos: {
      handler() {
        localStorage.setItem(
          "completed-todos",
          JSON.stringify(this.completedTodos)
        );
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
    addItem(label) {
      const item = { title: label, completed: false, id: uuidv4() };
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

    onDragStart(e) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("item-id", e.target.children[0].id); // store dragged item's ID of a checkbox
    },

    onDrag(e) {
      e.preventDefault();

      const todoList = document.querySelector("ul");
      const listItems = Array.from(todoList.children);
      const draggedItem = document
        .querySelector(`input[id="${e.dataTransfer.getData("item-id")}"]`)
        .closest("li");

      const closest = listItems.reduce(
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

      closest ? closest.before(draggedItem) : todoList.append(draggedItem);
    },

    onDrop(e) {
      e.preventDefault();
      const listItems = Array.from(document.querySelector("ul").children);

      // update the state

      listItems.forEach((item, index) => {
        const checkbox = item.children[0];
        const label = item.children[1];

        this.filteredTodos[index].completed = checkbox.checked;
        this.filteredTodos[index].id = checkbox.id;
        this.filteredTodos[index].title = label.textContent;
      });
    },
  },

  mounted() {
    if (this.darkTheme) document.body.classList.add("dark-theme");
    window.addEventListener("dragover", this.onDrag);
    window.addEventListener("drop", this.onDrop);
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
  background-color: hsl(0, 0%, 17%);
  color: #fff;
}

@media (max-width: 400px) {
  html {
    font-size: 50%;
  }
}
</style>
