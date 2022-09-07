<template>
  <div class="popup" ref="backdrop" v-if="showPopup">
    <div class="popup__content" v-show="!isLoading">
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
      <button class="button popup__btn" type="button" @click="saveData">
        Save
      </button>
    </div>
    <Loader v-if="isLoading" class="popup__loader" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => {
    return {
      isLoading: false
    };
  },
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
      if (event.target == this.$refs.backdrop) this.close();
    },
    updateTitle(title) {
      this.change({ title });
    },
    updateCompleted(completed) {
      this.change({ completed });
    },
    saveData(data) {
      this.save(data);
      this.close();
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
