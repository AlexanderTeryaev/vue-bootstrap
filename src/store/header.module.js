import { HeaderServices } from '@/services/index'

const state = {
  topnavbar: null,
  topmenu: null
}

const mutations = {
  set_toptopnavbar (state, data) {
    state.topnavbar = data
  },
  set_menu (state, data) {
    state.topmenu = data
  }
}

const actions = {
  get_topnavbar ({ commit }, langId) {
    return new Promise((resolve, reject) => {
      HeaderServices.getTopIcons(langId).then(resp => {
        commit('set_toptopnavbar', resp.topnavbar)
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  },
  get_menu ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      HeaderServices.getMenu(payload).then(resp => {
        commit('set_menu', resp.header.menu.allcategories)
        resolve(resp)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

const getters = {
  topmenu: state => state.topmenu
}

export default {
  state,
  actions,
  mutations,
  getters
}
