<template>
  <b-container class="recommend-products">
    <h4 class="my-3 text-left">Brand PRODUCTS</h4>
    <b-row class="products">
      <b-col lg="4" md="6" sm="12" v-for="(item, index) in products" :key="index">
        <ProductBox :product="products[index]" :addtocart="addToCart"/>
      </b-col>
    </b-row>
    <nav class="row page-bottom">
      <b-col md="4" sm="12" class="page-info">
        Showing 1-1 of 1 item(s)
      </b-col>
      <b-col md="8" sm="12" class="pagination-nav">
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          @input="selectPage"
          align="right"
        ></b-pagination>
      </b-col>
    </nav>
    <BlockCartModal />
  </b-container>
</template>>
<script>
import ProductBox from '@/components/common/ProductBox'
import BlockCartModal from '@/components/common/BlockCartModal'
import { BLOCK_CART_MODAL } from '@/constants/modal'
export default {
  components: {
    ProductBox,
    BlockCartModal
  },
  data () {
    return {
      modalId: BLOCK_CART_MODAL,
      products: [
        {
          id: 231,
          name: 'Hummingbird printed t-shirt',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/28-home_default/brown-bear-printed-sweater.jpg',
          head: {
            heading: [
              'Ø Inside', 'Ø External', 'Width'
            ],
            subhead: [
              '10 mm', '26 mm', '8 mm'
            ]
          },
          quality: {
            info: 'Product quality info',
            content: [1, 1, 1, 0]
          },
          pricelist: [
            {
              quantity: 15,
              discount: '15%',
              unitprice: 13.05
            },
            {
              quantity: 50,
              discount: '25%',
              unitprice: 11.05
            },
            {
              quantity: 100,
              discount: '35%',
              unitprice: 9.95
            }
          ]
        },
        {
          id: 1345,
          name: 'Hummingbird notebook',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/2-large_default/hummingbird-printed-t-shirt.jpg'
        },
        {
          id: 342,
          name: 'Hummingbird notebook',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/28-home_default/brown-bear-printed-sweater.jpg',
          quality: {
            info: 'Product quality info',
            content: [1, 1, 1, 1]
          }
        },
        {
          id: 32,
          name: 'Hummingbird printed t-shirt',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/6-home_default/mug-the-best-is-yet-to-come.jpg'
        },
        {
          id: 14,
          name: 'Hummingbird printed t-shirt',
          price: 15.35,
          currency: '€',
          image: 'https://ekugellager.roccshow.com/2-large_default/hummingbird-printed-t-shirt.jpg'
        }
      ],
      rows: 100,
      perPage: 10,
      currentPage: 1
    }
  },
  methods: {
    addToCart (n) {
      console.log('count to add', n)
      this.$bvModal.show(this.modalId)
    },
    selectPage (selectedpage) {
      console.log(selectedpage)
    }
  }
}
</script>
