<template>
  <div class="home">
    <MainBanner />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    MainBanner: () => import('@/components/home/MainBanner.vue')
  }
}
</script>
