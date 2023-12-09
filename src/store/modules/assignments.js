import { getModuleTemplate } from '../helpers/moduleTemplate'

// import DbOperations from '../helpers/DbOperations'
// const collectionDB = new DbOperations('assignments')

const assignments = getModuleTemplate('assignments')

assignments.getters.filledAssignmentsList = (state, getters, rootState, rootGetters) =>
  state.assignments.map((assignment) => ({
    id: assignment.id,
    driverName: rootGetters['drivers/getItemById'](assignment.driverId)?.name,
    busLicensePlate: rootGetters['busses/getItemById'](assignment.busId)?.licensePlate,
  }))

assignments.actions.removeAssignmentByBusId = ({ dispatch, state }, busId) => {
  const assignmentId = state.assignments.find((assignment) => assignment.busId === busId)?.id
  dispatch('removeItem', assignmentId)
}

assignments.actions.removeAssignmentByDriverId = ({ dispatch, state }, driverId) => {
  const assignmentId = state.assignments.find((assignment) => assignment.driverId === driverId)?.id
  dispatch('removeItem', assignmentId)
}

export default assignments
