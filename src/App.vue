<template>
  <div id="app">
    <div class="app">
      <TodoList />
      <Popup />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import Popup from "@/components/Popup.vue";

export default {
  name: "App",
  components: { TodoList, Popup }
};
</script>
