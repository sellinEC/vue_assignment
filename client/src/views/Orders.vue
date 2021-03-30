<template>
<div class="container">
  <!-- deletefubnktion? -->
 
  <div v-for="order in orders" :key="order.index">
    <div class="container border">
      <h6 class="text-start text-muted">Order#</h6>
    <Order v-for="item in order" :key="item.index" :item="item"/>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Order from '../components/orders/Order'
export default {
  components: {
    Order
  },
  computed: {
    ...mapGetters(['orders', 'userEmail'])
  },
  methods: {
    ...mapActions(['getOrders', 'cleanup'])
  },
  created() {
    //Hämtar ordrar från databas
    this.getOrders(this.userEmail)
  },
  //Städar arrayen vid sidbyte
  destroyed() {
    this.cleanup()
  }
}
</script>

<style>

</style>