<template>
<b-container class="px-0">
  <div class="parallax-window bluemain-col mt-4" v-if="!open_filter" data-parallax="scroll" data-img-src="@/assets/img/bg-animation.png">
    <div class="search-filters">
      <div class="head-title">
        <b-col md="2" class="d-none d-md-block"></b-col>
        <b-col md="8" sm="12">
            <h1>{{$t('parallax.title')}}</h1>
            <div class="subtitle">{{$t('parallax.description')}}</div>
        </b-col>
        <b-col md="2" class="d-none d-md-block right-side"> <span class="eku-num"> 3 </span><span class="eku-text">{{$t('parallax.step')}}</span> </b-col>
      </div>
      <div class="tab-carousel">
        <carousel class="pro_carousel carousel-with-arrow px-4 px-sm-0"
          ref="carousel"
          :autoplay="false"
          :margin="15"
          :loop="false"
          :navText="[prev, next]"
          :dots="false"
          :responsive="{
            0: {
              items: 2,
              mouseDrag: true,
              touchDrag: true,
              nav: true
            },
            576: {
              items: 3
            },
            768: {
              items: 4
            },
            992: {
              items: 5,
              mouseDrag: false,
              touchDrag: false
            }
          }">
          <b-button class="item"  v-for="(item, index) in pro_carousel_items" :key="index"
          @click="selectPro(index)"
          :class='{active:(index==current_pro_index)}'
          >
            {{item.pro}}
          </b-button>
        </carousel>
        <SubProCarousel :current_pro="pro_carousel_items[current_pro_index]" :openFilter="openFilter" :key="current_pro_index"/>
      </div>
    </div>
  </div>
  <ParallaxFilter v-else
  :item="pro_carousel_items[current_pro_index].sub[sub_index]"
  :filterData="filter_data"/>
</b-container>
</template>

<script>
import carousel from 'vue-owl-carousel'
import SubProCarousel from './SubProCarousel'
import ParallaxFilter from './ParallaxFilter'
export default {
  components: {
    carousel,
    SubProCarousel,
    ParallaxFilter
  },
  data () {
    return {
      current_pro_index: 0,
      sub_index: 0,
      open_filter: false,
      prev: '<i aria-hidden="true" class="fa fa-chevron-left"></i>',
      next: '<i aria-hidden="true" class="fa fa-chevron-right"></i>',
      pro_carousel_items: [
        {
          pro: 'Kugellager',
          sub: [
            {
              title: 'Rillenkugellager',
              image: 'rillenkugellager.jpg'
            },
            {
              title: 'Schrägkugellager/ Spindellager',
              image: 'rillenkugellager.jpg'
            },
            {
              title: 'Spannlager/ Gehäuselager',
              image: 'rillenkugellager.jpg'
            }
          ]
        },
        {
          pro: 'Rollenlager',
          sub: [
            {
              title: 'Kegelrollenlager',
              image: 'rillenkugellager.jpg'
            }
          ]
        },
        {
          pro: 'Nadellager',
          sub: []
        },
        {
          pro: 'Axiallager',
          sub: []
        },
        {
          pro: 'Kombinierte Axial-/ Radiallager',
          sub: []
        }
      ],
      filter_data: {
        slider: {
          type: 'slide',
          title: 'Diameter',
          min: 10,
          max: 40,
          unit: 'mm'
        },
        box:
          [
            {
              type: 'box',
              content: {
                title: 'Categories',
                items: [
                  {
                    name: 'Clothes',
                    count: 5
                  },
                  {
                    name: 'Laufrolle',
                    count: 1
                  },
                  {
                    name: 'Lineartechnik',
                    count: 1
                  }
                ]
              }
            },
            {
              type: 'box',
              content: {
                title: 'Size',
                items: [
                  {
                    name: 'S',
                    count: 1
                  },
                  {
                    name: 'M',
                    count: 1
                  },
                  {
                    name: 'L',
                    count: 1
                  },
                  {
                    name: 'XL',
                    count: 1
                  }
                ]
              }
            },
            {
              type: 'box',
              content: {
                title: 'Color',
                items: [
                  {
                    name: 'White',
                    count: 4
                  },
                  {
                    name: 'Black',
                    count: 4
                  }
                ]
              }
            },
            {
              type: 'box',
              content: {
                title: 'Property',
                items: [
                  {
                    name: '120 pages',
                    count: 4
                  },
                  {
                    name: 'Long sleeves',
                    count: 1
                  },
                  {
                    name: 'Removable cover',
                    count: 4
                  },
                  {
                    name: 'Short sleeves',
                    count: 1
                  }
                ]
              }
            },
            {
              type: 'box',
              content: {
                title: 'Composition',
                items: [
                  {
                    name: 'Ceramic',
                    count: 4
                  },
                  {
                    name: 'Cotton',
                    count: 2
                  },
                  {
                    name: 'Matt paper',
                    count: 3
                  },
                  {
                    name: 'Polyester',
                    count: 3
                  },
                  {
                    name: 'Recycled cardboard',
                    count: 3
                  }
                ]
              }
            },
            {
              type: 'box',
              content: {
                title: 'Size',
                items: [
                  {
                    name: 'S',
                    count: 1
                  },
                  {
                    name: 'M',
                    count: 1
                  },
                  {
                    name: 'L',
                    count: 1
                  },
                  {
                    name: 'XL',
                    count: 1
                  }
                ]
              }
            },
            {
              type: 'box',
              content: {
                title: 'Availability',
                items: [
                  {
                    name: 'Not available',
                    count: 2
                  },
                  {
                    name: 'In stock',
                    count: 27
                  }
                ]
              }
            },
            {
              type: 'box',
              content: {
                title: 'Brand',
                items: [
                  {
                    name: 'FAG',
                    count: 1
                  },
                  {
                    name: 'NKE',
                    count: 1
                  },
                  {
                    name: 'TIMKEN',
                    count: 1
                  }
                ]
              }
            },

            {
              type: 'box',
              content: {
                title: 'Dimension',
                items: [
                  {
                    name: '40x60cm',
                    count: 3
                  },
                  {
                    name: '60x90cm',
                    count: 3
                  },
                  {
                    name: '80x120cm',
                    count: 3
                  }
                ]
              }
            },
            {
              type: 'box',
              content: {
                title: 'Paper Type',
                items: [
                  {
                    name: 'Ruled',
                    count: 2
                  },
                  {
                    name: 'Plain',
                    count: 2
                  },
                  {
                    name: 'Squarred',
                    count: 2
                  },
                  {
                    name: 'Dotes',
                    count: 2
                  }
                ]
              }
            }
          ]
      }
    }
  },
  methods: {
    selectPro (index) {
      this.current_pro_index = index
      // console.log(index)
    },
    openFilter (subIndex) {
      console.log(this.current_pro_index, subIndex)
      this.open_filter = true
      this.sub_index = subIndex
    }
  },
  mounted: function () {
    this.current_pro_index = 0
  }
}
</script>

<style scoped lang="scss">
  // .bluemain-col.open {
  //   display: block;
  // }
  .bluemain-col {
    // display: none;
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
    .tab-carousel {
      max-width: 1080px;
      width: 100%;
      margin:0 auto;
      .pro_carousel {
        .item {
          background: 0 0;
          color: #fff;
          display: inline-block;
          padding: 8px 15px 9px;
          cursor: pointer;
          border-radius: 6px;
          transition: all .5s ease 0s;
          font-size: 18px;
          border: none;
          outline: none;
        }
        .item.active{
          background: #b60d27;
          font-weight: 700;
        }
        button:hover {
          background: #b60d27;
        }
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
