<template>
  <AssignmentHeader
    @toggle-theme="toggleTheme"
    :theme="darkTheme" />

  <main>
    <AssignmentForm @add-item="addItem" />

    <AssignmentControls
      :total-assignments="assignments.length"
      :active-assignments="filteredAssignments.active.length"
      :completed-assignments="filteredAssignments.completed.length"
      @clear-all="clearAll"
      @check-all="checkAll"
      @uncheck-all="uncheckAll"
      @generate-data="assignments = $event" />

    <div
      v-show="assignments.length"
      class="tabs">
      <AssignmentTabs
        v-for="(array, tab) of filteredAssignments"
        :key="tab"
        :tab="tab"
        :count="array.length"
        v-model:currentTab="currentTab" />
    </div>

    <ul>
      <AssignmentItem
        v-for="assignment of filteredAssignments[currentTab]"
        v-bind="assignment"
        :key="assignment.id"
        @toggle-checkbox="updateCompletedStatus(assignment.id, $event)"
        @edit-item="editItem(assignment.id, $event)"
        @remove-item="removeItem(assignment.id)"
        @dragstart="onDragStart" />
    </ul>
  </main>
</template>

<script>
import AssignmentHeader from './components/AssignmentHeader.vue';
import AssignmentForm from './components/AssignmentForm.vue';
import AssignmentControls from './components/AssignmentControls.vue';
import AssignmentTabs from './components/AssignmentTabs.vue';
import AssignmentItem from './components/AssignmentItem.vue';
import { v4 as uuidv4 } from 'uuid';

export default {
  components: {
    AssignmentHeader,
    AssignmentForm,
    AssignmentControls,
    AssignmentItem,
    AssignmentTabs,
  },

  data() {
    return {
      assignments: JSON.parse(localStorage.getItem('assignments')) || [],
      previouslyToggled: '',
      currentTab: localStorage.getItem('current-tab') || 'all',
      darkTheme: JSON.parse(localStorage.getItem('theme')) ?? true,
    };
  },

  computed: {
    filteredAssignments() {
      return {
        all: this.assignments,
        active: this.assignments.filter((item) => !item.completed),
        completed: this.assignments.filter((item) => item.completed),
      };
    },
  },

  watch: {
    assignments: {
      handler() {
        localStorage.setItem('assignments', JSON.stringify(this.assignments));
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
    addItem(title) {
      const item = { title, completed: false, id: uuidv4() };
      this.assignments.unshift(item);
    },

    updateCompletedStatus(id, e) {
      if (e.type === 'keyup' && e.key !== ' ') return; // return if anything other than the spacebar was pressed on a checkbox
      if (e.type === 'keyup' && e.key === ' ') e.preventDefault(); // prevent spacebar keypress from firing a click event

      const toggledAssignment = this.assignments.find((item) => item.id === id);
      toggledAssignment.completed = !toggledAssignment.completed;

      if (e.shiftKey && this.previouslyToggled) {
        const indexOfCurrentlyToggled =
          this.assignments.indexOf(toggledAssignment);
        const indexOfPreviouslyToggled = this.assignments.findIndex(
          (item) => item.id === this.previouslyToggled
        );

        const [minIndex, maxIndex] = [
          indexOfCurrentlyToggled,
          indexOfPreviouslyToggled,
        ].sort((a, b) => a - b);

        for (let i = minIndex; i <= maxIndex; i++) {
          this.assignments[i].completed = toggledAssignment.completed;
        }
      }

      this.previouslyToggled = id;
    },

    removeItem(id) {
      const assignmentIndex = this.assignments.findIndex(
        (item) => item.id === id
      );
      this.assignments.splice(assignmentIndex, 1);
    },

    editItem(id, newTitle) {
      const editedAssignment = this.assignments.find((item) => item.id === id);
      editedAssignment.title = newTitle;
    },

    clearAll() {
      this.assignments = [];
      this.currentTab = 'all';
    },

    checkAll() {
      this.filteredAssignments.active.forEach(
        (item) => (item.completed = true)
      );
    },

    uncheckAll() {
      this.filteredAssignments.completed.forEach(
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
      e.target.classList.add('assignment-item--dragging');
    },

    onDrag(e) {
      e.preventDefault();

      const itemContainer = document.querySelector('ul');
      const itemList = Array.from(itemContainer.children);
      const draggedItem = document.querySelector('.assignment-item--dragging');

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

      closest ? closest.before(draggedItem) : itemContainer.append(draggedItem);
    },

    onDrop(e) {
      e.preventDefault();
      const droppedItem = document.querySelector('.assignment-item--dragging');
      const itemList = document.querySelectorAll('li');

      // update the state

      itemList.forEach((item, index) => {
        const checkbox = item.children[0];
        const label = item.children[1];

        this.filteredAssignments[this.currentTab][index].completed =
          checkbox.checked;
        this.filteredAssignments[this.currentTab][index].id = checkbox.id;
        this.filteredAssignments[this.currentTab][index].title =
          label.value ?? label.textContent; // take the text either from the editing input or label
      });

      droppedItem.classList.remove('assignment-item--dragging');
    },
  },

  created() {
    if (this.darkTheme) document.documentElement.classList.add('dark-theme');
  },

  mounted() {
    window.addEventListener('dragenter', (e) => e.preventDefault());
    window.addEventListener('dragover', this.onDrag);
    window.addEventListener('drop', this.onDrop);

    document.documentElement.classList.add('transition');
  },
};
</script>

<style lang="scss">
html {
  font-size: clamp(8px, 5px + 1vw, 10px);
  background-color: #e5e5e5;
}

.transition {
  transition: color 0.3s, background-color 0.3s;
}

body {
  font: 1.6rem / 1.25 Arial, sans-serif;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

main {
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1.5rem;

  > * {
    max-width: calc(100vw - 2rem);
  }
}

h1,
h2 {
  white-space: nowrap;
  text-align: center;
}

ul {
  width: 70rem;
  padding: 0;
  margin: 0.5rem 0 3rem;
  list-style: none;
}

button {
  border-radius: 1rem;
  transition: background-color 0.3s;
  background-color: inherit;
  cursor: pointer;
}

.icon {
  @extend button;
  width: 2rem;
  padding: 0.5rem;
  font-size: 2rem;
  box-shadow: 0 0 5px;
}

.dark-theme {
  background-color: #242526;
  color-scheme: dark;
}

.tabs {
  display: flex;
  column-gap: 1rem;
  position: sticky;
  top: 9.5rem;
  z-index: 1;
}
</style>
