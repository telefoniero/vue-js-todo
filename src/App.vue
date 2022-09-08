<template>
  <div id="app">
    <div class="app">
      <h2 class="app__title">Todo List</h2>
      <Filters />
      <Todos />
      <Popup />
      <Loader />
    </div>
  </div>
</template>

<script>
import Todos from "@/components/Todos.vue";
import Popup from "@/components/Popup.vue";
import Filters from "./components/Filters.vue";

export default {
  name: "App",
  components: { Todos, Popup, Filters }
};
</script>
