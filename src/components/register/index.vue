<template>
  <div class="d-flex w-100">
    <b-form @submit="onRegister" class="d-flex flex-column justify-content-start col-md-9 col-12">
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
              label="Email:"
              label-for="input-email"
            >
              <b-form-input
                id="input-email"
                v-model="email"
                type="email"
                placeholder="Ingrese email"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="w-100">
          <b-col cols="12" md="6">
            <b-form-group
              id="input-group-3"
              label="Nombre:"
              label-for="input-nombre"
            >
              <b-form-input
                id="input-name"
                v-model="name"
                type="text"
                placeholder="Ingrese Nombre"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="w-100">
          <b-col cols="12" md="6">
           <b-form-group
              id="input-group-4"
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
            <b-button type="submit" size="lg">Registrar</b-button>
          </b-col>
        </b-row>
      </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      rut: '',
      email: '',
      password: '',
    }
  },
  methods:{
    makeToast(variant,msg,title) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant, 
        toaster: 'b-toaster-top-center',
        solid: true
      })
    },
    async onRegister(e){
      try {

        e.preventDefault()
        
        const user = {
          name: this.name,
          rut: this.rut,
          email: this.email,
          password: this.password
        }
        
        const { data, ...response } = await this.axios.post('/api/register', user)
  
        if(response.status !== 200) {
          this.makeToast('danger','Error al registrar usuario y/o ya existe.','Error');
          console.log(data)
          return
        }
        
        this.makeToast('success','Exito al crear usuario','Exito');
        console.log('exito', data)
        this.$router.push('/')
        return
        
      } catch (error) {
        this.makeToast('danger','Error al registrar usuario y/o ya existe.','Error');
        console.log('error', error)
      }
      
    }
  }
}
</script>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";
@import "bootstrap-vue/src/index.scss";

</style>