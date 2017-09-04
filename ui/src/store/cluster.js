import Cluster from '@/api/cluster'


const state = {
  clusters: {}
}

const actions = {
  initClusters({commit}) {
    Cluster.all().then((clusters) => commit('set_clusters', clusters))
  }
}

const mutations = {
  set_clusters(state, clusters) {
    state.clusters = clusters
  }
}

const getters = {
  allClusters() {
    return state.clusters
  },
  orderedClusters() {
    return state.clusters
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
