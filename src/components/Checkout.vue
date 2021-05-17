<template>
  <div>
    <h2>Checkout</h2>
    <p v-if="!orderComplete">Your total is ${{ cartTotal }}.</p>
    <p v-if="!orderComplete"><button @click="checkout">Checkout Now</button></p>
    <p v-else>Your order has been submitted, thank you!</p>
  </div>
</template>


<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters(["cartTotal"]),
    ...mapState(["orderComplete"])
  },
  methods: {
    ...mapActions(["checkout"]),
  },
};
</script>