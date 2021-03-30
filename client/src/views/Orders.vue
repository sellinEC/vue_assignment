<template>
<div>
  <!-- deletefubnktion? -->
  ORders!
  <div v-for="order in orders" :key="order.index">
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
    ...mapActions(['getOrders'])
  },
  created() {
    this.getOrders(this.userEmail)
    // console.log(this.orders +"orders från orders.vue");
    // console.log(this.userEmail +"från orders.vue");
  }
}
</script>

<style>

</style>