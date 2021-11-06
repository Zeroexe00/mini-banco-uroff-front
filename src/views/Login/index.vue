<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <h1>Ingresa tus datos</h1>
    <Login/>
  </div>
</template>

<script>
export default {
  components: {
    Login: () => import('@/components/login')
  }
}
</script>

<style>

</style>