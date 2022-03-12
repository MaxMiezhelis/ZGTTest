<template>
  <section class="production-section">
    <div class="container">
      <h2 class="h2">Наше производство</h2>
      <div class="production__row">
        <ProductionItem></ProductionItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProductionItem from "@/components/ProductionItem";

export default {
  components: {ProductionItem}
}
</script>
<style lang="scss">
.production__media-wrapper{
  width: 100%;
  iframe{
    display: block;
    width: 100%;
    height: 720px;
  }
}
.production-section{
  padding-top: 78px;
  padding-bottom: 89px;
  background-image: url("../assets/productionback.png");
}
</style>
