import axios from 'axios'
import router from '@/router'
// import { isAdmin } from '../../../../server/models/users/userModel'

export default {
    state: {
      userToken: null,
      loggedIn: false,
      //Tanken var att exportera message till login och funakde det återanvända där det kändes vettigt med variabla meddelanden
      message: '',
      firstName: null,
    },
    getters: {
      loggedIn: state => state.loggedIn,
      //get state att använda i lokal funktion under actions
      getEmail() {
        return sessionStorage.getItem('storedEmail')
      },
      //exporterar som prop till Orders.vue
      // userEmail: state => state.userEmail,
      message: state => state.message,
      firstName: state => state.firstName = sessionStorage.getItem('firstName'),
    },
    mutations: {
      SET_USER: (state, token) => {
        if(token) {
          state.userToken = token
          state.loggedIn = true
        } else {
          state.userToken = null
          state.loggedIn = false
        }
      },
      CHECK_USER: state => {
        try {
          let token = sessionStorage.getItem('token')
          // let email = sessionStorage.getItem('storedEmail')
          if(token) {
            state.userToken = token
            // state.userEmail = email
            state.loggedIn = true
          } else {
            state.userToken = null
            // state.userEmail = null
            state.loggedIn = false
          }
        }
        catch(err) {
          console.log(err)
        }
      },
      SAVE_EMAIL: (state, email) => {
        state.userEmail = email
        
      },
      ERROR_MSG: (state, message) => {
        state.message = message
      }
    },
    actions: {
      register: async ({dispatch}, _user) => {
        const user = {
          email: _user.email,
          password: _user.password
        }
        await axios.post('http://localhost:9999/api/users/register', _user)
        dispatch('login', {user})
      },
      login: ({commit}, payload) => {
        axios.post('http://localhost:9999/api/users/login', payload.user)
          .then(res => {
            if(res.status === 200) {
              
              sessionStorage.setItem('token', res.data.token)
              //sparar email till session storage
              sessionStorage.setItem('storedEmail', res.data.email)
              sessionStorage.setItem('firstName', res.data.firstName)
              console.log(res.data)
              commit('SET_USER', res.data.token)
              console.log(res.data.message);
              
              if(payload.route) {
                router.push(payload.route)
              } else {
                router.push('/')
              }
            }else {
              //Varför funkar inte detta vid fel inlogg?? Får ut message när inlogg är success men inte på fail. Testat === 404 och ren else och allt möjligt.
              console.log('hej');
              console.log(res.data.message);
              // commit('ERROR_MSG', res.data.message)
            }
          })

      },
      checkUser: ({commit}) => {
        commit('CHECK_USER')
      },
      logout: ({commit}) => {
        let token = sessionStorage.getItem('token')
        // let email = sessionStorage.getItem('storedEmail')
        if(token) {
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('storedEmail')
          commit('SET_USER', null)
        }
        router.push('/')
        document.location.reload(true)
      },
    
      //Handle save - Skciakr email+order payload till backend. Email från lokal state med getter-funktion. cart[] från Cart.js modul via root-state  https://vuex.vuejs.org/guide/modules.html#module-local-state
      handleSave: ({getters, rootState}) => {
        let payload = {
          email: getters.getEmail,
          order: rootState.Cart.cart
        }
      
        // payload.order = payload.order.filter(order => order.quantity !=0)
        
        if(payload.order.length) {
          axios.post('http://localhost:9999/api/users/order', payload)
          .then(res => {
           if(res.status === 200) {
             //"fördröjer" routen till orders - gör att vi kan se senaste ordern också
            router.push('/orders')
            console.log('order placed');
           }
          })
        } 
      //   else {
      //     console.log('funkar inte');
      //     alert('No go')
      //   console.log(payload);
      // }
    } 
  }
}