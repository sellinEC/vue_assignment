<template>
<div class="container  hover-shadow p-4 border">
 <router-link :to="'/products/details/' + product._id">
<div class="product">
<div class="">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      :src="product.image"
      class="img-fluid image-width"
    />
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15)"></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{product.name}}</h5>
    <p class="card-text">
      {{product.short}}
    </p>
    <p class="card-text">
      {{product.price}} kr
    </p>
    
    

  </div>
 </div>
 </div>
 </router-link>
    <button class="btn" @click="addItemToCart({product, quantity})">BUY</button>
 </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: ['product'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['addItemToCart'])
  } 
}
</script>

<style scoped>
div {
 
}
.image-width{
  max-width: 200px;
}
</style>