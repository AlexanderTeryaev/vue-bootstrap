<template>
  <b-col class="account-right mt-5" md="9" sm="12">
    <b-row class="header">
      <b-col cols="12" md="6">
        <h1 class="header-title text-center text-sm-left mb-0">Order details</h1>
      </b-col>
    </b-row>
    <div class="notifications-right"></div>
    <div class="order_detail_content">
      <b-row class="order-details-content pt-3">
        <b-col cols="12" lg="6" class="order-address-section">
          <div class="order-address">
            <b-row class="content">
              <b-col cols="12" class=""><p class="title">Shippment</p></b-col>
              <b-col cols="6" class=""><p>Payment method:</p></b-col>
              <b-col cols="6" class=""><p>Payments by check</p></b-col>
              <b-col cols="6" class=""><p>Shipping:</p></b-col>
              <b-col cols="6" class=""><p>Ekugellager</p></b-col>
              <b-col cols="6" class="pl-5 text-left"><img src="@/assets/img/ship1.jpg"/></b-col>
              <b-col cols="6" class="my-auto"><p>Pick up in-store</p></b-col>
              <b-col cols="12" class="text-right pr-5 pt-3"><a class="reorder">REORDER</a></b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="12" lg="6" class="order-address-section mt-5 mt-lg-0">
          <div class="order-address">
            <b-row class="content">
              <b-col cols="12" class=""><p class="title">Follow your order's status step-by-step</p></b-col>
              <b-col cols="6" class=""><p>Order reference:</p></b-col>
              <b-col cols="6" class=""><p>BQQCQZGYI</p></b-col>
              <b-col cols="6" class=""><p>placed on:</p></b-col>
              <b-col cols="6" class=""><p>07.09.2020</p></b-col>
              <b-col cols="6" class=""><p>Status</p></b-col>
              <b-col cols="6" class=""><p>Date</p></b-col>
              <b-col cols="6" class=""><p class="status">Awaiting check payment</p></b-col>
              <b-col cols="6" class=""><p>07.09.2020</p></b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="12" class="order-tracking-section pt-5">
          <div class="order-tracking">
            <b-row class="content">
              <b-col cols="12" class="">
                <div class="title">
                  <b-row>
                    <b-col cols="3">Date</b-col>
                    <b-col cols="3">Carrier</b-col>
                    <b-col cols="3">Shipping cost</b-col>
                    <b-col cols="3">Tracking number</b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col cols="12" class="">
                <div class="py-3 tracking-row">
                  <b-row>
                    <b-col cols="3">07.09.2020</b-col>
                    <b-col cols="3">Ekugellager</b-col>
                    <b-col cols="3">Free</b-col>
                    <b-col cols="3">-</b-col>
                  </b-row>
                </div>
                <div class="py-3 tracking-row">
                  <b-row>
                    <b-col cols="12">To track your package, please click on the following link and enter your tracking number.
                      https://www.dhl.de/de/privatkunden/dhl-sendungsverfolgung.html
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col cols="12" class="order-tracking-section pt-5">
          <div class="order-tracking">
            <b-row class="content">
              <b-col cols="12" class="">
                <div class="title">
                  <b-row>
                    <b-col cols="3">Product</b-col>
                    <b-col cols="3">Quantity</b-col>
                    <b-col cols="3">Unit price</b-col>
                    <b-col cols="3">Total price</b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col cols="12" class="text-right">
                <div class="py-3 tracking-row">
                  <b-row>
                    <b-col cols="9" class="price">Subtotal</b-col>
                    <b-col cols="3"><p class="pr-3">€45.51</p></b-col>
                  </b-row>
                </div>
                <div class="py-3 tracking-row">
                  <b-row>
                    <b-col cols="9" class="price">Shipping and handling</b-col>
                    <b-col cols="3"><p class="pr-3">Free</p></b-col>
                  </b-row>
                </div>
                <div class="py-3 tracking-row">
                  <b-row>
                    <b-col cols="9" class="price">Total</b-col>
                    <b-col cols="3"><p class="pr-3">€45.51</p></b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
  </b-col>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.account-right {
  // padding-right: 0%;
  // padding-left: 80px;
  // margin-bottom: 50px;
  .header {
    border-bottom: 1px solid #707070;
  }
  .header-title {
    color: #12407E;
    font-size: 24px;
    padding-bottom: 20px;
    // margin-bottom: 40px;
    border:none;
  }
}
.order-details-content {
  .order-address-section {
    .order-address {
      min-height: 280px;
      height: 100%;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000029;
      border: 0.5px solid #00000029;
      color: #919191;
      border-radius: 8px;
      font-size: 14px;
      .content {
        .title {
          color: #707070;
          font-size: 16px;
          font-weight: 500;
          background: #f1f1f1;
          border-bottom: 0px;
          padding: 18px 18px;
          border-top-right-radius: 8px;
          border-top-left-radius: 8px;
          overflow: hidden
        }
        p {
          text-align: left;
          padding-left: 18px;
        }
        p.status {
          background: #F0F0F0;
          width: fit-content;
          padding-left: 0;
          margin-left: 18px;
        }
      }
      .reorder {
        background: #fff 0% 0% no-repeat padding-box;
        border: 1px solid #E9E9E9;
        border-radius: 4px;
        color: #707070;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        font-size: 14px;
        font-weight: 500;
        box-shadow: none;
        padding: .5rem;
        cursor: pointer;
      }
      .reorder:hover {
        background: #707070;
        color: #fff;
      }
    }
  }
  .order-tracking-section {
    .order-tracking {
      height: 100%;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000029;
      border: 0.5px solid #00000029;
      color: #919191;
      border-radius: 8px;
      font-size: 14px;
      .content {
        .title {
          color: #707070;
          font-size: 16px;
          font-weight: 500;
          background: #f1f1f1;
          border-bottom: 0px;
          padding: 18px 18px;
          border-top-right-radius: 8px;
          border-top-left-radius: 8px;
          overflow: hidden
        }
      }
      .tracking-row {
        border-bottom: 1px solid #E9E9E9;
        .price {
          // border-right: 1px solid #E9E9E9;
        }
      }
    }
  }
}
</style>
