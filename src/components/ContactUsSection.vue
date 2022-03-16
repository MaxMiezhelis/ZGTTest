<template>
  <section class=contact-section>
    <div class="container">
      <ContactUsForm>
      </ContactUsForm>
    </div>

  </section>
</template>

<script>
import ContactUsForm from "@/components/ContactUsForm";

export default {
  components: {
    ContactUsForm
  }
}
</script>

<style lang="scss">
.contact-section{
  padding-top: 135px;
  padding-bottom: 130px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
  background-color: #8aa347;
  background-image: url("../assets/backcantact.jpg");
}
  .contact__form{
    margin-left: auto;
    background-color: #FFFFFF;
    width: 452px;
    height: 528px;
    padding-top: 42px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 40px;

    @media(max-width: 480px){
    width: 100%;
    }

    .btn{
      width: 100%;
      margin-bottom: 10px;
    }
  }
.contact__form-group{

}
</style>