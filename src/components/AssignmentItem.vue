<template>
   <li
      class="assignment-item"
      :class="{ 'assignment-item--completed': completed }"
      draggable="true">
      <input
         name="assignment-status"
         type="checkbox"
         class="assignment-item__checkbox"
         :class="{ fade: completed }"
         :id="id"
         :checked="completed"
         @click="$emit('toggleCheckbox', $event)"
         @keyup.shift="$emit('toggleCheckbox', $event)" />

      <template v-if="!isEditing">
         <label
            :for="id"
            class="assignment-item__title"
            :class="{ fade: completed }">
            {{ title }}
         </label>
         <div class="assignment-item__control-buttons">
            <font-awesome-icon
               icon="fa-solid fa-pen"
               class="icon"
               @click="editItem" />
            <font-awesome-icon
               icon="fa-solid fa-trash"
               class="icon"
               @click="removeItem" />
         </div>
      </template>

      <template v-else>
         <input
            name="assignment-title"
            class="assignment-item__editing-input"
            :class="{ fade: completed }"
            ref="labelEditingInput"
            autocomplete="off"
            v-model.trim="modifiedTitle"
            @keydown.enter="saveEdit" />
         <div class="assignment-item__control-buttons">
            <font-awesome-icon
               icon="fa-solid fa-check"
               class="icon"
               @click="saveEdit" />
            <font-awesome-icon
               icon="fa-solid fa-xmark"
               class="icon"
               @click="cancelEdit" />
         </div>
      </template>
   </li>
</template>

<script>
export default {
   props: {
      title: { required: true, type: String },
      completed: { default: false, type: Boolean },
      id: { required: true, type: [String, Number] },
   },

   emits: ['toggleCheckbox', 'editItem', 'removeItem'],

   data() {
      return {
         modifiedTitle: this.title,
         isEditing: false,
      };
   },

   methods: {
      editItem() {
         this.isEditing = true;
         this.$nextTick(() => this.$refs.labelEditingInput.focus());
      },

      saveEdit() {
         if (this.modifiedTitle) {
            this.$emit('editItem', this.modifiedTitle);
            this.isEditing = false;
         }
      },

      cancelEdit() {
         this.isEditing = false;
      },

      removeItem() {
         this.$emit('removeItem');
      },
   },
};
</script>

<style lang="scss" scoped>
.assignment-item {
   max-width: 60rem;
   position: relative;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 1.5rem auto;
   padding: 1.5rem 0;
   cursor: move;
   border-radius: 2.5rem;
   box-shadow: 0 0 7px hsl(5, 100%, 70%);
   transition: box-shadow 0.1s;

   &:hover {
      box-shadow: 0 0 7px 2px #999;
   }

   &--completed {
      box-shadow: 0 0 7px hsl(205, 70%, 50%, 0.4);
   }

   &--dragging {
      box-shadow: 0 0 10px #eee;
   }

   /* CUSTOM CHECKBOX */

   &__checkbox {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.5rem;
      height: 3.5rem;
      color: inherit;
      margin-left: 1rem;
      border: 3px solid currentcolor;
      border-radius: 10px;
      cursor: pointer;
      -webkit-appearance: none;
      appearance: none;
   }

   /* CUSTOM CHECK MARK */

   &__checkbox::after {
      box-sizing: content-box;
      content: '';
      width: 14px;
      height: 6px;
      border: solid;
      border-width: 0 0 5px 5px;
      transform: translateY(-15%) rotate(-45deg);
      opacity: 0;
   }

   &__checkbox:checked::after {
      opacity: 1;
   }

   /* ASSIGNMENT TITLE AND EDIT INPUT */

   &__title {
      flex: 1;
      padding: 0.8rem 0.5rem 0.5rem;
      margin-left: 1rem;
      cursor: pointer;
      touch-action: manipulation;
      transition: opacity 0.3s;
      overflow: auto;
   }

   &__editing-input {
      color: inherit;
      background-color: inherit;
      flex: 1;
      padding: 0.8rem 0.5rem 0.5rem;
      margin-left: 1rem;
      border: 0;
      outline: 0;
      box-shadow: inset 0 -5px 3px -3px hsl(205, 70%, 45%);
   }

   &__title:not(:hover) {
      user-select: none;
   }

   /* ASSIGNMENT ITEM CONTROLS */

   &__control-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;
      opacity: 0;
      transition: opacity 0.3s;

      * {
         width: 2rem;
         padding: 0.6rem;
         color: hsl(185, 25%, 40%);
         transition: color 0.15s;

         &:last-child:hover {
            color: hsl(0, 80%, 55%);
            box-shadow: 0 0 5px currentcolor, inset 0 0 5px currentcolor;
         }

         &:first-child:hover {
            color: hsl(215, 60%, 45%);
            box-shadow: 0 0 5px currentcolor, inset 0 0 5px currentcolor;
         }
      }

      * + * {
         margin-left: 0.8rem;
      }
   }

   &:hover > &__control-buttons {
      opacity: 1;
   }
}

@media (max-width: 400px) {
   .assignment-item {
      &__checkbox {
         border-radius: 8px;
      }

      &__checkbox::after {
         width: 11px;
         height: 5px;
         border-width: 0 0 4px 4px;
      }

      &__control-buttons {
         * + * {
            margin-left: 0.3rem;
         }
      }
   }
}
</style>
