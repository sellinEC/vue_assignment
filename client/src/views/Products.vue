<template>
<div class="products">
  <Product v-for="product in products" :key="product.id" :product="product"  />
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Product from '../components/Product'
export default {
  name: 'Products',
  component: {
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