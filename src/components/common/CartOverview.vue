<template>
  <div class="cart-overview js-cart">
    <div class="body">
      <ul class="cart-items">
        <li class="cart_page_heading_li d-none d-md-block">
          <b-row>
            <b-col md="2">{{$t('products.product')}}</b-col>
            <b-col md="3">{{$t('products.order_details')}}</b-col>
            <b-col md="2">{{$t('products.amount')}}</b-col>
            <b-col md="2">{{$t('products.unit_price')}}</b-col>
            <b-col md="2">{{$t('products.total')}}</b-col>
            <b-col md="1">&nbsp;</b-col>
          </b-row>
        </li>
        <li class="cart-item cart_page_detail_li" v-for="(item, index) in items" :key="index" :class="{removed:(removedItems.includes(index))}">
          <b-row class="product-line-grid cart-detail-desktop">
            <b-col md="2" class="img">
              <div><b-img :src="item.image"></b-img></div>
            </b-col>
            <b-col md="3" class="name_category">
                <p class="category">{{item.category}}</p>
                <a class="name" href="#"><strong>{{item.name}}</strong></a>
                <div v-if="item.attributes">
                  <p v-for="(attr, i) in item.attributes.split('-')" :key="i" class="small">{{attr}}</p>
                </div>
            </b-col>
            <b-col md="2" class="quantity">
              <!-- <b-form-input type="number" @change="updateItem(index, item.cart_quantity)" v-model="item.cart_quantity" :value="item.cart_quantity"></b-form-input> -->
              <vue-numeric-input v-model="item.cart_quantity" @input="change_amount(index, item.cart_quantity)"  :min="1" align="center" size="100%"></vue-numeric-input>
            </b-col>
            <b-col md="2" class="unit_price">
              <p v-if="item.reduction_applies" class="regular_price">€{{parseFloat(item.price_without_reduction).toFixed(2)}}</p>
              <p v-if="item.reduction_applies" class="discount mb-0">{{show_reduction(item.specific_prices)}}</p>
              <p class="current_price mt-3">€{{parseFloat(item.price).toFixed(2)}}</p>
            </b-col>
            <b-col md="2" class="total_price">
              <p class="my-auto">€{{parseFloat(item.total).toFixed(2)}}</p>
            </b-col>
            <b-col md="1" class="remove" @click="removeItem(index)">
              <b-icon icon="trash" font-scale="1.5"></b-icon>
            </b-col>
          </b-row>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: Array,
    removeItem: Function,
    updateItem: Function
  },
  data () {
    console.log(this.items)
    return {
      removedItems: []
    }
  },
  methods: {
    show_reduction (prices) {
      var reduction = prices.reduction
      if (prices.reduction_type === 'percentage') {
        reduction = parseFloat(reduction * 100).toFixed(2) + '%'
      } else if (prices.reduction_type === 'amount') {
        reduction = '€' + parseFloat(reduction).toFixed(2)
      }
      if (parseInt(prices.price) === -1) reduction = '-' + reduction
      return reduction
    },
    change_amount (index, quantity) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.updateItem(index, quantity)
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
.cart-overview {
  background: #fff;
  border-radius: 8px;
  border: solid 1px #E9E9E9;
  box-shadow: 0px 3px 6px #00000029;
  ul li {
    padding: 0 30px;
  }
  ul li:first-child {
    text-transform: uppercase;
    color: #303030;
    font-size: 16px;
    font-weight: 500;
    padding: 40px 30px;
  }
  .cart_page_detail_li {
    border-top: 1px solid #E9E9E9;
    .product-line-grid>div {
      margin: auto;
      img {
        width: 100%;
      }
    }
    .name_category {
      p.cateogry {
        font-size: 14px;
        font-weight: 500;
        color: #707070;
      }
      a.name {
        color: #303030;
        font-size: 14px;
        font-weight: 700;
      }
    }
    .quantity {
      input {
        text-align: center;
      }
    }
    .unit_price {
      .regular_price {
        color: #7a7a7a;
        text-decoration: line-through;
      }
      .discount {
        width: fit-content;
        background: #b2162c;
        border-radius: 4px;
        padding: 0 5px;
        margin-left: auto;
        margin-right: auto;
        color: #fff;
      }
      .current_price {
        color: #b2162c;
        font-weight: 800;
      }
    }
    .total_price {
      font-weight: 800;
    }
    .remove {
      cursor: pointer;
    }
  }
}
</style>
