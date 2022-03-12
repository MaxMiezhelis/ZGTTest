<template>
  <div class="review__col">
    <div class="review__item">
      <div class="review__img-wrapper">
        <img :src="getImgUrl(review.img)">
      </div>
      <div class="review__item-detail">
        <h4 class="review__item-title">{{ review.name }}</h4>
        <p class="review__item-text">{{ review.review }}</p>
      </div>
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
  props: ["review"]
}
</script>

<style scoped>

</style>