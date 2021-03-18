import axios from 'axios'
export default {
  state: {
    product: null
  },
  getters: {
    product: state => state.product
  },
  mutations: {
    GET_PRODUCT: (state, product) => {
      state.product = product
    }
  },
  actions: {
    getProduct: async ({commit}, id) => {
      const res = await axios.get('http://localhost:9999/api/products/' + id)
      commit('GET_PRODUCT', res.data)
    }
  }
}