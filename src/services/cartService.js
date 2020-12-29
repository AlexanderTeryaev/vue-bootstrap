import { apiBaseUrl, appToken } from '@/config/settings'
import { handleResponse } from './utils'
import store from '../store'
const requestOptions = {
  headers: {
    Authorization: 'Basic ' + appToken
  }
}
function cartId () {
  return store.getters.cart ? store.getters.cart.entity_id : 0
}
export function getCartDetails (params) {
  var options = requestOptions
  options.method = 'GET'
  options.body = null
  return fetch(`${apiBaseUrl}/rmapi/rest/carts/${cartId()}?id_lang=${params.id_lang}&id_shop=${params.id_shop}`, options).then(handleResponse)
}
export function addToCart (params) {
  var options = requestOptions
  options.method = 'POST'
  options.body = JSON.stringify(params)
  return fetch(`${apiBaseUrl}/rmapi/rest/carts/${cartId()}`, options).then(handleResponse)
}
export function updateInCart (params) {
  var options = requestOptions
  options.method = 'PUT'
  options.body = JSON.stringify(params)
  return fetch(`${apiBaseUrl}/rmapi/rest/carts/${cartId()}/items`, options).then(handleResponse)
}
export function removeFromCart (params) {
  var options = requestOptions
  options.method = 'DELETE'
  options.body = null
  return fetch(`${apiBaseUrl}/rmapi/rest/carts/${cartId()}/items/${params.ps_item_id}`, options).then(handleResponse)
}
export function applyCouponCode (params) {
  requestOptions.method = 'POST'
  requestOptions.body = JSON.stringify(params)
  return fetch(`${apiBaseUrl}/rmapi/rest/carts/${cartId()}/coupon`, requestOptions).then(handleResponse)
}
