<template>
  <b-container class="advisor mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title">{{$t('account.personal_advisor')}}</h1>
        <ProductAdvisor />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AccountNav from '@/components/common/AccountNav'
import ProductAdvisor from '../home/ProductAdvisor'
export default {
  components: {
    AccountNav,
    ProductAdvisor
  }
}
</script>

<style scoped lang="scss">

</style>
