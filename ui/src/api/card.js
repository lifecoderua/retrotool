export default {
  all() {
    return new Promise(function(resolve, reject) {
      resolve([
        { title: 'Card uno', clusterId: 1 },
        { title: 'Card two', clusterId: 1 },
        { title: 'Card 3ree', clusterId: 1 },
      ])
    })
  }
}
