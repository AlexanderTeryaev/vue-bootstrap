<template>
  <div class="tabs product-description">
    <b-tabs content-class="">
      <b-tab :title="$t('products.description')" v-html="description.text" active>
        <!-- <p>
          Symbol of lightness and delicacy, the hummingbird evokes curiosity and joy. Studio Design' PolyFaune collection features classic products with colorful patterns, inspired by the traditional japanese origamis. To wear with a chino or jeans. The sublimation textile printing process provides an exceptional color rendering and a color, guaranteed overtime.
        </p> -->
      </b-tab>
      <b-tab :title="$t('products.details')">
        <div class="product-brand">
          <label class="label">Brand
            <router-link :to="$i18nRoute({ name: 'brand', params: {id_brand: description.manufacturer.id}})">
              {{description.manufacturer.name}}
            </router-link>
          </label>
        </div>
        <div class="product-reference">
          <label class="label">Reference <span itemprop="sku">{{description.reference}}</span></label>
        </div>
        <div class="product-quantities">
          <label class="label">In stock <span data-stock="" data-allow-oosp="0">{{description.in_stock}} Items</span></label>
        </div>
        <div class="product-available">
          <label class="label">Availability date: <span>{{description.available_date}}</span></label>
        </div>
        <div class="product-out-of-stock"></div>
      </b-tab>
      <b-tab :title="$t('products.specialist')">
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
export default {
  props: {
    description: Object
  }
}
</script>>
<style lang="scss">
.product-description {
  margin-top: 2rem;
  padding: 0;
  box-shadow: none;
  overflow-wrap: break-word;
  color: #7a7a7a;
  a{
    color:  #2fb5d2;;
  }
  a.nav-link.active {
    background: #113D79;
    color: #fff;
    outline: none;
    border-bottom: 3px solid #113D79;
    border-radius: 6px;
  }
  .nav-link:not(.active):hover {
    border-bottom: 3px solid #2fb5d2;
  }
  .tab-content {
    box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2);
    padding: 1.25rem 1.875rem;
    text-align: left;
    .tab-pane {
      p{
        font-size: .9375rem;
        font-weight: 400;
      }
      label {
        color: #232323;
        font-weight: 700;
        span {
          font-weight: 400;
        }
      }
    }
  }
}
</style>
