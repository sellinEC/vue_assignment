
export default {
  state: {
    cart: []
  },
  getters: {
    cart: state => {
      return state.cart
    }
  },
  mutations: {
    ADD_ITEM_TO_CART: (state, {product, quantity}) => {
      state.cart.push({product, quantity})
    }
  },
  actions: {
    addItemToCart: ({commit}, { product, quantity }) => {
      commit('ADD_ITEM_TO_CART', {product, quantity})
    } 
  }
}