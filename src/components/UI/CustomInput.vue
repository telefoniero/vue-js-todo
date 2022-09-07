<template>
  <input
    type="text"
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="input"
  />
</template>

<script>
export default {
  model: {
    event: "input",
    prop: "value"
  },
  props: {
    value: String
  }
};
</script>
