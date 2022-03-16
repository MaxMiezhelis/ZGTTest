<template>
  <section class="instock-section">
  <div class="container">
    <h2 class="h2">ВСЕГДА В НАЛИЧИИ</h2>
    <div class="instock__row">
          <InStockItem v-for="(instockItem,i) in instockItems" :instockItem="instockItem" :key="i">
          </InStockItem>
        </div>
      </div>
  </section>
</template>

<script>
import InStockItem from "@/components/InStockItem";

export default {
  data() {
    return {
      instockItems: [
        {
          img: "t20.jpg",
          title: "Т-образная краб-система 20х20",
          price: "20 руб/комп"
        },

        {
          img: "x20.jpg",
          title: "Х-образная краб-система 20х20",
          price: "20 руб/комп"
        },
        {
          img: "t25.jpg",
          title: "Т-образная краб-система 25х25",
          price: "25 руб/комп"
        }, {
          img: "x25.jpg",
          title: "Х-образная краб-система 25х25",
          price: "25 руб/комп"
        }

        ]
    }
  },
  components: {InStockItem}
}
</script>

<style lang="scss">
.instock-section{
  padding-top: 72px;
  padding-bottom: 65px;
  background-color: #f2efed;
}

.instock__row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 991px){
    flex-wrap: wrap;
  }
}



.instock__col {
  flex: 0 0 auto;
  width: 25%;
  padding-left: 6px;
  padding-right: 6px;

  @media (max-width: 991px){
    width: 50%;
    margin-bottom: 10px;
  }
  @media (max-width: 480px){
    width: 100%;
    margin-top: 10px;
  }
}

.instock__item {
  box-shadow: 0px 5.10782px 11.4926px rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  background: #FFFFFF;
}

.instock__img-wrapper{
  img{
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
}

.instock__item-detail{
  padding-top: 16px;
  padding-bottom: 18px;
  padding-right: 18px;
  padding-left: 18px;
}
.instock__item-title {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #000000;
  margin: 0;
  margin-bottom: 10px;
}

.instock__item-group{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.instock__item-price {
  flex: 0 0 auto;
  max-width: 60%;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: left;
  color: #000000;
  margin: 0;
}

.instock__qty-wrapper{
  flex: 0 0 auto;
  max-width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.item__qty-input {
  flex: 0 0 auto;
  width: 40px;
  text-align: center;
  border: 1px solid #C9C9C9;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 2px 5px;
  text-align: center;
  margin-right: 5px;
}

.item__qty-text{
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: #000000;
  margin: 0;
}

.instock__item-button {
  display: flex;
  align-items: center;
  padding: 8px 24px;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 3px;
  background-color: transparent;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  margin-left: auto;
}






</style>