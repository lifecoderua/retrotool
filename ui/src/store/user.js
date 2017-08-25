import User from '@/api/user'

const state = {
  user: null
}

const actions = {
  auth({commit}, user) {
    return User.auth(user)
      .then((authorizedUser) => commit('set_current_user', user))
      // .catch((reason) => commit('auth_failed'))
  },
  currentUser({commit}) {
    User.currentUser().then((user) => commit('set_current_user', user))
  },
  logout({commit}) {
    commit('logout')
  }
}

const mutations = {
  set_current_user(state, user) {
    state.user = user
  },
  logout() {
    state.user = null
  }
}

const getters = {
  currentUser() {
    return state.user
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
