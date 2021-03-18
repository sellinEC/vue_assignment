import Vue from 'vue'
import Vuex from 'vuex'
import Products from './modules/Products'
import Product from './modules/Product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Products,
    Product
  }
})
