<template>
  <div class="container mt-5">
    <form class="border text-center p-5 col-6 mx-auto" @submit.prevent="onSubmit">
      <p class="h4 mb-4">Sign In</p>
      <!-- Email input -->
      <span>{{message}}</span>
      <div class=" mb-4">
        <input type="email" id="form2Example1" class="form-control border-bottom" v-model="email"/>
        <label class="form-label" for="form2Example1">Email address</label>
      </div>

      <!-- Password input -->
      <div class=" mb-4">
        <input type="password" id="form2Example2" class="form-control border-bottom" v-model="password"/>
        <label class="form-label" for="form2Example2">Password</label>
      </div>


      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>Not a member? <router-link to="/register">Register</router-link></p>
        
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['message'])
  },
  methods: {
    ...mapActions(['login']),
    onSubmit() {
      if(this.email !== '' && this.password !== '') {
        let user = {
          email: this.email,
          password: this.password
        }
        
        let route = this.$route.query.redirect
        this.login({user, route})
        // this.$router.replace(this.$route.query.redirect)
      }
    }
  }
}
</script>

<style scoped>
.container {
  min-height: 60vh;
}
</style>