<template>
  <div id="app">
    <product-list v-if="!orderComplete"/>
    <cart />
    <checkout />
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
import Checkout from "./components/Checkout.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    ProductList,
    Cart,
    Checkout,
  },
  computed: {
    ...mapState(["orderComplete"])
  }
};
</script>

