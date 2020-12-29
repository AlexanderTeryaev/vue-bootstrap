<template>
  <b-container class="order-follow mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title">Merchandise returns</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AccountNav from '@/components/common/AccountNav'
export default {
  components: {
    AccountNav
  }
}
</script>

<style scoped lang="scss">

</style>
