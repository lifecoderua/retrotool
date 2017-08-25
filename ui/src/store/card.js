import Card from '@/api/card'


const state = {
  cards: []
}

const actions = {
  init({commit}) {
    Card.all().then((cards) => commit('set_cards', cards))
  }
}

const mutations = {
  set_cards(state, cards) {
    state.cards = cards
  }
}

const getters = {
  allCards() {
    return state.cards
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
