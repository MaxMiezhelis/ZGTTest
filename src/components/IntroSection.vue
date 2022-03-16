<template>
  <section class="intro-section">
    <div class="container">
      <h1 class="h1"> Краб - система </h1>
      <h3 class="h3"> Для быстровозводимых каркасных конструкций </h3>
      <button type="button" class="btn">Получить консультацию</button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.intro-section {
  padding-top: 85px;
  padding-bottom: 133px;
  background-color: #efeae6;
  background-image: url("../assets/intro.jpg");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;

  @media (max-width: 480px) {
    background-position: center;
  }



  .h3{
    max-width: 395px;
    margin: 0;
    margin-bottom: 55px;
  }
}


</style>