import User from '@/api/user'

const state = {
  cards: [],
  lastCheckout: null
}

const actions = {
  auth({commit}, user) {
    console.log('AUTH:', user)
  },
  currentUser({commit}) {
    User.currentUser().then((user) => commit('set_current_user', user))
  }
}

const mutations = {
  set_current_user(state, user) {
    state.user = user
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
