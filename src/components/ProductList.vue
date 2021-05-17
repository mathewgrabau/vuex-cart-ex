<template>
  <div>
      <h2>Products</h2>
    <table>
      <tbody>
        <tr v-for="product in products" :key="product.name">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return { ...mapState(["products"]) };
  },
  methods: {
    ...mapActions(["addToCart", "removeFromCart"]),
  },
};
</script>