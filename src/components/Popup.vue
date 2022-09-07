<template>
  <div class="popup" ref="backdrop" v-if="showPopup">
    <div class="popup__content">
      <h2 class="popup__title">{{ "Задача №" + data.id }}</h2>
      <CustomInput
        class="popup__input"
        :value="data.title"
        @input="updateTitle"
      />
      <CustomCheckbox
        class="popup__checkbox"
        :checked="data.completed"
        @change="updateCompleted"
      />
      <button type="button" @click="save(data)">Save</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CustomInput from "./UI/CustomInput.vue";
import CustomCheckbox from "./UI/CustomCheckbox.vue";

export default {
  components: { CustomInput, CustomCheckbox },
  computed: {
    ...mapState("UI", ["showPopup", "data"])
  },
  methods: {
    ...mapActions({
      open: "UI/open",
      close: "UI/close",
      change: "UI/changeData",
      save: "data/update"
    }),
    togglePopup(event) {
      if (event.target == this.$refs.backdrop) {
        this.close();
        document.body.style.overflow = "";
      }
    },
    updateTitle(title) {
      this.change({ title });
    },
    updateCompleted(completed) {
      this.change({ completed });
    }
  },
  mounted() {
    window.addEventListener("click", this.togglePopup);
  },
  destroyed() {
    window.removeEventListener("click", this.togglePopup);
  }
};
</script>
