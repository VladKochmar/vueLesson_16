<template>
  <div>
    <h2>Нове призначення</h2>
    <v-select
      v-model="assignment.driverId"
      label="Шофер"
      :items="driversList"
      item-title="title"
      item-value="id"
    ></v-select>
    <v-select
      v-model="assignment.busId"
      label="Автобус"
      :items="bussesList"
      item-title="title"
      item-value="id"
    ></v-select>
    <v-btn :disabled="!isFilled" @click="onAdd">Додати</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AssignmentCreator',

  data() {
    return {
      assignment: {},
    }
  },

  computed: {
    ...mapGetters('drivers', ['selectDriversList']),
    ...mapGetters('busses', ['selectBussesList']),

    driversList() {
      return this.selectDriversList.map((driver) => ({ id: driver.id, title: `${driver.name} - ${driver.exp}` }))
    },

    bussesList() {
      return this.selectBussesList.map((bus) => ({ id: bus.id, title: `${bus.licensePlate} - ${bus.seats}` }))
    },

    isFilled() {
      return this.assignment.driverId && this.assignment.busId
    },
  },

  methods: {
    ...mapActions('assignments', ['addItem']),

    onAdd() {
      this.addItem(this.assignment)
      this.assignment = {}
    },
  },
}
</script>

<style lang="scss" scoped></style>
