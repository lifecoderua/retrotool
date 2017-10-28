import Resource from './resource'

const resource = Resource('cards')

export default {
  all() {
    return new Promise(function(resolve, reject) {
      resolve(resource.init())
    })
  },
  move(cardId, targetClusterId) {
    return new Promise(function(resolve, reject) {
      resolve()
      // setTimeout(() => resolve(), 1500)
    })
  }
}
