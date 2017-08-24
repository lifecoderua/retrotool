export default {
  currentUser() {
    return new Promise(function(resolve, reject) {
      resolve({
        name: '',
        email: '',
        team: null
      })
    })
  }
}
