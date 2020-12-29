<template>
  <b-row class="navbar-catlog d-none d-md-block">
    <b-col class="catlog-div">
        <nav class="breadcrumb">
            <ol>
                <li v-for="(item, index) in catRoute" :key="index">
                    <router-link :to="$i18nRoute({ name: 'category', params: { id_category: item.cate_id } })">
                        <span>{{ $t(item.text) }}</span>
                    </router-link>
                </li>
            </ol>
        </nav>
        <div class="row eku-product-list-top">
          <div class="col-md-6">
          {{total}} products.
          </div>
          <div class="col-md-6">
            <div class="row sort-by-row">
              <div class="col-sm-12 products-sort-order">
                <b-dropdown id="dropdown-1" text="Relevace" class="m-md-2">
                  <b-dropdown-item>Relevance</b-dropdown-item>
                  <b-dropdown-item>Name, A to Z</b-dropdown-item>
                  <b-dropdown-item>Nane, Z to A</b-dropdown-item>
                  <b-dropdown-item>Price, lot to high</b-dropdown-item>
                  <b-dropdown-item>Price, high to low</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
    </b-col>
  </b-row>
</template>

<script>
import { Trans } from '@/lang/Translation'
import { shopId } from '@/config/settings'
export default {
  props: {
    categoryId: Number,
    total: Number
  },
  data () {
    return {
      menu: [],
      catRoute: [],
      index: -1
    }
  },
  mounted () {
    const params = {
      shopId: shopId,
      langId: Trans.getLangId(Trans.currentLanguage)
    }
    this.$store.dispatch('get_menu', params).then(resp => {
      this.searchTree(this.$store.getters.topmenu, this.categoryId, 0)
      let parent = this.menu.filter(e => e.cate_id === this.catRoute[0].parent_id)
      while (parent && parent.length > 0) {
        this.catRoute.push(parent[0])
        parent = this.menu.filter(e => e.cate_id === this.catRoute[this.catRoute.length - 1].parent_id)
      }
      this.catRoute = this.catRoute.reverse()
    })
  },
  methods: {
    searchTree (element, cateId, parentId) {
      this.menu.push({
        text: element.name,
        cate_id: parseInt(element.id),
        parent_id: parseInt(parentId)
      })
      if (parseInt(element.id) === parseInt(cateId)) {
        this.catRoute.push({
          text: element.name,
          cate_id: parseInt(element.id),
          parent_id: parseInt(parentId)
        })
      } else if (element.children && element.children.length > 0) {
        element.children.forEach((child) => {
          this.searchTree(child, cateId, element.id)
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.navbar-catlog {
    display: block;
    background: #F9F9F9 0% 0% no-repeat padding-box;
    border-radius: 8px;
    line-height: 55px;
    margin-left: 0px;
    margin-right: 0px;
    margin: 20px 0;
    position: relative;
    .catlog-div {
        // overflow-x: auto;
        .breadcrumb {
          background: transparent;
          padding: 0;
          margin-bottom: 0rem;
          list-style: none;
          border-radius: 0;
          ol {
              padding-left: 0;
              margin-bottom: 0;
              li {
                  display: inline;
                  a {
                      color: #232323;
                      font-size: 14px;
                      text-decoration: none;
                      -webkit-transition: all .5s ease;
                      transition: all .5s ease;
                      font-weight: 600;
                  }
              }
              li:after {
                  content: "/";
                  color: #7a7a7a;
                  margin: .3125rem;
              }
              li:last-child:after {
                  content: "";
              }
          }
      }
      .eku-product-list-top {
          position: absolute;
          min-width: 400px;
          top: 0;
          right: 10px;
          color: #232323;
          font-size: 14px;
          text-decoration: none;
          -webkit-transition: all .5s ease;
          transition: all .5s ease;
          font-weight: 600;
          .sort-by-row {
            .products-sort-order::before {
              width: 1px;
              background-color: #818181;
              display: block;
              height: 30px;
              content: "";
              position: absolute;
              left: 0px;
              opacity: 0.5;
              top: 15px;
            }
          }
      }
    }
}
</style>
