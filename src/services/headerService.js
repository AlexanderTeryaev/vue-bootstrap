import { apiBaseUrl } from '@/config/settings'
import { requestOptions, handleResponse } from './utils'

export function getTopIcons (langId) {
  return fetch(`${apiBaseUrl}/rocctoppernavbar&language=${langId}`, requestOptions).then(handleResponse)
}

export function getMenu (params) {
  return fetch(`${apiBaseUrl}/rmapi/rest/header_menu?id_shop=${params.shopId}&id_lang=${params.langId}`, requestOptions).then(handleResponse)
}

export function searchProductsTerms (params) {
  return fetch(`${apiBaseUrl}/rmapi/rest/search_terms?id_shop=${params.shopId}&id_lang=${params.langId}&query=${params.query}`, requestOptions).then(handleResponse)
}

export function searchProducts (params) {
  return fetch(`${apiBaseUrl}/rmapi/rest/search?id_shop=${params.shopId}&id_lang=${params.langId}&page_num=${params.page}&page_size=${params.perPage}&query=${params.query}`, requestOptions).then(handleResponse)
}
