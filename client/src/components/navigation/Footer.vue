<template>
  <div class="card bg-success"> <!--  Styling footer color  -->
  <div class="card-footer shadow"> <!--  Styling footer reklambanner  -->
    <!-- <img src="../../assets/images/footer.png" alt="Reklam"> -->
  </div>
  
  <div class="card-body">
    <div class="dropdown">
  <router-link to="/kassa" class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Checkout <i class="fas fa-shopping-cart"> </i> 
  </router-link>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<br>
<div class="copyR text-white">&copy; {{ new Date().getFullYear() }} Webshoop</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style> 

</style>