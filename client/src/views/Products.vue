<template>
<div class="products">
  <div v-for="product in products" :key="product.id" class="output">
  <h1>{{product.title}}</h1>
  <h2>Product</h2>
  <p>Detaljer     <router-link to="/products/details/hej">products</router-link></p>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'Products',
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