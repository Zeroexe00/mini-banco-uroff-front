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
        console.log(val,typeof val)
        this.amount = this.$options.filters.toCurrency(val)
        return 
      }
    },
    state() {
      return this.amount > 0
    },
    invalidFeedback() {
      if (this.amount === 0) {
        return ''
      }
      return 'Ingresa un monto valido'
    }
  },
  methods: {
    async onRecharge(e) {
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