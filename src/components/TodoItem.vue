<template>
  <Panel class="todo-item" @click="edit({ mode: 'edit', data: todo })">
    <button
      type="button"
      class="todo-item__delete-btn"
      @click.stop="deleteItem(todo.id)"
    ></button>
    <p class="todo-item__text">{{ todo.title }}</p>
    <span class="todo-item__created-by">
      Created by <span>{{ todo.userId }}</span>
    </span>
  </Panel>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({ deleteItem: "data/delete", edit: "UI/open" })
  }
};
</script>
