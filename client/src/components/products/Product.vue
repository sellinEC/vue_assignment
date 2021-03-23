<template>
<div class="container  hover-shadow p-4">
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
      ${{product.price}}
    </p>
    <button class="btn">BUY</button>
    
  </div>
 </div>
 </div>
 </router-link>
 </div>
</template>

<script>
export default {
  props: ['product'],
}
</script>

<style scoped>
.image-width{
  max-width: 200px;
}
</style>