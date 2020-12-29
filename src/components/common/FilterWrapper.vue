<template>
  <div class="filter-wrapper">
    <div class="card-header">
      <span>{{$t('products.filter_by')}}</span>
    </div>
    <b-button v-if="queryParams" variant="danger" class="mb-4" block @click="clear">{{$t('products.clear')}}</b-button>
    <div v-for="(data, index) in filterdata" :key="index">
      <div v-if="data.filter_type === 'checkbox'">
        <FilterBox
          :id="index"
          :collapseid="'filterbox_collapse_' + index"
          :title="data.name"
          :nameKey="data.nameKey"
          :detail="data.values"
          :updatevalues="updatevalues"
          :isline="false"
          :iscount="true"
        />
      </div>
      <div v-if="data.filter_type === 'slider'">
        <SliderBar :id="index" :name="data.title" :min="data.min" :max="data.max" :unit="data.unit" :dragend="dragend"/>
      </div>
    </div>
  </div>
</template>

<script>
import FilterBox from '@/components/common/FilterBox'
import SliderBar from '@/components/common/SliderBar'
export default {
  props: {
    filterdata: Array,
    updatevalues: Function,
    dragend: Function
  },
  components: {
    FilterBox,
    SliderBar
  },
  data () {
    return {
      categoryId: this.$route.params.id_category,
      queryParams: this.$route.query.q
    }
  },
  methods: {
    clear () {
      this.$router.replace({ name: 'category', params: { id_category: this.categoryId } })
    }
  }
}
</script>

<style scoped lang="scss">
.filter-wrapper {
  background: linear-gradient(90deg, rgba(18,64,126,1) 0%, rgba(17,61,119,1) 68%, rgba(14,49,96,1) 100%);
  border: 1px solid #FFFFFF;
  border-radius: 8px;
  color: white;
  padding: 1.563rem .8rem;
  min-width: 180px;
  max-width: 600px;
  margin-bottom: 20px;
  .card-header {
    span {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    border-bottom: 1px solid #fff;
    margin-bottom: 25px;
  }
  .card-header::after {
    content: "";
    display: table;
    clear: both;
  }
}
</style>
