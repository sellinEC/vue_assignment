<template>
  <div class="home">
    <!-- <div v-show="userEmail">
    <h1>Välkommen{{userEmail}}</h1>
    </div> -->
    
    
    <div class="jumbo text-success my-5 mx-auto">
    <h1 v-if="loggedIn">Welcome to the shop {{firstName}}</h1>
    <h1 v-else>Welcome to the shop</h1>
    <div class="bread my-5">
      <router-link to="/products" class="btn btn-success p-2 mx-2">Browse products</router-link>
      <router-link to="/orders" class="btn btn-success p-2 mx-2" v-if="loggedIn">View orders</router-link>
    </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from 'vuex'
export default {
  name: 'Home',
  components: {
    
  },
  computed: {
    ...mapGetters(['loggedIn', 'firstName'])
  }
}
</script>


<style scoped>
/* Styling för Bild och DIV  */

  .home {
    min-height: 701px;
   
  }
  .sign {
    max-height: 600px; 
  }
</style>