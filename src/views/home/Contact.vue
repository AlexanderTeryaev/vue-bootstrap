<template>
  <b-row class="rocc-contact-section">
    <b-col lg="3" sm="6" cols="12" class="contact-box">
      <b-row class="justify-content-center">
        <b-col lg="3" cols="3" class="contact-icon">
          <b-icon icon="truck"></b-icon>
        </b-col>
        <b-col lg="7" cols="8" class="contact-text">
          <h3 class="title">{{ $t('contact.free_shipping.self') }}</h3>
          <span class="clear_line"></span>
          <p>{{ $t('contact.free_shipping.detail') }}</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="3" sm="6" cols="12" class="contact-box">
      <b-row class="justify-content-center">
        <b-col lg="3" cols="3" class="contact-icon">
          <vue-fontawesome icon="rocket"></vue-fontawesome>
        </b-col>
        <b-col lg="7" cols="8" class="contact-text">
          <h3 class="title">{{ $t('contact.sameday_shipping.self') }}</h3>
          <span class="clear_line"></span>
          <p>{{ $t('contact.sameday_shipping.detail') }}</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="3" sm="6" cols="12" class="contact-box">
      <b-row class="justify-content-center">
        <b-col lg="3" cols="3" class="contact-icon">
          <b-icon icon="telephone"></b-icon>
        </b-col>
        <b-col lg="7" cols="8" class="contact-text">
          <h3 class="title">{{ $t('contact.customer_service.self') }}</h3>
          <span class="clear_line"></span>
          <p>{{ $t('contact.customer_service.detail') }}</p>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="3" sm="6" cols="12" class="contact-box">
      <b-row class="justify-content-center">
        <b-col lg="3" cols="3" class="contact-icon">
          <img src="../../assets/img/saw_icon.svg" class="contact-saw" style="">
        </b-col>
        <b-col lg="7" cols="8" class="contact-text">
          <h3 class="title">{{ $t('contact.free_cutting.self') }}</h3>
          <span class="clear_line"></span>
          <p>{{ $t('contact.free_cutting.detail') }}</p>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<style scoped lang="scss">
.rocc-contact-section {
    background: transparent radial-gradient(closest-side at 50% 50%, #12407E 0%, #09203F 100%) 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 60px 0px;
    margin-bottom: 80px;
    margin-top: 20px;
    padding-bottom: 50px;
  .contact-box {
    border-right: solid #f1f1f1 1px;
    height: 90px;
    .contact-icon {
      color: #fff;
      text-align: center;
      padding: 0em;
      padding-top: 5px;
      font-size: 47px;
      img {
        width: 67px;
      }
    }
  }
  .contact-box:last-child {
    border-right: none;
  }
  .contact-text {
    text-align: center;
    padding: 0em;
    .title {
      font-weight: 400;
      font-family: 'Lato';
      color: #fff;
      font-size: 16px;
      text-transform: uppercase;
    }
    .clear_line {
      border-bottom: 1px solid #19B4E5;
      margin: 10px auto;
      display: block;
      float: none;
      width: 60%;
      margin-bottom: 10px;
    }
    p {
      color: #fff;
      font-weight: 300;
      font-family: 'Lato';
      text-align: center;
      font-size: 14px;
      letter-spacing: 1px;
    }
  }
}
</style>
