<template>
<div :class="data">
  <b-container class="menu">
    <div class="menu-content">
      <b-collapse id="collapse-menu" class="navbar-collapse">
        <b-list-group v-if="category">
          <b-list-group-item>
            <router-link :to="$i18nRoute({ name: 'category', params: { id_category: category.id } })" v-b-toggle.collapse-menu>{{ category.name }}</router-link>
          </b-list-group-item>
          <b-list-group-item data-depth="0" v-for="(subCat, index) in category.children" :key="index">
            <router-link :to="$i18nRoute({ name: 'category', params: { id_category: subCat.id } })" v-b-toggle.collapse-menu>{{ subCat.name }}</router-link>
            <span v-b-toggle="'collapse-menu-sub-' + index" class="sub-menu-bar" v-if="subCat && subCat.children && subCat.children.length > 0">
              <b-icon icon="plus" class="collapsed-icon"></b-icon>
              <b-icon icon="dash" class="opened-icon"></b-icon>
            </span>
            <b-collapse :id="'collapse-menu-sub-' + index" class="mt-1 collapse-menu-sub">
              <b-list-group v-for="(subSubCat, subIndex) in subCat.children" :key="subIndex">
                <b-list-group-item>
                  <router-link :to="$i18nRoute({ name: 'category', params: { id_category: subSubCat.id } })" v-b-toggle.collapse-menu>{{ subSubCat.name }}</router-link>
                  <span v-b-toggle="'collapse-menu-sub-sub-' + subIndex" class="sub-sub-menu-bar" v-if="subSubCat && subSubCat.children && subSubCat.children.length > 0">
                    <b-icon icon="chevron-right" class="collapsed-icon"></b-icon>
                    <b-icon icon="chevron-down" class="opened-icon"></b-icon>
                  </span>
                  <b-collapse :id="'collapse-menu-sub-sub-' + subIndex" class="mt-1">
                    <b-list-group v-for="(subSubSubCat, subSubIndex) in subSubCat.children" :key="subSubIndex">
                      <b-list-group-item>
                        <router-link :to="$i18nRoute({ name: 'category', params: { id_category: subSubSubCat.id } })" v-b-toggle.collapse-menu>{{ subSubSubCat.name }}</router-link>
                      </b-list-group-item>
                    </b-list-group>
                  </b-collapse>
                </b-list-group-item>
              </b-list-group>
            </b-collapse>
          </b-list-group-item>
        </b-list-group>
      </b-collapse>
    </div>
  </b-container>
</div>
</template>

<script>
import { Trans } from '@/lang/Translation'
import { shopId } from '@/config/settings'
export default {
  props: {
    data: String
  },
  data () {
    return {
      category: null
    }
  },
  mounted () {
    setTimeout(() => {
      const params = {
        shopId: shopId,
        langId: Trans.getLangId(Trans.currentLanguage)
      }
      this.$store.dispatch('get_menu', params).then(resp => {
        this.category = this.$store.getters.topmenu
      })
    }, 200)
  }
}
</script>

<style scoped lang="scss">
.menu {
  text-align: left;
  .menu-content {
    background: #f0f0f0;
    width: 100%;
    box-shadow: 0px 3px 30px #00000029;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    .collapse-menu-sub {
      .list-group {
        max-width: 310px;
      }
    }
    .sub-menu-bar {
      outline: none;
      svg {
        outline: none;
        font-size: 30px;
        transform: translateX(-30px);
      }
    }
    .sub-sub-menu-bar {
      outline: none;
      float: right;
      svg {
        font-size: 25px;
      }
    }
    .sub-sub-menu-bar-1 {
      outline: none;
      float: right;
      svg {
        font-size: 25px;
      }
    }
    .list-group-item {
      text-align: left;
      background-color: #f0f0f0;
      border: none;
      z-index: 1000;
      a {
        color: #323232;
        font-family: 'Lato';
        font-weight: 300;
        font-size: 18px;
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        text-decoration: none;
      }
      a:hover {
        color: #0056b3 !important;
        font-weight: 400 !important;
      }
    }
  }
}
.menu-content .list-group-item[data-depth="0"]>a {
  border-bottom: 1px solid rgba(0,0,0,.25);
  min-width: 300px;
  display: inline-block;
  margin: .3125rem 0 0;
  padding-bottom: .5875rem;
}
@media screen and (max-width: 768px) {
  .menu-content .list-group-item[data-depth="0"]>a {
    min-width: 100px !important;
    width: 85% !important;
  }
  .menu-content .list-group-item[data-depth="0"] .sub-sub-menu-bar svg,
  .menu-content .list-group-item[data-depth="0"] .sub-sub-menu-bar-1 svg {
    margin-left: 0px !important;
    float: right;
    margin-right: 50px;
  }
  .menu.container {
    padding-right: 0px !important;
    padding-left: 0px !important;
  }
  .collapse-menu-sub .list-group {
    max-width: 767px !important;
  }
}
</style>
