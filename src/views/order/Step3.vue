<template>
    <section id="checkout-personal-information-step" class="checkout-step">
        <h1 class="step-title h3">
            <span class="step-number">3</span>
            Shipping Method
        </h1>
        <div class="content">
            <div class="delivery-options-list">
                <b-row>
                    <b-col cols="3">
                        <img src="../../assets/img/ship1.jpg"/>
                    </b-col>
                    <b-col cols="5" class="option-item">
                        <span>Pick up in-store</span>
                    </b-col>
                    <b-col cols="3" class="option-item">
                        <span>Free</span>
                    </b-col>
                    <b-col cols="1" class="option-item">
                        <b-form-checkbox
                        v-model="paymentType1"
                        :value="1"
                        :unchecked-value="0"
                        >
                        </b-form-checkbox>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="3">
                        <img src="../../assets/img/ship2.jpg"/>
                    </b-col>
                    <b-col cols="5" class="option-item">
                        <span>2-3 Work Days</span>
                    </b-col>
                    <b-col cols="3" class="option-item">
                        <span>€8.33 tax incl.</span>
                    </b-col>
                    <b-col cols="1" class="option-item">
                        <b-form-checkbox
                        v-model="paymentType2"
                        :value="1"
                        :unchecked-value="0"
                        >
                        </b-form-checkbox>
                    </b-col>
                </b-row>
                <div class="order-options">
                    <label>If you would like to add a comment about your order, please write it in the field below.</label>
                    <b-form-textarea
                        id="textarea"
                        rows="3"
                        max-rows="6"
                    ></b-form-textarea>
                </div>
                <div class="text-right mr-3">
                    <b-button type="submit" variant="primary" class="order-btn-primary">
                        Continue
                    </b-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      paymentType1: 1,
      paymentType2: 0
    }
  }
}
</script>

<style scoped lang="scss">
.checkout-step {
    padding-top: 20px;
    box-shadow: 0px 3px 6px #00000029;
    border-bottom: none;
    padding: .9375rem;
    .step-title {
        color: #303030;
        font-size: 16px;
        text-transform: unset;
        border-bottom: 1px solid #E9E9E9 !important;
        text-align: left;
        .step-number {
            display: inline-block;
            padding: .625rem;
        }
    }
    .content {
        .delivery-options-list {
            text-align: left;
            padding: 10px;
            .option-item {
                padding: 23px .5rem;
                font-size: 15px;
            }
            .order-options {
                text-align: left;
                padding: 20px 1em;
                label {
                    color: #232323;
                    font-size: .875rem;
                }
            }
        }
    }
}
</style>
