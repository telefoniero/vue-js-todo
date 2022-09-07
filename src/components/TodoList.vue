<template>
  <table class="todo-list" v-if="todos.length">
    <tr class="todo-list__headers list-headers">
      <th class="list-headers__item list-headers__item_id">ID</th>
      <th class="list-headers__item list-headers__item_title">Title</th>
      <th class="list-headers__item list-headers__item_completed">Completed</th>
      <th class="list-headers__item list-headers__item_edit">Edit</th>
      <th class="list-headers__item list-headers__item_delete">Delete</th>
    </tr>
    <TodoItem
      class="todo-list__item"
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
    />
  </table>
  <Loader v-else />
</template>

<script>
import TodoItem from "./TodoItem.vue";
import Loader from "./Loader.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "TodoList",
  components: { TodoItem, Loader },
  data() {
    return {};
  },
  methods: {
    ...mapActions("data", ["readAll"])
  },
  computed: {
    ...mapState("data", ["todos"])
  },
  mounted() {
    this.readAll();
  }
};
</script>
