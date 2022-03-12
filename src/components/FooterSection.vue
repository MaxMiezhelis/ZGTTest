<template>
  <section class="footer-section">
    <div class="container">
      <div class="footer__row">
        <div class="footer__col footer__col--logo">
          <div class="footer__logo-wrapper">
            <img src="../assets/standart.png" width="262">
          </div>
        </div>
        <div class="footer__col footer__col--contact">
          <div class="footer__contact-item footer__contact-item--address">
            <p class="footer__address-text">{{selectedOffice.city}}</p>
          </div>
          <div class="footer__contact-item footer__contact-item--tel">
            <p class="footer__number-text">{{selectedOffice.phone}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


import {mapGetters} from "vuex";

export default {
  data() {
    return {
      img: "standart.png",
      city: "Москва, ул. Ленина, д. 25",
      number: "8-985-344-76-46"
    }
  },
  computed:{
    ...mapGetters (["selectedOffice"])
  }
}

</script>

<style lang="scss">
.footer-section {
  padding-top: 61px;
  padding-bottom: 61px;
}

.footer__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.footer__col {
  flex: 0 0 auto;

  &--logo {
    max-width: 40%;
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }

  &--contact {
    width: 60%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }
}

.footer__contact-item {
  flex: 0 0 auto;
  max-width: 50%;
  position: relative;
  padding-left: 30px;
  margin-left: 80px;
  &:first-child{
    margin-left: 0;
  }
  &::before {
    content: "";
    display: block;
    width: 22px;
    height: 25px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
  }

  &--address {

    &::before {
      background-image: url("../assets/fottermarker.svg");
    }
  }

  &--tel {
    &::before {
      background-image: url("../assets/footerphone.svg");
    }
  }
}

.footer__address-text {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin: 0;
}

.footer__number-text {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin: 0;
}
</style>