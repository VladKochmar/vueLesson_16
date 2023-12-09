import { createStore } from 'vuex'

import busses from './modules/busses'
import drivers from './modules/drivers'
import assignments from './modules/assignments'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { busses, drivers, assignments },
})
