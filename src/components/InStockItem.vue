<template>
  <div class="instock__col">
    <div class="instock__item">
      <div class="instock__img-wrapper">
        <img :src="getImgUrl(instockItem.img)">
      </div>
      <div class="instock__item-detail">
        <h4 class="instock__item-title">{{ instockItem.title }}</h4>
        <div class="instock__item-group">
          <p class="instock__item-price">{{ instockItem.price }}</p>
          <div class="instock__qty-wrapper">
            <input type="tel"
                   class="item__qty-input"
                    value="0">
            <p class="item__qty-text">комп.</p>
          </div>
        </div>
        <button class="instock__item-button">Заказать</button>
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
  props: ["instockItem"]
}
</script>

<style lang="scss">
.instock__item-card-button {
  margin-left: auto;
}
</style>