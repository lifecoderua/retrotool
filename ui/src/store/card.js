// TODO: API - to move out
function getCardsApi() {
  return new Promise(function(resolve, reject) {
    resolve([
      { title: 'Card one' },
      { title: 'Card two' },
      { title: 'Card 3ree' },
    ])
  })
}


const state = {
  cards: [],
  lastCheckout: null
}

const actions = {
  init({commit}) {
    getCardsApi().then((cards) => commit('set_cards', cards))
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
