<template>
  <b-container class="my-account mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title">{{ $t(headerTitle) }}</h1>
        <div class="address">
          <b-form class="text-left" @submit="submit">
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group >
                  <template v-slot:label>
                    {{$t('account.first_name')}} <span class="text-danger">*</span>
                  </template>
                  <b-form-input
                    v-model="form.first_name"
                    required
                    type="text"
                    :placeholder="$t('account.first_name')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
               <b-col cols="12" md="6">
                <b-form-group>
                  <template v-slot:label>
                    {{$t('account.last_name')}} <span class="text-danger">*</span>
                  </template>
                  <b-form-input
                    v-model="form.last_name"
                    required
                    type="text"
                    :placeholder="$t('account.last_name')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group>
                    <template v-slot:label>
                      {{$t('account.alias')}}
                    </template>
                  <b-form-input
                    v-model="form.alias"
                    type="text"
                    :placeholder="$t('account.alias')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group>
                  <template v-slot:label>
                    {{$t('account.company')}}
                  </template>
                  <b-form-input
                    v-model="form.company"
                    type="text"
                    :placeholder="$t('account.company')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group>
                  <template v-slot:label>
                    {{$t('account.phone')}}
                  </template>
                  <VuePhoneNumberInput v-model="form.phone" @update="getPayload"
                  :default-country-code="form.country"
                  :translations="translations"/>
                </b-form-group>
              </b-col>
              <b-col cols="12" md="6">
                <b-row>
                  <b-col cols="12" md="6">
                    <b-form-group>
                      <template v-slot:label>
                        {{$t('account.address')}} <span class="text-danger">*</span>
                      </template>
                      <b-form-input
                        v-model="form.address"
                        required
                        type="text"
                        :placeholder="$t('account.address')"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="12"  md="6">
                    <b-form-group>
                      <template v-slot:label>
                        {{$t('account.address_code')}}
                      </template>
                      <b-form-input
                        v-model="form.address_code"
                        type="text"
                        :placeholder="$t('account.address_code')"
                      ></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6">
                <b-row>
                  <b-col cols="12" md="6">
                    <b-form-group>
                      <template v-slot:label>
                        {{$t('account.zip_postal_code')}} <span class="text-danger">*</span>
                      </template>
                      <b-form-input
                      v-model="form.zip_postal_code"
                      required
                      type="text"
                      :placeholder="$t('account.zip_postal_code')"
                      ></b-form-input>
                      <!-- <VueZipCodeInput @get-result-regex="test"/> -->
                    </b-form-group>
                  </b-col>
                  <b-col cols="12" md="6">
                    <b-form-group>
                      <template v-slot:label>
                        {{$t('account.city')}} <span class="text-danger">*</span>
                      </template>
                      <!-- <b-form-input
                      v-model="form.city"
                      required
                      type="text"
                      :placeholder="$t('account.city')"
                      ></b-form-input> -->
                      <region-select v-model="form.city"
                      :country="form.country"
                      :placeholder="$t('account.select_region')"
                      :required="true"
                      :region="form.city"
                      :autocomplete="true"
                      :usei18n="false"
                      className="form-control" />
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-col>
              <b-col cols="12" md="6">
                <b-form-group>
                  <template v-slot:label>
                    {{$t('account.country')}} <span class="text-danger">*</span>
                  </template>
                  <!-- <b-form-select
                    required
                    v-model="form.country"
                    value-field="code"
                    text-field="name"
                    :options="country_options">
                  </b-form-select> -->
                  <country-select v-model="form.country"
                  :country="form.country"
                  :placeholder="$t('account.select_country')"
                  :required="true"
                  topCountry="DE"
                  :autocomplete="true"
                  :usei18n="false"
                  className="form-control" />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" md="6">
                <b-form-group>
                  <template v-slot:label>
                    {{$t('account.vat_number')}}
                  </template>
                  <b-form-input
                    v-model="form.vat_number"
                    type="text"
                    :placeholder="$t('account.vat_number')"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-button type="submit" variant="danger" class="save_btn">{{$t('account.save')}}</b-button>
          </b-form>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AccountNav from '@/components/common/AccountNav'
import { countryList } from '@/constants/countries'
// import { UserServices } from '@/services/index'
export default {
  components: {
    AccountNav
  },
  props: {
    address_form: Object
  },
  data () {
    return {
      addressId: undefined,
      address: '',
      headerTitle: 'account.new_address',
      form:
      {
        alias: '',
        first_name: '',
        last_name: '',
        company: '',
        phone: '',
        address: '',
        address_code: '',
        zip_postal_code: '',
        city: '',
        country: 'DE',
        vat_number: ''
      },
      country_options: countryList,
      translations: {
        countrySelectorLabel: this.$i18n.t('account.countrySelectorLabel'),
        countrySelectorError: this.$i18n.t('account.countrySelectorError'),
        phoneNumberLabel: this.$i18n.t('account.phoneNumberLabel'),
        example: this.$i18n.t('account.example')
      }
    }
  },
  methods: {
    getPayload (payload) {

    },
    getAddresses (id) {
      this.address = this.$store.state.address.addresses.filter(item => item.id === this.addressId)[0]
      if (this.address) {
        this.form = {
          alias: this.address.alias,
          first_name: this.address.firstname,
          last_name: this.address.lastname,
          company: this.address.company,
          phone: this.address.phone,
          address: this.address.address1,
          address_code: this.address.address2,
          zip_postal_code: this.address.postcode,
          city: this.address.city,
          country: this.address.country_iso_code,
          vat_number: this.address.vat_number
        }
      }
    },
    newEditAddress (form) {
      var payload = {}
      const user = this.$store.getters.user
      payload.form = form
      payload.user = user
      payload.addressId = this.addressId
      this.$store.dispatch('new_edit_address', payload).then(res => {
        if (!res.errors || res.errors.length === 0) this.$router.push({ name: 'addresses' })
      })
    },
    submit (e) {
      e.preventDefault()
      this.newEditAddress(this.form)
    }
  },
  mounted () {
    this.addressId = this.$route.query.id_address
    if (this.addressId !== undefined) {
      this.headerTitle = 'account.update_your_address'
      this.getAddresses(this.$store.getters.user.id)
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
.account-right {
  .save_btn {
    text-transform: capitalize;
    float: right;
  }
}
</style>
