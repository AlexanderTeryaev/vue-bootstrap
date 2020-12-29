import VueI18n from 'vue-i18n'
import Vue from 'vue'
import { DEFAULT_LANGUAGE } from '@/constants/trans'
import en from '@/lang/translations/en.json'

Vue.use(VueI18n)
export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages: { en }
})
