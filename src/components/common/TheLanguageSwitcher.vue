<template>
  <div class="LanguageSwitcher">
    <div class="mr-1 flag-group">
      <span v-for="lang in supportedLanguages"
      :key="lang.value"
      :class="{ 'is-selected': isCurrentLanguage(lang.value) }"
      :flag="lang.value"
      >
      </span>
    </div>
    <select
      name="language"
      @change="changeLanguage"
    >
      <option
        v-for="lang in supportedLanguages"
        :key="lang.value"
        :selected="isCurrentLanguage(lang.value, lang.flag)"
        :class="{ 'is-selected': isCurrentLanguage(lang.value) }"
        :value="lang.value"
      >
        {{lang.text}}
      </option>
    </select>
  </div>
</template>
<script>
import { Trans } from '@/lang/Translation'

export default {
  mounted () {
  },
  computed: {
    supportedLanguages () {
      return Trans.supportedLanguagesObject
    },
    currentLanguage () {
      return Trans.currentLanguage
    }
  },
  methods: {
    changeLanguage (e) {
      const lang = e.target.value
      const to = this.$router.resolve({ params: { lang } })
      return Trans.changeLanguage(lang).then(() => {
        this.$router.push(to.location)
        this.$router.go()
      })
    },
    isCurrentLanguage (lang, flag) {
      return lang === this.currentLanguage
    }
  }
}
</script>

<style scoped lang="scss">
.LanguageSwitcher {
  display: flex;
  margin: 7px;
  .flag-group span {
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: none;
  }

  .flag-group span[flag=en] {
    background-image: url(../../assets/img/uk.png);
  }

  .flag-group span[flag=de] {
    background-image: url(../../assets/img/german.png);
  }

  .flag-group span.is-selected {
    display: block;
  }

  select {
    outline: none;
    background: transparent;
    border: none;
  }
}
</style>
