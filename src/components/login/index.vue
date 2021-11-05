<template>
  <div class="d-flex w-100">
    <b-form @submit="onLogin" class="d-flex flex-column justify-content-start col-md-9 col-12">
        <b-row class="w-100">
          <b-col cols="12" md="6">
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
          </b-col>
        </b-row>
        <b-row class="w-100">
          <b-col cols="12" md="6">
            <b-form-group
              id="input-group-2"
              label="Contraseña:"
              label-for="input-password"
            >
              <b-form-input
                id="input-password"
                v-model="password"
                type="password"
                placeholder="Ingrese Contraseña"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-button type="submit" size="lg">Ingresar</b-button>
          </b-col>
        </b-row>
      </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rut: '',
      password: ''
    }
  },
  methods: {
    onLogin(e) {
      e.preventDefault()
      console.log(e)
      return
    }
  }
}
</script>

<style>

</style>