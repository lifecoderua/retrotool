import Stubs from '@/stubs'

export default Resource

/**
 * Resource wrapper for basic CRUD operations
 *
 * @param {string} type Entity type: clusters, cards, participants, etc
 */
function Resource(type) {
  return {
    init,
    create,
    update,
    remove,
  }

  function init() {
    console.log(Stubs, type)
    return Stubs[type].reduce((obj, item) => {
      obj[item.id] = item
      return obj
    }, {})
  }

  function create() {

  }

  function update() {

  }

  function remove() {

  }
}
