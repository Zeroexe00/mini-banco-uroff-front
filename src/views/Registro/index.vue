<template>
  <div class="container">
    <div class="row w-100 flex-column justify-content-center align-items-center">
      <h1>Registro</h1>
      <p>Registrate hoy para gozar de los beneficios del MiniBanco Uroff</p>
      <form action="POST" class="d-flex flex-column col-md-6 col-12">
        <b-row>
          <b-col cols="12" md="6">
            <label for="name">Nombre: </label>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-input id="name" type="text" placeholder="Ingrese Nombre" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6">
            <label for="name">Rut: </label>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-input id="rut" type="text" placeholder="Ingrese Rut" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6">
            <label for="name">Email: </label>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-input id="email" type="email" placeholder="Ingrese Email" />
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" md="6">
            <label for="name">Password: </label>
          </b-col>
          <b-col cols="12" md="6">
            <b-form-input id="password" type="password" placeholder="Ingrese Password"  />
          </b-col>
        </b-row>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>