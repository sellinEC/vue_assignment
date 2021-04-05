<template>
  <div class="cart">
    
      <div class="cart-item">
        <CartItem v-for="item in cart" :key="item.product._id" :item="item" />
      <div v-if="cart.length < 1" class="p-2 d-flex justify-content-center align-items-center">
       Your cart is empty
      </div>
      <div class="dropdown-divider"></div>
    </div>
  
  <!-- Total och shieth -->
    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="ms-2">
        <div class="total-price">
          Total: <span class="ms-1">{{totalPrice}} kr</span>
        </div>
        <small class="text-muted">with taxes</small>
      </div>
      
      <div v-if="cart.length">
      <router-link  to="/kassa" class="btn btn-success">Go to checkout</router-link>
      </div>
      
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem'
export default {
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(['cart', 'totalPrice'])
  }
}
</script>

<style>

</style>