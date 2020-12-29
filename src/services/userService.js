import { apiBaseUrl, appToken } from '@/config/settings'
import { handleResponse } from './utils'

const requestOptions = {
  method: 'POST',
  headers: {
    Authorization: 'Basic ' + appToken,
    'Output-Format': 'JSON'
  }
}
const getRequestOptions = {
  method: 'GET',
  headers: {
    Authorization: 'Basic ' + appToken,
    'Output-Format': 'JSON'
  }
}
export function login (payload) {
  const formData = new FormData()
  formData.append('email', payload.email)
  formData.append('password', payload.password)
  requestOptions.body = formData
  return fetch(`${apiBaseUrl}/rmapi/rest/accounts/login`, requestOptions).then(handleResponse)
}
export function getUserRank (id) {
  return fetch(`${apiBaseUrl}/roccomediacustomerrank?id_customer=${id}`, getRequestOptions).then(handleResponse)
}
export function register (payload) {
  const formData = new FormData()
  let key
  for (key in payload) {
    formData.append(key, payload[key])
  }
  requestOptions.body = formData
  return fetch(`${apiBaseUrl}/roccomediaapi/register`, requestOptions).then(handleResponse)
}
export function forgotPassword (email) {
  var formData = new FormData()
  formData.append('email', email)
  requestOptions.body = formData
  return fetch(`${apiBaseUrl}/roccomediaapi/forgotpassword`, requestOptions).then(handleResponse)
}
export function logout (payload) {
  const logoutRequestOptions = {
    method: 'DELETE',
    headers: {
      Authorization: 'Basic ' + appToken,
      'Output-Format': 'JSON'
    }
  }
  return fetch(`${apiBaseUrl}/rmapi/rest/accounts/${payload.id_customer}/logout`, logoutRequestOptions).then(handleResponse)
}
export function getAddresses (id) {
  return fetch(`${apiBaseUrl}/roccomediaapi/getaddresses?id_customer=${id}`, getRequestOptions).then(handleResponse)
}
export function newEditAddress (payload, user, addressId) {
  var formData = new FormData()
  formData.append('id_customer', user.id)
  formData.append('alias', payload.alias)
  formData.append('firstname', payload.first_name)
  formData.append('lastname', payload.last_name)
  formData.append('company', payload.company)
  formData.append('vat_number', payload.vat_number)
  formData.append('address1', payload.address)
  formData.append('address2', payload.address_code)
  formData.append('postcode', payload.zip_postal_code)
  formData.append('city', payload.city)
  formData.append('id_country', 1)
  formData.append('phone', payload.phone)
  formData.append('id_address', addressId)
  requestOptions.body = formData
  if (addressId === undefined) {
    return fetch(`${apiBaseUrl}/roccomediaapi/addaddress`, requestOptions).then(handleResponse)
  } else {
    return fetch(`${apiBaseUrl}/roccomediaapi/editaddress`, requestOptions).then(handleResponse)
  }
}
export function deleteAddress (user, addressId) {
  var formData = new FormData()
  formData.append('id_customer', user.id)
  formData.append('id_address', addressId)
  requestOptions.body = formData
  return fetch(`${apiBaseUrl}/roccomediaapi/deleteaddress`, requestOptions).then(handleResponse)
}
