<template>
  <div id="app">
    <pickupDelivery />
    <accessorials />
    <commodity />
  </div>
</template>

<script>
import Accessorials from "@/components/Accessorials.vue";
import Commodity from "@/components/Commodity.vue";
import PickupDelivery from "@/components/Pickup_Delivery.vue";

export default {
  name: "App",
  components: {
    Commodity,
    Accessorials,
    PickupDelivery,
  },
};
</script>

<style lang='scss'>
@import "@/assets/sass/styles.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
