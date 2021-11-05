<template>
  <div>
    <form>
      <input type="text" v-model="name">
      <input type="id" v-model="id">
      <input type="text" v-model="email">
      <input type="password" v-model="password">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      id: '',
      email: '',
      password: '',
    }
  },
  methods:{ 
    onRegister(){
      return
    }
  }
}
</script>

<style>

</style>