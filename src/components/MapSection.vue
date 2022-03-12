<template>
  <section class="map-section">
    <h2 class="h2">Мы на карте</h2>
    <MapItem></MapItem>
  </section>
</template>

<script>
import MapItem from "@/components/MapItem";

export default {
  components:{
    MapItem
  }

}
</script>

<style lang="scss">
.map-section{
  padding-top: 72px;
}
</style>