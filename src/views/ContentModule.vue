<template>
  <b-container class="module-content">
    <b-row class="navbar-catlog" v-if="title">
        <b-col md="12" sm="12">
            {{title}}
        </b-col>
    </b-row>
    <b-row class="mt-5 mb-5 text-left" v-if="content">
      <div v-html="content"></div>
    </b-row>
  </b-container>
</template>

<script>
import { FooterServices } from '@/services/index'
import { loadingSpinnerConfig } from '@/config/settings'
import { Trans } from '../lang/Translation'
export default {
  data () {
    return {
      id: null,
      loader: null,
      title: null,
      content: null
    }
  },
  mounted () {
    const contentKey = this.$route.params.content_key.split('-')
    if (contentKey && contentKey.length > 1) {
      this.id = contentKey[0]
    }
    if (this.id >= 1) {
      const params = {
        shopId: 1,
        langId: Trans.getLangId(Trans.currentLanguage),
        pageId: this.id
      }
      this.loader = this.$loading.show(loadingSpinnerConfig)
      FooterServices.getContentModule(params).then(resp => {
        this.loader.hide()
        if (resp && !resp.errors) {
          this.title = resp.cms.meta_title
          this.content = resp.cms.content
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.module-content {
    margin: auto !important;
}
.navbar-catlog {
    display: block;
    background: #F9F9F9 0% 0% no-repeat padding-box;
    border-radius: 8px;
    line-height: 55px;
    height: 60px;
    margin-left: 0px;
    margin-right: 0px;
    margin: 20px 0;
    font-size: 25px;
}
</style>
