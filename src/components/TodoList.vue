<template>
  <div class="todo-list">
    <div class="todo-list__item todo-list__item_header">
      <h3 class="todo-list__title" v-if="title" v-text="title" />
      <button type="button" class="todo-list__sort-btn" @click="sort">
        sort {{ sortDisplay }}
      </button>
    </div>
    <ul class="todo-list__list">
      <transition-group name="fade">
        <li
          class="todo-list__item todo-list__item_in-progress"
          v-for="todo of sortedTodos"
          :key="todo.id"
          v-show="todos.length"
        >
          <TodoItem :todo="todo" />
        </li>
      </transition-group>
    </ul>
    <span class="todo-list__note" v-show="!todos.length">
      Empty
    </span>
  </div>
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
      sortOrder: 0
    };
  },
  methods: {
    sort() {
      if (!this.sortOrder) this.sortOrder = 1;
      else this.sortOrder = -this.sortOrder;
    }
  },
  computed: {
    sortedTodos() {
      const todosCopy = [...this.$props.todos];
      todosCopy.sort((a, b) => {
        if (a.title < b.title) return -1 * this.sortOrder;
        else if (a.title > b.title) return 1 * this.sortOrder;
      });
      return todosCopy;
    },
    sortDisplay() {
      if (this.sortOrder === 1) return "(asc)";
      else if (this.sortOrder === -1) return "(desc)";
    }
  },
  components: { TodoItem }
};
</script>
