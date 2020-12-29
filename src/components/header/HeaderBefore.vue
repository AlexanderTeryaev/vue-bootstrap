<template>
  <div class="header-before">
    <b-container fluid>
      <b-row class="top_section">
          <b-col md="3" sm="12" class="top-logo">
            <span class="menu_bar_btn d-block d-md-none" v-b-toggle.collapse-menu>
              <b-icon icon="list" class="collapsed-icon"></b-icon>
              <b-icon icon="x" class="opened-icon"></b-icon>
            </span>
            <router-link :to="$i18nRoute({ name: 'home'})">
              <img class="logo img-responsive" src="../../assets/img/logo.jpg"/>
            </router-link>
            <div class="shopping-cart">
              <a href="javascript:void(0);" @click="openAccount">
                <b-button variant="outline-primary" class="btn-circle" v-b-tooltip.hover.bottomright :title="this.$store.getters.isLoggedIn ? 'Visit my account' : ''">
                  <b-icon icon="person"></b-icon>
                </b-button>
              </a>
              <b-button variant="outline-primary" v-b-modal="modalIdShopingCart" class="btn-circle">
                <b-icon icon="cart3"></b-icon>
                <span class="cart-products-count">{{this.$store.getters.cart?this.$store.getters.cart.products_count:0}}</span>
              </b-button>
            </div>
          </b-col>
          <b-col md="6" sm="12" class="search-section mt-2">
            <div id="search_widget" class="search-widget mb-2">
              <vue-bootstrap-typeahead
                :data="searchOptions"
                v-model="search_key"
                size="lg"
                :serializer="s => s.name"
                :placeholder="$t('header.search_for_catalog')"
                @input="inputKey"
                @hit="selected"
                class="search-input"
                ref="searchInput"
              />
              <b-button variant="outline-primary">
                <b-icon icon="search"></b-icon>
              </b-button>
            </div>
          </b-col>
          <b-col md="3" sm="12" class="header-before-right-nav mt-2">
            <div>
              <div class="user-info">
                <router-link v-if="this.$store.getters.isLoggedIn" :to="$i18nRoute({ name: 'rank'})">
                  <b-button variant="outline-primary" class="btn-circle user-rank">
                  {{rank}} Rank
                  </b-button>
                </router-link>
                <a href="javascript:void(0);" @click="openAccount">
                  <b-button variant="outline-primary" class="btn-circle" v-b-tooltip.hover.bottomright :title="this.$store.getters.isLoggedIn ? 'Visit my account' : $t('header.log_in_to_your_customer_account')">
                    <b-icon icon="person"></b-icon>
                  </b-button>
                </a>
              </div>
            </div>
            <div>
              <div class="blockcart cart-preview inactive">
                <b-button variant="outline-primary" v-b-modal="modalIdShopingCart" class="btn-circle">
                  <b-icon icon="cart3"></b-icon>
                  <span class="cart-products-count">{{this.$store.getters.cart?this.$store.getters.cart.products_count:0}}</span>
                </b-button>
              </div>
            </div>
          </b-col>
      </b-row>
      <Menu data="d-block d-md-none"/>
    </b-container>
    <ShoppingCartModal />
    <LoginModal />
    <RegisterModal />
    <ForgotModal />
  </div>
</template>

