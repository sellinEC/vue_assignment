<template>
   <div class="card bgcolor">
  <div class="card-footer">
    <img src="../../assets/images/footer.png" alt="Reklam">
  </div>
  
  <div class="card-body">
    <div class="dropdown">
  <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Kundvagn => <i class="fas fa-shopping-cart"> </i> 
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<br>
<div class="copyR">&copy; {{ new Date().getFullYear() }} House of Power</div>
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