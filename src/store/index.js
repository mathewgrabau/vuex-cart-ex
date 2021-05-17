import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{
      name: 'Widgets', price: 10,
    }, {
      name: 'Doodads', price: 8,
    }, {
      name: 'Roundtuits', price: 12,
    }, {
      name: 'Fluff', price: 4,
    }, {
      name: 'Goobers', price: 7,
    }],
    cart: [

    ]
  },
  mutations: {
    addProductToCart(state, product) {
      let p = state.cart.filter(inCart => inCart.name === product.name)
      if (p.length > 0) {
        p[0].quantity++;
      } else {
        let cartItem = { ...product, quantity: 1 }
        state.cart.push(cartItem)
      }
    },
    removeProductFromCart(state, product) {
      let p = state.cart.filter(inCart => inCart.name === product.name)
      if (p.length > 0) {
        let cartItem = p[0]
        cartItem.quantity--;

        if (cartItem.quantity === 0) {
          // Remove from there (the item no longer required)
          for (let i = 0; i < state.cart.length; ++i) {
            if (state.cart[i].name === cartItem.name) {
              state.cart.splice(i, 1)
              break
            }
          }
        }
      }
    }
  },
  getters: {
    cartTotal(state) {
      let total = 0
      state.cart.forEach(item => total += item.quantity * item.price)
      return total
    }
  },
  actions: {
    addToCart(context, item) {
      if (item !== undefined && item !== null && item.name) {
        context.commit('addProductToCart', item)
      }
    },
    removeFromCart(context, item) {
      if (item !== undefined && item !== null && item.name) {
        context.commit('removeProductFromCart', item)
      }
    }
  },
  modules: {
  }
})
