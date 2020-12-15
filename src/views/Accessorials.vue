<template>
  <div class="container">
    <div class="accessorials shadow">
      <header class="h-accessorials">
        <h3><i class="fas fa-puzzle-piece"></i> Accessorials</h3>
        <div class="line" />
      </header>
      <main class="accessorials-main">
        <div>
          <label class="checkbox-text" v-for="item in accessorials" :key="item"
            ><input
              class="input-checkbox"
              :value="item"
              v-model="selected"
              type="checkbox"
            />{{ item }}</label
          >
        </div>

        <div class="box-select-list">
          <p>Haz Seleccionado:</p>
          <div class="select-list">
            <h4 v-for="select in selected" :key="select">
              {{ select }}
            </h4>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Accessorials",

  data() {
    return {
      accessorials: [],
      selected: [],
    };
  },
  methods: {
    getAccessorials() {
      api.getHauls().then((res) => {
        let h = null;
        for (let r in res) {
          h = res[r]["accessorials_to"];
        }
        this.accessorials = h;
      });
    },
  },
  mounted() {
    // console.log(this.accessorials);
    this.getAccessorials();
  },
};
</script>