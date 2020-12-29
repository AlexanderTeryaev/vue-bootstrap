<template>
<div>
  <ul class="product-flags">
    <li class="product-flag discount" v-if="reduction">{{reduction}}</li>
    <template v-for="(banner, i) in banner_info">
      <li class="product-flag" :class="banner.code" v-if="parseInt(banner.value)" :key="i">{{banner.label}}</li>
    </template>
  </ul>
  <div class="images-container">
    <div class="product-cover">
      <b-img class="js-qv-product-cover" :src="images[selected].url"></b-img>
      <div class="layer d-none d-md-block" v-b-modal.product_detail_modal>
        <b-icon icon="zoom-in" class="zoom-in"></b-icon>
      </div>
    </div>
    <div class="js-qv-mask mask">
      <ul class="product-images js-qv-product-images">
        <li class="thumb-container" v-for="(item, index) in images" :key="index" @click="selectImage(index)">
          <b-img class="thumb js-thumb" :class='{selected:(index==0)}' :src="item.url" width="100"></b-img>
        </li>
      </ul>
    </div>
  </div>
  <b-modal size="xl" id="product_detail_modal"  hide-header hide-footer>
    <figure>
      <div>
        <b-img class="js-modal-product-cover product-cover-modal" width="800" :src="images[selected].url"></b-img>
      </div>
      <figcaption class="image-caption">
        <div v-html="description_short">

        </div>
      </figcaption>
    </figure>
    <aside id="thumbnails" class="thumbnails js-thumbnails text-sm-center">
      <div class="js-modal-mask mask  nomargin ">
        <ul class="product-images js-modal-product-images">
          <li class="thumb-container" v-for="(item, index) in images" :key="index" @click="selectImage(index)">
            <b-img  class="thumb js-modal-thumb" :src="item.url" width="250"></b-img>
          </li>
        </ul>
      </div>
    </aside>
  </b-modal>
</div>
</template>
<script>
export default {
  props: {
    images: Array,
    description_short: String,
    prices: Object,
    banner_info: Array
  },
  data () {
    return {
      selected: 0,
      reduction: ''
    }
  },
  mounted () {
    this.reduction = this.prices.reduction
    if (parseFloat(this.reduction) === 0) {
      this.reduction = 0
      return
    }
    if (this.prices.reduction_type === 'percentage') {
      this.reduction = this.reduction * 100 + '%'
    } else if (this.prices.reduction_type === 'amount') {
      this.reduction = '€' + parseFloat(this.reduction).toFixed(2)
    }
    if (parseInt(this.prices.price) === -1) this.reduction = '-' + this.reduction
  },
  methods: {
    selectImage (index) {
      this.selected = index
    }
  }
}
</script>
<style lang="scss" scoped>
.product-flags {
  pointer-events: none;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  z-index: 2;
  li {
    background-color: #f39d72;
    width: fit-content;
    font-weight: 700;
    padding: .3125rem .4375rem;
    text-transform: uppercase;
    color: #fff;
    margin-top: .625rem;
    font-size: 1rem;
    box-shadow: 2px 2px 4px 0 rgba(0,0,0,.2);
  }
  .pack {
    pointer-events: auto;
    width: fit-content;
    background: #2fb5d2;
    font-weight: 700;
    padding: .3125rem .4375rem;
    text-transform: uppercase;
    color: #fff;
    margin-top: .625rem;
    font-size: 1rem;
    box-shadow: 2px 2px 4px 0 rgba(0,0,0,.2);
  }
  .new {
    background: #2fb5d2;
  }
}
.images-container {
  box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2);
  .product-cover {
    position: relative;
    margin-bottom: 1.25rem;
    .layer {
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      background: hsla(0,0%,100%,.7);
      text-align: center;
      cursor: pointer;
      .zoom-in {
        font-size: 6.25rem;
        color: #7a7a7a;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .layer:hover {
      opacity: 1;
      outline: none;
    }
    img {
      width: 100%;
    }
  }
  .js-qv-mask {
    padding-left: 20px;
    padding-right: 20px;
    white-space: nowrap;
    overflow: hidden;
    .product-images {
      border-top: 2px solid #eee;
      padding-top: 20px;
      display: flex;
      .thumb {
        margin-right: 0.8125rem;
        margin-bottom: 0.625rem;
      }
    }
  }
}
.image-caption {
  // padding: 20px;
    background: #fff;
    width: 800px;
    padding: .625rem 1.25rem;
    border-top: 1px solid #f1f1f1;

}
.product_detail_modal {
  img {
    width: 100%;
  }
}
.js-modal-product-images {
  border-top: 2px solid #eee;
  padding-top: 20px;
  margin-left: 2.5rem;
  .thumb-container {
    margin-bottom: 20px;
    background: #fff;
    img {
      border: 3px solid transparent;
      width: 9.25rem;
    }
    img:hover {
      border: 3px solid #2fb5d2;
    }
  }
}
.thumb-container {
  cursor: pointer;
}

</style>
