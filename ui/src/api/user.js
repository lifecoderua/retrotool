export default {
  /**
   * return jwt(email, name, expires)
   */
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
