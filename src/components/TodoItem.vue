<template>
  <tr class="todo-item">
    <td class="todo-item__field todo-list__cell todo-list__cell_id todo-item__field_id">
      <span>{{ todo.id }}</span>
    </td>
    <td class="todo-item__field todo-list__cell todo-list__cell_title todo-item__field_title">
      <span>{{ todo.title }}</span>
    </td>
    <td
      class="todo-item__field todo-list__cell todo-list__cell_completed todo-item__field_completed"
      :class="{ _completed: todo.completed }"
    />
    <td class="todo-item__field todo-list__cell todo-list__cell_edit todo-item__field_edit">
      <button class="button todo-item__btn" type="button" @click="edit(todo)">
        edit
      </button>
    </td>
    <td class="todo-item__field todo-list__cell todo-list__cell_delete todo-item__field_delete">
      <button class="button todo-item__btn" @click="deleteItem" type="button">
        X
      </button>
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
