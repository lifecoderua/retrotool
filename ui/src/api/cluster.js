export default {
  all() {
    return new Promise(function(resolve, reject) {
      resolve({
        0: { title: 'What went well', order: 0 },
        1: { title: 'What went wrong', order: 1 },
        2: { title: 'Info', order: 2 },
      })
    })
  }
}
