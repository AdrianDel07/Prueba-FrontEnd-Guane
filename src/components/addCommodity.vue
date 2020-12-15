<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <h2>Agregar Datos</h2>

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              <i class="fas fa-times-circle"></i>
            </button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <form @submit.prevent="onSubmit">
              <label for="hu_count">hu_count:</label>
              <input
                type="text"
                autocomplete="off"
                name="hu_count"
                id="hu_count"
                v-model="hu_count"
                placeholder="Add hu_count..."
                required
              />
              <label for="dimensions">dimensions:</label>
              <input
                type="text"
                name="dimensions"
                id="dimensions"
                v-model="dimensions"
                autocomplete="off"
                placeholder="Add dimensions..."
                required
              />
              <label for="weight">weight:</label>
              <input
                type="text"
                name="weight"
                id="weight"
                v-model="weight"
                autocomplete="off"
                placeholder="Add Weight..."
                required
              />
              <label for="stackable">stackable:</label>
              <div>
                <label class="toggle-switch">
                  <input @click="onStackable" type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
              <div>
                <button class="btn-send" type="submit" @click="addItems">
                  <i class="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <p>&copy;Guane Todos los Derechos Reservados</p>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",

  props: {
    commodity: String,
  },
  data() {
    return {
      hu_count: "",
      dimensions: "",
      weight: "",
      stackable: false,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onStackable() {
      if (!this.stackable) {
        this.stackable = true;
      } else {
        this.stackable = false;
      }
    },
    addItems() {
      this.commodity.push({
        dimensions: this.dimensions,
        hu_count: this.hu_count,
        weight: this.weight,
        oversize: this.stackable,
      });
      this.$emit("close");
      alert("La informacion se agrego Satisfactoriamente");
    },
  },
};
</script>
