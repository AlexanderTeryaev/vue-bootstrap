<template>
    <section id="checkout-addresses-step" class="checkout-step">
        <h1 class="step-title h3">
            <span class="step-number">2</span>
            Addresses
        </h1>
        <div class="content">
            <div class="js-address-form">
                <p>
                    The selected address will be used both as your personal address (for invoice) and as your delivery address.
                </p>
                <h2 class="h4 h4-shipping">
                Shipping Address
                </h2>
                <div id="delivery_address">
                    <b-form @submit="onSubmit" @reset="onReset" size="sm">
                        <b-row>
                            <b-col md="6" sm="12">
                                <b-form-group id="input-group-first-name">
                                    <b-form-input
                                    v-model="addressform.firstName"
                                    type="text"
                                    required
                                    :placeholder="$t('register.first_name')"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="6" sm="12">
                                <b-form-group id="input-group-last-name">
                                    <b-form-input
                                    type="text"
                                    v-model="addressform.lastName"
                                    required
                                    :placeholder="$t('register.last_name')"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col md="6" sm="12">
                                <b-form-group id="input-group-company" label-for="company_name">
                                    <b-form-input
                                    id="company_name"
                                    v-model="addressform.companyName"
                                    type="text"
                                    required
                                    :placeholder="'Company'"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="6" sm="12">
                                <VuePhoneNumberInput v-model="addressform.phoneNumber" @update="getPayload"
                                default-country-code="DE"
                                :translations="this.$i18n.locale=='en'?translations:translations"/>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col md="6" sm="12">
                                <b-form-group id="input-group-address">
                                    <b-form-input
                                    v-model="addressform.address"
                                    type="text"
                                    required
                                    :placeholder="'Address'"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col md="6" sm="12">
                                <b-row>
                                    <b-col cols="6">
                                        <b-form-group id="input-postal-code" label-for="postal_code">
                                            <b-form-input
                                            type="text"
                                            id="postal_code"
                                            v-model="addressform.postalcode"
                                            required
                                            :placeholder="'Zip/Postal Code'"
                                            ></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                        <b-form-group id="input-city" label-for="address_city">
                                            <b-form-input
                                            type="text"
                                            id="address_city"
                                            v-model="addressform.city"
                                            required
                                            :placeholder="'City'"
                                            ></b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col md="6" sm="12">
                                <b-form-group id="input-group-country">
                                    <b-form-select
                                    v-model="addressform.country"
                                    :options="countries"
                                    value-field="code"
                                    text-field="name"
                                    required
                                    ></b-form-select>
                                </b-form-group>
                            </b-col>
                            <b-col md="6" sm="12">
                                <b-form-group id="input-group-vatnumber">
                                    <b-form-input
                                    v-model="addressform.vatNumber"
                                    type="text"
                                    required
                                    :placeholder="'VAT number'"
                                    ></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row class="text-left">
                            <b-col>
                                <b-form-checkbox
                                v-model="addressform.isUseForInvoice"
                                :value="1"
                                :unchecked-value="0"
                                >
                                <p>Use this address for invoice too</p>
                                </b-form-checkbox>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="12">
                                <b-button type="submit" variant="primary" class="order-btn-primary float-xs-right">
                                    Save
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-form>
                </div>
            </div>
            <p class="add-new-address">
                <router-link :to="$i18nRoute({ name: 'order', query: {newAddress: 'invoice'}})">
                    <b-icon icon="plus"></b-icon>
                    <span>Add new address</span>
                </router-link>
            </p>
        </div>
    </section>
</template>

<script>
import { countryList } from '@/constants/countries'
export default {
  data () {
    return {
      addressform: {
        firstName: '',
        lastName: '',
        companyName: '',
        phoneNumber: '',
        address: '',
        postalcode: '',
        city: '',
        country: 'DE',
        vatNumber: '',
        isUseForInvoice: 1
      },
      countries: countryList,
      translations: {
        countrySelectorLabel: this.$i18n.t('account.countrySelectorLabel'),
        countrySelectorError: this.$i18n.t('account.countrySelectorError'),
        phoneNumberLabel: this.$i18n.t('account.phoneNumberLabel'),
        example: this.$i18n.t('account.example')
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.addressform))
    },
    onReset (evt) {
      evt.preventDefault()
    },
    getPayload (payload) {
      // console.log(payload)
      // console.log(this.$i18n.locale)
    }
  },
  watch: {
    $route (to, from) {
      this.translations = {
        countrySelectorLabel: this.$i18n.t('account.countrySelectorLabel'),
        countrySelectorError: this.$i18n.t('account.countrySelectorError'),
        phoneNumberLabel: this.$i18n.t('account.phoneNumberLabel'),
        example: this.$i18n.t('account.example')
      }
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
        padding: 18px;
        .h4-shipping {
            color: #303030;
            font-size: 15px;
            text-transform: unset;
            font-weight: 500;
            margin-left: 14px;
            margin-top: 20px;
            text-align: left;
        }
        #delivery_address {
            margin-left: .3125rem;
            margin-top: 1.563rem;
        }
        .add-new-address {
            border: 0.5px solid #E9E9E9;
            border-radius: 8px;
            background: #fff;
            padding: 0px 15px;
            float: right;
            margin-top: 40px;
            margin-right: -15px;
        }
    }
}
</style>
