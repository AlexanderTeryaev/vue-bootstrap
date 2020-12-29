<template>
    <div class="custom-slider text-center">
      <span> {{name}} </span>
      <VueSlider v-model="value" @change="changePrice(value)" @drag-end="dragend(value, id)" :enable-cross="false" tooltip="none">
      </VueSlider>
      <span class="weight-range"> {{displayRange()}} </span>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
export default {
  components: {
    VueSlider
  },
  props: {
    id: Number,
    name: String,
    min: Number,
    max: Number,
    dragend: Function,
    unit: String
  },
  data () {
    return {
      currentMin: 0,
      currentMax: 100,
      value: [0, 100],
      realMin: this.min,
      realMax: this.max
    }
  },
  methods: {
    changePrice (value) {
      if (this.currentMin !== value[0]) {
        this.realMin = Math.round((this.max - this.min) / 100 * value[0])
      }
      if (this.currentMax !== value[1]) {
        this.realMax = Math.round((this.max - this.min) / 100 * value[1])
      }
      this.currentMin = value[0]
      this.currentMax = value[1]
    },
    displayRange () {
      return this.realMin + this.unit + ' - ' + this.realMax + this.unit
    }
  }
}
</script>

<style scoped lang="scss">
.custom-slider {
    margin:15px 10px;
}
</style>
