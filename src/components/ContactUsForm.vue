<template>
  <div class="contact__form">
    <form>
      <h2 class="h2 title">ОСТАВИТЬ ЗАВЯВКУ</h2>
      <p class="contact__form-description">НА РАСЧЕТ СТОИМОСТИ</p>
      <div class="contact__form-group">
        <input class="contact__form-control" placeholder="Номер телефона" type="tel" v-model="phone">
        <input class="contact__form-control" placeholder="E-mail" type="email" v-model="email">
        <button type="button" class="btn" :disabled="!checkbox || !phone || !email ">Заказать расчет цены</button>
        <div class="contact__agreement">
          <input type="checkbox" v-model="checkbox">
          <span class="contact__form-agreement">Соглашаюсь с условиями передачи данных</span>
        </div>
      </div>
    </form>
  </div>

</template>

<script>
export default {
  data() {
    return {
      phone: null,
      email: null,
      checkbox: false
    }
  },
  name: "ContactUsItem"
}
</script>

<style lang="scss">

h2.h2.title {
  margin-top: 0;
  margin-bottom: 11px;
}

.contact__form-description {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #2E363E;
  margin-bottom: 45px;
}

.contact__form-control {
  border: 1px solid #7A7A7A;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #7A7A7A;
  padding: 20px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 10px;
  display: block;

  &:last-child {
    margin-bottom: 15px;
  }
}

.contact__agreement {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 130%;
  color: #7E868E;
}

.btn {
  &:disabled {
    background-color: #7A7A7A;

    &:hover {
      opacity: 1;
    }
  }

}

</style>