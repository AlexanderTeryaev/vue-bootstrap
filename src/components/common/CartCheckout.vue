<template>
  <ul class="cart_details_bottom_part">
    <li class="">
      <div class="card_title">Ubersicht</div>
      <b-col cols="12" md="12" class="first_div">
        <div class="cart-voucher">
          <b-form action="" data-link-action="add-voucher" class="discount_name" method="post">
            <b-form-input  name="token" value="" style="display:none;"></b-form-input>
            <b-form-input  name="addDiscount" value="" style="display:none;"></b-form-input>
            <b-input-group class="voucher-input-group">
              <b-form-input type="text" name="discount_name" class="py-2 discount_name" placeholder="Voucher code"></b-form-input>
              <b-input-group-append>
                <b-button type="submit" class="btn-outline-secondary after-add-voucher"><span>use</span></b-button>
              </b-input-group-append>
            </b-input-group>
          </b-form>
        </div>
      </b-col>
      <b-col md="12" class="second_div">
          <b-row class="shipping">
            <b-col cols="6" class="label text-uppercase text-left">
              <p>shipping</p>
            </b-col>
            <b-col cols="6" class="value text-right">
              <p>€{{shipping}}</p>
            </b-col>
          </b-row>
          <b-row class="total font-weight-bold py-3">
            <b-col cols="6" class="label text-uppercase text-left">
              <p>total</p>
            </b-col>
            <b-col cols="6" class="value text-right">
              <p>{{total}}</p>
            </b-col>
          </b-row>
          <div class="progress_section">
            <div class="up">
              <b-progress variant="white" :value="value" max="1" class="mb-3"></b-progress>
            </div>
            <div class="down">only €154.80 until free shipping</div>
          </div>
      </b-col>
      <b-col md="12" class="third_div">
        <div class="checkout text-center">
          <router-link :to="$i18nRoute({ name: 'order'})" class="to-checkout">checkout</router-link>
        </div>
      </b-col>
    </li>
  </ul>
</template>>
<script>
export default {
  props: {
    details: Object,
    applyCouponCode: Function
  },
  data () {
    return {
      shipping: 0,
      total: 0,
      coupon_code: null,
      value: 0.5
    }
  },
  methods: {
    updateCart () {
      this.shipping = this.details.subtotals.shipping.amount
      this.total = this.details.subtotals.products.value
    }
  },
  mounted () {
    this.updateCart()
  },
  watch: {
    details: function (to, from) {
      this.updateCart()
    }
  }
}
</script>
<style lang="scss" scoped>
.cart_details_bottom_part {
  background: #12407e;
  background: linear-gradient(90deg, rgba(18,64,126,1) 0%, rgba(17,61,119,1) 68%, rgba(14,49,96,1) 100%);
  -webkit-transition: all .45s cubic-bezier(.3,0,.15,1);
  transition: all .45s cubic-bezier(.3,0,.15,1);
  min-height: 400px;
  margin-bottom: 20px;
  border: 1px solid #12407e;
  box-shadow: 0px 3px 6px #00000029;
  padding: 30px 0px;
  border-radius: 8px;
  color: #fff;
  li:last-child {
    border-bottom: none;
  }
  li:first-child {
    text-transform: uppercase;
    color: #303030;
    font-size: 16px;
    font-weight: 500;
    padding: 40px 30px;
  }
  li {
    padding: 0 15px!important;
  }
  .card_title {
    font-size: 18px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
    margin: 0;
    padding: 0px 0 25px 0;
    border-bottom: 1px solid #8096b3;
  }
  .first_div {
    border-bottom: 1px solid #8096b3;
    padding-bottom: 30px;
    margin-bottom: 0!important;
    margin-top: 15px!important;
    .voucher-input-group {
      margin-top: 25px;
    }
    input.discount_name {
      background: none;
      border: 1px solid #8096b3;
      color: #fff!important;
      padding: 0 15px;
      font-weight: 300;
      width: calc(100% - 75px);
      height: 50px;
    }
    .btn-outline-secondary {
      background: none;
      color: #fff;
      border: 1px solid #8096b3;
      padding: 0 25px;
      border-left: 0;
      border-radius: 0 .25rem .25rem 0;
    }
  }
  .second_div {
    color:white;
    padding-top: 15px;
    .shipping {
      border-bottom: 1px solid #8096b3;
    }
    .progress_section {
      max-width: 270px;
      margin: 40px auto 30px;
      .up {
        .progress {
          height: 20px;
          border: 1px solid #fff;
          border-radius: 10px;
          background: none;
        }
        .progress-bar {
          border-radius: 10px;
        }
      }
      .down {
        font-size: 14px;
        margin-top: 12px;
        text-align: center;
        font-weight: 300;
        text-transform: none;
      }
    }
  }
  .third_div {
    .to-checkout {
      width: 245px;
      display: inline-block;
      padding: 12px 15px;
      font-weight: 500;
      line-height: normal;
      height: auto;
      background: #B2162C;
      color: #fff !important;
      border: 1px solid #B2162C;
      border-radius: 8px;
      -webkit-transition: all .5s ease;
      transition: all .5s ease;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
}
</style>
