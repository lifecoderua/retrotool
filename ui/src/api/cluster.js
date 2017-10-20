import Resource from './resource'

const resource = Resource('clusters')

export default {
  all() {
    return new Promise(function(resolve, reject) {
      resolve(resource.init())
    })
  }
}
