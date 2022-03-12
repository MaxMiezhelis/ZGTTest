<template>
  <section class="header-section">
    <div class="container">
      <div class="header__row">
        <div class="header__col header__col--logo">
          <div class="header__logo-wrapper">
            <img src="../assets/standart.png" width="220" alt="">
          </div>
        </div>
        <div class="header__col header__col--nav">
          <nav class="header__nav">
            <a class="header__nav-link" href="">Каталог</a>
            <a class="header__nav-link" href="">Расчет стоимости</a>
            <a class="header__nav-link" href="">Партнеры</a>
            <a class="header__nav-link" href="">Отзывы</a>
          </nav>
        </div>
        <div class="header__col header__col--contacts">
          <div class="header__contact-group">
            <div class="header__contact-item header__contact-item--pin">
              <div class="header__contact-item-inner">
                <span class="header__contact-city" v-if="selectedOffice">{{ selectedOffice.city }}</span>
                <button class="header__button-modal" @click="chooseCityHandler">Все города</button>
              </div>
            </div>
            <div class="header__contact-item header__contact-item--phone">
              <div class="header__contact-item-inner">
                <a class="header__contact-phone" :href="'tel:'+ selectedOffice.phone">{{ selectedOffice.phone }}</a>
                <a class="header__contact-order" :href="'tel:'+ selectedOffice.phone">Заказать звонок</a>
                <el-dialog v-model="chooseCityModal" title="Выберите город" width="30%">
                  <template #footer>
                    <button class="btn" @click="applyCityHandler"> Подтвердить</button>
                  </template>
                  <select class="form-select" :value="selectedOffice.id" @change="selectOfficeHandler">
                    <option v-for="(office,i) in offices" :key="i" :value="office.id">{{ office.city }}</option>
                  </select>
                </el-dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import {mapActions, mapGetters} from 'vuex'
import {ElDialog} from "element-plus"
import 'element-plus/es/components/dialog/style/css'

export default {
  components: {ElDialog},
  data() {
    return {
      chooseCityModal: false
    }
  },
  computed: {
    ...mapGetters(["selectedOffice", "offices"])
  },
  methods: {
    ...mapActions(["selectOfficeHandler"]),
    chooseCityHandler() {
      this.chooseCityModal = true
    },
    getImgUrl(pic) {
      return require('../assets/' + pic)
    },
    applyCityHandler(){
      this.chooseCityModal = false
    }
  },
}
</script>

<style lang="scss">
.header-section {
  padding-top: 15px;
  padding-bottom: 15px;
}

.header__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header__col {
  flex: 0 0 auto;

  &--logo {
    max-width: 220px;

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }

  &--nav {

    margin-left: 20px;
    margin-right: 20px;
  }

  &--contacts {
  }
}

.header__contact-group {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

}

.header__nav-link {
  display: inline-block;
  padding: 5px 22px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  color: #000000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.header__contact-city {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
}

.header__contact-phone {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;
}

.header__button-modal {
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  background-color: transparent;


  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #319F01;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.header__contact-order {
  display: block;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #319F01;
}

.header__contact-item {
  margin-left: 30px;
  padding-left: 30px;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    position: absolute;
    top: 0;
    left: 0;
  }
}

.header__contact-item--pin {
  &::before {
    background-image: url("../assets/fottermarker.svg");
  }
}


.header__contact-item--phone {
  &::before {
    background-image: url("../assets/footerphone.svg");
  }
}

.header__contact-item-inner {

}

.el-dialog__title {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
}
</style>