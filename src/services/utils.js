import axios from 'axios'
import { apiBaseUrl, appToken } from '@/config/settings'

export const requestOptions = {
  method: 'GET',
  headers: {
    Authorization: 'Basic ' + appToken,
    'Output-Format': 'JSON'
  }
}

export function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout()
        location.reload(true)
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}

export const xapi = () => {
  const headers = {
    'X-Requested-With': 'XMLHttpRequest',
    Accept: 'application/json',
    charset: 'UTF-8',
    Authorization: 'Basic ' + appToken,
    'Output-Format': 'JSON'
  }

  const xapi = axios.create({
    baseURL: apiBaseUrl,
    headers: headers
  })

  // Check expired token
  xapi.interceptors.response.use(undefined, function (err) {
    // if (err.response && err.response.status === 401) {
    //   store.dispatch(logout())
    // }

    if (typeof err.response === 'undefined') {
      throw err
    }

    if (err.response && err.response.status !== 200) {
      throw err.response
    }
  })

  return xapi
}

export const wrapRequest = func => {
  return async (...args) => {
    const res = await func(...args)
    if (
      res &&
      res.status &&
      res.status !== 200 &&
      res.status !== 201 &&
      res.status !== 204
    ) {
      throw res
    } else {
      return res.data
    }
  }
}
