<template>
  <div class="header-order">
    <b-container fluid>
      <b-row class="top_section">
          <b-col md="3" sm="12" class="top-logo mt-2">
            <router-link :to="$i18nRoute({ name: 'home'})">
              <img class="logo img-responsive" src="../../assets/img/logo.jpg"/>
            </router-link>
          </b-col>
          <b-col md="6" sm="12">
          </b-col>
          <b-col md="3" sm="12" class="d-none d-md-block">
            <TheLanguageSwitcher />
          </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TheLanguageSwitcher from '@/components/common/TheLanguageSwitcher'
export default {
  components: {
    TheLanguageSwitcher
  }
}
</script>

<style scoped lang="scss">
.header-order {
  height: 75px;
  background: #F0F0F0;
  padding-top: 4px;
  display: flex;
  flex-wrap: wrap;
  -webkit-box-align: center!important;
  -ms-flex-align: center!important;
  align-items: center!important;
  z-index: 2;
  .container-fluid {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .top_section {
    -webkit-box-pack: justify!important;
    -ms-flex-pack: justify!important;
    justify-content: space-between!important;
    display: flex;
    width: 100%;
    margin: auto;
    img {
      max-width: 220px;
    }
  }
}
@media screen and (max-width: 768px) {
  .header-order .top_section .top-logo {
    box-shadow: 0px 0px 3px 0px #0004!important;
    border-bottom: 1px solid #e7e7e7;
    padding: 10px;
  }
}
</style>
