<template>
  <div class="container">
    <h1>Transferencia de Saldo</h1>
    <b-form @submit="onRecharge">
      <b-form-group
          id="input-group-1"
          label="Rut:"
          label-for="input-rut"
        >
          <b-form-input
            id="input-rut"
            v-model="rut"
            type="text"
            placeholder="Ingrese Rut"
            required
          ></b-form-input>
        </b-form-group>
      <b-form-group
          id="input-group-1"
          label="Monto:"
          label-for="input-number"
        >
          <b-form-input
            id="input-number"
            v-model="amount"
            type="number"
            placeholder="Ingrese Monto"
            required
          ></b-form-input>
        </b-form-group>
      <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="input-email"
        >
          <b-form-input
            id="input-email"
            v-model="email"
            type="email"
            placeholder="Ingrese Email"
            required
          ></b-form-input>
        </b-form-group>
      <b-button type="submit">Transferir</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rut: '',
      amount: '',
      email: ''
    }
  }
}
</script>

<style>

</style>