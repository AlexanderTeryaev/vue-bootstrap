import { UserServices } from '@/services/index'

const state = {
  update_address: 0,
  addresses: []
}

const mutations = {
  update_address (state, data) {
    state.update_address = data
  },
  get_addresses (state, data) {
    state.addresses = data
  }
}

const actions = {
  get_addresses ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      UserServices.getAddresses(payload).then(res => {
        commit('get_addresses', res.addresses)
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  new_edit_address ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      UserServices.newEditAddress(payload.form, payload.user, payload.addressId).then(res => {
        if (res.errors === null || res.errors.length === 0) {
          if (res.address.id_address === 'undefined') {
            commit('update_address', 1) // new address
          } else {
            commit('update_address', 2) // edit address
          }
        }
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  delete_address ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      UserServices.deleteAddress(payload.user, payload.addressId).then(res => {
        commit('update_address', 3) // delete address
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  update_address_alert ({ commit }, payload) {
    commit('update_address', 0)
  }
}

export default {
  state,
  actions,
  mutations
}
