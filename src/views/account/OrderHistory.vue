<template>
  <b-container class="order-history mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12" v-if="!id_order">
        <b-row class="header">
          <b-col cols="12" md="6">
            <h1 class="header-title text-center text-sm-left">{{$t('account.order_history')}}</h1>
          </b-col>
          <b-col cols="12" md="6" class="d-none d-md-block">
            <p class="text-right"><a href="#" class="return-history">{{$t('account.merchandise_returns')}}<b-icon icon="arrow-counterclockwise"></b-icon></a></p>
          </b-col>
        </b-row>
        <b-row class="my-3 float-right search-section d-none d-md-block">
          <b-form inline>
            <b-input-group>
              <b-input class="search-input"
                type="text"
                :placeholder="$t('order_history.search_placeholder')"
              >
              </b-input>
              <b-input-group-append>
                <b-button class="search-btn"><b-icon icon="search"></b-icon></b-button>
              </b-input-group-append>
            </b-input-group>
            <b-form-input
              type="date"
            >
            </b-form-input>
          </b-form>
        </b-row>
        <div class="day-orders" v-for="(order, index) in order_history" :key="index" :class="{'mt-0':(index!=0)}">
          <b-row class="date-time">
            <div class="sidebar d-none d-md-block">
              24 Dez
            </div>
            <h4 class="text-left">{{order.date}}</h4>
          </b-row>
          <b-row class="content-section">
            <div class="sidebar d-none d-md-block"></div>
            <div class="content"><OrderOfDay :items="order.items" :show_details="show_details"/></div>
          </b-row>
        </div>
      </b-col>
      <OrderDetails v-else/>
    </b-row>
  </b-container>
</template>

<script>
import AccountNav from '@/components/common/AccountNav'
import OrderOfDay from '@/components/common/OrderOfDay'
import OrderDetails from './OrderDetails'
export default {
  components: {
    AccountNav,
    OrderOfDay,
    OrderDetails
  },
  data () {
    return {
      id_order: '',
      order_history: [
        {
          date: '24.12.2019',
          items: [
            {
              name: 'Rillenkugellager',
              image: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
              sn: '16002 BE-XL-JPA-T41A',
              type: 'BOSCH-Rexroth',
              size: '10 x 26 x 8 mm',
              amount: 100,
              unit_price: '0.5',
              unit: '€'
            },
            {
              name: 'Rillenkugellager',
              image: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
              sn: '16002 BE-XL-JPA-T41A',
              type: 'BOSCH-Rexroth',
              size: '10 x 26 x 8 mm',
              amount: 100,
              unit_price: '0.5',
              unit: '€'
            },
            {
              name: 'Rillenkugellager',
              image: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
              sn: '16002 BE-XL-JPA-T41A',
              type: 'BOSCH-Rexroth',
              size: '10 x 26 x 8 mm',
              amount: 100,
              unit_price: '0.5',
              unit: '€'
            }
          ]
        },
        {
          date: '24.12.2019',
          items: [
            {
              name: 'Rillenkugellager',
              image: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
              sn: '16002 BE-XL-JPA-T41A',
              type: 'BOSCH-Rexroth',
              size: '10 x 26 x 8 mm',
              amount: 100,
              unit_price: 0.5,
              unit: '€'
            },
            {
              name: 'Rillenkugellager',
              image: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
              sn: '16002 BE-XL-JPA-T41A',
              type: 'BOSCH-Rexroth',
              size: '10 x 26 x 8 mm',
              amount: 100,
              unit_price: '0.5',
              unit: '€'
            },
            {
              name: 'Rillenkugellager',
              image: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
              sn: '16002 BE-XL-JPA-T41A',
              type: 'BOSCH-Rexroth',
              size: '10 x 26 x 8 mm',
              amount: 100,
              unit_price: '0.5',
              unit: '€'
            }
          ]
        }
      ],
      items:
      [
        {
          img: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
          category: 'Startseite',
          name: 'hummingbird notebook',
          quantity: 1,
          price: {
            unit: '€',
            regular: '15.35',
            discount_type: '%',
            discount: '20',
            current: '12.28'
          }
        },
        {
          img: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
          category: 'Startseite',
          name: 'hummingbird notebook',
          quantity: 1,
          price: {
            unit: '€',
            regular: '15.35',
            discount_type: '%',
            discount: '20',
            current: '12.28'
          }
        },
        {
          img: 'https://ekugellager.roccshow.com/24-cart_default/hummingbird-notebook.jpg',
          category: 'Startseite',
          name: 'hummingbird notebook',
          quantity: 1,
          price: {
            unit: '€',
            regular: '15.35',
            discount_type: '%',
            discount: '20',
            current: '12.28'
          }
        }
      ]
    }
  },
  methods: {
    show_details (id) {
      this.$router.push({ path: 'order-history', query: { id_order: id } })
      this.id_order = id
    }
  },
  mounted () {
    if (this.$route.query.id_order !== 'undefined') {
      this.id_order = this.$route.query.id_order
    }
  }
}
</script>

<style scoped lang="scss">
.account-right {
  // padding-right: 0%;
  // padding-left: 80px;
  // margin-bottom: 50px;
  .header {
    border-bottom: 1px solid #707070;
    .return-history {
      padding: 10px;
      border: 0.5px solid #E9E9E9;
      border-radius: 8px;
      color: #707070;
    }
    .return-history:hover {
      background: #707070;
      color: #f1f1f1;
    }
  }
  .header-title {
    color: #12407E;
    font-size: 24px;
    padding-bottom: 20px;
    // margin-bottom: 40px;
    border:none;

  }
  .search-section {
    .search-input {
      padding-right: 40px;
      // border-right: none;
    }
    .search-btn {
      // border: 1px solid #ced4da;
      border: none;
      z-index: 100;
      color: #495057;
      background: none;
      transform: translate(-100%, 0);
    }
  }
  .day-orders {
    margin-top: 70px;
    h4 {
      color: #12407E;
    }
    .sidebar {
      width: 15px;
      background: #12407E;
      box-shadow: 0 0 0 1px #12407E;
      left: -20px;
      @media screen and (max-width: 992px) {
        left: -10px;
      }
      position: relative;
    }
    .content {
      width: calc( 100% - 15px );
    }
    .date-time {
      .sidebar {
        color: white;
        border-radius: 100%;
        width: 60px;
        padding: 10px;
        position: relative;
        left: -42px;
        // top: 5px;
        font-size: 20px;
        @media screen and (max-width: 992px) {
          left: -30px;
        }
      }
      .text-left {
        left: -20px;
        top: 20px;
        position: relative;
        @media screen and (max-width: 768px) {
          position: unset;
        }
      }
    }
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