<script>
import { Trans } from '@/lang/Translation'
import { shopId } from '@/config/settings'
import ShoppingCartModal from '@/components/common/ShoppingCartModal'
import LoginModal from '@/components/common/LoginModal'
import RegisterModal from '@/components/common/RegisterModal'
import ForgotModal from '@/components/common/ForgotModal'
import { SHOPPING_CART_MODAL, LOGIN_MODAL } from '@/constants/modal'
import Menu from './Menu'
import { UserServices, HeaderServices } from '@/services/index'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import $ from 'jquery'
export default {
  components: {
    ShoppingCartModal,
    LoginModal,
    RegisterModal,
    ForgotModal,
    Menu,
    VueBootstrapTypeahead
  },
  data () {
    return {
      modalIdShopingCart: SHOPPING_CART_MODAL,
      modalIdLogin: LOGIN_MODAL,
      search_key: '',
      user: null,
      rank: 0,
      searchOptions: [],
      selectedAddress: null
    }
  },
  mounted () {
    this.user = this.$store.getters.user
    if (this.$store.getters.isLoggedIn && this.user) {
      UserServices.getUserRank(this.user.id_customer).then(resp => {
        this.rank = resp.customerrank.rank
      })
    }
    const self = this
    $('#search_widget').keyup(function (event) {
      if (event.keyCode === 13) {
        self.$router.push({ name: 'search', query: { key: self.search_key } }).catch(() => {})
      }
    })
  },
  methods: {
    freshData (data) {
      data.forEach(e => {
        e.name = e.title + `(${this.search_key})`
        e.id = e.id_product
        e.keyword = this.search_key
      })
      return data
    },
    inputKey (value) {
      this.searchOptions = []
      if (value.length < 3) {
        return
      }
      const params = {
        shopId: shopId,
        langId: Trans.getLangId(Trans.currentLanguage),
        query: value
      }
      HeaderServices.searchProductsTerms(params).then(resp => {
        this.searchOptions = this.freshData(resp.products)
      })
    },
    selected (item) {
      this.$router.push({ name: 'product', params: { id_product: item.id_product } }).catch(() => {})
      this.$refs.searchInput.inputValue = ''
    },
    openAccount () {
      if (this.$store.getters.isLoggedIn) {
        this.$router.push({ name: 'my-account' }).catch(() => {})
      } else {
        this.$bvModal.show(LOGIN_MODAL)
      }
    }
  },
  watch: {
    $route (to, from) {
      if (to.query && to.query.key) {
        this.search_key = to.query.key
      }
    }
  }
}
</script>

<style scoped lang="scss">
.header-before {
  height: 120px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center!important;
  -ms-flex-align: center!important;
  align-items: center!important;
  z-index: 2;
  .top_section {
    -webkit-box-pack: justify!important;
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
    display: flex;
    width: 100%;
    margin: auto;
    .top-logo .shopping-cart {
      display: none;
    }
    .menu_bar_btn {
      color: #12407E;
      position: absolute;
      left: 20px;
      top: 10px;
    }
    img {
      max-width: 220px;
    }
    .search-section .search-widget {
      display: flex;
      max-width: 400px;
      margin: auto;
      .input-group {
        input, .dropdown-input {
          border: #D8D8D8 1px solid;
          border-radius: 8px !important;
        }
        input:focus, .dropdown-input:focus {
          outline: none !important;
          box-shadow: none !important;
          border-radius: 8px !important;
          border: #12407E 1px solid !important;
        }
      }
      button {
        background: #12407E;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        color: #f1f1f1 !important;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        cursor: pointer;
        border-color: transparent;
        transform: translateX(-15px);
        z-index: 100;
      }
      button:hover {
        background: #B2162C;
        box-shadow: none !important;
      }
      button:visited {
        border-color: transparent;
        box-shadow: none !important;
      }
      button:active {
        border-color: transparent;
        box-shadow: none !important;
      }
    }
    .header-before-right-nav {
      display: flex;
      justify-content: center;
      .user-info {
        display: flex;
        .user-rank {
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
  }
}
.cart-products-count {
  background: #12407E;
  color: #fff !important;
  border-radius: 50%;
  height: 22px;
  width: 22px;
  line-height: 22px;
  position: absolute;
  font-size: 12px;
  transform: translate(12px, -40px);
}
@media screen and (max-width: 768px) {
  .header-before .container-fluid {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .header-before .top_section .top-logo {
    box-shadow: 0px 3px 5px 0px #919090!important;
    border-bottom: 1px solid #e7e7e7;
    padding: 10px;
  }
  .header-before .top_section .search-section {
    margin-top: 15px !important;
  }
  .header-before .top_section .search-section .search-widget {
     .input {
      border: #707070 1px solid !important;
      border-color: #707070 !important;
     }
     button {
      border-top-left-radius: 0%;
      border-bottom-left-radius: 0%;
      border-top-right-radius: 20%;
      border-bottom-right-radius: 20%;
      height: 41px !important;
      transform: translate(-8px, -1px) !important;
    }
  }
  .header-before-right-nav {
    display: none !important;
  }
  .top-logo .shopping-cart {
    display: flex !important;
    float: right;
    button {
      width: 40px;
      height: 40px;
      svg {
        font-size: 100%;
        transform: translate(-2px, -4px);
      }
    }
  }
}
@media screen and (max-width: 414px) {
  .header-before .top_section img {
    width: 170px;
    margin-left: 30px;
  }
}
@media screen and (max-width: 360px) {
  .header-before .top_section img {
    width: 130px;
    margin-top: 6px;
  }
}
</style>
