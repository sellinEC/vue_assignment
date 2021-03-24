<template>
<div class="container">
  <div class="card details">
    <h1>Product details</h1>
    <p>{{ product.name }}</p>
    <p>{{ product.short }}</p>
    <p>{{ product.desc }}</p>
    <p>{{ product.price }}</p>
    <img :src="product.image" alt="" class="image-width">
    </div>
    <button class="btn" @click="addItemToCart({product, quantity})">BUY</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      quantity: 1
    }
  },
  computed: {
    ...mapGetters(['product']),
  },
  methods: {
    ...mapActions(['getProduct', 'addItemToCart']),
  },
  mounted() {
    this.getProduct(this.$route.params.id)
  },
};
</script>

<style scoped>
.image-width {
  max-width: 500px;
  margin: auto;

}
</style>
