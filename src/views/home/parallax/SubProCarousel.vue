<template>
  <div class="sub_carousel carousel-with-arrow px-4 px-sm-0">
    <carousel
      :autoplay="false"
      :margin="15"
      :navText="[prev, next]"
      :dots="true"
      :responsive="{
        0: {
          items: 1,
          loop: false,
          nav: true
        },
        576: {
          items: 2,
          loop: true,
          nav: false
        },
        768: {
          items: 3,
          loop: true,
          nav: false
        },
        992: {
          items: 4,
          loop: true,
          nav: false
        }
      }"
      >
      <!-- <div v-if="current_pro_index!=null && pro_carousel_items[current_pro_index].sub.length"> -->
        <div class="item" v-for="(item, index) in current_sub" :key="index">
          <div class="pro_view">
            <h4 class="title-product">{{item.title}}</h4>
            <div class="img-product">
              <b-img :src="getImageUrl(item.image)"></b-img>
            </div>
            <div class="morebtn"></div>
            <a class="select" @click="openFilter(index)">{{$t('parallax.choose')}}</a>
          </div>
        </div>
      <!-- </div> -->
    </carousel>
  </div>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
  components: {
    carousel
  },
  data () {
    return {
      current_sub: [],
      prev: '<i aria-hidden="true" class="fa fa-2x fa-chevron-left"></i>',
      next: '<i aria-hidden="true" class="fa fa-2x fa-chevron-right"></i>'
    }
  },
  props: {
    current_pro: Object,
    openFilter: Function
  },
  watch: {
    current_pro: {
      immediate: true,
      handler () {
        this.current_sub = this.current_pro.sub
      }
    }
  },
  methods: {
    getImageUrl (imagename) {
      var images = require.context('@/assets/img', false)
      return images('./' + imagename)
    }
  }
}
</script>
<style lang="scss" scoped>
  .sub_carousel {
    padding: 50px 0 15px;
    .item {
      width: 100%;
      @media screen and (max-width: 576px) {
        width: 90%;
      }
      margin:auto;
    }
    .pro_view {
      background: linear-gradient(135deg, #123e7a 1%,#113c77 100%);
      box-shadow: 0px 0 10px rgba(0,0,0,0.2);
      margin: 10px;
      padding: 30px;
      text-align: center;
      margin-right: 0;
      h4 {
        font-size: 16px;
        font-weight: 300;
      }
      img {
        margin: 20px 0;
      }
      .morebtn {
        display: inline-block;
        width: 100%;
        height: auto;
        min-height: 50px;
      }
      .select {
        background-color: #b2162c;
        color: #fff;
        box-shadow: 0 3px 30px #00000029;
        border-radius: 8px;
        width: 100%;
        height: auto;
        font-weight: 300;
        text-transform: uppercase;
        padding: 4px 0;
        flex-grow: 1;
        margin-top: auto;
        line-height: 26px;
        display: block;
        cursor: pointer;
        margin: 0 auto;
      }
    }
  }
</style>
