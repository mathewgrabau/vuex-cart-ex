<template>
  <div id="app">
    <product-list />
    <checkout />
    <cart />
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
import Checkout from "./components/Checkout.vue";

export default {
  name: "App",
  components: {
    ProductList,
    Cart,
    Checkout,
  },
};
</script>

