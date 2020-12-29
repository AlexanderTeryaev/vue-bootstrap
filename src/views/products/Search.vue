<template>
  <b-container class="search-page">
    <h4 class="mt-5"> SEARCH RESULTS </h4>
    <b-row class="mt-5">
      <b-col md="12" sm="12">
        <b-row class="products" v-if="products.length > 0">
          <b-col lg="4" md="6" sm="12" v-for="(item, index) in products" :key="index">
            <ProductBox :product="products[index]" :addtocart="addToCart"/>
          </b-col>
        </b-row>
        <b-row class="no-products text-center" v-if="products.length == 0">
          <span> No contents </span>
        </b-row>
        <nav class="row page-bottom">
          <b-col md="4" sm="12" class="page-info">
            Showing {{(currentPage - 1) * perPage + 1}}-{{(currentPage - 1) * perPage + products.length}} of {{totalCount}} item(s)
          </b-col>
          <b-col md="8" sm="12" class="pagination-nav">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalCount"
              :per-page="perPage"
              @input="selectPage"
              align="right"
            ></b-pagination>
          </b-col>
        </nav>
      </b-col>
    </b-row>
    <div>
    </div>
    <BlockCartModal :details="modal_details" :ps_item_id="ps_item_id" :current_item="current_item"/>
    <CategoryForm />
  </b-container>
</template>

<script>
import { Trans } from '@/lang/Translation'
import ProductBox from '@/components/common/ProductBox'
import { HeaderServices, ProductServices } from '@/services/index'
import BlockCartModal from '@/components/common/BlockCartModal'
import CategoryForm from '@/components/common/CategoryForm'
import { BLOCK_CART_MODAL } from '@/constants/modal'
import { loadingSpinnerConfig, pageSize, shopId } from '@/config/settings'
export default {
  name: 'search',
  components: {
    ProductBox,
    BlockCartModal,
    CategoryForm
  },
  data () {
    return {
      totalCount: 0,
      perPage: pageSize,
      currentPage: 1,
      products: [],
      activeFilters: ['Categories: Clothes', 'Size: S'],
      modalId: BLOCK_CART_MODAL,
      modal_details: {},
      ps_item_id: '0_0', // product id _ id_comination
      current_item: {},
      loader: null
    }
  },
  mounted () {
    this.callProducts()
  },
  created () {
  },
  methods: {
    callProducts () {
      const params = {
        shopId: shopId,
        langId: Trans.getLangId(Trans.currentLanguage),
        query: this.$route.query.key,
        page: this.currentPage,
        perPage: this.perPage
      }
      this.loader = this.$loading.show(loadingSpinnerConfig)
      HeaderServices.searchProducts(params).then(resp => {
        this.freshProducts(resp.products)
        this.totalCount = resp.products_count
        this.loader.hide()
      })
    },
    freshProducts (products) {
      products.forEach(p => {
        if (p.features && p.features.length > 0) {
          p.head = []
          p.features.forEach(e => {
            if (e.name === 'Quality') {
              switch (e.value) {
                case 'Best':
                  p.quality = {
                    content: [1, 1, 1, 1]
                  }
                  break
                case 'Very Good':
                  p.quality = {
                    content: [1, 1, 1, 0]
                  }
                  break
                case 'Good':
                  p.quality = {
                    content: [1, 1, 0, 0]
                  }
                  break
                default:
                  break
              }
            }
            if (e.id_feature === '7' || e.id_feature === '8' || e.id_feature === '9') {
              p.head.push({
                name: e.name,
                value: e.value + ' mm'
              })
            }
          })
        }
      })
      this.products = products
    },
    selectPage (selectedpage) {
      this.currentPage = selectedpage
      this.callProducts()
    },
    addToCart (product, qty) {
      const params = {
        shopId: shopId,
        langId: Trans.getLangId(Trans.currentLanguage),
        productId: product.id_product
      }
      ProductServices.productDetails(params).then(res => {
        this.toCart(res, qty)
      })
    },
    toCart (product, qty) {
      const idCombination = product.combinations.length ? product.combinations[0].id_combination : 0
      this.ps_item_id = product.id_product + '_' + idCombination
      const params = {
        id_product: product.id_product,
        id_lang: Trans.getLangId(Trans.currentLanguage),
        id_shop: shopId,
        id_product_attribute: idCombination,
        qty: qty
      }
      this.$store.dispatch('addToCart', params).then(res => {
        this.modal_details = res.cart
        this.current_item = res.cart.items.filter((item) => item.ps_item_id === this.ps_item_id)[0]
        this.$bvModal.show(BLOCK_CART_MODAL)
      })
    }
  },
  watch: {
    $route (to, from) {
      if (to.query.key !== from.query.key) {
        this.callProducts()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.active-filters-block {
  display: flex;
  .filter-title {
    width: 150px;
    padding-top: 12px;
    background: #ced4da;
    font-weight: 600;
  }
  .b-form-tags {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    background-color: #ced4da;
    input {
      outline: none !important;
    }
  }
  .b-form-tags.focus {
    border-color: #ced4da;
    outline: none !important;
    box-shadow: none !important;
  }
}
.products {
  margin-bottom: 20px;
}
.page-bottom .page-info {
  padding: 7px 7px !important;
}
.page-bottom .pagination-nav {
  padding: 0px 0px !important;
}
.no-products {
  min-height: 300px;
  span {
    margin: auto;
  }
}
</style>
