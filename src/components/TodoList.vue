<template>
  <div>
    <table class="todo-list" v-show="filteredTodos.length">
      <tr class="todo-list__headers list-headers">
        <th
          class="list-headers__item todo-list__cell todo-list__cell_id list-headers__item_id"
        >
          ID
        </th>
        <th
          class="list-headers__item todo-list__cell todo-list__cell_title list-headers__item_title"
        >
          Title
        </th>
        <th
          class="list-headers__item todo-list__cell todo-list__cell_completed list-headers__item_completed"
        >
          Completed
        </th>
        <th
          class="list-headers__item todo-list__cell todo-list__cell_edit list-headers__item_edit"
        >
          Edit
        </th>
        <th
          class="list-headers__item todo-list__cell todo-list__cell_delete list-headers__item_delete"
        >
          Delete
        </th>
      </tr>
      <TodoItem
        class="todo-list__item"
        v-for="todo in filteredTodos"
        :todo="todo"
        :key="todo.id"
      />
    </table>

    <h3 class="todo-list__empty" v-if="!filteredTodos.length && !isLoading">
      Таких дел нет!
    </h3>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  name: "TodoList",
  components: { TodoItem },
  methods: {
    ...mapActions("data", ["readAll"])
  },
  computed: {
    ...mapGetters("data", ["filteredTodos"]),
    ...mapState("UI", ["isLoading"])
  },
  mounted() {
    this.readAll();
  }
};
</script>
