<template>
  <div class="home">
    <MainBanner />
    <div v-if="isAuthenticated">
      <div class="container mt-5">
        <b-row>
          <b-col class="justify-content-center d-flex">
            <b-button size="lg" @click="goTo('/retirar')">Retirar</b-button>
          </b-col>
          <b-col class="justify-content-center d-flex">
            <b-button size="lg" @click="goTo('/depositar')">Depositar</b-button>
          </b-col>
          <b-col class="justify-content-center d-flex">
            <b-button size="lg" @click="goTo('/transferir')">Transferir</b-button>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    MainBanner: () => import('@/components/home/MainBanner.vue')
  },
  computed: {
    isAuthenticated() {
      let isAuthenticated;
      if(typeof window === 'object') {
        isAuthenticated = localStorage.getItem('token')
      }
      return this.$store.state.isAuth || isAuthenticated
    }
  },
  methods: {
    goTo(val) {
      this.$router.push(val)
    }
  }
}
</script>
