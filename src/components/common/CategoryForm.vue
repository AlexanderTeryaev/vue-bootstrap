<template>
  <b-container class="category_form">
    <b-row class="mr-0">
      <b-col sm="12" xl="6" class="pr-0">
        <img class="business_img" src="https://ekugellager.roccshow.com/modules/rocccategoryform/views/img/customhtmlblockimg.png" alt="Business">
        <div class="business_details_wrapper">
          <div class="overlay"></div>
          <div class="business_details">
            <h2><span>Rillenkugellager</span><br>Einsatzort und Anwendung</h2>
            <div class="category_carousel carousel-with-arrow">
              <carousel
              :margin="15"
              :navText="[prev, next]"
              :responsive="{
                0: {
                  items: 1,
                },
                576: {
                  items: 2
                },
                992: {
                  items: 3
                },
                1200: {
                  items: 2
                }
              }">
                <div class="item" v-for="(item, index) in carousel_items" :key="index">
                  <h4 class="title-product">Kegelrollenlager</h4>
                  <div class="img-product mt-3 mb-3"><img src="https://ekugellager.roccshow.com/modules/rocccategoryform/views/img/product.png" class=""></div>
                  <span class="more my-3"> Info</span>
                  <a class="select">AUSWÄHLEN</a>
                </div>
              </carousel>
            </div>
          </div>
        </div>
      </b-col>
      <b-col sm="12" xl="6">
        <div class="category_details">
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
  components: {
    carousel
  },
  data () {
    return {
      carousel_items: [1, 2, 3],
      prev: '<i aria-hidden="true" class="fa fa-chevron-left"></i>',
      next: '<i aria-hidden="true" class="fa fa-chevron-right"></i>'
    }
  }
}
</script>
<style scoped lang="scss">
 .category_form {
    background: url('../../assets/img/background.png') no-repeat top right #12407D;
    padding: 0px;
    border-radius: 8px;
    margin-bottom: 80px;
    min-height: 660px;
    img.business_img {
      width: 100%;
    }
    .business_details {
      position: absolute;
      width: 80%;
      top: 0%;
      left: 10%;
      line-height: initial;
      h2 {
        text-align: center;
        color: #FFFFFF;
        font-size: 42px;
        font-weight: 500;
        line-height: 60px;
        padding: 80px 0px;
        @media screen and (max-width: 1310px) {
          font-size: 24px;
          padding:40px 0px;
        }
      }
      span {
        font-size: 40px;
        font-weight: 600;
      }
      .category_carousel {
        .item {
          padding: 1rem;
          background: rgba(178,22,44,.8);
          padding-top: 50px;
          padding-bottom: 31px;
          padding-left: 40px;
          padding-right: 40px;
          flex-flow: column;
          display: flex;
          text-align: center;
          flex-wrap: nowrap;
          align-items: center!important;
          margin-bottom: 17px;
          border: 1px solid rgb(178,22,44);
          box-shadow: 0px 3px 30px #00000029;
          border-radius: 8px;
          margin-left: 10px;
          margin-right: 10px;
          .title-product {
            font-size: 24px;
            font-weight: 300;
            color: #fff;
          }
          .img-product {

          }
          .more {
            border: 0.5px solid #FFFFFF;
            border-radius: 23px;
            font-size: 12px;
            padding: 2px 10px;
            color: #fff;
          }
          .select {
            background-color: #113d78;
            box-shadow: 0px 3px 30px #00000029;
            border-radius: 8px;
            width: 80%;
            height: 28px;
            color: #fff;
            font-weight: 300;
            text-transform: uppercase;
            padding: 0px 0;
            flex-grow: 1;
            margin-top: auto;
            line-height: 26px;
            display: block;
            cursor: pointer;
          }
        }
      }
    }
    .category_details {
      padding: 50px 40px;
    }
 }
 @media screen and (max-width: 768px) {
   .category_form {
     background: #12407D;
     img.business_img {
      display: none;
    }
    .business_details {
      top: 0%;
      left: 0px;
      padding: 15px;
      position: relative;
      width: 100%;
      h2 {
        font-size: 22px;
        padding-bottom: 40px;
        padding: 15px 0px;
      }
      span {
        font-size: 23px;
      }
    }
    .category_details {
      padding: 0;
    }
   }
 }
 @media screen and (max-width: 1200px){
   img.business_img {
      display: none;
    }
 }

</style>
