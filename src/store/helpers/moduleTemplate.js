import DbOperations from '../helpers/DbOperations'

export function getModuleTemplate(moduleName) {
  const collectionDB = new DbOperations(moduleName)

  return {
    namespaced: true,
    state: {
      [moduleName]: [],

      loading: false,
      error: null,
    },
    getters: {
      [moduleName]: (state) => state[moduleName],

      isLoading: (state) => state.loading,
      hasError: (state) => state.error,

      getItemById: (state) => (itemId) => state[moduleName].find((item) => item.id === itemId),
    },
    mutations: {
      setLoading(state, value) {
        state.loading = value
      },

      setError(state, error) {
        state.error = error
      },

      setItemsList(state, itemsList) {
        state[moduleName] = itemsList
      },

      removeItem(state, itemId) {
        state[moduleName] = state[moduleName].filter((item) => item.id !== itemId)
      },
    },
    actions: {
      setItemsList({ commit }) {
        commit('setError', null)
        commit('setLoading', true)

        collectionDB
          .loadItemsList()
          .then((list) => {
            commit('setItemsList', list)
          })
          .catch((error) => {
            commit('setError', error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      },

      updateItem({ commit, dispatch }, { itemId, data }) {
        commit('setError', null)
        commit('setLoading', true)

        collectionDB
          .updateItem(itemId, data)
          .then(() => {
            dispatch('setItemsList')
          })
          .catch((error) => {
            commit('setError', error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      },

      addItem({ commit, dispatch }, item) {
        commit('setError', null)
        commit('setLoading', true)

        collectionDB
          .addItem(item)
          .then(() => {
            dispatch('setItemsList')
          })
          .catch((error) => {
            commit('setError', error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      },

      removeItem({ commit }, itemId) {
        commit('setError', null)
        commit('setLoading', true)

        collectionDB
          .deleteItem(itemId)
          .then(() => {
            commit('removeItem', itemId)
          })
          .catch((error) => {
            commit('setError', error)
          })
          .finally(() => {
            commit('setLoading', false)
          })
      },
    },
  }
}
