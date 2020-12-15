<template>
  <div class="container">
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
        <button class="btn">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </header>
    <main>
      <div class="table-responsive">
        <table class="table">
          <tr class="upper">
            <th>
              <input v-model="selectAll" type="checkbox" />
            </th>
            <th>hu count</th>
            <th>dimensions</th>
            <th>weight</th>
            <th>commodity</th>
            <th>stackable</th>
          </tr>

          <tr v-for="comm in commodity" :key="comm" class="lower">
            <input :value="comm" v-model="selected" type="checkbox" />
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
        </table>
      </div>
      <p>
        {{ selected }}
      </p>
    </main>
  </div>
</template>

<script>
// import api from "@/api";
// import axios from "axios";
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
          dimensions: "48.0 x 48.0 x 48.0 inch",
          hu_count: "2 Pallet",
          weight: "36787.0 lb",
          oversize: true,
        },
        {
          dimensions: "48.0 x 48.0 x 48.0 inch",
          hu_count: "3 Pallet",
          weight: "564.0 lb",
          oversize: false,
        },
      ],
      additems: [],
      selected: [],
      isModalVisible: false,
      // deleteItems: [],
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
    removeItems() {
      // this.commodity.splice(index, 1);

      let del = [];
      del = this.selected;
      if ((this.selected, length > 0)) {
        this.commodity.forEach((index) => {
          del.splice(index, 1);
        });
      }
      this.commodity = del;
    },
  },
  mounted: function() {
    this.addItems();
    console.log("hi");
  },
};
</script>
