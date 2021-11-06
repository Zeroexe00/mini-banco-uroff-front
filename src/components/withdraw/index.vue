<template>
  <div>
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
        console.log(val,typeof val)
        this.amount = this.$options.filters.toCurrency(val)
        return 
      }
    }
  },
  methods: {
    async onWithdraw(e) {
      try {
        e.preventDefault()
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>