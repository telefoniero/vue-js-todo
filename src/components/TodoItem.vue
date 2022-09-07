<template>
  <tr class="todo-item">
    <td class="todo-item__field todo-item__field_id">{{ todo.id }}</td>
    <td class="todo-item__field todo-item__field_title">{{ todo.title }}</td>
    <td class="todo-item__field todo-item__field_completed">
      {{ todo.completed }}
    </td>
    <td class="todo-item__field todo-item__field_edit">
      <button type="button" @click="edit(todo)">edit</button>
    </td>
    <td class="todo-item__field todo-item__field_delete">
      <button @click="deleteItem" type="button">X</button>
    </td>
  </tr>
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
    ...mapActions({ delete: "data/delete", edit: "UI/open" }),
    deleteItem() {
      this.delete(this.$props.todo.id);
    }
  }
};
</script>
