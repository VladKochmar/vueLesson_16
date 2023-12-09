<template>
  <tr>
    <template v-for="prop in itemData" :key="prop">
      <td v-if="prop !== itemData.id">{{ prop }}</td>
    </template>
    <td>
      <router-link :to="{ name: 'driver-editor', params: { id: itemData.id } }"
        ><font-awesome-icon :icon="['fas', 'pen-to-square']"
      /></router-link>
    </td>
    <td>
      <button @click="removeItem(itemData.id)"><font-awesome-icon :icon="['far', 'trash-can']" /></button>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DriverItem',

  props: {
    itemData: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    ...mapActions('drivers', [`removeItem`]),
  },
}
</script>

<style lang="scss" scoped></style>
