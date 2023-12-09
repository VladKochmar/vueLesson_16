import { getModuleTemplate } from '../helpers/moduleTemplate'
import { isMatchFilter } from '../helpers/filters'

import DbOperations from '../helpers/DbOperations'
const collectionDB = new DbOperations('drivers')

const drivers = getModuleTemplate('drivers')

drivers.state.filter = {}

drivers.getters.filteredDriversList = (state) => state.drivers.filter((driver) => isMatchFilter(driver, state.filter))

drivers.getters.selectDriversList = (state, getters, rootState, rootGetters) =>
  !rootGetters['assignments/assignments'].length
    ? state.drivers
    : state.drivers.filter(
        (driver) => !rootGetters['assignments/assignments'].some((assignment) => assignment.driverId === driver.id)
      )

drivers.mutations.setFilter = (state, filterData) => (state.filter = filterData)

drivers.actions.setFilter = ({ commit }, filterData) => commit('setFilter', filterData)

drivers.actions.removeItem = ({ commit, dispatch }, itemId) => {
  commit('setError', null)
  commit('setLoading', true)

  collectionDB
    .deleteItem(itemId)
    .then(() => {
      commit('removeItem', itemId)
      dispatch('assignments/removeAssignmentByDriverId', itemId, { root: true })
    })
    .catch((error) => {
      commit('setError', error)
    })
    .finally(() => {
      commit('setLoading', false)
    })
}

export default drivers
