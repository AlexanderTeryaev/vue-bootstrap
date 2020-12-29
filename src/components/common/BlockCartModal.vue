<template>
  <div class="shopping-cart-detail">
    <b-modal :id="modalId" hide-footer class="cart-details-subhe show-cart-detail"  size="xl">
        <div slot="modal-title">
            <b-icon icon="check2"></b-icon>
            <span>Product successfully added to your shopping cart</span>
        </div>
        <div class="modal-body" v-if="Object.keys(details).length">
            <b-row>
                <b-col md="5" sm="12" class="divide-right">
                    <b-row>
                        <b-col md="6" sm="12">
                            <img :src="current_item.image" class="product-image"/>
                        </b-col>
                        <b-col md="6" sm="12">
                            <h6 class="h6 product-name">{{current_item.name}}</h6>
                            <p class="product-price">€{{current_item.price}}</p>
                            <div v-if="current_item.attributes">
                              <p v-for="(item, index) in current_item.attributes.split('-')" :key="index"><strong>{{item}}</strong></p>
                            </div>
                            <span>Quantity:&nbsp;<strong>{{current_item.cart_quantity}}</strong></span>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col md="7" sm="12">
                    <div class="cart-content">
                        <p class="cart-products-count">There are {{details.products_count}} items in your cart.</p>
                        <p><span class="label">Subtotal:</span>&nbsp;<span class="value">{{details.subtotals.products.value}}</span></p>
                        <p><span>Shipping:</span>&nbsp;<span class="value">{{details.subtotals.shipping.value}} </span></p>
                        <p class="product-total"><span class="label">{{details.totals[1].label}}</span>&nbsp;<span class="value">{{details.totals[1].value}}</span></p>
                        <div class="cart-content-btn">
                            <b-button variant="secondary" @click="$bvModal.hide(modalId)">Continue shopping</b-button>
                            <router-link :to="$i18nRoute({ name: 'cart'})">
                                <b-button variant="danger">
                                    <b-icon icon="check2"></b-icon>
                                    Proceed to checkout
                                </b-button>
                            </router-link>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </b-modal>
  </div>
</template>

<script>
import { BLOCK_CART_MODAL } from '@/constants/modal'
export default {
  props: {
    details: Object,
    ps_item_id: String,
    current_item: Object
  },
  data () {
    return {
      modalId: BLOCK_CART_MODAL
    }
  },
  methods: {
    item_filter (item, index) {
      return item.ps_item_id === this.ps_item_id
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">

</style>
