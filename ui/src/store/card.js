import Card from '@/api/card'


const state = {
  cards: []
}

const actions = {
  initCards({commit}) {
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
  },
  clusteredCardIds() {
    const deck = Object.keys(state.cards).reduce((acc, key) => {
      let clusterId = state.cards[key].clusterId
      if (!acc[clusterId]) { acc[clusterId] = [] }
      acc[clusterId].push(key)

      return acc
    }, {})

    return (clusterId) => deck[clusterId] ? deck[clusterId] : []
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
