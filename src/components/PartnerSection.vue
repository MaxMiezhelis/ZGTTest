<template>
  <section class="partner-section">
    <div class="container">
      <h2 class="h2">Наши партнеры</h2>
      <div class="partner__row">
        <PartnerItem v-for="(partner,i) in partners" :partner="partner" :key="i"></PartnerItem>
      </div>
    </div>
  </section>

</template>

<script>
import PartnerItem from "@/components/PartnerItem";

export default {
  data() {
    return {
      partners: [
        {
          img: "Severstal.png",
          width: "384"
        },
        {
          img: "zgt.png",
          width: "384"
        },
        {
          img: "gf1.png",
          width: "384"
        }
      ]
    }
  },
  components: {
    PartnerItem
  }
}
</script>

<style lang="scss">
.partner-section {
  padding-top: 80px;
  padding-bottom: 74px;
  background-color: #FFFFFF;
}

.partner__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
}

.partner__col{
  flex: 0 0 auto;
  width: 33.3333%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 49px;
    &:last-child{
      margin-bottom: 0;
    }
  }
}

.partner__img-wrapper{
  img{
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
}
</style>