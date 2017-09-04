export default {
  all() {
    return new Promise(function(resolve, reject) {
      resolve({
        0: { id: 0, title: 'What went well', order: 0 },
        1: { id: 1, title: 'What went wrong', order: 1 },
        2: { id: 2, title: 'Info', order: 2 },
      })
    })
  }
}
