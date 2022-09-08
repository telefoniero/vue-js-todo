<template>
  <div class="todos">
    <div class="todos__container">
      <div class="todos__top">
        <span class="todos__counter"> {{ todosLength }} tasks </span>
        <button
          class="todos__btn button"
          type="button"
          @click="create({ mode: 'create' })"
        >
          New task
        </button>
      </div>
      <Toggler
        class="todos__toggler"
        v-model="isLeft"
        :values="['done', 'to do']"
      />
      <div class="todos__wrapper">
        <TodoList
          class="todos__list"
          :class="{ _show: isLeft }"
          v-show="filteredTodos.length"
          title="To do"
          :todos="inProgressTodos"
        />
        <TodoList
          class="todos__list"
          :class="{ _show: !isLeft }"
          v-show="filteredTodos.length"
          title="Done"
          :todos="completedTodos"
        />
      </div>
      <h3 class="todos__title" v-if="!filteredTodos.length && !isLoading">
        No such tasks!
      </h3>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoList from "./TodoList.vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  data: () => {
    return {
      isLeft: true
    };
  },
  name: "Todos",
  components: { TodoItem, TodoList },
  methods: {
    ...mapActions({ readAll: "data/readAll", create: "UI/open" })
  },
  computed: {
    ...mapGetters("data", ["filteredTodos", "todosLength"]),
    ...mapState("UI", ["isLoading"]),
    completedTodos() {
      return this.filteredTodos.filter(t => t.completed);
    },
    inProgressTodos() {
      return this.filteredTodos.filter(t => !t.completed);
    }
  },
  mounted() {
    this.readAll();
  }
};
</script>
