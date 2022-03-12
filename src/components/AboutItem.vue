<template>
  <div class="about__col">
    <div class="about__item">
      <div class="about__img-wrapper">
        <img :src="getImgUrl(aboutItem.img)" width="98">
      </div>
    </div>
    <div class="about__item-detail">
      <h4 class="about__item-title">{{ aboutItem.title }}</h4>
      <p class="about__item-text">{{ aboutItem.text }}</p>
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
  props: ["aboutItem"]
}
</script>

<style>

</style>