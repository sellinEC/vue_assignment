<template>
  <div class="kassa">
    <div v-for="item in cart" :key="item.product._id">
      <div class="card">{{item.product.name}} x {{item.quantity}}</div>
    </div>
    <button class="btn btn-info" @click="handleSave">Checkout</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions(['handleSave'])
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
</style>