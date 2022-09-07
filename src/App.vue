<template>
  <div id="app">
    <div class="app">
      <Filters />
      <TodoList />
      <Popup />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import Popup from "@/components/Popup.vue";
import Filters from "./components/Filters.vue";

export default {
  name: "App",
  components: { TodoList, Popup, Filters }
};
</script>
