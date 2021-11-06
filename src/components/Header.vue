<template>
  <nav class="main-header mb-3">
    <b-container class="d-flex w-100 h-100">
      <b-row class="justify-content-md-end align-items-md-center w-100">
        <b-col cols="12" md="2">
          <router-link to="/">Home</router-link>
        </b-col>
        <b-col cols="12" md="2">
          <router-link to="/registro">Registro</router-link>
        </b-col>
        <b-col cols="12" md="2">
          <router-link to="/login">Mi Cuenta</router-link>
        </b-col>
        <!-- <b-col cols="12" md="2">
          <router-link to="/transferir">Transferencia</router-link>
        </b-col>
        <b-col cols="12" md="2">
          <router-link to="/retirar">Retirar</router-link>
        </b-col>
        <b-col cols="12" md="2">
          <router-link to="/depositar">Depositar/Recarga de saldo</router-link>
        </b-col> -->
      </b-row>
    </b-container>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-header {
  height: 8vh;
  background: #6a9eda;
  a {
    font-size: 18px;
    color: white;
  }
}
</style>