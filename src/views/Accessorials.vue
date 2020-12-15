<template>
  <div class="container-box">
    <div class="accessorials shadow">
      <header class="h-accessorials">
        <h4><i class="fas fa-puzzle-piece"></i> Accessorials</h4>
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
            <h6 v-for="select in selected" :key="select">
              {{ select }}
            </h6>
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
          h = res[r]["accessorials"];
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
