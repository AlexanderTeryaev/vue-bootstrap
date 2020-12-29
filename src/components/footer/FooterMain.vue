<template>
  <!-- Footer -->
  <div>
    <NewsLetter />
    <mdb-footer color="mdb-color" class="font-small lighten-3 pt-4 mt-4">
      <mdb-container class="text-md-left footer-container">
        <mdb-row class="my-4">
          <mdb-col xl="2" lg="4" sm="6" class="d-none d-md-block">
            <img class="logo img-responsive" src="../../assets/img/logo.jpg"/>
            <h5 class="font-weight-bold">{{ $t('footer.contact.self') }}</h5>
            <p>+49 (0)234 5450120</p>
            <a href="mailto:" class="email-contact">info@ekugellager.de</a>
          </mdb-col>
          <mdb-col xl="2" lg="4" sm="6" class="d-block d-md-none mx-5 mx-sm-auto">
            <img class="img-responsive" src="../../assets/img/logo.jpg"/>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <template v-for="(link, i) in links">
            <mdb-col xl="2" lg="4" sm="6" class="mx-5 mx-sm-auto" v-if="links && links.length > i" :key="'col'+i">
              <h5 class="text-uppercase mb-4 font-weight-bold text-left" v-b-toggle="'footer'+(isMobile?i:'')">
                {{ link.title }}
                <span v-if="isMobile" class="float-right">
                  <b-icon icon="chevron-down" class="collapsed-icon"></b-icon>
                  <b-icon icon="chevron-up" class="opened-icon"></b-icon>
                </span>
              </h5>
              <b-collapse :visible="!isMobile" :id="'footer'+i">
              <ul class="list-unstyled" v-for="(item, index) in link.links" :key="'list'+index">
                <p><a :href="item.url_path">{{ item.title }}</a></p>
              </ul>
              </b-collapse>
            </mdb-col>
            <hr class="clearfix w-100 d-md-none" :key="'border'+i"/>
          </template>
          <mdb-col xl="2" lg="4" sm="6" class="mx-5 mx-sm-auto">
            <h5 class="text-uppercase mb-4 font-weight-bold text-left" v-b-toggle="isMobile?'footer_ship':'none'">
              {{ $t('footer.shippment_payment.self') }}
              <span v-if="isMobile" class="float-right">
                <b-icon icon="chevron-down" class="collapsed-icon"></b-icon>
                <b-icon icon="chevron-up" class="opened-icon"></b-icon>
              </span>
            </h5>
            <b-collapse :visible="!isMobile" id="footer_ship">
              <div class="mt-2 ">
                <ul class="list-unstyled shipping">
                  <p><img src="../../assets/img/visa.png"></p>
                  <p><img src="../../assets/img/mastercard.png"></p>
                  <p><img src="../../assets/img/paypal.png"></p>
                  <p><img src="../../assets/img/sepa.png"></p>
                  <p><img src="../../assets/img/invoice_alternate.png"></p>
                </ul>
              </div>
            </b-collapse>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <mdb-col xl="2" lg="4" sm="6" class="mx-5 mx-sm-auto d-block d-md-none">
            <mdb-row>
              <mdb-col class="text-left col-4 my-auto">
                <img class="mb-img-responsive" src="../../assets/img/earphone.png">
              </mdb-col>
              <mdb-col class="text-center col-8">
                <a href="mailto:" class="mb-email p-1 my-1">info@ekugellager.de</a>
                <p class="mb-phone p-1 my-1">+49 (0)234 5450120</p>
                <p class="small mb-0">Mo-Fr: 10:00 - 17:00 UHR</p>
              </mdb-col>
            </mdb-row>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="footer-copyright text-center py-3">
        <mdb-container fluid>
            All Rights Reserved &copy; 2020
        </mdb-container>
      </div>
    </mdb-footer>
  <!-- Footer -->
  </div>
</template>
<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue'
import NewsLetter from './NewsLetter'
import { FooterServices } from '@/services/index'
import { Trans } from '@/lang/Translation'
export default {
  name: 'Footer',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
    NewsLetter
  },
  data () {
    return {
      links: [],
      isMobile: false
    }
  },
  created () {
    window.addEventListener('resize', this.changeScreen)
  },
  destroyed () {
    window.removeEventListener('resize', this.changeScreen)
  },
  methods: {
    changeScreen (e) {
      if (window.innerWidth < 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    }
  },
  mounted () {
    setTimeout(() => {
      const params = {
        shopId: 1,
        langId: Trans.getLangId(Trans.currentLanguage)
      }
      FooterServices.getFooterContent(params).then(resp => {
        this.links = resp.footer.links
      })
    }, 200)
    this.changeScreen()
  }
}
</script>

<style scoped>
.logo {
    max-width: 180px;
    margin-bottom: 21px;
}
.img-responsive {
  width: 100%;
}
h5:focus {
  outline: none;
}
.footer-container a {
    font-family: 'Lato';
    color: #333;
    font-weight: 500;
    font-size: 14px;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
}
.footer-container ul.shipping p {
    margin-left: 5px;
    margin-right: 5px;
    text-align: left;
    width: 50px;
    height: 30px;
    margin-bottom: 10px;
}
.footer-container ul.shipping {
    display: flex;
    flex-wrap: wrap;
}
a.mb-email {
  display: block;
  border-radius: 10px;
  color: white;
  background: #676767;
}
p.mb-phone {
  border-radius: 10px;
  color: white;
  background: #12407E;
}
.mb-img-responsive {
  width: 80%;
}
</style>
