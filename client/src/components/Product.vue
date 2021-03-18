<template>
 <div class="product">
<div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      :src="product.image"
      class="img-fluid"
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
      {{product.price}}:-
    </p>
    
  </div>
      <div class="d-flex justify-content-between">
    <a href="#!" class="btn btn-primary mx-1">Buy</a>
    <a @click="toggleModal" href="#!" class="btn btn-primary mx-1">Details</a>
    </div>
 </div>
 </div>
</template>

<script>
export default {
  name: "Product",
  props: ['product', 'id']
}
</script>

<style>

</style>