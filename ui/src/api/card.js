export default {
  all() {
    return new Promise(function(resolve, reject) {
      resolve([
        { title: '0: Card 0', clusterId: 0 },

        { title: '1: Card one', clusterId: 1 },
        { title: '1: Card two', clusterId: 1 },
        { title: '1: Card three', clusterId: 1 },

        { title: '2: Card xx', clusterId: 2 },
        { title: '2: Card yy', clusterId: 2 },
      ])
    })
  }
}
