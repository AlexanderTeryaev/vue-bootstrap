<template>
  <div class="product-cart">
    <h1 class="h1 product_name_h1" itemprop="name">{{details.name}}</h1>
    <b-row class="quality-pricelist" v-if="quality.length">
      <b-col lg="4" cols="4" class="title">
        {{$t('products.quality')}}
      </b-col>
      <b-col lg="8" cols="8">
        <ul class="grade">
          <li v-for="(item, index) in quality" :key="index" :class="{active : item === 1}"></li>
        </ul>
      </b-col>
    </b-row>
    <div class="product-information">
      <div>
        <b-table
          :striped="striped"
          :bordered="bordered"
          :borderless="borderless"
          :outlined="outlined"
          :small="small"
          :hover="hover"
          :dark="dark"
          :fixed="fixed"
          :foot-clone="footClone"
          :no-border-collapse="noCollapse"
          :items="items"
          :fields="fields"
          :head-variant="headVariant"
          :table-variant="tableVariant"
        ></b-table>
      </div>
      <div class="product-description-short" v-html="details.description_short">
      </div>
      <div class="product-actions">
        <b-form action="#">
          <div class="product-variants">
            <div class="clearfix product-variants-item" v-for="(group, index) in details.groups" :key="index">
              <span class="control-label">{{group.group_name}}</span>
              <b-form-select @change="changeGroup()" v-model="selected_groups[index]" :options="group.attributes" v-if="group.group_type==='select'"></b-form-select>
              <b-form-radio-group @input="changeGroup()" name="color-radio" v-model="selected_groups[index]" v-if="group.group_type==='color'">
                <b-form-radio   v-for="(item, key) in group.attributes" :key="key" :value="key" >{{item}}</b-form-radio>
              </b-form-radio-group>
              <div style="display: none;"> {{selected_groups[index]}} </div>
            </div>
          </div>
          <div class="product-add-to-cart">
            <b-row class="product-prices">
              <b-col md="4" class="reduce-padding">
                <p class="cusomter_rank_proud">
                  <span class="rank_val">0</span>
                  <span class="rank_text">{{$t('account.rank')}}</span>
                </p>
              </b-col>
              <b-col md="8" class="reduce-padding text-right">
                <div class="product-discount">
                  <span class="regular-price">€{{parseFloat(details.base_price).toFixed(2)}}</span>
                </div>
                <div class="product-price has-discount">
                  <span>€{{parseFloat(details.price).toFixed(2)}}</span>
                </div>
                <div class="tax-shipping-delivery-label">{{$t('products.tax_included')}}</div>
              </b-col>
            </b-row>
            <p>{{details.quantity}} {{$t('products.ready_to_ship')}}</p>
            <b-row class="add-to-cart">
              <b-col cols="4" class="p-0">
                <vue-numeric-input  v-model="count" @input="updatePrice" :min="1" align="center" size="100%"></vue-numeric-input>
                <!-- <b-form-input type="number" v-model="count" min="1" value="1"></b-form-input> -->
              </b-col>
              <b-col cols="8" class="p-0">
                <b-button @click="addtocart(count)">{{$t('products.shoppingcart')}}</b-button>
              </b-col>
            </b-row>
            <b-row class="compare-remember">
              <b-col md="5" class="px-0">
                <b-button v-b-modal.modal-pq class="px-0">{{$t('products.ask_question')}}<img src="@/assets/img/comment.png" class="ask_question"/></b-button>
              </b-col>
              <b-col md="7" class="px-0">
                <b-button @click="addRemember" class="pl-0">{{$t('products.remember')}}</b-button>
                <b-button @click="addCompare" class="pr-0">{{$t('products.compare')}} &</b-button>
              </b-col>
            </b-row>
          </div>
        </b-form>
      </div>
    </div>
    <b-modal id="modal-pq" centered title="" hide-footer hide-header>
      <b-row class="close_modal" @click="$bvModal.hide('modal-pq')">
        <b-icon icon="x-circle-fill" font-scale="2"></b-icon>
      </b-row>
      <b-row class="pt-3">
        <b-col cols="5" class="pq_show_pi_left text-center my-auto">
          <b-img src=""></b-img>
          <span class="pq_name_holder"></span>
          <span class="pq_price_holder product-price">€76.77</span>
        </b-col>
        <b-col cols="7" class="pq_show_pi_right">
          <b-alert variant="success" :show="query_sent">{{$t('products.query_sent')}}</b-alert>
          <div class="text-center"><img src="@/assets/img/load.gif" v-if="submitting"/></div>
          <b-form @submit="onSubmit" v-if="!submitting">
            <b-form-group
              label-cols-sm="3"
              :label="$t('products.name')"
              label-align-sm="right"
              label-for="pq_name"
            >
              <b-form-input id="pq_name"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              label-for="pq_email"
            >
              <template v-slot:label>
                <span class="text-danger">*</span>{{$t('products.email')}}
              </template>
              <b-form-input id="pq_email" type="email" required></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              :label="$t('products.phone')"
              label-align-sm="right"
              label-for="pq_phone"
            >
              <b-form-input id="pq_phone"></b-form-input>
            </b-form-group>
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              label-for="pq_message"
            >
              <template v-slot:label>
                <span class="text-danger">*</span>{{$t('products.message')}}
              </template>
              <b-form-textarea id="pq_message" rows="2" required></b-form-textarea>
            </b-form-group>
            <b-row class="mx-0 float-right">
              <p class="my-auto mr-3 text-danger">*{{$t('products.required_fileds')}}</p>
              <b-button type="submit" variant="primary" class="submitBtn">{{$t('products.submit')}}</b-button>
            </b-row>
          </b-form>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    addtocart: Function,
    details: Object,
    selected_groups: Array
  },
  data () {
    return {
      count: 1,
      quality: [],
      submitting: false,
      query_sent: false,
      fields: [
        { key: 'scale_quantity', label: this.$t('products.scale_quantity') },
        { key: 'your_discount', label: this.$t('products.your_discount') },
        { key: 'unit_price', label: this.$t('products.discount_unit_price') }
      ],
      items: [
      ],
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: false,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: '',
      noCollapse: false
    }
  },
  methods: {
    changeGroup () {
      var json = {}
      this.details.groups.forEach((item, index) => {
        json[item.group_name] = this.selected_groups[index]
      })
      this.$router.push({ query: json })
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.submitting = true
      setTimeout(() => {
        this.submitting = false
        this.query_sent = true
      }, 2000)
      setTimeout(() => {
        this.query_sent = false
      }, 4000)
    },
    updatePrice () {
      // update price only after no change of 500ms
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.items.forEach((item, index) => {
          if (this.count < this.items[0].scale_quantity) {
            this.details.price = this.details.base_price
          } else if (item.scale_quantity <= this.count) {
            this.details.price = item.unit_price.substring(1)
          }
        })
      }, 500)
    },
    addRemember () {
      setTimeout(() => {
        this.showNotify('success', 'success', 'Added to remember')
      }, 500)
    },
    addCompare () {
      setTimeout(() => {
        this.showNotify('success', 'success', 'Added to compare')
      }, 500)
    },
    showNotify (type, title, text) {
      this.$notify({
        group: 'notification-1',
        type: type,
        title: title,
        text: text
      })
    }
  },
  mounted () {
    if (this.details.quality === 'Good') this.quality = [1, 1, 0, 0]
    if (this.details.quality === 'Very Good') this.quality = [1, 1, 1, 0]
    if (this.details.quality === 'Best') this.quality = [1, 1, 1, 1]
    this.details.quantity_discounts.forEach((item, index) => {
      this.items.push({
        scale_quantity: item.quantity,
        your_discount: item.real_value.toFixed(4) + '%',
        unit_price: '€' + item.price
      })
    })
  },
  watch: {
    details: {
      immediate: true,
      handler () {
        // this.selected = this.details.groups.
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.product-cart {
    background: #12407E;
    padding: 15px;
    color: #fff;
    box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2);
    h1 {
      padding-bottom: 10px;
      border: none;
      font-size: 18px;
    }
    .product_name_h1 {
      text-transform: uppercase;
    }
    .quality-pricelist {
      height: 40px;
      line-height: 40px;
      .title {
        text-align: left;
      }
      .grade {
        margin: 0;
        margin-top: 15px;
        display: flex;
        -ms-flex-pack: distribute!important;
        justify-content: space-between!important;
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
    .product-information {
      .table {
        color: white;
        text-align: center;
        font-size: 14px;
      }
      text-align: left;
      .product-description-short{
        border-top: 1px solid rgb(240, 240, 240);
        border-bottom: 1px solid rgb(240, 240, 240);
        padding-top: 10px;
      }
      .product-variants {
        .product-variants-item {
          margin: 1.25rem 0;
        }
        .control-label {
          margin-bottom: .375rem;
          display: block;
          width: 100%;
        }
        select {
          width: auto;
        }
      }
      .product-prices {
        border-top: 1px solid rgb(240, 240, 240);
        border-bottom: 1px solid rgb(240, 240, 240);
        padding-top: 15px;
        padding-bottom: 15px;
        margin-bottom: 20px;
        .product-discount {
          margin-bottom: 5px;
          text-decoration: line-through;
        }
        .has-discount {
          font-size: 40px;
          line-height: 1.1;
        }
      }
      .add-to-cart {
        input {
          text-align: center;
        }
        button {
          width: 100%;
          background: #B2162C;
          text-transform: uppercase;
        }
      }
      .compare-remember {
        button {
          float: right;
          background: none;
          border: none;
        }
      }
    }
  }
  .pq_show_pi_right {
    .submitBtn {
      background: #B2162C 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 30px #00000029;
      border-radius: 4px;
      color: #fff;
      border: none;
      -webkit-transition: all .3s ease;
      transition: all .3s ease;
      font-size: 16px;
      font-weight: 500;
    }
    .submitBtn:hover {
      outline: none;
      background: #113d79;
    }
  }
  .ask_question {
    margin-left: 10px;
    width: 14px;
    height: 14px;
    vertical-align: text-top;
  }
  .close_modal {
    position: absolute;
    right: 0px;
    top: -20px;
    background: white;
    border-radius: 100%;
    cursor: pointer;
  }
</style>
