<template>
  <div class="container-box">
    <header class="h-commodity">
      <button class="btn" @click="showModal">
        <i class="fas fa-plus-circle"></i>
      </button>
      <add-commodity
        v-show="isModalVisible"
        @close="closeModal"
        v-bind:commodity="commodity"
      />
      <div>
        <button class="btn" @click="removeItems">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </header>
    <main>
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">
                <div class="mx-auto">
                  <input v-model="selectAll" type="checkbox" />
                </div>
              </th>
              <th scope="col">hu count</th>
              <th scope="col">dimensions</th>
              <th scope="col">weight</th>
              <th scope="col">commodity</th>
              <th scope="col">stackable</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="comm in commodity" :key="comm" class="lower">
              <td class="mx-auto">
                <input :value="comm" v-model="selected" type="checkbox" />
              </td>
              <td>{{ comm.hu_count }}</td>
              <td>{{ comm.dimensions }}</td>

              <td>{{ comm.weight }}</td>
              <td></td>
              <td>
                <label class="switch">
                  <span
                    :class="{
                      stackable_active: comm.oversize === true,
                      stackable_disable: comm.oversize === false,
                    }"
                  ></span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
// Coloque datos estaticos para las pruebas de la tabla porque con el servidor hay pocos datos.
// si quiren comprobar con el servidor puden descomentar los codigos comentados.
// tambien borran la informacion que esta dentro de la propiedad commodity.

// import api from "@/api";
import addCommodity from "@/components/addCommodity.vue";

export default {
  name: "Commodity",

  components: {
    addCommodity,
  },

  data() {
    return {
      commodity: [
        {
          dimensions: "48.0 x 48.0 x 48.0 inch",
          hu_count: "1 Pallet",
          weight: "37479.0 lb",
          oversize: false,
        },
        {
          dimensions: "30.0 x 30.0 x 30.0 inch",
          hu_count: "4 Pallet",
          weight: "5683.0 lb",
          oversize: false,
        },
        {
          dimensions: "10.0 x 10.0 x 10.0 inch",
          hu_count: "2 Pallet",
          weight: "22302.0 lb",
          oversize: true,
        },
        {
          dimensions: "63.0 x 63.0 x 63.0 inch",
          hu_count: "6 Pallet",
          weight: "65489.0 lb",
          oversize: true,
        },
      ],
      additems: [],
      selected: [],
      isModalVisible: false,
    };
  },
  computed: {
    selectAll: {
      get() {
        if (this.commodity && this.commodity.length > 0) {
          let allChecked = true;
          for (let comm of this.commodity) {
            if (!this.selected.includes(comm)) {
              allChecked = false;
            }
            if (!allChecked) break;
          }
          return allChecked;
        }
        return false;
      },
      set(value) {
        const checked = [];
        if (value) {
          this.commodity.forEach((comm) => {
            checked.push(comm);
          });
        }
        this.selected = checked;
      },
    },
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    // getResponse() {
    //   api.getHauls().then((res) => {
    //     let h = null;
    //     for (let r in res) {
    //       h = res[r]["commodity"];
    //     }
    //     this.commodity = h;
    //   });
    // },
    removeItems() {
      let del = [];
      del = this.selected;
      if ((this.selected, length > 0)) {
        this.commodity.forEach((index) => {
          this.commodity.splice(index, 1);
        });
      }
      this.commodity = del;
    },
  },
  mounted: function () {
    this.addItems();
    this.getResponse();
  },
};
</script>
