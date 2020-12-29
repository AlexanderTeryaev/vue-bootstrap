<template>
    <section class="facet clearfix eku-facet">
        <div class="title" v-b-toggle="collapseid">
        <span class="title-text">{{title}}</span>
        <b-icon icon="chevron-down"></b-icon>
        </div>
        <b-collapse :id="collapseid" :class="isline ? 'collapse-content top-line' : 'collapse-content'">
            <b-form-checkbox-group v-model="selected" @input="updatevalues(selected, id)">
                <div class="sub-item" v-for="(item, index) in detail" :key="index">
                    <a href="#" class="sub-item-text"><span>{{ iscount ? item.name + '(' + item.nbr + ')' : item.name}}</span></a>
                    <b-form-checkbox :value="item.valueKey"></b-form-checkbox>
                </div>
            </b-form-checkbox-group>
        </b-collapse>
    </section>
</template>

<script>
export default {
  props: {
    id: Number,
    collapseid: String,
    title: String,
    nameKey: String,
    detail: Array,
    updatevalues: Function,
    isline: Boolean,
    iscount: Boolean
  },
  data () {
    return {
      selected: [],
      queryParams: this.$route.query.q,
      activeFilters: []
    }
  },
  mounted () {
    if (this.queryParams) {
      this.getActiveFilters()
    }
  },
  methods: {
    getActiveFilters () {
      this.activeFilters = []
      const queryParamsArray = this.queryParams.split('/')
      queryParamsArray.forEach(query => {
        const queryArray = query.split('-')
        const nameKey = queryArray[0]
        if (nameKey === this.nameKey) {
          queryArray.splice(0, 1)
          queryArray.forEach(e => {
            this.selected.push(e)
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.eku-facet {
    border: 1px solid #F0F0F0;
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 8px 0px !important;
    -webkit-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
    min-width: 150px;
    .title {
        display: block;
        height: 25px;
        padding: 0 18px;
        .title-text {
            float: left;
        }
        svg {
            font-size: 20px;
            float: right;
        }
    }
    .title:focus {
        outline: none;
    }
    .collapse-content.top-line {
        border-top: 1px solid;
    }
    .collapse-content {
        margin-top: 8px;
        padding-left: 15px;
        .sub-item {
            display: block;
            margin: 3px 0;
            height: 25px;
            .sub-item-text {
                color: white;
                cursor: pointer;
                float: left;
                font-size: 14px;
            }
            .custom-checkbox {
                float: right;
            }
        }
    }
}
</style>
