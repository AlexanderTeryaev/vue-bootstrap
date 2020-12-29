<template>
<div class="bluemain-col mt-4">
  <div class="search-filters">
    <div class="head-title">
      <b-col md="2" class="d-none d-md-block"></b-col>
      <b-col md="8" sm="12">
          <h1>{{item.title}}</h1>
          <div class="subtitle">{{$t('parallax.description')}}</div>
      </b-col>
      <b-col md="2" class="d-none d-md-block right-side"> <span class="eku-num"> 3 </span><span class="eku-text">{{$t('parallax.step')}}</span> </b-col>
    </div>
    <b-row>
      <SliderBar
      :id="0"
      :name="filterData.slider.title"
      :min="filterData.slider.min"
      :max="filterData.slider.max"
      :unit="filterData.slider.unit"
      :dragend="dragend"/>
    </b-row>
    <b-row>
      <div class="filter-box" v-for="(data, index) in filterData.box.slice(0,5)" :key="index">
        <FilterBox
        :id="index"
        :collapseid="'collapse_' + index"
        :title="data.content.title"
        :detail="data.content.items"
        :updatevalues="updateValues"
        :isline="false"
        :iscount="false"/>
      </div>
    </b-row>
    <b-collapse id="more">
        <b-row>
          <div class="filter-box" v-for="(data, index) in filterData.box.slice(5)" :key="index">
          <FilterBox
          :id="index"
          :collapseid="'collapse_more_' + index"
          :title="data.content.title"
          :detail="data.content.items"
          :updatevalues="updateValues"
          :isline="false"
          :iscount="false"/>
        </div>
      </b-row>
    </b-collapse>

    <div class="more-result" v-b-toggle.more>
      <span class="collapsed-icon">{{$t('parallax.other_properties')}}</span>
      <span class="opened-icon">{{$t('parallax.fewer')}}</span>
      <b-icon icon="chevron-down" font-scale="1.5"></b-icon>
    </div>
    <b-col cols="12" class="detail-btn">
      <a class="submitFilter" href="#">{{$t('parallax.show_selection')}}</a>
    </b-col>
  </div>
</div>
</template>

<script>
import SliderBar from '@/components/common/SliderBar'
import FilterBox from '@/components/common/FilterBox'
export default {
  props: {
    item: Object,
    filterData: Object
  },
  data () {
    return {
      more_filters: false
    }
  },
  components: {
    SliderBar,
    FilterBox
  },
  methods: {
    updateValues (seleted, id) {
      console.log(seleted, id)
    },
    dragend (value, id) {
      console.log(value, id)
    }
  }
}
</script>

<style scoped lang="scss">
  // .bluemain-col.open {
  //   display: block;
  // }
  .bluemain-col {
    // display: block;
    background: linear-gradient(90deg,#12407e 0,#113d77 68%,#0e3160 100%);
    border-radius: 8px;
    border: 1px solid #fff;
    padding-bottom: 80px;
    margin-bottom: 60px;
    color: #fff;
    position: relative;
    overflow: hidden;
    font-family: Lato;
    .head-title {
      display: flex;
      padding-top: 60px;
      margin-bottom: 50px;
      h1 {
        font-weight: 400;
        font-size: 30px;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      .subtitle {
        font-weight: 300;
        font-size: 20px;
        opacity: 1;
      }
      .right-side {
        right: 0;
        .eku-num {
          font-size: 122px;
          font-weight: 500;
        }
        .eku-text {
          font-size: 24px;
          text-transform: uppercase;
          font-weight: 100;
          transform: matrix(0,-1,1,0,0,0);
          position: absolute;
          right: -10px;
        }

      }
    }
    .search-filters {
      .row {
        width: 80%;
        margin: 0 auto;
        // margin-top: 40px;
      }
      .custom-slider {
        width: 30%;
        margin-bottom: 40px;
        @media screen and (max-width: 768px){
          width: 100%;
        }
        :first-child {
          font-size: 24px;
        }
      }
      .custom-slider> :nth-child(2) {
          margin: 20px 0;
      }
      .filter-box {
        z-index: 9999;
        margin: 12px 10px;
        width: calc(20% - 20px);
        @media screen and (max-width: 1200px){
          width: calc(25% - 20px);
        }
        @media screen and (max-width: 992px){
          width: calc(33.33% - 20px);
        }
        @media screen and (max-width: 768px){
          width: calc(50% - 20px);
        }
        @media screen and (max-width: 576px){
          width: calc(100% - 20px);
        }
      }
      .more-result {
        display: inline-block;
        width: 100%;
        margin: 30px 0 0;
        font-weight: 300;
        text-align: center;
        padding: 10px 15px;
        font-size: 14px;
        position: relative;
        letter-spacing: 0.5px;
        cursor: pointer;
        z-index: 2;
        outline: none;
        .b-icon {
          margin-left: 10px;
          vertical-align: middle;
          transition: all 0.5s ease 0s
        }
      }
      .more-result:after {
        border-bottom: 1px solid #ccc;
        content: '';
        display: inline-block;
        width: 100%;
        margin: 5px 0 0 0;
      }
      .not-collapsed {
        .b-icon{
          transform: rotate(180deg);
        }
      }
    }
    .detail-btn {
      display: inline-block;
      width: 100%;
      text-align: center;
      margin: 50px 0 0;
      z-index: 2;
      a {
        max-width: 300px;
        background: #b2162c;
        text-transform: uppercase;
        color: #fff;
        font-weight: 300;
        width: 100%;
        display: block;
        padding: 12px 15px;
        border-radius: 15px;
        margin: 0 auto;
        transition: all 0.5s ease 0s;
      }
    }
  }
  .bluemain-col:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background: url('../../../assets/img/bg-animation.png') 0 0 no-repeat;
    background-size: 100%;
    background-attachment: fixed;
    z-index: 1;
  }
</style>
