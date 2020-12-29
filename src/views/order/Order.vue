<template>
  <div class="order mt-5">
    <section>
      <div class="page-navheader text-center">
          <div class="payment-detail-btn">
            <b-row class="lastorder-section-row">
              <b-col cols="4" class="sp1">
                <b-col md="12">
                  <b-row>
                    <div id="per-address-checkout" class="step check-step step1">
                      <b-icon icon="check2"></b-icon>
                    </div>
                  </b-row>
                </b-col>
                <div class="desc">
                  <span>{{$t('order.delivery_and_billing_address')}}</span>
                </div>
              </b-col>
              <b-col cols="4" class="sp2">
                <b-col md="12">
                  <b-row>
                    <div id="shipping-checkout" class="step step2">
                      <b-icon icon="check2"></b-icon>
                    </div>
                  </b-row>
                </b-col>
                <div class="desc">
                  <span>{{$t('order.shipping_and_payment_method')}}</span>
                </div>
              </b-col>
              <b-col cols="4" class="sp4">
                <b-col md="12">
                  <b-row>
                    <div id="confirem-checkout" class="step step4">
                      <b-icon icon="check2"></b-icon>
                    </div>
                  </b-row>
                </b-col>
                <div class="desc">
                  <span>{{$t('order.confirmation')}}</span>
                </div>
              </b-col>
            </b-row>
          </div>
      </div>
    </section>
    <div class="customer-info">
      <b-container>
        <b-row>
          <b-col md="8">
            <Step1 />
            <Step2 />
            <Step3 />
          </b-col>
          <b-col md="4" class="mart-70 cart-right-mart">
            <CartSummary />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import CartSummary from './CartSummary'
export default {
  name: 'order',
  components: {
    Step1,
    Step2,
    Step3,
    CartSummary
  }
}
</script>

<style scoped lang="scss">
.order {
  section {
    margin-bottom: 1.563rem;
    .page-navheader {
      margin: 50px auto 100px;
      color: #12407D;
      font-weight: 700;
      .payment-detail-btn {
        margin: 0 auto;
        padding: 0;
        position: relative;
        width: 60%;
        .lastorder-section-row {
          margin-right: -140px;
          margin-left: -140px;
          .step {
            height: 70px;
            width: 70px;
            background: #ccc;
            border-radius: 50%;
            float: none;
            margin: auto;
            text-align: center;
            line-height: 80px;
            color: #fff;
            svg {
              font-size: 26px;
            }
          }
          .step2::before, .step4::before {
            content: '';
            background-color: #ccc;
            height: 25px;
            display: block;
            position: absolute;
            top: 22px;
            left: -50%;
            width: 95%;
          }
          .check-step {
            color: #fff;
            background: #12407E;
            font-size: 24px;
            line-height: 70px;
            z-index: 4;
          }
          .desc {
            span {
              position: relative;
              top: 15px;
            }
          }
        }
      }
    }
  }
  section.-current {
    padding-bottom: 20px !important;
    border-top-left-radius: 8px !important;
    border-top-right-radius: 8px !important;
  }
}
@media (min-width: 1200px) {
  .row {
    margin-right: -15px !important;
    margin-left: -15px !important;
  }
}
@media screen and (max-width: 768px) {
  .payment-detail-btn {
    width: 100% !important;
  }
  .lastorder-section-row {
    margin-right: -15px !important;
    margin-left: -15px !important;
    padding-top: 15px !important;
    .sp1, .sp2 {
      padding-right: 0px !important;
    }
  }
  .step {
    width: 40px !important;
    height: 40px !important;
    line-height: 40px !important;
    svg {
      width: 24px !important;
      height: 24px !important;
      line-height: 20px !important;
      margin-left: 2px !important;
    }
  }
  .payment-detail-btn .desc span {
    font-size: 12px !important;
    top: 5px !important;
    position: relative !important;
  }
  .step2::before, .step4::before {
    top: 10px !important;
    height: 15px !important;
    left: -55% !important;
  }
}
</style>
