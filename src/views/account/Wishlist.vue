<template>
  <b-container class="wishlist mt-5">
    <b-row>
      <b-col md="3" sm="12">
        <AccountNav />
      </b-col>
      <b-col class="account-right" md="9" sm="12">
        <h1 class="header-title">{{$t('account.my_wishlist')}}</h1>
        <div v-for="(item, index) in items" :key="index" class="wishlist align-items-center" :class="{removed:(removedItems.includes(index))}">
          <b-row >
            <b-col md="3">
              <a href="#">
                <img class="img-fluid" src="https://ekugellager.roccshow.com/2-cart_default/hummingbird-printed-t-shirt.jpg" alt="Hummingbird printed t-shirt">
              </a>
            </b-col>
            <b-col md="4">
              <a href="https://ekugellager.roccshow.com/en/men/1-1-hummingbird-printed-t-shirt.html#/1-size-s/8-color-white">Hummingbird printed t-shirt</a>
              <div class="text-muted">
                  Size: S
                  Color: White
              </div>
            </b-col>
            <b-col md="3">
              <span class="product-price">€22.75</span>
            </b-col>
            <b-col md="2">
              <a href="#" @click="removeItem(index, $event)" class="js-iqitwishlist-remove">
                <b-icon icon="backspace"></b-icon>
              </a>
            </b-col>
          </b-row>
          <hr>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AccountNav from '@/components/common/AccountNav'
export default {
  components: {
    AccountNav
  },
  data () {
    return {
      items:
      [
        1, 2, 3, 4
      ],
      removedItems: []
    }
  },
  methods: {
    removeItem (index, $e) {
      $e.preventDefault()
      this.removedItems.push(index)
    }
  }
}
</script>

<style scoped lang="scss">
.account-right {

  .wishlist>div{
    // margin: auto;
  }
}
</style>
