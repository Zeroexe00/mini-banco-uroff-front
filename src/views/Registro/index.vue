<template>
  <div class="container">
    <div class="row w-100 flex-column justify-content-center align-items-center">
      <h1>Registro</h1>
      <p>Registrate hoy para gozar de los beneficios del MiniBanco Uroff</p>
      <Register />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Register: () => import('@/components/register')
  }
}
</script>

<style>

</style>