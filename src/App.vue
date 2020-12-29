<template>
  <div id="app">
    <div v-if="this.$route.meta.layout === undefined">
      <Header />
      <b-container fluid>
        <SideContact />
        <router-view/>
      </b-container>
      <FooterMain />
    </div>
    <div v-if="this.$route.meta && this.$route.meta.layout === false">
      <b-container fluid>
        <router-view/>
      </b-container>
    </div>
    <div v-if="this.$route.meta && this.$route.meta.layout === 'order'">
      <HeaderOrder />
      <b-container fluid>
        <router-view/>
      </b-container>
      <FooterMain />
    </div>
    <go-top
      :boundary="0"
      :right="10"
      :bottom="10"
      bg-color='#12407E'
      :max-width="320"
      :has-outline="false"
    ></go-top>
    <notifications group="notification-1" classes="notification-1" />
  </div>
</template>

<script>
import Header from '@/components/header/Header'
import HeaderOrder from '@/components/header/HeaderOrder'
import FooterMain from '@/components/footer/FooterMain'
import SideContact from '@/components/common/SideContact'
import GoTop from '@inotom/vue-go-top'
export default {
  name: 'app',
  components: {
    Header,
    HeaderOrder,
    FooterMain,
    SideContact,
    GoTop
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
