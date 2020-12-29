<template>
    <div class="cart-summary">
        <div class="header">
            <label>{{$t('order.overview')}}</label>
        </div>
        <div class="right-address-block">
            <div id="delivery-addresses" class="address-selector">
                <article class="address-item id-address-delivery-address-class  selected">
                    <header>
                        <label class="radio-block">
                            <span class="address-alias">
                                <b-icon icon="house-door"></b-icon>
                                {{$t('order.shipping_address')}}
                            </span>
                        </label>
                        <a href="" class="edit-address">
                            <b-icon icon="pencil"></b-icon>
                        </a>
                    </header>
                    <div class="address">
                        <span> Qiang Dong </span>
                        <br>
                        <br>
                        <span> Jin er street </span>
                        <br>
                        <span> 23000 </span> <span> Dalian city </span>
                        <br>
                        China
                    </div>
                </article>
            </div>
            <div id="invoice-addresses" class="address-selector">
                <article class="address-item">
                    <header>
                        <label class="radio-block">
                            <span class="address-alias">
                                <b-icon icon="receipt"></b-icon>
                                {{$t('order.invoice_address')}}
                            </span>
                        </label>
                        <a href="" class="edit-address">
                            <b-icon icon="pencil"></b-icon>
                        </a>
                    </header>
                    <div class="address">
                        <span> Qiang Dong </span>
                        <br>
                        <br>
                        <span> Jin er street </span>
                        <br>
                        <span> 23000 </span> <span> Dalian city </span>
                        <br>
                        China
                    </div>
                </article>
            </div>
        </div>
        <section class="js-cart cart_right_summary_data">
            <div class="card-block card-block-cart-summery">
                <div class="cart-summary-products">
                </div>
                <div class="cart-summary-line cart-summary-subtotals">
                    <span class="label">
                    Total Net:
                    </span>
                    <span class="value">
                    1.539,68 €
                    </span>
                </div>
                <div class="cart-summary-line cart-summary-subtotals">
                    <span class="label">
                    + 19% MwSt.
                    </span>
                    <span class="value">
                    292.54€
                    </span>
                </div>
                <div class="cart-summary-line cart-summary-subtotals">
                    <span class="label">
                    {{$t('order.shipping')}}
                    </span>
                    <span class="value">
                    {{$t('order.free')}}
                    </span>
                </div>
            </div>
            <div class="hidden">
                <div class="cart-voucher">
                    <b-input-group>
                        <b-form-input
                            :type="'text'"
                            :placeholder="$t('order.coupon_code')"
                        ></b-form-input>
                        <b-input-group-append>
                            <b-button variant="primary">{{$t('order.use')}}</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </div>
            </div>
            <div class="card-block cart-summary-totals">
                <div class="cart-summary-line cart-total">
                    <span class="label">
                        {{$t('order.total')}}
                    </span>
                    <span class="value">
                        1.832,22 €
                    </span>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.cart-summary {
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
    .header {
        color: #f0f0f0;
        font-size: 16px;
        text-transform: uppercase;
        text-align: center;
        border-bottom: 1px solid #E9E9E9;
        margin: 0px 1.5rem;
        padding-bottom: 10px;
        margin-bottom: 20px;
    }
    .right-address-block {
        text-align: left;
        .address-selector {
            padding: 0px 1.5rem;
            .address-item {
                margin-bottom: 10px !important;
                border-bottom: .5px solid #f0f0f0;
                padding-bottom: 15px;
                .radio-block {
                    color: #232323;
                    font-size: .875rem;
                    display: inline-block;
                    text-align: right;
                    .address-alias {
                        color: #fff;
                        font-weight: 500;
                        font-size: 16px;
                        svg {
                            font-weight: 500;
                            font-size: 16px;
                            color: #fff;
                            margin-right: 10px;
                        }
                    }
                }
                .edit-address {
                    float: right;
                    color: #fff;
                }
                .address {
                    font-size: 14px;
                    font-weight: 300;
                }
            }
        }
    }
    .cart-summary-line {
        clear: both;
        margin-bottom: .315rem;
        span {
            font-size: 16px;
            font-weight: 300;
        }
        .label {
            padding-left: 0 !important;
        }
        .value {
            float: right !important;
        }
    }
    .cart-voucher {
        margin-bottom: 20px;
        margin-top: 30px;
        .btn-primary {
            background-color: #ccc;
            color: #113b72;
            font-weight: 500;
            border: none;
            min-width: 100px;
        }
        .btn-primary:hover {
            background-color: #b2162c;
            color: #fff;
        }
    }
    .cart-summary-totals {
        padding: 1rem 2rem 0 !important;
        border-top: #F0F0F0 1px solid;
        text-align: left;
        .cart-total {
            background: transparent;
        }
    }
}
.cart_right_summary_data {
    padding: 0px 25px 0px;
}
.card-block-cart-summery {
    text-align: left;
    padding: 1rem 2rem 0 !important;
}
</style>
