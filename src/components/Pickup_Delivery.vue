<template>
  <div class="pickup-delivery">
    <pickup />
    <delivery />
  </div>
</template>

<script>
import Pickup from "@/components/Pickup.vue";
import Delivery from "@/components/Delivery.vue";

export default {
  name: "PickupDelivery",
  components: {
    Pickup,
    Delivery,
  },
};
</script>