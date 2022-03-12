<template>
  <div class="partner__col">
    <div class="partner__img-wrapper">
      <img :src="getImgUrl(partner.img)" :width="partner.width" alt="">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImgUrl(pic) {
      return require('../assets/' + pic)
    }
  },
  props: ["partner"]
}

</script>

<style scoped>

</style>