<template>
  <div class="filter-container">
    Фільтри:
    <v-text-field v-model="filterData.name" label="ПІБ"></v-text-field>
    Стаж:
    <v-text-field v-model="filterData.minNum" label="Від"></v-text-field>
    <v-text-field v-model="filterData.maxNum" label="До"></v-text-field>
    <v-btn @click="onReset">Скинути фільтр</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DriversFilter',

  data() {
    return {
      filterData: {},
    }
  },

  methods: {
    ...mapActions('drivers', ['setFilter']),

    onReset() {
      this.filterData = {}
    },
  },

  watch: {
    filterData: {
      handler(newFilterData) {
        this.setFilter(newFilterData)
      },
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
</style>
