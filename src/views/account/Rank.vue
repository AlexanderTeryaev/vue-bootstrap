<template>
  <b-container class="rank mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title">{{$t('rank.self')}}</h1>
        <div class="rank-rightbar">
          <div class="tab-content" :key="selected" v-if="selected!=null">
            <div class="rank_view">{{current_rank}}<span>{{$t('rank.self')}}</span></div>
            <div class="rank_content">
              <h2>Rangvorteile {{selected+1}}</h2>
              <ul>
                <li><b-icon icon="check" font-scale="2"></b-icon><span>Lorem ipsum dolor sit amet, consetetu</span></li>
                <li><b-icon icon="check" font-scale="2"></b-icon><span>Lorem ipsum dolor sit amet, consetetu</span></li>
                <li><b-icon icon="check" font-scale="2"></b-icon><span>Lorem ipsum dolor sit amet, consetetu</span></li>
                <li><b-icon icon="check" font-scale="2"></b-icon><span>Lorem ipsum dolor sit amet, consetetu</span></li>
              </ul>
            </div>
          </div>
          <div class="rank_carousel">
            <CarouselWithArrow
            :selectItem="selectRank"
            :selected="selected"
            :items="ranks"
            :current_rank="current_rank"/>
          </div>
          <div>
            <div class="progress-section pt-3">
              <b-row  class="mb-3">
                <b-col cols="2" class="min"><span>{{progress.min}}</span></b-col>
                <b-col cols="8" class="value"><b-progress variant="white" :value="progress.value" max="1"></b-progress></b-col>
                <b-col cols="2" class="max"><span>{{progress.max}}</span></b-col>
              </b-row>
              <p class="mb-5">{{current_value}}/{{next_value}} €</p>
              <p>{{next_value - current_value}} € {{$t('rank.turn_over_description')}}</p>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AccountNav from '@/components/common/AccountNav'
import CarouselWithArrow from '@/components/common/CarouselWithArrow'
export default {
  name: 'rank',
  components: {
    AccountNav,
    CarouselWithArrow
  },
  data () {
    return {
      selected: null,
      ranks:
      [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
      ],
      current_rank: 0,
      current_value: 0,
      next_value: 0,
      progress:
      {
        min: 0,
        max: 1,
        value: 0
      }
    }
  },
  methods: {
    selectRank (index) {
      this.selected = index
    },
    currentRank () {
      this.current_rank = 2
      this.current_value = 682.88
      this.next_value = 1000
      this.progress.value = this.current_value / this.next_value
      if (this.current_rank) {
        this.selected = this.current_rank - 1
        this.progress.min = this.current_rank
        this.progress.max = this.current_rank + 1
      }
    }
  },
  created () {
    this.currentRank()
  }
}
</script>

<style scoped  lang="scss">
.account-right {

  .rank-rightbar {
    background: linear-gradient(135deg, #11407e 65%,#0e202c 100%);
    padding: 50px;
    border-radius: 10px;
    margin-bottom: 30px;
    color: #fff;
    .progress-section {
      span {
        font-size: 30px;
      }
      p {
        font-size: 20px;
      }
      .min {
        text-align: right;
      }
      .max {
        text-align: left;
      }
      .value {
        margin: auto;
      }
      .progress {
        height: 10px;
        text-align: left;
        overflow: hidden;
        background: 0 0;
        border: 2px solid #fff;
        border-radius: 28px;
      }
      .progress-bar {
        background-color: #fff;
      }
    }
    .tab-content {
      padding: 30px 0 15px;
      font-weight: 300;
      margin-bottom: 30px;
      .rank_view {
        width: 110px;
        height: 120px;
        border: 1px solid #fff;
        border-radius: 10px;
        text-align: center;
        float: right;
        font-size: 60px;
        line-height: 100%;
        padding-top: 15px;
        font-weight: 700;
        span {
          display: block;
          font-size: 18px;
          line-height: normal;
          font-weight: 300;
        }
      }
      .rank_content {
        text-align: left;
        ul li {
          margin: 15px 0;
          display: block;
          position: relative;
        }
        span {
          vertical-align: super;
        }
      }
    }
  }
}
</style>
