<template>
<div class="products m-2">
  <Product v-for="product in products" :key="product._id" :product="product"/>
</div>

</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Product from '../components/Product.vue'
export default {
  name: 'Products',
  components: {
    Product
  },
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>

<style>

</style>