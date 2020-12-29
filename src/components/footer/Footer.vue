<template>
  <!-- Footer -->
  <div>
    <mdb-footer color="mdb-color" class="font-small lighten-3 pt-4 mt-4">
      <mdb-container class="text-center text-md-left footer-container">
        <mdb-row class="my-4">
          <mdb-col lg="3" xl="2">
            <img class="logo img-responsive" src="../../assets/img/logo.jpg"/>
            <h5 class="font-weight-bold">{{ $t('footer.contact.self') }}</h5>
            <p>+49 (0)234 5450120</p>
            <a href="mailto:" class="email-contact">info@ekugellager.de</a>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <mdb-col lg="3" xl="2" class="ml-auto">
            <h5 class="text-uppercase mb-4 font-weight-bold">{{ $t('footer.products.self') }}</h5>
            <ul class="list-unstyled">
              <p><a href="#!">{{ $t('footer.products.about_us') }}</a></p>
              <p><a href="#!">{{ $t('footer.products.shipping_process') }}</a></p>
              <p><a href="#!">{{ $t('footer.products.quality_promise') }}</a></p>
            </ul>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <mdb-col lg="3" xl="2">
            <h5 class="text-uppercase mb-4 font-weight-bold">{{ $t('footer.information.self') }}</h5>
            <p><a href="#!">{{ $t('footer.information.discount_levels') }}</a></p>
            <p><a href="#!"> {{ $t('footer.information.quality_levels') }}</a></p>
            <p><a href="#!">{{ $t('footer.information.graduated_prices') }}</a></p>
            <p><a href="#!">{{ $t('footer.information.personal_statement') }}</a></p>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <mdb-col lg="3" xl="2">
            <h5 class="text-uppercase mb-4 font-weight-bold">{{ $t('footer.legal.self') }}</h5>
            <p><a href="#!">{{ $t('footer.legal.about_us') }}</a></p>
            <p><a href="#!">{{ $t('footer.legal.delivery_information') }}</a></p>
            <p><a href="#!">{{ $t('footer.legal.returns') }}</a></p>
            <p><a href="#!">{{ $t('footer.legal.privacy_policy') }}</a></p>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <mdb-col lg="3" xl="2">
            <h5 class="text-uppercase mb-4 font-weight-bold">{{ $t('footer.customer_service.self') }}</h5>
            <p><a href="#!">{{ $t('footer.customer_service.return') }}</a></p>
            <p><a href="#!"> {{ $t('footer.customer_service.faq') }}</a></p>
            <p><a href="#!">{{ $t('footer.customer_service.size_charts') }}</a></p>
            <p><a href="#!">{{ $t('footer.customer_service.cookie_preferences') }}</a></p>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
          <mdb-col lg="3" xl="2" class="text-center">
            <h5 class="text-uppercase mb-4 font-weight-bold">{{ $t('footer.shippment_payment.self') }}</h5>
            <div class="mt-2 ">
              <ul class="list-unstyled shipping">
                <p><img src="../../assets/img/visa.png"></p>
                <p><img src="../../assets/img/mastercard.png"></p>
                <p><img src="../../assets/img/paypal.png"></p>
                <p><img src="../../assets/img/sepa.png"></p>
                <p><img src="../../assets/img/invoice_alternate.png"></p>
              </ul>
            </div>
          </mdb-col>
          <hr class="clearfix w-100 d-md-none"/>
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
export default {
  name: 'Footer',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>

<style scoped>
footer {
  box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2);
}
.logo {
    max-width: 180px;
    margin-bottom: 21px;
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
</style>
