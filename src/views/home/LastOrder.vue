<template>
  <b-container class="lastorder-section">
    <div class="head-title">
      <b-col cols="12">
        <h1>
          <span>
            {{$t('last_order.self')}}
          </span>
        </h1>
        <!-- <div class="details-section" v-if="last_order.id_customer">
          <span> <a href="#">Order: SUBHQOBUY</a></span>
          <span>{{last_order.date_add}}</span><br>
        </div> -->
        <b-row class="details-section">
          <b-form-group label-cols="3" label="Order" label-for="order" class="text-right my-auto">
            <b-form-select v-model="selected_order" :options="order_options"></b-form-select>
          </b-form-group>
          <span class="my-auto">{{order_date[selected_order]}}</span><br>
        </b-row>
      </b-col>
    </div>
    <b-row class="pt-5 mt-5">
      <b-col cols="3" v-for="(step, index) in steps" :key="index">
        <b-col lg="12">
          <b-row>
            <div class="step" :class="{'active':(step.status)}"> {{step.status?index+1:''}}<b-icon icon="check" v-if="!step.status"></b-icon> </div>
          </b-row>
        </b-col>
        <div class="description">
            <b-icon :icon="step.icon_name" class="icon" v-if="step.icon_type=='b-icon'"></b-icon>
            <vue-fontawesome :icon="step.icon_name" class="icon" v-else></vue-fontawesome>
            <span>{{step.description}}</span>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { HomeServices } from '@/services/index'
export default {
  data () {
    return {
      steps: [
        {
          description: this.$t('last_order.step_1'),
          icon_type: 'b-icon',
          icon_name: 'cart3',
          status: 0
        },
        {
          description: this.$t('last_order.step_2'),
          icon_type: 'fa-icon',
          icon_name: 'hand-paper-o',
          status: 0
        },
        {
          description: this.$t('last_order.step_3'),
          icon_type: 'fa-icon',
          icon_name: 'thumbs-o-up',
          status: 0
        },
        {
          description: this.$t('last_order.step_4'),
          icon_type: 'b-icon',
          icon_name: 'truck',
          status: 0
        }
      ],
      order_options: [
        { value: 0, text: 'SUBHQQBUY' },
        { value: 1, text: 'BQQCQZGYI' }
      ],
      selected_order: 1,
      order_date: [
        '2020-09-21 13:07:52',
        '2020-09-07 04:39:49'
      ],
      last_order: {}
    }
  },
  created () {
    this.lastOrder()
  },
  methods: {
    lastOrder () {
      HomeServices.lastOrder().then(res => {
        this.last_order = res.lastorder
        this.steps[0].status = this.last_order.step1
        this.steps[1].status = this.last_order.step2
        this.steps[2].status = this.last_order.step3
        this.steps[3].status = this.last_order.step4
        // console.log(this.last_order)
      })
    }
  },
  watch: {
    $route (to, from) {
      this.steps[0].description = this.$t('last_order.step_1')
      this.steps[1].description = this.$t('last_order.step_2')
      this.steps[2].description = this.$t('last_order.step_3')
      this.steps[3].description = this.$t('last_order.step_4')
    }
  }
}
</script>
<style lang="scss" scoped>
.lastorder-section {
  margin-bottom: 50px;
  padding: 40px 0px;
  .head-title {
    .details-section {
      position:absolute;
      right: 15px;
      text-align: right;
      margin-bottom: 40px;
      span, a {
        font-weight: 400;
        font-family: 'Lato';
        text-align: right;
        margin-left: 15px;
        color: #12407E;
        font-size: 14px;
      }
    }
  }
  .head-title h1{
    color: #12407E;
    font-weight: 300;
    font-family: 'Lato';
    text-align: center;
    font-size: 28px;
    text-transform: uppercase;
    margin-bottom: 40px;
    @media screen and (max-width: 576px){
       font-size: 18px;
    }
    span:before {
      content: '';
      background-color: #f1f1f1;
      height: 2px;
      display: block;
      position: absolute;
      top: 18px;
      left: 0;
      width: 25%;
    }
    span:after {
      content: '';
      background-color: #f1f1f1;
      height: 2px;
      display: block;
      position: absolute;
      top: 18px;
      right: 0;
      width: 25%;
    }
  }
  .row {
    .step {
      color: #fff;
      // background: #12407E;
      background: #ccc;
      font-size: 24px;
      line-height: 70px;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      margin: auto;
      @media screen and (max-width: 576px){
       width: 40px;
       height: 40px;
       line-height: 40px;
      }
    }
    .step.active {
      background: #12407E;
      z-index: 10;
    }
    :not(:first-child) .step:before {
      content: '';
      // background: #12407E;
      background: #ccc;
      height: 25px;
      display: block;
      position: absolute;
      top: 22px;
      left: -50%;
      width: 95%;
      @media screen and (max-width: 576px) {
        top: 10px;
        height: 15px;
        left: -75%;
        width: 100%;
      }
    }
    :not(:first-child) .step.active:before {
      background: #12407E;
    }
    .description {
      width: 100%;
      color: #12407D;
      font-size: 16px;
      display: inline-grid;
      margin-top: 15px;
      .icon {
        font-size: 36px;
        margin-bottom: 15px;
        margin-left: auto;
        margin-right: auto;
      }
      @media screen and (max-width: 576px){
       span {
         display: none;
       }
       .icon {
         font-size: 28px;
       }
      }
    }
  }
}
</style>
