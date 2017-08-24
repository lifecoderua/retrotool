export default {
  all() {
    return new Promise(function(resolve, reject) {
      resolve([
        { title: 'Card uno' },
        { title: 'Card two' },
        { title: 'Card 3ree' },
      ])
    })
  }
}
