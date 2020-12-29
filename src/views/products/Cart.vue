<template>
  <b-container class="cart mt-5">
    <div class="page-title text-center mb-5">
      <h3>{{$t('products.shoppingcart')}}</h3>
    </div>
    <div class="shopping-cart mb-5">
      <b-container>
        <b-row>
          <b-col lg="8" cols="12">
            <CartOverview :items="items" :removeItem="removeItem" :updateItem="updateItem" v-if="items.length" />
          </b-col>
          <b-col lg="4" cols="12">
            <CartCheckout :details="details" :applyCouponCode="applyCouponCode" v-if="details && items.length"/>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </b-container>
</template>

<script>
import { Trans } from '../../lang/Translation'
import CartOverview from '@/components/common/CartOverview'
import CartCheckout from '@/components/common/CartCheckout'
export default {
  name: 'cart',
  components: {
    CartOverview,
    CartCheckout
  },
  data () {
    return {
      items:
      [
      ],
      details: ''
    }
  },
  watch: {
    '$store.getters.cart': function () {
      this.updateCart()
    }
  },
  methods: {
    updateCart () {
      this.items = this.$store.getters.cart ? this.$store.getters.cart.items : []
      this.items.forEach((item, index) => {
        item.cart_quantity = parseInt(item.cart_quantity)
      })
      this.details = this.$store.getters.cart
    },
    removeItem (index) {
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
          console.log('details: ', res)
        })
      })
    },
    updateItem (index, value) {
      if (value < 1) value = 1
      const params = {
        id_product: this.items[index].id_product,
        ps_item_id: this.items[index].ps_item_id,
        id_product_attribute: this.items[index].id_product_attribute,
        qty: value,
        id_shop: 1,
        id_lang: Trans.getLangId(Trans.currentLanguage)
      }
      // console.log('params', params)
      this.$store.dispatch('updateInCart', params).then(res => {
        // console.log(res)
      })
    },
    applyCouponCode (code) {
      const params = {
        id_shop: 1,
        id_lang: Trans.getLangId(Trans.currentLanguage),
        code: code
      }
      this.$store.dispatch('applyCouponCode', params).then(res => {
        // console.log(res)
      })
    }
  },
  mounted () {
    this.updateCart()
  }
}
</script>
<style scoped lang="scss">
.cart {
  .page-title {
    text-transform: uppercase;
  }
}
</style>
