<template>
  <yandex-map v-if="selectedOffice" class="ymap-class"
              :settings="settings"
              :coords="selectedOffice.coords"
              ref="map"
              zoom="14">
    <ymap-marker marker-id="2"
                 :coords="selectedOffice.coords"
                 :balloon="{header: 'Second'}"
                 cluster-name="1"
    >
    </ymap-marker>
  </yandex-map>
</template>
<script>
import {yandexMap, ymapMarker} from 'vue-yandex-maps'
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      settings: {
        apiKey: '40690439-6e08-4795-8f1d-f86a29cb56eb',
        lang: 'ru_RU',
        coordorder: 'latlong',
        enterprise: false,
        version: '2.1'
      }
    }
  },
  components: {
    yandexMap,
    ymapMarker
  },
  computed: {
    ...mapGetters(["selectedOffice"])
  }

}
</script>

<style lang="scss">
.ymap-class {
  width: 100%;
  height: 576px;
}
</style>