<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Cykel Smedjan</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/shop">Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/gabin">gabin</router-link>
          </li>
        <li>
            <router-link  to="/anitha" class="nav-link text-white">anitha</router-link>
          </li>
          l
       
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
/* Additional styling if needed */
</style>
