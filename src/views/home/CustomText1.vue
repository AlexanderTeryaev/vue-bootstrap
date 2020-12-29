<template>
  <b-container class="custom_text_1">
    <b-row>
      <b-col cols="12" xl="6"  class="business-left">
        <div class="business-details">
          <p class="px-5 left_block_desc text-left text-sm-center">
            {{$t('custom_text_1.left')}}
            <span class="float-right d-block d-sm-none" v-b-toggle.right_block>
              <b-icon icon="chevron-down" class="collapsed-icon"></b-icon>
              <b-icon icon="chevron-up" class="opened-icon"></b-icon>
            </span>
          </p>
        </div>
      </b-col>
      <b-col cols="12" xl="6"  class="business-right">
        <div class="business-details d-none d-sm-block" >
          <p class="right_block_desc">{{text_left}}</p>
        </div>
        <b-collapse id="right_block">
          <div class="business-details" >
            <p class="right_block_desc">{{text_left}}</p>
          </div>
        </b-collapse>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { HomeServices } from '@/services/index'
import { Trans } from '@/lang/Translation'
export default {
  data () {
    return {
      text_left: '',
      text_right: ''
    }
  },
  created () {
    this.getCustomText1()
  },
  methods: {
    getCustomText1 () {
      HomeServices.getCustomText1(Trans.getLangId(Trans.currentLanguage)).then(resp => {
        this.text_left = resp.customhtml.left_desc
      })
    }
  },
  watch: {
    $route (to, from) {
      this.getCustomText1()
    }
  }
}
</script>
<style lang="scss" scoped>
  .custom_text_1 {
    margin-bottom: 80px;
    border-radius: 8px;
    padding: 0px;
    overflow: hidden;
    .business-left {
      background: url('../../assets/img/custom_text_1_back1.png') no-repeat top right;
      background-size: cover;
      // padding: 0px;
      padding-bottom: 50%;
      position: relative;
      .business-details {
        position:absolute;
        top: 50%;
        transform: translate(0, -50%);
        text-align: center;
        color: #FFFFFF;
        font-size: 42px;
        font-weight: 500;
        line-height: 60px;
        @media screen and (max-width: 576px) {
          font-size: 24px;
          line-height: normal;
        }
      }
      .left_block_desc {
        span {
          transform: translate(100%, -100%);
        }
        span:focus {
          outline: none;
        }
      }
    }
    .business-right {
      background: url('../../assets/img/custom_text_1_back.png') no-repeat top right #12407D;
      padding: 0px;
      .business-details {
        display: flex;
        margin-top: 7%;
        .right_block_desc {
          text-align: center;
          font-size: 16px;
          color: #fff;
          font-weight: 300;
          padding: 0px 50px;
          line-height: 1.8rem;
          @media screen and (max-width: 576px) {
            font-size: 12px;
            max-height: 710px;
            overflow-y: scroll;
          }
        }
      }
    }
  }
</style>
