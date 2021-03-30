<template>
<div>
  <!-- deletefubnktion? -->
  ORders!
  <div v-for="order in orders" :key="order.index">
    Order:
    <div v-for="item in order" :key="item.index">
      <p>{{item.product.name}} x {{item.quantity}}</p>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  // props:['userEmail', 'orders'],
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