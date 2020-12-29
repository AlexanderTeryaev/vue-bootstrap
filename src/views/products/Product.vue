<template>
  <b-container>
    <div class="product detail mt-5">
      <b-row>
        <b-col md="5">
          <section class="page-content">
            <ProductImages  v-if="images.length" :images="images" :description_short="description_short" :prices="prices" :banner_info="banner_info"/>
            <div class="scroll-box-arrows"></div>
            <div class="product-configurators"></div>
            <ProductDescription :description="description" v-if="description"/>
          </section>
        </b-col>
        <b-col md="7">
          <b-row>
            <b-col lg="6" class="product_features">
              <ProductTechnical :items="product_features" :manufacturer="product_manufacturer" v-if="product_features.length" />
            </b-col>
            <b-col lg="6" class="product_cart">
              <ProductCart :addtocart="addToCart" :details="cart_details" :selected_groups="selected_groups" v-if="cart_details.description_short"/>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div class="featured-products clearfix mt-3">
        <h4>{{$t('products.also_bought')}}</h4>
        <b-row class="products">
          <b-col lg="4" md="6" sm="12" v-for="(item, index) in featured_products" :key="index">
              <ProductBox :product="item" :addtocart="addToCart"/>
          </b-col>
        </b-row>
      </div>
    </div>
    <BlockCartModal :details="modal_details" :ps_item_id="ps_item_id" :current_item="current_item"/>
  </b-container>
</template>
<script>
import { Trans } from '../../lang/Translation'
import { ProductServices } from '@/services/index'
import ProductImages from '@/components/common/ProductImages'
import ProductTechnical from '@/components/common/ProductTechnical'
import ProductDescription from '@/components/common/ProductDescription'
import ProductBox from '@/components/common/ProductBox'
import ProductCart from '@/components/common/ProductCart'
import BlockCartModal from '@/components/common/BlockCartModal'
import { loadingSpinnerConfig } from '@/config/settings'
export default {
  name: 'product',
  metaInfo () {
    return {
      title: this.product_name
    }
  },
  components: {
    ProductImages,
    ProductTechnical,
    ProductDescription,
    ProductBox,
    ProductCart,
    BlockCartModal
  },
  data () {
    return {
      product_details: {},
      ps_item_id: '0_0', // product id _ id_comination
      current_item: {},
      product_features:
      [
      ],
      images: [
      ],
      banner_info: [],
      prices: {},
      description: {
        text: '',
        manufacturer: '',
        reference: '',
        in_stock: '',
        available_date: ''
      },
      description_short: '',

      product_name: '',
      cart_details: {
        name: '',
        quality: '',
        description_short: '',
        groups: [],
        base_price: '',
        price: '',
        quantity: '',
        quantity_discounts: []
      },
      product_manufacturer: '',
      selected_groups: [],
      combinations: [],
      modal_details: {},
      featured_products: [
        {
          id: 231,
          name: 'Preis ab',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/28-home_default/brown-bear-printed-sweater.jpg'
        },
        {
          id: 1345,
          name: 'Preis ab',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/2-large_default/hummingbird-printed-t-shirt.jpg'
        }
      ]
    }
  },
  methods: {
    addToCart (n) {
      const idCombination = this.combinations.length ? this.combinations[0].id_combination : 0
      this.ps_item_id = this.product_details.id_product + '_' + idCombination
      const params = {
        id_product: this.product_details.id_product,
        id_lang: Trans.getLangId(Trans.currentLanguage),
        id_shop: 1,
        id_product_attribute: idCombination,
        qty: n
      }
      this.$store.dispatch('addToCart', params).then(res => {
        this.modal_details = res.cart
        this.current_item = res.cart.items.filter(this.item_filter)[0]
        this.$bvModal.show('blockcart_modal')
      })
    },
    item_filter (item, index) {
      return item.ps_item_id === this.ps_item_id
    },
    setTitle (name) {
      this.product_name = name
    },
    setProductImages (images, description, prices, banner) {
      this.images = images

      this.description_short = description
      this.prices = prices
      this.banner_info = banner
    },
    setProductDescription (res, quantity) {
      this.description.text = res.description
      this.description.manufacturer = res.product_manufacturer
      this.description.reference = res.reference
      this.description.in_stock = quantity
      this.description.available_date = res.available_date
    },
    setProductFeatures (features, manufacturer) {
      this.product_features = features.filter((item, index) => item.name !== 'Quality')
      this.product_features.unshift({
        name: this.$t('products.technical_specifications'),
        value: ''
      })
      this.product_manufacturer = manufacturer
    },
    setProductCart (res, quantity) {
      this.cart_details.name = res.name
      var qualityFeature = res.features.filter((item, index) => item.name === 'Quality')
      this.cart_details.quality = qualityFeature.length ? qualityFeature[0].value : ''
      this.cart_details.description_short = res.description_short
      this.cart_details.groups = res.groups
      this.cart_details.base_price = res.base_price
      this.cart_details.price = res.price
      this.cart_details.quantity = quantity
      this.cart_details.quantity_discounts = res.quantity_discounts
    },
    setSelectedGroups (groups) {
      this.selected_groups = []
      groups.forEach((item, index) => {
        // use default value in case of non query
        var groupValue = this.$route.query[item.group_name] ? this.$route.query[item.group_name] : item.default
        this.selected_groups.push(parseInt(groupValue))
      })
    },
    manageProductDetails (res) {
      var quantity, prices
      var images = []
      if (res.groups.length) { // in case of group exists
        this.setSelectedGroups(res.groups)
        this.combinations = res.combinations.filter((item, index) => JSON.stringify(item.attributes) === JSON.stringify(this.selected_groups))
        if (this.combinations[0].id_image === -1) { // in case of combination image doesn't exists
          res.gallery.forEach((item, index) => {
            images.push({
              id: index + 1,
              url: item[0].value
            })
          })
        } else {
          this.combinations[0].images.forEach((item, index) => {
            images.push({
              id: index + 1,
              url: item.value
            })
          })
        }
        quantity = this.combinations[0].quantity
        prices = this.combinations[0].specific_price
      } else { // in case of group doesn't exist
        res.gallery.forEach((item, index) => {
          images.push({
            id: index + 1,
            url: item[0].value
          })
        })
        quantity = res.quantity
        prices = res.specific_prices
      }
      // browswer title
      this.setTitle(res.name)
      // product technical features
      this.setProductFeatures(res.features, res.product_manufacturer.name)
      // cart details
      this.setProductCart(res, quantity)
      // product images
      this.setProductImages(images, res.description_short, prices, res.banner_info)
      // product description
      this.setProductDescription(res, quantity)
    },
    getProductDetails () {
      const params = {
        shopId: 1,
        langId: Trans.getLangId(Trans.currentLanguage),
        productId: this.$route.params.id_product
      }
      this.loader = this.$loading.show(loadingSpinnerConfig)
      ProductServices.productDetails(params).then(res => {
        this.product_details = res
        this.manageProductDetails(this.product_details)
        this.loader.hide()
      })
    }
  },
  mounted () {
    this.getProductDetails()
  },
  watch: {
    $route (to, from) {
      if (to.path !== from.path) {
        this.getProductDetails()
      } else {
        this.manageProductDetails(this.product_details)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.product.detail {
  .page-content {
    position: relative;
    max-width: 452px;
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 30px;

  }
  .featured-products {
      h4 {
        text-align: left;
      }
    }
}
</style>
