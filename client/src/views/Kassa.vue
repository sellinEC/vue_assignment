<template>
  <div class="kassa">
    <div v-for="item in cart" :key="item.product._id">
      <div class="card">{{item.product.name}} x {{item.quantity}}</div>
    </div>
    <button class="btn btn-info" @click="handleSave">CHeckout</button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters(['cart'])
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