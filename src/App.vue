<template>
  <div id="app">
    <div class="app">
      <h2 class="app__title">Todo List</h2>
      <Filters />
      <TodoList />
      <Popup />
      <Loader v-if="isLoading" />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import Popup from "@/components/Popup.vue";
import Filters from "./components/Filters.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: { TodoList, Popup, Filters },
  computed: {
    ...mapState("UI", ["isLoading"])
  }
};
</script>
