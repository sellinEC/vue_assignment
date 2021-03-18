<template>
  <div class="home">

    <h1>Welcome Home</h1>
    <router-link to="/about">about</router-link>
    <router-link to="/products">products</router-link>
    <router-link to="/cart">Cart</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
