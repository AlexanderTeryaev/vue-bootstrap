<template>
<b-container fluid class="block_newsletter">
    <b-container>
      <b-row>
        <b-col md="12" lg="12" sm="12" >
          <b-row class="justify-content-between">
            <b-col md="4" cols="12">
              <h1>{{ $t('footer.newsletter.title') }}</h1>
              <p>{{ $t('footer.newsletter.text1') }}</p>
            </b-col>
            <b-col md="4" cols="12">
              <label class="form-check-label checkbox-field psgdpr_consent_message" style="display:none;">
                <span class="custom-checkbox-form">
                    <input id="psgdpr_consent_checkbox_17" name="psgdpr_consent_checkbox" type="checkbox" value="1">
                    <span></span>
                </span>
                <span class="check-box-label">{{ $t('footer.newsletter.text2') }}</span>
              </label>
            </b-col>
            <b-col md="4" cols="12">
              <form action="#" method="post">
                <b-row>
                  <b-col sm="12">
                    <b-button variant="primary" class="float-right d-none d-sm-block" type="submit">{{ $t('footer.newsletter.subscribe') }}</b-button>
                    <b-button variant="primary" class="float-right d-block d-sm-none" type="submit">{{ $t('footer.newsletter.sign_up') }}</b-button>
                    <div class="input-wrapper">
                      <b-form-input type="email" :placeholder="$t('footer.newsletter.email_placeholder')" aria-labelledby="block-newsletter-label"></b-form-input>
                    </div>
                    <div class="clearfix"></div>
                  </b-col>
                </b-row>
              </form>
            </b-col>
          </b-row>

        </b-col>
        <b-col lg="4" md="12" sm="12" class="block-social"></b-col>
      </b-row>
    </b-container>
</b-container>
</template>
<style scoped lang="scss">
.block_newsletter {
  padding-top:2.5rem;
  background-color: #EDEDED;
  h1 {
    font-size: 30px;
    color: #000000;
    font-weight: 700;
    font-family: 'Lato';
    line-height: 30px;
  }
  p {
    padding-top: .625rem;
    font-family: 'Lato';
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: #363636
  }
  .form-check-label {
    padding-left: 1.25rem;
    margin-bottom: 0;
    font-size: .875rem;
    cursor: pointer;
  }
  .btn-primary {
    background-color: #113D79;
    border-radius: 8px;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: 70px;
    font-family: Lato;
    font-weight: 300;
    font-size: 16px;
    text-transform: capitalize;
    letter-spacing: 1px;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
  }
  form .input-wrapper {
    overflow: hidden;
  }

  form input[type=email] {
    background: #fff;
    border: 2px solid #fff;
    border-radius: 8px;
    height: 70px;
    color: #000 !important;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 11px;
    width: 100%;
    box-shadow: none;
  }
  form input[type=email]:focus {
      border: 1px solid #113D79;
      padding: 8px 8px 9px;
      outline: 0;
  }
  @media (min-width: 576px){
    .hidden-sm-up {
        display: none!important;
    }
  }
  @media (max-width: 576px){
    .hidden-sm-down {
        display: none!important;
    }
  }
}
</style>
