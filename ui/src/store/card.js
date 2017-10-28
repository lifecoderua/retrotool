import Card from '@/api/card'


const state = {
  cards: []
}

const actions = {
  initCards({commit}) {
    Card.all().then((cards) => commit('set_cards', cards))
  },
  moveCard({commit}, {cardId, targetClusterId}) {
    // TODO: For better interaction consider instant commit, then revert if rejected
    Card.move(cardId, targetClusterId).then(() => commit('move_card', {cardId, targetClusterId}))
  }
}

const mutations = {
  set_cards(state, cards) {
    state.cards = cards
  },
  move_card(state, {cardId, targetClusterId}) {
    state.cards[cardId].clusterId = targetClusterId
  }
}

const getters = {
  allCards() {
    return state.cards
  },
  clusteredCardIds() {
    /* TODO: move to store? */
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
