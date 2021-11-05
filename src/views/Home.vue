<template>
  <div class="home">
    <MainBanner />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    MainBanner: () => import('@/components/home/MainBanner.vue')
  }
}
</script>
