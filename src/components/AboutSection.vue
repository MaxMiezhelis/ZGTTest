<template>
  <section class="about-section">
    <div class="container">
      <h2 class="h2">Почему мы?</h2>
      <div class="about__row">
        <AboutItem v-for="(aboutItem,i) in aboutItems" :aboutItem="aboutItem" :key="i"></AboutItem>
      </div>
    </div>
  </section>
</template>

<script>
import AboutItem from "@/components/AboutItem";

export default {
  data() {
    return {
      aboutItems: [
        {
          img: "truck.svg",
          title: "Собственное производство",
          text: "Мы изготавливаем элементы краб-системы на собственном производстве в Вологде, уделяя особое внимание качеству."
        },
        {
          img: "truck.svg",
          title: "Доставка по всей России",
          text: "Мы осуществляем доставку нашей продукции по всей России."
        },
        {
          img: "rub.svg",
          title: "Доступные цены",
          text: "Так как мы являемся производителем, мы предлагаем нашу продукцию без лишних наценок."
        },
        {
          img: "like.svg",
          title: "Гарантия качества",
          text: "Мы уделяем особое внимание качеству нашей продукции и дорожим нашими клиентами."
        }
      ]
    }
  },
  components: {
    AboutItem
  }
}

</script>

<style lang="scss">
.about-section {
  background-color: #FFFFFF;
  padding-top: 88px;
  padding-bottom: 78px;
}

.about__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.about__col {
  flex: 0 0 auto;
  width: 25%;
  padding-left: 12px;
  padding-right: 12px;
}

.about__item {

}

.about__img-wrapper{
  margin-bottom: 24px;

  img{
    display: block;
    max-width: 100%;
    height: auto;
    margin: 0 auto;
  }
}

.about__item-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  margin: 8px 0px;
}

.about__item-text {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  margin: 8px 0px;
}
</style>