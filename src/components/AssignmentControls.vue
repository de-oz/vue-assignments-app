<template>
  <div
    v-if="!totalAssignments"
    class="controls">
    <button
      type="button"
      class="controls__generate"
      @click="generateData">
      Generate Data
    </button>
  </div>

  <div
    v-else
    class="controls">
    <button
      type="button"
      class="controls__clear"
      @click="$emit('clearAll')">
      Clear All
    </button>
    <button
      type="button"
      class="controls__check"
      :disabled="!activeAssignments"
      @click="$emit('checkAll')">
      Check All
    </button>
    <button
      type="button"
      class="controls__uncheck"
      :disabled="!completedAssignments"
      @click="$emit('uncheckAll')">
      Uncheck All
    </button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  props: {
    totalAssignments: { required: true, type: Number },
    activeAssignments: { required: true, type: Number },
    completedAssignments: { required: true, type: Number },
  },

  emits: ['generateData', 'clearAll', 'checkAll', 'uncheckAll'],

  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },

    generateData() {
      const assignmentList = [
        'Switch the theme by clicking the toggle in the top-right corner',
        'Create a new assignment',
        'Enter three new assignments using only a keyboard',
        'Make sure empty assignments are not allowed by trying to add one',
        'Clear out the assignment list',
        'Check all the assignments',
        'Uncheck all the assignments',
        'Click on a different tab to filter the assignment list',
        'Check/uncheck multiple assignments at once with Shift + mouse click',
        'Check/uncheck multiple assignments at once with Shift + Spacebar',
        'Change the order of assignments by clicking on and dragging the list items',
        'Edit the title of an assignment',
        'Delete an assignment',
        'Mark an active assignment as completed by clicking its checkbox or title',
        'Mark a completed assignment as active by clicking its checkbox or title',
        'Clear all the assignments and generate them again to see how the list updates',
        'Refresh the page to see how the data is preserved',
        'Close and reopen the page to see how the state persists',
      ];

      this.shuffleArray(assignmentList);

      const assignments = assignmentList.slice(0, 10).reduce((a, b) => {
        const assignment = {};
        assignment.title = b;
        assignment.completed = Boolean(Math.trunc(Math.random() * 2));
        assignment.id = uuidv4();
        return a.concat(assignment);
      }, []);

      this.$emit('generateData', assignments);
    },
  },
};
</script>

<style lang="scss">
$buttons: (
  generate: hsl(180, 100%, 25%),
  clear: hsl(0, 90%, 40%),
  check: hsl(120, 50%, 30%),
  uncheck: hsl(20, 100%, 50%),
);

.controls {
  width: 40rem;
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  position: sticky;
  top: 5.25rem;
  z-index: 1;

  button {
    flex: 1;
    padding: 0.5rem 0;
    color: #fff;
  }

  &__generate {
    max-width: 50%;
  }

  @each $button, $color in $buttons {
    &__#{$button} {
      background-color: $color;
      border: 2px solid darken($color, 15%);

      &:hover {
        background-color: darken($color, 10%);
      }
    }
  }
}
</style>
