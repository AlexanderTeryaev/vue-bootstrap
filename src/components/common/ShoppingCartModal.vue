<template>
  <div class="shopping-cart-detail">
    <b-modal :id="modalId" hide-footer hide-header size="md" class="cart-details-subhe show-cart-detail">
        <div class="shopping_cart_top_heading">
            <h1>
                {{$t('products.cart')}}
                <a href="#" @click="$bvModal.hide(modalId)" class="close_shopping_cart_top">
                    <b-icon icon="x"></b-icon>
                </a>
            </h1>
        </div>
        <div>
            <div class="top_cart_product px-3" v-if="items.length">
              <b-row class="shopping_cart_top_products" v-for="(item, index) in items" :key="index">
                <b-col cols="3"><span class="count">{{item.cart_quantity}}X</span></b-col>
                <b-col cols="6" class="text-center">
                  <a href="title" class="product_name">{{item.name}}</a>
                  <div v-if="item.attributes">
                     <div class="attributes_data"  v-for="(attr, i) in item.attributes.split('-')" :key="i"><p class="small">{{attr}}</p></div>
                  </div>
                </b-col>
                <b-col cols="3" class="text-right">
                  <p class="price">€{{parseFloat(item.total).toFixed(2)}}</p>
                  <b-link href="#" @click="removeItem($event, index)" title="remove from cart"><b-icon icon="x-circle" variant="danger"></b-icon></b-link>
                </b-col>
              </b-row>
            </div>
            <div class="cart-canvas-price-button">
                <b-row class="netto-price">
                    <b-col class="col-lg-8 px-0">Gesamt netto:</b-col>
                    <b-col class="col-lg-4 px-0 text-right">€{{totals.length ? totals[2].amount : '0.00'}}</b-col>
                </b-row>
                <b-row class="tax-price">
                    <b-col class="col-lg-8 px-0">+ 19% MwSt.</b-col>
                    <b-col class="col-lg-4 px-0 text-right ">€{{totals.length ? (totals[1].amount- totals[2].amount).toFixed(2) : '0.00'}}</b-col>
                </b-row>
                <b-row class="total-price">
                    <b-col class="col-lg-8 px-0">Gesamt</b-col>
                    <b-col class="col-lg-4 px-0 text-right"><span class="total_price">€{{totals.length ? totals[1].amount : '0.00'}}</span></b-col>
                </b-row>
                <div class="continue-preview-cart continue-shopping">
                    <div class="col-md-12 col-12 text-center col-xs-12">
                      <router-link :to="$i18nRoute({ name: 'cart'})" @click.native="$bvModal.hide(modalId)" class="continue-shopping-a continue-checkout">
                        Zur Kasse
                      </router-link>
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
  </div>
</template>

<script>
import { Trans } from '../../lang/Translation'
import { SHOPPING_CART_MODAL } from '@/constants/modal'
export default {
  data () {
    return {
      modalId: SHOPPING_CART_MODAL,
      items: [],
      totals: []
    }
  },
  methods: {
    removeItem ($event, index) {
      const params = {
        ps_item_id: this.items[index].ps_item_id
      }
      // this.items = this.items.filter((item, i) => { return i !== index })
      this.$store.dispatch('removeFromCart', params).then(res => {
        const params = {
          id_lang: Trans.getLangId(Trans.currentLanguage),
          id_shop: 1
        }
        this.$store.dispatch('getCartDetails', params).then(res => {
        })
      })
    },
    updateCart () {
      this.items = this.$store.getters.cart ? this.$store.getters.cart.items : []
      this.totals = this.$store.getters.cart ? this.$store.getters.cart.totals : []
    }
  },
  watch: {
    '$store.getters.cart': function () {
      this.updateCart()
    }
  },
  mounted () {
    this.updateCart()
  }
}
</script>

<style scoped lang="scss">
  .top_cart_product {
    .shopping_cart_top_products {
      margin-bottom: 20px;
      color: #f0f0f0;
      font-size: 16px;
      font-weight: 500;
      a {
        color: #f0f0f0;
      }
      p.price {
        margin-bottom: auto;
      }
      .attributes_data {
        p {
          font-size: 14px;
          color: #ccc;
          font-weight: 500;
          margin: 0;
        }
      }
    }
  }
</style>
