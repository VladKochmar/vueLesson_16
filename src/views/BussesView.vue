<template>
  <main-master-page>
    <h1>Наші автобуси</h1>
    <busses-list :list="busses" :titles="['Номер', 'Кількість місць']" />
    <router-link :to="{ name: 'bus-editor' }">Додати автобус</router-link>
  </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import BussesList from '@/components/BussesList'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'BussesView',

  components: { MainMasterPage, BussesList },

  computed: {
    ...mapGetters('busses', ['busses']),
  },

  methods: {
    ...mapActions('busses', ['setItemsList']),
  },

  created() {
    this.setItemsList()
  },
}
</script>

<style lang="scss" scoped></style>
