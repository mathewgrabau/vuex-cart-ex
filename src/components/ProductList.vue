<template>
  <div>
      <h2>Products</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
            </tr>
        </thead>
      <tbody>
        <tr v-for="product in products" :key="product.name">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
              <button @click="addToCart(product)">Add to cart</button>
              <button @click="removeFromCart(product)">Remove from cart</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["products"])
  },
  methods: {
    ...mapActions(["addToCart", "removeFromCart"]),
  },
};
</script>