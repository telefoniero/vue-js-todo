<template>
  <transition name="fade">
    <div class="popup" ref="backdrop" v-if="showPopup">
      <div class="popup__content" v-show="!isLoading">
        <h2 class="popup__title">{{ titleContent }}</h2>
        <CustomInput
          class="popup__input"
          :value="data.title"
          @input="updateTitle"
          :class="{ _invalid: isInvalid }"
        />
        <CustomCheckbox
          class="popup__checkbox"
          :checked="data.completed"
          @change="updateCompleted"
          v-if="mode == 'edit'"
        >
          <span>Completed:</span>
        </CustomCheckbox>
        <button class="button popup__btn" type="button" @click="saveData">
          Save
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => {
    return {
      // validation is here, because it's local
      isInvalid: false
    };
  },
  computed: {
    ...mapState("UI", ["showPopup", "data", "mode", "isLoading"]),
    titleContent() {
      return this.mode == "edit" ? `Task #${this.data.id}` : "New task";
    }
  },
  methods: {
    ...mapActions({
      open: "UI/open",
      close: "UI/close",
      change: "UI/changeData",
      update: "data/update",
      create: "data/create"
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
    saveData() {
      if (!this.data.title) return (this.isInvalid = true);

      this.isInvalid = false;

      if (this.mode == "edit") this.update(this.data);
      else if (this.mode == "create") this.create(this.data);

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
