import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import card from './card'
import cluster from './cluster'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    card,
    cluster,
  }
})

export default store
