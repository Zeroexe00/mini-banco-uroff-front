<template>
  <div class="container">
    <b-form @submit="onRecharge">
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
      <b-button type="submit">Recargar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 0
    }
  },
  computed: {
    getAmount: {
      get() {
        return this.amount
      },
      set(val) {
        this.amount = this.$options.filters.toCurrency(val)
        return 
      }
    },
    getUser() {
      return this.$store.state.user
    },
  },
  methods: {
    makeToast(variant,msg,title) {
      this.$bvToast.toast(msg, {
        title: title,
        variant: variant, 
        toaster: 'b-toaster-top-center',
        solid: true
      })
    },
    async onRecharge(e) {
      try {
        e.preventDefault()
        const amount = parseInt(this.amount)
        if(!amount || amount <= 0) {
          this.makeToast('danger','Error al depositar el monto','Error')
        }
        const {data: { sucess, updateUser }} = await this.axios.post('/api/deposit',{ rut: this.getUser.rut , amount: amount})
        this.makeToast('success','Exito al depositar.','Exito')
      } catch (error) {
        this.makeToast('danger','Error al depositar el monto','Error')
        console.log(error)
      }
    }
  },
  async mounted() {
    await this.$store.dispatch('getUserInfo')
  }
}
</script>

<style lang="scss">
@import "bootstrap/scss/bootstrap.scss";
@import "bootstrap-vue/src/index.scss";
</style>