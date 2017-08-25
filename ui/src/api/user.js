export default {
  /**
   * return jwt(email, name, expires)
   */
  auth(user) {
    let tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)

    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve({
          name: user.name,
          email: user.email,
          team: null,
          expires: tomorrow,
        })
      }, 1500)
    })
  },

  currentUser() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve({
          name: '',
          email: '',
          team: null
        })
      })
    })
  }
}
