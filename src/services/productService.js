import { apiBaseUrl } from '@/config/settings'
import { requestOptions, handleResponse, wrapRequest, xapi } from './utils'

export function getProductsList (params) {
  if (params.selected_filters) {
    return fetch(`${apiBaseUrl}/rmapi/rest/products?id_shop=${params.shopId}&id_lang=${params.langId}&id_category=${params.cateId}&page_num=${params.page}&page_size=${params.perPage}&selected_filters=${params.selected_filters}`, requestOptions).then(handleResponse)
  } else {
    return fetch(`${apiBaseUrl}/rmapi/rest/products?id_shop=${params.shopId}&id_lang=${params.langId}&id_category=${params.cateId}&page_num=${params.page}&page_size=${params.perPage}`, requestOptions).then(handleResponse)
  }
}

// export function getProductFilters () {
//   return fetch(`${apiBaseUrl}/roccomediaproductfilter?output_format=JSON&display=full`, requestOptions).then(handleResponse)
// }
export function productDetails (params) {
  return fetch(`${apiBaseUrl}/rmapi/rest/product?id_shop=${params.shopId}&id_lang=${params.langId}&id_product=${params.productId}`, requestOptions).then(handleResponse)
}
export const getProductFilters = wrapRequest(async => xapi().get('/roccomediaproductfilter?display=full'))
