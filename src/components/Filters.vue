<template>
  <div class="filters">
    <label class="filters__label filters__label_input">
      <span>Поиск: </span>
      <CustomInput
        class="filters__input"
        v-model="title"
        @input="updateTitle"
      />
    </label>
    <label class="filters__label filters__label_checkbox">
      <span>Выполнено</span>
      <CustomCheckbox
        class="filters__checkbox"
        v-model="completed"
        @change="updateCompleted"
      />
    </label>
    <button class="button filters__btn" type="button" @click="resetFilters">
      Reset
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => {
    return {
      title: "",
      completed: null
    };
  },
  methods: {
    ...mapActions("data", ["setFilters"]),
    updateTitle(title) {
      this.setFilters({ title, completed: this.completed });
    },
    updateCompleted(completed) {
      this.setFilters({ title: this.title, completed });
    },
    resetFilters() {
      this.title = "";
      this.completed = null;
      this.setFilters({ title: this.title, completed: this.completed });
    }
  }
};
</script>
