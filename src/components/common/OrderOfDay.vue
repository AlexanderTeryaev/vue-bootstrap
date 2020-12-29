<template>
  <div class="order-of-day">
    <b-row class="quick-actions p-3 mx-0">
      <b-col md="2">{{$t('order_history.name')}}</b-col>
      <b-col md="2" class="order_details" @click="show_details(1)">{{$t('order_history.details')}}</b-col>
      <b-col md="3">{{$t('order_history.return')}}</b-col>
      <b-col md="3">{{$t('order_history.track_delivery')}}</b-col>
      <b-col md="2">{{$t('invoice')}}</b-col>
    </b-row>
    <b-row class="header p-3 mx-0">
      <b-col md="2">{{$t('order_history.items')}}</b-col>
      <b-col md="3"></b-col>
      <b-col md="2">{{$t('products.amount')}}</b-col>
      <b-col md="2">{{$t('products.unit_price')}}</b-col>
      <b-col md="1">{{$t('products.total')}}</b-col>
      <b-col md="2"></b-col>
    </b-row>
    <b-row class="item p-3 align-items-center mx-0" v-for="(item, index) in items" :key="index">
      <b-col md="2" class="image"><b-img :src="item.image"></b-img></b-col>
      <b-col md="3" class="detail">
        <p>{{item.name}}</p>
        <p>{{item.sn}}</p>
        <p>{{item.type}}</p>
        <p>{{item.size}}</p>
      </b-col>
      <b-col md="2" class="count">
        <vue-numeric-input  v-model="item.amount" :min="1" align="center" size="100%"></vue-numeric-input>
      </b-col>
      <b-col md="2" class="unit-price">{{item.unit_price}}{{item.unit}}</b-col>
      <b-col md="1" class="total-price">{{item.unit_price * item.amount}} {{item.unit}}</b-col>
      <b-col md="2" class="return-btn"><b-button>{{$t('order_history.re_order')}}</b-button></b-col>
    </b-row>
    <b-row class="day-total mx-0 p-3">
      <b-col md="7"></b-col>
      <b-col md="2">{{$t('order_history.total')}}</b-col>
      <b-col md="1" >150€</b-col>
      <b-col md="2"></b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    items: Array,
    show_details: Function
  }
}
</script>>
<style lang="scss" scoped>
.order-of-day {
  border: 1px solid #E9E9E9;
  border-radius: 8px;
  box-shadow: 0px 3px 6px #00000029;
  .order_details {
    cursor: pointer;
  }
  .quick-actions {
    text-transform: uppercase;
    background-color: #E4E4E4;
    border-radius: 8px;
    word-break: break-word;
  }
  .header {
    // word-break: break-word;
    text-transform: uppercase;
  }
  .item {
    border-top: 1px solid #E9E9E9;
    font-size: 12px;
    input {
      font-size: 12px;
      text-align: center;
    }
    button {
      font-size: 12px;
    }
    .detail {
      line-height: 1;
    }
    .image {
      @media screen and (max-width: 992px) and (min-width: 768px) {
        img {
          position: relative;
          left: -100%;
        }
      }
    }
  }
  .day-total {
    border-top: 1px solid #E9E9E9;
    text-transform: uppercase;
  }
}
</style>
