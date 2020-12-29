<template>
  <div class="product-miniature">
    <div class="thumbnail-eku-container">
        <b-row class="product-eku">
            <b-col cols="6" class="marke-product-thumb">
                {{$t('products.manufacturer')}}
            </b-col>
            <b-col cols="6" class="name-product-thumb">
                <h2 class="h3 product-title">
                <router-link :to="$i18nRoute({ name: 'product', params: { id_product: product.id_product }})">
                    {{product.name}}
                </router-link>
                </h2>
            </b-col>
        </b-row>
        <router-link :to="$i18nRoute({ name: 'product', params: { id_product: product.id_product }})" class="thumbnail product-thumbnail">
            <img :src="product.image"/>
        </router-link>
        <div class="product-description">
            <b-row class="heading-prislist" v-if="product.head && product.head.length > 0">
                <b-col cols="4" v-for="(item, index) in product.head" :key="index">{{item.name}}</b-col>
            </b-row>
            <b-row class="subhead-prislist" v-if="product.head && product.head.length > 0">
                <b-col cols="4" v-for="(item, index) in product.head" :key="index">{{item.value}}</b-col>
            </b-row>
            <b-row class="quality-prislist" v-if="product.quality">
                <b-col cols="4" class="quality-title">
                    <span>{{$t('products.quality')}}</span>
                    <b-icon icon="info-circle" v-b-tooltip.hover.bottomright :title="$t('products.product_quality_info')"></b-icon>
                </b-col>
                <b-col cols="8" class="quality-content">
                    <ul class="grade">
                        <li v-for="(item, index) in product.quality.content" :key="index" :class="item === 1 ? 'active' : ''"></li>
                    </ul>
                </b-col>
            </b-row>
            <b-row class="best-preis-list">
                <b-col cols="5" class="preis-title">{{$t('products.price_from')}}</b-col>
                <b-col cols="7" class="preis">{{'€' + product.price}}</b-col>
            </b-row>
            <b-row class="show-price-list">
                <b-collapse :id="collapseid">
                    <div v-if="product.pricelist && product.pricelist.length">
                        <b-row class="table-prislist-header">
                            <b-col cols="4">{{$t('products.quantity')}}</b-col>
                            <b-col cols="4">{{$t('products.discount')}}</b-col>
                            <b-col cols="4">{{$t('products.unitprice')}}</b-col>
                        </b-row>
                        <b-row class="table-prislist-content" v-for="(item, index) in product.pricelist" :key="index">
                            <b-col cols="4">{{item.quantity}}</b-col>
                            <b-col cols="4">{{item.discount}}</b-col>
                            <b-col cols="4">{{'€' + item.unitprice}}</b-col>
                        </b-row>
                    </div>
                    <b-card>
                        <div class="product-prislist-miniature">{{$t('products.In_stock')}}</div>
                        <b-row>
                            <b-col cols="5">
                                <div class="product-add-to-cart">
                                    <vue-numeric-input  v-model="qty" :min="1" align="center" size="100%"></vue-numeric-input>
                                </div>
                                <div class="product-prislist-quantity">
                                    <span>{{product.quantity}}</span>{{$t('products.in_stock')}}
                                </div>
                            </b-col>
                            <b-col cols="7">
                                <div>
                                    <b-button
                                     variant="danger"
                                     class="add-to-cart"
                                     @click="addtocart(product, qty)"
                                    >{{$t('products.cart')}}</b-button>
                                </div>
                                <div class="eku-compear">
                                    <a href="/">
                                        <span>{{$t('products.compare_remember')}}</span>
                                        <b-icon icon="eye"></b-icon>
                                    </a>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-collapse>
                <div class="toggle-btn" v-b-toggle="collapseid">
                    <b-icon icon="chevron-down" class="collapsed-icon"></b-icon>
                    <b-icon icon="chevron-up" class="opened-icon"></b-icon>
                    <span class="collapsed-icon">{{$t('products.details_quickl_purchase')}}</span>
                </div>
            </b-row>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    addtocart: Function
  },
  data () {
    return {
      collapseid: 'product_collapse_' + this.product.id_product,
      qty: 1
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.product-miniature {
    margin: 0rem;
    box-shadow: none;
    margin-bottom: 20px;
    .thumbnail-eku-container {
        background: #fff;
        box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2);
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 25px;
        .product-eku {
            margin: 0;
            .marke-product-thumb {
                text-align: center;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0px;
                color: #818181;
                border-top-left-radius: 8px;
                background-color: #F0F0F0;
                padding: 0px 5px;
                line-height: 41px;
            }
            .name-product-thumb {
                text-align: center;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 0px;
                color: #F0F0F0;
                border-top-right-radius: 8px;
                background-color: #12407E;
                padding: 0px 5px;
                line-height: 41px;
                overflow: hidden;
                .product-title {
                    text-align: center;
                    text-transform: capitalize;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #F0F0F0;
                    font-weight: 500;
                    margin-top: 0px !important;
                    margin-bottom: 0px;
                    line-height: 41px;
                    height: 41px;
                    a {
                        font-size: .875rem;
                        text-decoration: none;
                        text-align: center;
                        font-weight: 400;
                        color: #F0F0F0 !important;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
        .product-thumbnail {
            display: block;
            text-align: center;
            img {
                vertical-align: middle;
                border-style: none;
                width: 100%;
            }
        }
        .product-description {
            position: unset !important;
            background: #fff;
            height: auto;
            .heading-prislist {
                height: 29px;
                line-height: 29px;
                color: #fff;
                background-color: #12407E;
                font-size: 13px;
                font-weight: 300;
                text-align: center;
                margin: 0;
                .col-4 {
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                }
            }
            .subhead-prislist {
                height: 40px;
                line-height: 40px;
                color: #303030;
                background-color: #fff;
                font-size: 14px;
                font-weight: 400;
                text-align: center;
                border-bottom: 1px solid #707070;
                margin: 0;
                .col-4 {
                    border-right: 1px solid #707070;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                }
                .col-4:last-child {
                    border-right: none !important;
                }
            }
            .quality-prislist {
                background: #fff;
                height: 40px;
                line-height: 40px;
                margin: 0;
                border-bottom: 1px solid #707070;
                .quality-title {
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                    font-size: 13px;
                    svg {
                        margin-left: 3px;
                    }
                }
                .quality-content {
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                    .grade {
                        margin: 0;
                        margin-top: 15px;
                        display: flex;
                        justify-content: space-between!important;
                        list-style: none;
                        padding-left: 4px;
                        li {
                            width: 20%;
                            margin-left: auto;
                            margin-right: auto;
                            background: #F0F0F0;
                            height: 10px;
                        }
                        li.active {
                            background: #36D94F;
                        }
                    }
                }
            }
            .best-preis-list {
                -webkit-transition: all .3s ease;
                transition: all .3s ease;
                height: 40px;
                line-height: 40px;
                color: #303030;
                background-color: #fff;
                font-size: 16px;
                font-weight: 400;
                text-align: center;
                border-bottom: 1px solid #707070;
                margin: 0px;
                .col-5 {
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                }
                .col-7 {
                    padding-right: 10px !important;
                }
                .preis {
                    text-align: right;
                }
            }
            .show-price-list {
                color: #545454;
                line-height: 40px;
                -webkit-transition: all .3s ease;
                transition: all .3s ease;
                display: block;
                margin: 0px;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                text-align: center;
                font-weight: 400;
                opacity: 1;
                .toggle-btn {
                    outline: none;
                    svg {
                        font-size: 20px;
                        margin-right: 5px;
                    }
                }
                .table-prislist-header {
                    height: 40px;
                    line-height: 40px;
                    color: #303030;
                    background-color: #fff;
                    font-size: 12px;
                    font-weight: 600;
                    text-align: center;
                    border-bottom: 1px solid #707070;
                    margin-left: 0px !important;
                    margin-right: 0px !important;
                    div {
                        padding-left: 5px !important;
                        padding-right: 5px !important;
                    }
                }
                .table-prislist-content {
                    height: 40px;
                    line-height: 40px;
                    color: #5f5a5a;
                    background-color: #fff;
                    font-size: 14px;
                    text-align: center;
                    border-bottom: 1px solid #707070;
                    margin-left: 0px !important;
                    margin-right: 0px !important;
                    div {
                        padding-left: 5px !important;
                        padding-right: 5px !important;
                    }
                }
                .card .card-body {
                    padding: 5px !important;
                    .row {
                        margin-left: 0px !important;
                        margin-right: 0px !important;
                    }
                    .col-5, .col-7 {
                        padding: 5px !important;
                    }
                    .product-prislist-miniature {
                        color: #36D94F;
                        font-size: 13px;
                        text-align: left;
                        margin-left: 10px;
                    }
                    .product-prislist-quantity {
                        font-size: 13px;
                        line-height: 15px;
                        margin-top: 5px;
                        span {
                            margin-right: 5px;
                        }
                    }
                    .product-add-to-cart {
                        display: flex !important;
                        span {
                            margin: 0px 2px;
                            font-size: 15px;
                            cursor: pointer;
                            font-weight: 600;
                            padding: 0px 3px;
                        }
                        span:hover {
                            background: #12407E;
                            color: white;
                        }
                    }
                    .product-add-to-cart .form-control {
                        text-align: center;
                    }
                    .eku-compear {
                        font-size: 13px;
                        line-height: 15px;
                        font-weight: 500;
                        a {
                            color: #545454 !important;
                            .svg {
                                margin-left: 5px !important;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
