<template>
  <HeaderBlock></HeaderBlock>
  <IntroBlock></IntroBlock>
  <FeaturesSection></FeaturesSection>
  <InStockBlock></InStockBlock>
  <AboutSection></AboutSection>
  <ProductionSection></ProductionSection>
  <ContactUsSection></ContactUsSection>
  <PartnerSection></PartnerSection>
  <ReviewsSection></ReviewsSection>
  <MapSection></MapSection>
  <FooterSection></FooterSection>
</template>

<script>

import HeaderBlock from "@/components/HeaderSection";
import IntroBlock from "@/components/IntroSection";
import ReviewsSection from "@/components/ReviewsSection";
import FeaturesSection from "@/components/FeaturesSection";
import InStockBlock from "@/components/InStockSection";
import AboutSection from "@/components/AboutSection";
import ContactUsSection from "@/components/ContactUsSection";
import ProductionSection from "@/components/ProductionSection";
import MapSection from "@/components/MapSection";
import PartnerSection from "@/components/PartnerSection";
import FooterSection from "@/components/FooterSection";

export default {
  data() {
    return {
      search: ""
    }
  },
  methods: {},
  name: 'App',
  components: {
    ContactUsSection,
    FooterSection,
    PartnerSection,
    MapSection,
    ProductionSection,
    AboutSection,
    InStockBlock,
    ReviewsSection,
    IntroBlock,
    HeaderBlock,
    FeaturesSection
  }
}

</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

body{
  margin: 0;
}

.container {
  max-width: 1310px;
  padding: 0 15px;
  margin: 0 auto;
  min-width: 320px;
}


h1,.h1{
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 5px;


  @media (max-width: 767px){
    font-size: 47px;
  }

  @media (max-width: 480px) {
    font-size: 42px
  }
}
h2,.h2 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  color: #000000;
  text-align: center;
  margin-top: 0;
  margin-bottom: 80px;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 32px;
    margin-top: -32px;
  }
}


h3,.h3{
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 1.3;
  letter-spacing: 0.02em;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 12px;
  }
}
.h4{
  @media (max-width: 480px) {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 13.36px;
    line-height: 18px;
  }
}
a.btn,button.btn{
  border: none;
  display: inline-block;
  padding: 18px 32px;
  border-radius: 3px;
  background-color: #319f01;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #FFFFFF;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    padding: 7px 9px;
  }

  &:hover{
    background: #3BBB03;
    border-radius: 3px;
  }
  &:active{
    background: #298601;
    border-radius: 3px;
  }
}

.h4{
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.02em;

 @media(max-width: 480px){
  font-size: 20px;
}
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
</style>

