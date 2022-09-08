<template>
  <ul class="todo-list">
    <li class="todo-list__item todo-list__item_title">
      <h3 class="todo-list__title" v-if="title" v-text="title" />
    </li>
    <transition-group name="fade">
      <li
        class="todo-list__item todo-list__item_in-progress"
        v-for="todo of todos"
        :key="todo.id"
        v-show="todos.length"
      >
        <TodoItem :todo="todo" />
      </li>
    </transition-group>
    <li class="todo-list__item todo-list__item_note" v-show="!todos.length">
      Empty
    </li>
  </ul>
</template>
<script>
import TodoItem from "./TodoItem.vue";
export default {
  props: {
    todos: {
      type: Array,
      required: true
    },
    title: String
  },
  data: () => {
    return {
      sortOrder: "asc"
    };
  },
  computed: {
    sortedTodos() {}
  },
  components: { TodoItem }
};
</script>
