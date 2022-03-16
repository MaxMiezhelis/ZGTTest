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
          <nav class="header__nav" :class="{'header__nav--active': isOpened}">
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
        <div class="header__col header__col--menu">
          <div @click="addMenuClass" :class="{'header__menu--opened': isOpened}" class="header__menu">
            <div class="header__menu-icon">
              <div class="header__bar">
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
      isOpened: false,
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

    addMenuClass(){
    this.isOpened = !this.isOpened
    },

    applyCityHandler() {
      this.chooseCityModal = false
    }
  },
}
</script>

<style lang="scss">
.header-section {
  display: block;
  padding-top: 15px;
  padding-bottom: 15px;
}

.header__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
    @media(max-width: 1310px) {
      display: none;
    }
  }

  &--menu {
    display: none;
    @media (max-width: 1310px) {
      display: block;
    }
  }
}

.header__contact-group {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

}

.header__nav {
  @media (max-width: 1310px) {
    background: #FFFFFF;
    flex-direction: column;
    padding: 10px 0;
    position: absolute;
    top: 70px;
    right: -15px;
    display: none;
  }
 &--active{
   @media (max-width: 1310px) {
     display: flex;
   }
 }
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

  @media(max-width: 1320px) {
    font-size: 14px;
  }

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

  @media(max-width: 1320px) {
    font-size: 14px;
  }
}

.header__contact-phone {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  text-decoration: none;

  @media(max-width: 1320px) {
    font-size: 14px;
  }
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

.header__menu {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  display: none
}

@media (max-width: 1310px) {
  .header__menu {
    display: block
  }
}

.header__menu .header__menu-icon {
  display: block;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-left: auto
}

.header__menu .header__bar, .header__menu .header__bar::before,
.header__menu .header__bar::after {
  width: 30px;
  height: 3px
}

.header__menu .header__bar {
  position: relative;
  -webkit-transform: translateY(13px);
  -ms-transform: translateY(13px);
  transform: translateY(13px);
  background: black;
  -webkit-transition: all 0ms 300ms;
  transition: all 0ms 300ms
}

.header__menu .header__bar:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 12px;
  background: black;
  -webkit-transition: bottom 300ms 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms cubic-bezier(.23, 1, .32, 1);
  transition: bottom 300ms 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms cubic-bezier(.23, 1, .32, 1);
  transition: bottom 300ms 300ms cubic-bezier(.23, 1, .32, 1), transform 300ms cubic-bezier(.23, 1, .32, 1);
  transition: bottom 300ms 300ms cubic-bezier(.23, 1, .32, 1), transform 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms cubic-bezier(.23, 1, .32, 1)
}

.header__menu .header__bar:after {
  content: "";
  position: absolute;
  left: 0;
  top: 12px;
  background: black;
  -webkit-transition: top 300ms 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms cubic-bezier(.23, 1, .32, 1);
  transition: top 300ms 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms cubic-bezier(.23, 1, .32, 1);
  transition: top 300ms 300ms cubic-bezier(.23, 1, .32, 1), transform 300ms cubic-bezier(.23, 1, .32, 1);
  transition: top 300ms 300ms cubic-bezier(.23, 1, .32, 1), transform 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms cubic-bezier(.23, 1, .32, 1)
}

.header__menu--opened .header__bar {
  background-color: #fff
}

.header__menu--opened .header__bar:before {
  bottom: 0;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-transition: bottom 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms 300ms cubic-bezier(.23, 1, .32, 1);
  transition: bottom 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms 300ms cubic-bezier(.23, 1, .32, 1);
  transition: bottom 300ms cubic-bezier(.23, 1, .32, 1), transform 300ms 300ms cubic-bezier(.23, 1, .32, 1);
  transition: bottom 300ms cubic-bezier(.23, 1, .32, 1), transform 300ms 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms 300ms cubic-bezier(.23, 1, .32, 1)
}

.header__menu--opened .header__bar:after {
  width: 30px;
  margin: 0;
  top: 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: top 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms 300ms cubic-bezier(.23, 1, .32, 1);
  transition: top 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms 300ms cubic-bezier(.23, 1, .32, 1);
  transition: top 300ms cubic-bezier(.23, 1, .32, 1), transform 300ms 300ms cubic-bezier(.23, 1, .32, 1);
  transition: top 300ms cubic-bezier(.23, 1, .32, 1), transform 300ms 300ms cubic-bezier(.23, 1, .32, 1), -webkit-transform 300ms 300ms cubic-bezier(.23, 1, .32, 1)
}
</style>