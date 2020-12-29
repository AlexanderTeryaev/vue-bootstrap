<template>
  <b-container class="address mt-5">
    <b-row>
      <b-col cols="12">
        <b-alert class="text-left" v-if="this.$store.state.address.update_address"
          :show="dismissCountDown"
          dismissible
          variant="success"
          @dismissed="alertDismissed"
          @dismiss-count-down="countDownChanged">
          {{this.$store.state.address.update_address===1?$t('address.new_address'):this.$store.state.address.update_address===2?$t('address.edit_address'):$t('address.delete_address')}}
        </b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title">{{$t('account.addresses')}}</h1>
        <div class="address-list">
          <b-row class="address align-items-center text-left" v-for="(address, index) in addresses" :key="index" :class="{removed:(removedAddresses.includes(index))}">
            <b-col md="1">
              <a href="#" @click="removeItem(address, index, $event)">
                <b-icon icon="x-circle" font-scale="2"></b-icon>
              </a>
            </b-col>
            <b-col md="7">{{address.firstname +' '+ address.lastname + ', '+ address.address1+ '. '+ address.postcode + ' ' + address.city + ' ' + address.country + ','}} </b-col>
            <b-col md="3">{{address.alias}}</b-col>
            <b-col md="1">
              <router-link :to="$i18nRoute({ name: 'address', query: { id_address: address.id }})">
                <b-icon icon="pencil" font-scale="2"></b-icon>
              </router-link>
            </b-col>
          </b-row>
        </div>
        <div class="address-footer mt-5">
          <p class="add-new-address">
            <router-link :to="$i18nRoute({ name: 'address' })">
              <b-icon icon="plus"></b-icon>
              <span>{{$t('account.create_address')}}</span>
            </router-link>
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AccountNav from '@/components/common/AccountNav'
// import { UserServices } from '@/services/index'
export default {
  components: {
    AccountNav
  },
  data () {
    return {
      addresses: this.$store.state.address.addresses || [],
      removedAddresses: [],
      removeConfirm: '',
      dismissSecs: 5,
      dismissCountDown: 5
    }
  },
  methods: {
    removeItem (address, index, $event) {
      $event.preventDefault()
      this.removeConfirm = ''
      this.$bvModal.msgBoxConfirm(this.$t('address.delete_confirm_message'), {
        title: this.$t('address.confirm'),
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: this.$t('address.yes'),
        cancelTitle: this.$t('address.no'),
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          this.removeConfirm = value
          if (this.removeConfirm) {
            var payload = {}
            payload.user = this.$store.getters.user
            payload.addressId = address.id
            this.$store.dispatch('delete_address', payload).then(res => {
              if (res.errors.length === 0) {
                this.removedAddresses.push(index)
                this.showAlert()
              }
            })
          }
        })
        .catch(err => {
          // An error occurred
          console.log(err)
        })
    },
    getAddresses (id) {
      this.$store.dispatch('get_addresses', id).then(res => {
        this.addresses = res.addresses
      })
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    alertDismissed () {
      this.dismissCountDown = 0
      this.$store.dispatch('update_address_alert', 0)
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
  mounted () {
    this.showAlert()
    this.getAddresses(this.$store.getters.user.id)
  }
}
</script>

<style scoped lang="scss">
.account-right {
  .address-list {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 8px;
    margin-bottom: 30px;
    margin: 0px;
    padding: 10px 20px;
    .address {
      box-shadow: none;
      border: none;
      border-radius: 0px;
      border-bottom: 1px solid #E9E9E9;
      padding: 15px 0px;
      margin-bottom: 10px;
      font-size: 14px;
      font-weight: 500;
      color: #707070;
    }

  }
  .add-new-address {
    border: 0.5px solid #E9E9E9;
    border-radius: 8px;
    background: #fff;
    padding: 0px 15px;
    float: right;
  }
}
.btn-danger {
  background-color: #B2162C;
}
</style>
