<template>
  <div class="cart">
    
      <div class="cart-item">
        <CartItem />
      <div class="p-2 d-flex justify-content-center align-items-center">
        Din kundvagn är tom.
      </div>
      <div class="dropdown-divider"></div>
    </div>
  
  <!-- Total och shieth -->
    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="ms-2">
        <div class="total-price">
          Totalt: <span class="ms-1">1000 SEK</span>
        </div>
        <small class="text-muted">inkl. moms</small>
      </div>
      <button class="btn btn-primary">Gå till kassan</button>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CartItem from './CartItem'
export default {
  components: {
    CartItem
  }
}
</script>

<style>

</style>