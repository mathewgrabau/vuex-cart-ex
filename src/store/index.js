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
    cart: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
