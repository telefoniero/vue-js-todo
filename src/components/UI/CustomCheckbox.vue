<template>
  <label class="checkbox">
    <slot />
    <input
      type="checkbox"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    />
    <div class="checkbox__image"></div>
  </label>
</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean
  }
};
</script>
