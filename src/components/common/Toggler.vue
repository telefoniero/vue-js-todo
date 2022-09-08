<template>
  <div class="toggler">
    <button
      type="button"
      @click="$emit('toggle', true)"
      class="toggler__btn"
      :class="{ _active: isLeft }"
    >
      {{ values[0] }}
    </button>
    <button
      type="button"
      @click="$emit('toggle', false)"
      class="toggler__btn"
      :class="{ _active: !isLeft }"
    >
      {{ values[1] }}
    </button>
  </div>
</template>
<script>
export default {
  model: {
    event: "toggle",
    prop: "isLeft"
  },
  props: {
    values: {
      type: Array,
      required: true
    },
    isLeft: {
      type: Boolean,
      default: true
    }
  }
};
</script>
