import axios from 'axios'
import router from '@/router'

export default {
    state: {
      userToken: null,
      loggedIn: false,
      userEmail: null
    },
    getters: {
      loggedIn: state => state.loggedIn,
      getEmail(state) {
        return state.userEmail
      }
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
          let token = localStorage.getItem('token')
          if(token) {
            state.userToken = token
            state.loggedIn = true
          } else {
            state.userToken = null
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
      HANDLE_SAVE: (state) => {
        console.log(state.userEmail);
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
              
              localStorage.setItem('token', res.data.token)
              // localStorage.setItem('user', res.data._id)
              console.log(res.data)
              commit('SET_USER', res.data.token)
  
              if(payload.route) {
                router.push(payload.route)
              } else {
                router.push('/')
              }
            }
          })

      },
      checkUser: ({commit}) => {
        commit('CHECK_USER')
      },
      logout: ({commit}) => {
        let token = localStorage.getItem('token')
        if(token) {
          localStorage.removeItem('token')
  
          commit('SET_USER', null)
        }
      },
      saveEmail: ({commit}, email) => {
        commit('SAVE_EMAIL', email)
      },
      //Handle save - Skciakr email+order payload till backend. Email från lokal state med getter-funktion. cart[] från Cart.js modul via root-state  https://vuex.vuejs.org/guide/modules.html#module-local-state
      handleSave: ({getters, rootState}) => {
        let payload = {
          email: getters.getEmail,
          order: rootState.Cart.cart
        }
        console.log(payload);
        axios.post('http://localhost:9999/api/users/order', payload)
        .then(res => {
         if(res.status === 200) {
           console.log('order placed');
         }
        })

      }
    }
  }