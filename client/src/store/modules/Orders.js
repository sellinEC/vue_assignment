import axios from 'axios'
export default {
  state: {
    
    orders: [
      //fyller på med produkter från usern
    ]
  },
  getters: {
    orders: state => state.orders,
  },
  mutations: {
    //data är res.data från action som är en USER med en array av orders
    GET_ORDERS: (state, data) => {
      data.orders.forEach(order => {
        state.orders.push(order)
      });
      
    }
  },
  actions: {
    getOrders: async ({commit}, email) => {
     
      let payload = {
        email: email
      }
      const res = await axios.post('http://localhost:9999/api/users/orders', payload)
      // console.log(res);
      // console.log(res.data +"orders console-loggs");
      commit('GET_ORDERS', res.data)
    }
  }
}