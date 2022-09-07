<template>
  <input
    type="checkbox"
    :checked="checked"
    @change="$emit('change', $event.target.checked)"
  />
</template>

<script>
export default {
  props: {
    checked: Boolean
  }
};
</script>
