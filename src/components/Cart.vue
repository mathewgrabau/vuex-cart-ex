<template>
  <div>
    <h2>Cart</h2>
    <table>
      <thead>
        <th>Name</th>
        <th>Quantity</th>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import { mapState } from "vuex";

export default {
  computed: {
      ...mapState(["cart"]),
  },
};
</script>