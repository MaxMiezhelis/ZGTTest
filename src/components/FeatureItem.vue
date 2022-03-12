<template>
  <div class="features__col">
    <div class="features__item">
      <div class="features__item-row">
        <div class="features__item-col features__item-col--img">
          <div class="features__img-wrapper">
            <img :src="getImgUrl(advantage.img)" width="98">
          </div>
        </div>
        <div class="features__item-col features__item-col--text">
          <h4 class="features__item-title">{{ advantage.title }}</h4>
          <p class="features__item-text" v-html="advantage.text"></p>
        </div>
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
  props: ["advantage"]
}
</script>

<style>

</style>