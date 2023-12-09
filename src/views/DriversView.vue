<template>
  <main-master-page>
    <h1>Наші водії:</h1>
    <drivers-filter />
    <drivers-list :list="filteredDriversList" :titles="['ПІБ', 'Стаж']" />
    <router-link :to="{ name: 'driver-editor' }">Додати водія</router-link>
  </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import DriversList from '@/components/DriversList'

import { mapGetters, mapActions } from 'vuex'
import DriversFilter from '@/components/DriversFilter.vue'

export default {
  name: 'DriversView',

  components: {
    MainMasterPage,
    DriversList,
    DriversFilter,
  },

  computed: {
    ...mapGetters('drivers', ['filteredDriversList']),
  },

  methods: {
    ...mapActions('drivers', ['setItemsList']),
  },

  created() {
    this.setItemsList()
  },
}
</script>

<style lang="scss" scoped></style>
