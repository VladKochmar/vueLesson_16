<template>
  <div>
    <v-table>
      <thead>
        <tr>
          <th v-for="title in titles" :key="title" class="text-left">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <assignment-item v-for="itemData in list" :key="itemData.id" :item-data="itemData" />
      </tbody>
    </v-table>
  </div>
</template>

<script>
import AssignmentItem from './AssignmentItem.vue'

export default {
  name: 'AssignmentsList',

  components: {
    AssignmentItem,
  },

  props: {
    list: {
      type: Array,
      default: () => [],
    },
    titles: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
