<template>
  <div class="container">
    <b-form @submit="onWithdraw">
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
      <b-button type="submit">Retirar</b-button>
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
    }
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
    async onWithdraw(e) {
      try {
        e.preventDefault()
        const amount = parseInt(this.amount)
        if(!amount || amount <= 0) {
          this.makeToast('danger','Error al retirar monto','Error')
          return
        }

        const {data: {sucess, updatedUser}} = await this.axios.post('/api/withdraw',{rut: this.getUser.rut , amount: amount})

        if(sucess) {
          this.makeToast('success','Exito al retirar monto','Exito')
        }else {
          this.makeToast('danger','Error al retirar monto','Error')
        }

      } catch (error) {
        this.makeToast('danger','Error al retirar monto','Error')
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