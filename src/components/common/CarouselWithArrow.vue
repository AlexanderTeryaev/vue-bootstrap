<template>
  <b-row class="carousel-with-arrow mb-5">
    <carousel ref="carousel"
    :dots="false"
    :nav="true"
    :navText="[prev, next]"
    :margin="15"
    class="col-12 col-sm-12"
    :responsive="{
      0:{
        items:2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 8,
      }
      }">
      <div class="item" v-for="(item, index) in items" :key="index" @click="selectItem(index)">
        <div :class="{active:(index==selected)}">
          <div class="rank_count">{{item}}</div>
          <!-- <span v-if="current_rank==index+1">current rank</span> -->
        </div>
      </div>
    </carousel>
  </b-row>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default {
  components: {
    carousel
  },
  props: {
    selectItem: Function,
    selected: Number,
    items: Array,
    current_rank: Number
  },
  data () {
    return {
      prev: '<i aria-hidden="true" class="fa fa-chevron-left"></i>',
      next: '<i aria-hidden="true" class="fa fa-chevron-right"></i>'
    }
  }
}
</script>
<style lang="scss" scoped>
.item {
  background: 0 0;
  color: #000;
  padding: 0;
  cursor: pointer;
  .rank_count {
    display: flex;
    border-radius: 6px;
    transition: all .5s ease 0s;
    font-size: 44px;
    font-weight: 700;
    background: #fff;
    height: 90px;
    justify-content: center;
    align-items: center;
    border: 2px solid #fff;
  }
  .rank_count:hover {
    color: #b60d27;
    border-color: #b60d27;
  }
  .active .rank_count{
    background: #b60d27;
    color: #fff;
    border-color: #b60d27;
  }
  span {
        font-weight: 300;
    font-size: 16px;
    color: #fff;
    padding-top: 10px;
  }
}
</style>>
