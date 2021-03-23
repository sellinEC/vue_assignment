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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['product']),
  },
  methods: {
    ...mapActions(['getProduct']),
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
