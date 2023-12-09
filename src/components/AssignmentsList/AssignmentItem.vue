<template>
  <tr>
    <template v-for="prop in itemData" :key="prop">
      <td v-if="prop !== itemData.id">{{ prop }}</td>
    </template>
    <td>
      <button @click="removeItem(itemData.id)"><font-awesome-icon :icon="['far', 'trash-can']" /></button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AssignmentItem',

  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions('assignments', ['removeItem']),
  },
}
</script>

<style lang="scss" scoped></style>
