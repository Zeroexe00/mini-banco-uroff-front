<template>
  <div class="container">
    <b-form @submit="onLogin" class="d-flex flex-column justify-content-start w-100">
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
import jwt_decode from 'jwt-decode';
export default {
  data() {
    return {
      rut: '',
      password: ''
    }
  },
  methods: {
    makeToast() {
      this.$bvToast.toast('Error al ingresar al sistema', {
        title: `Error`,
        variant: 'danger', 
        toaster: 'b-toaster-top-center',
        solid: true
      })
    },
    async onLogin(e) {
      try {
        e.preventDefault()

        const loginData = {
          rut: this.rut,
          password: this.password
        }
        
        const { data: { success, token } } = await this.axios.post('/api/login', loginData)

        if(success) {
          if(typeof window == 'object') {
            localStorage.setItem('token', token)
          }
          const userInfo = jwt_decode(token);

          await this.$store.dispatch('setUserInfo', userInfo)
          
          this.$router.push('/')
          return;
        }
        
        this.makeToast()

        return;

      } catch (error) {
        console.log('err', error)
        this.makeToast()
      }
    }
  }
}
</script>

<style>

</style>