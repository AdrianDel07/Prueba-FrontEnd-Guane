<template>
  <div class="container">
    <header class="h-commodity">
      <button class="btn" @click="addItems">
        <i class="fas fa-plus-circle"></i>
      </button>
      <div v-for="(row, i) in commodity" :key="i">
        <button class="btn" @click="removeItem(i)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
    </header>
    <main>
      <table class="table">
        <tr class="upper">
          <th></th>
          <th>hu count</th>
          <th>dimensions</th>
          <th>weight</th>
          <th>commodity</th>
          <th>stackable</th>
        </tr>

        <tr v-for="comm in commodity" :key="comm.key" class="lower">
          <!-- <input :value="commodity" v-model="select_checkbox" type="checkbox" /> -->
          <td>{{ comm.hu_count }}</td>
          <td>{{ comm.dimensions }}</td>

          <td>{{ comm.weight }}</td>
          <td></td>
          <td v-if="comm.oversize === false">false</td>
        </tr>
      </table>
      <p>
        {{ additems }}
      </p>
    </main>
  </div>
</template>

<script>
// import api from "@/api";
// import axios from "axios";

export default {
  name: "Commodity",

  data() {
    return {
      //  isloading: false,
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
      // selected: [],
      // all_select: false,
      // deleteItems: [],
    };
  },
  methods: {
    // getResponse() {
    //   axios
    //     .get("https://tt.guane.com.co/api/loads/1")
    //     .then((res) => res.data)
    //     .then((res) => {
    //       let h = null;
    //       for (var r in res["hauls"]) {
    //         h = res["hauls"][r]["commodity"];
    //       }
    //       this.commodity = h;
    //       console.log(this.commodity);
    //     })
    //     .catch((e) => console.error(e));

    // api.getHauls().then((res) => {
    //   for (let r in res) {
    //     this.commodity = res[r]["commodity"];
    //   }
    //   console.log(res);
    // });
    // },
    // select_checkbox() {
    //   this.selected = [];
    //   if (!this.all_select) {
    //     for (let i in this.commodity) {
    //       this.selected.push(this.commodity[i]);
    //     }
    //     console.log(this.selected);
    //   }
    // },
    //   select_all_checkbox() {},
    addItems() {
      this.commodity.push({
        dimensions: "48.0 x 48.0 x 48.0 inch",
        hu_count: "5 Pallet",
        weight: "777.0 lb",
        oversize: true,
      });
    },
  },
  mounted() {
    this.addItems();
    console.log("hi");
    // this.Response();
    // this.select_checkbox();
  },
};
</script>
