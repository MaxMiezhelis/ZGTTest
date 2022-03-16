<template>
  <section class="features-section">
    <div class="container">
      <h2 class="h2">ПРЕИМУЩЕСТВА СИСТЕМЫ</h2>
      <div class="features__row">
        <FeatureItem v-for="(advantage,i) in advantages" :advantage="advantage" :key="i"></FeatureItem>
      </div>
    </div>
  </section>
</template>

<script>
import FeatureItem from "@/components/FeatureItem";

export default {
  data() {
    return {
      advantages: [
        {
          img: "bodybuilding.svg",
          title: "Высокая прочность и надёжность, жёсткость и надёжность",
          text: "По прочности соединение с помощью краб-системы ничем не уступает"
        },
        {
          img: "piggy.svg",
          title: "Низкая стоимость",
          text: "Цена конструкции относительна низка, так как:<ul class='features__list'>\n" +
              "            <li>\n" +
              "              • Вам не нужно использовать сварочный аппарат\n" +
              "            </li>\n" +
              "            <li>\n" +
              "              • работу Вы можете сделать своими руками\n" +
              "            </li>\n" +
              "          </ul>"
        },
        {
          img: "cycle.svg",
          title: "Возможность многоразового использования",
          text: "Система соединения позволяет перестроить конструкцию – уменьшить, увеличить размеры"
        },
        {
          img: "montage.svg",
          title: "Простота монтажа",
          text: "Для выполнения работ Вам не требуется специальных знаний, Краб-система закрепляется при помощи болтов и гаек"
        }
      ]
    }
  },
  components: {
    FeatureItem
  }
}
</script>

<style lang="scss">
.features-section {
  background-color: #FFFFFF;
  padding-top: 82px;
  padding-bottom: 17px;
}

.features__row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
}

.features__col {
  flex: 0 0 auto;
  width: 50%;
  padding-right: 33px;
  padding-left: 34px;

  @media (max-width: 768px){
    width: 100%;
  }
}

.features__item {

}


.features__item-row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.features__item-col {
  flex: 0 0 auto;
  margin-bottom: 56px;
}

.features__item-col--img {
  width: 98px;
  margin-right: 24px;
}

.features__item-col--text {
  flex: 1 1 auto;
}

.features__img-wrapper {
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
}

.features__item-title {
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-top: 0;
  margin-bottom: 4px;
}

.features__item-text {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #000000;
  margin: 0;
  @media (max-width: 1320px) {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 9.27px;
    line-height: 13px;
    letter-spacing: 0.02em;
  }
}

.features__item-title {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.02em;
  color: #000000;
  @media(max-width: 720px){
    font-size: 20px;
  }
}

.features__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.features__item-text {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #000000;
  
  @media (max-width: 720px) {
    font-size: 17px;
  }
}
</style>