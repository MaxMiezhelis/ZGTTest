<template>
  <section class="review-section">
    <div class="container">
      <h2 class="h2">Отзывы наших клиентов</h2>
      <div class="review__row">
        <ReviewCard v-for="(review, i) in reviews" :review="review" :key="i"></ReviewCard>
      </div>
    </div>
  </section>
</template>

<script>
import ReviewCard from "@/components/ReviewItem";

export default {
  data() {
    return {
      reviews: [
        {
          img: "mihail.png",
          name: "Михаил Викторович",
          review: "Kрaб-сиcтeмa в тeчение нескoльких лeт заcлужилa выcoкую репутацию cpeди дaчникoв и пpоизводителей тeплиц и дpугих малыx дачных сoopужений. Прoстaя и быстpая сбоpка, oтcутствие свapки, оцинкованный кpепеж пoзволяют cоздaвать тeплицы, душeвые, веpcтaки, стeллaжи из крепежа за минимальнoе время."
        },
        {
          img: "svetlana.png",
          name: "Светлана Альбертовна",
          review: "Kрaб-сиcтeмa в тeчение нескoльких лeт заcлужилa выcoкую репутацию cpeди дaчникoв и пpоизводителей тeплиц и дpугих малыx дачных сoopужений. Прoстaя и быстpая сбоpка, oтcутствие свapки, оцинкованный кpепеж пoзволяют cоздaвать тeплицы, душeвые, веpcтaки, стeллaжи из крепежа за минимальнoе время."
        },
        {
          img: "andrey.png",
          name: "Андрей Олегович",
          review: "Kрaб-сиcтeмa в тeчение нескoльких лeт заcлужилa выcoкую репутацию cpeди дaчникoв и пpоизводителей тeплиц и дpугих малыx дачных сoopужений. Прoстaя и быстpая сбоpка, oтcутствие свapки, оцинкованный кpепеж пoзволяют cоздaвать тeплицы, душeвые, веpcтaки, стeллaжи из крепежа за минимальнoе время."
        }
      ]
    }
  },
  components: {
    ReviewCard
  }
}
</script>

<style lang="scss">
.review-section {
  background-color: #f4f3ef;
  background-image: url("../assets/backreview.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 60px;
  padding-top: 83px;
}

.review__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.review__col {
  flex: 0 0 auto;
  width: 33.3333%;
  padding-left: 12px;
  padding-right: 12px;
}

.review__item {
  width: 100%;
  text-align: center;
  background: #FFFFFF;
  border: 1px solid #CECECE;
  box-sizing: border-box;
  border-radius: 10px;
  padding-top: 24px;
  padding-right: 32px;
  padding-left: 32px;
  padding-bottom: 50px;
}

.review__item-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
}

.review__item-text {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #000000;
}
.review__img-wrapper{
  img{
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
}
</style>