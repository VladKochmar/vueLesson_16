<template>
  <main-master-page>
    <h1>Призначення</h1>
    <assignments-list :list="filledAssignmentsList" :titles="['Шофер', 'Номер автобуса']" />
    <assignment-creator />
  </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import AssignmentsList from '@/components/AssignmentsList'
import { mapGetters, mapActions } from 'vuex'
import AssignmentCreator from '@/components/AssignmentCreator.vue'

export default {
  name: 'AssignmentsView',

  components: {
    MainMasterPage,
    AssignmentsList,
    AssignmentCreator,
  },

  computed: {
    ...mapGetters('assignments', ['filledAssignmentsList']),
  },

  methods: {
    ...mapActions('drivers', { setDrivers: 'setItemsList' }),
    ...mapActions('busses', { setBusses: 'setItemsList' }),
    ...mapActions('assignments', { setAssignments: 'setItemsList' }),
  },

  async mounted() {
    await this.setDrivers()
    await this.setBusses()
    await this.setAssignments()
  },
}
</script>

<style lang="scss" scoped></style>
