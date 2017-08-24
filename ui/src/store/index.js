import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import card from './card'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    card
  }
})

export default store
