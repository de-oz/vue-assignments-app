<template>
   <div
      v-if="!totalAssignments"
      class="controls">
      <button
         type="button"
         class="btn btn--generate"
         @click="generateData">
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
         :disabled="!activeAssignments"
         @click="$emit('checkAll')">
         Check All
      </button>
      <button
         type="button"
         class="btn btn--uncheck"
         :disabled="!completedAssignments"
         @click="$emit('uncheckAll')">
         Uncheck All
      </button>
   </div>
</template>

<script>
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
            'Solve 5 coding problems',
            'Read three arbitrary online articles related to programming',
            'Spend 3 hours coding without interruption',
            'Learn the basics of a JS framework and build a project with it in under a week',
            'Learn how to touch type',
            'Hit 100 WPM touch typing milestone',
            'Find and correct a typo in any open-source documentation',
            'Walk 10 miles in a single day',
            'Successfully make 5 pull requests to an open-source project',
            'Get any online programming certificate',
            'Build 3 projects for a personal portfolio',
            'Switch from Windows to GNU/Linux',
            'Read 3 arbitrary books related to programming',
            'Send off 10 job applications',
            'Spend 50 hours on studying within 1 week',
            'Complete 3 assignments within 24 hours',
            'Build a copy of an existing website',
            'Go through a real coding interview',
            'Enter 3 new assignments using only a keyboard',
            'Switch the background theme with a corresponding toggle button',
            'Check or uncheck multiple assignments at once with Shift + click',
            'Check or uncheck multiple assignments at once with Shift + Enter',
            'Change the order of assignments by making use of drag and drop functionality',
            'Change the title of an assignment',
            'Clear all the assignments and generate them again to see them update',
            'Click on a different tab to filter the assignment list',
         ];

         this.shuffleArray(assignmentList);

         const assignments = assignmentList.slice(0, 10).reduce((a, b, i) => {
            const assignment = {};
            assignment.title = b;
            assignment.completed = Boolean(Math.trunc(Math.random() * 2));
            assignment.id = i;
            return a.concat(assignment);
         }, []);

         this.$emit('generateData', assignments);
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
