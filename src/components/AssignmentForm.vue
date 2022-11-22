<template>
   <form
      @submit.prevent="addItem"
      class="assignment-form">
      <h2 class="assignment-form__heading">
         <label for="new-assignment-input">New Assignment</label>
      </h2>
      <input
         name="new-assignment-input"
         id="new-assignment-input"
         ref="titleInput"
         class="assignment-form__input"
         autocomplete="off"
         v-model.trim="newAssignmentTitle" />
      <button
         type="submit"
         class="btn assignment-form__submit-button">
         Add
      </button>
   </form>
</template>

<script>
export default {
   emits: ['addItem'],

   data() {
      return {
         newAssignmentTitle: '',
      };
   },

   methods: {
      addItem() {
         if (this.newAssignmentTitle === '') return;

         this.$emit('addItem', this.newAssignmentTitle);

         this.newAssignmentTitle = '';

         this.$refs.titleInput.focus();
      },
   },

   mounted() {
      this.$refs.titleInput.focus();
   },
};
</script>

<style lang="scss" scoped>
.assignment-form {
   width: 95vw;
   max-width: 50rem;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   border-bottom: solid #565656 5px;
   border-radius: 5px;

   &__heading {
      width: 100%;
      text-align: center;
      margin: 2.5rem auto 1rem;
      font-weight: normal;
   }

   &__input {
      width: 90%;
      max-width: 35rem;
      padding: 0.5rem 0.5rem 0.2rem;
      font-size: 1.8rem;
      outline: 0;
      border: 2px solid #558eaf;
      border-radius: 5px;

      &:focus {
         box-shadow: 0 0 6px #558eaf;
      }
   }

   &__submit-button {
      color: #fff;
      width: 90%;
      max-width: 35rem;
      margin: 1rem 0 2.5rem;
      font-size: 1.8rem;
      padding: 0.9rem 0 0.5rem;
      background-color: hsl(210, 60%, 40%);
      border: 2px solid hsl(210, 60%, 20%);
      transition: background-color 0.1s;

      &:hover {
         background-color: hsl(210, 60%, 30%);
      }
   }
}
</style>
