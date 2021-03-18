<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">HEJ</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/products" class="nav-link">Products</router-link>
        <a class="nav-link" href="#">Register</a>
        <a class="nav-link" href="#">Trading</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Black Market</a>
       <router-link to="/about" class="nav-link">about</router-link>
       <router-link to="/admin" class="nav-link">admin</router-link>
      </div>
    </div>
  </div>
  <router-link to="/cart"><i class="fas fa-shopping-cart"></i></router-link>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.fas {
  color: green;
  font-size: 1.5rem;
}
</style>