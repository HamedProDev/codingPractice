<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 text-center">
        <h1 class="display-4">Welcome to the Farm Practice App</h1>
        <p class="lead mt-3">Explore the dashboard, learn about us, and manage your farm data efficiently.</p>
        <router-link to="/Dash" class="btn btn-primary btn-lg mt-4">Go to Dashboard</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage'
}
</script>