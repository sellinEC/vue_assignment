<template>
  <div class="kassa container mt-5">
    <div v-for="item in cart" :key="item.product._id">
      <div class="container d-flex align-items-center justify-content-center border">
  <img
    :src="item.product.image"
    class="card-img-top size img-fluid"
    alt="..."
  />
  <div class="d-flex m-3">
    <h5 class="card-title">{{item.product.name}}</h5>
    
    <div class="card-text mx-3">
      <p class="mx-1">x {{item.quantity}}</p>
    </div>
    <i class="far fa-trash-alt text-danger" @click="deleteItem"></i>
  </div>
</div>
    </div>
    <div class="text-end">Total: {{totalPrice}} kr</div>
  
    <button class="btn btn-success mt-5" @click="handleSave">Checkout</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['cart', 'totalPrice'])
  },
  methods: {
    ...mapActions(['handleSave', 'deleteItem', 'clearCart'])
  },
  destroyed() {
    this.clearCart()
  }
}
</script>

<style scoped>
.cart {
  min-height: 60vh
}
.kassa {
  min-height: 701px;
}
img{
  max-width: 60px;
}
.far {
  font-size: 1.5rem;
  cursor: pointer;
}

</style>