<template>
  <div id="app">
    <pickupDelivery />
    <accessorials />
    <commodity />
  </div>
</template>

<script>
import Accessorials from "@/views/Accessorials.vue";
import PickupDelivery from "@/views/Pickup_Delivery.vue";
import Commodity from "./views/Commodity.vue";

export default {
  name: "App",
  components: {
    Accessorials,
    PickupDelivery,
    Commodity,
  },
};
</script>

<style lang="scss">
@import "@/assets/sass/styles.scss";
@import "node_modules/bootstrap/scss/bootstrap.scss";
@import "node_modules/bootstrap-vue/src/index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
