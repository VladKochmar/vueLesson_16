import { getModuleTemplate } from '../helpers/moduleTemplate'

import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('busses')

const busses = getModuleTemplate('busses')

busses.getters.selectBussesList = (state, getters, rootState, rootGetters) =>
  !rootGetters['assignments/assignments']
    ? state.busses
    : state.busses.filter(
        (bus) => !rootGetters['assignments/assignments'].some((assignment) => assignment.busId === bus.id)
      )

busses.actions.removeItem = ({ commit, dispatch }, itemId) => {
  commit('setError', null)
  commit('setLoading', true)

  collectionDB
    .deleteItem(itemId)
    .then(() => {
      commit('removeItem', itemId)
      dispatch('assignments/removeAssignmentByBusId', itemId, { root: true })
    })
    .catch((error) => {
      commit('setError', error)
    })
    .finally(() => {
      commit('setLoading', false)
    })
}

export default busses
