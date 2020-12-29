<template>
  <b-container class="custom_text_2">
    <b-row>
      <b-col lg="12" class="header-title d-none d-sm-block">
        <h2>
          {{$t('custom_text_2.title')}}
        </h2>
        <span>{{$t('custom_text_2.description')}}</span>
      </b-col>
      <b-col lg="12" cols="12"  class="align-self-end">
        <carousel
        :loop="true"
        :dots="false"
        :nav="false"
        :responsive="{
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1200: {
            items:3
          }
        }">
          <div class="item" v-for="(item, index) in carousel_items" :key="index">
            <h1 class="title">
                {{item.title}}
            </h1>
            <h2 class="subtitle">
                {{item.sub_title}}
            </h2>
             <span class="clear_line"></span>
            <p>
                {{item.description}}
            </p>
          </div>
        </carousel>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>

import carousel from 'vue-owl-carousel'

export default {
  data () {
    return {
      header: {
        title: 'Ihr Onlineshop für Kugellager, Lineartechnik & Keilriemen',
        description: 'Nutzen Sie die Vorteile'
      },
      carousel_items: [
        {
          title: 'VERSAND',
          sub_title: 'BIS 19 UHR',
          description: 'MO-FR: 10:00 - 19 UHR'
        },
        {
          title: 'GARANTIERTE',
          sub_title: 'QUALITÄT',
          description: 'NUR PREMIUMMARKEN'
        },
        {
          title: 'KOSTENFREIER',
          sub_title: 'ZUSCHNITT',
          description: 'NACH IHREN VORGABEN'
        }
      ]
    }
  },
  components: { carousel }
}

</script>
<style scoped lang="scss">
  .custom_text_2 {
    background: url('../../assets/img/custom_text2_background.jpg') no-repeat top center #12407D;
    padding: 0px;
    border-radius: 8px;
    margin-bottom: 80px;
    min-height: 600px;
    @media screen and (max-width: 576px) {
      min-height: auto;
      padding-top: 30px;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      // min-height: 600px;
      .header-title {
        padding-top: 80px;
        padding-bottom: 80px;
        line-height: 80px;
        text-align: center;
        color: #FFFFFF;
        font-size: 26px;
        font-weight: 300;
        h2 {
          line-height: 40px;
        }
        span {
          line-height: 60px;
        }
      }
    }
    .item {
      color: #FFFFFF;
      margin-bottom: 50px;
      .clear_line {
        border-bottom: 2px solid #19B4E5;
        margin: 10px auto;
        display: block;
        float: none;
        width: 60%;
        margin-bottom: 15px;
      }
    }
  }
</style>
