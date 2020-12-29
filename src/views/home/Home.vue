<template>
  <div class="home">
    <ParallaxWindow />
    <b-container>
      <b-row>
        <b-col cols="12" lg="8" class="product-advisor">
          <ProductAdvisor />
        </b-col>
      </b-row>
    </b-container>
    <LastOrder />
    <CustomText1 />
    <CustomText2 />
    <Manufacturer />
    <Contact />
  </div>
</template>

<script>
import ParallaxWindow from './parallax/ParallaxWindow'
import ProductAdvisor from './ProductAdvisor'
import LastOrder from './LastOrder'
import CustomText1 from './CustomText1'
import CustomText2 from './CustomText2'
import Manufacturer from './Manufacturer'
import Contact from './Contact'
export default {
  name: 'home',
  components: {
    ParallaxWindow,
    ProductAdvisor,
    LastOrder,
    CustomText1,
    CustomText2,
    Manufacturer,
    Contact
  }
}
</script>
<style lang="scss" scoped>
.product-advisor {
  margin-top: -110px;
  margin-left: auto;
  margin-right: auto;
}
</style>>
