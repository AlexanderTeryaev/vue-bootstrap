<template>
  <section class="product-features">
    <h6>{{manufacturer}}</h6>
    <b-table :items="items" class="data-sheet no-header">
    </b-table>
  </section>
</template>
<script>
export default {
  props: {
    items: Array,
    manufacturer: String
  },
  data () {
    return {

    }
  }
}
</script>>
<style lang="scss" >
.product-features {
  box-shadow: 2px 2px 8px 0 rgba(0,0,0,.2);
  border-radius: 4px;
  margin-top: 0;
  margin-left: 0;
  // margin-right: 20px;
  text-align: left;
  h6 {
    background: rgb(240, 240, 240);
    padding: 15px;
    color: rgba(129,129,129,1);
  }
  .no-header {
    thead {
      display: none;
    }
  }
  tr:nth-child(1) {
    font-weight: bold;
  }
  td:nth-child(3), td:nth-child(4) {
    display: none;
  }
}
</style>
