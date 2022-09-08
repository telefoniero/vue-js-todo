<template>
  <transition name="fade">
    <div class="loader" v-if="isLoading">
      <div class="loader__circle"></div>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("UI", ["isLoading"])
  }
};
</script>
