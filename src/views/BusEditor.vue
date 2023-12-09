<template>
  <editor-master-page>
    <div class="editor">
      <v-text-field v-model="bus.licensePlate" label="Номер" variant="solo"></v-text-field>
      <v-text-field v-model="bus.seats" label="Кількість місць" variant="solo"></v-text-field>
      <v-btn :disabled="!isFilled" @click="onAction">{{ actionButtonTitle }}</v-btn>
      <router-link :to="{ name: 'busses' }" class="button">Скасувати</router-link>
    </div>
  </editor-master-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EditorMasterPage from '@/masterpages/EditorMasterPage.vue'

export default {
  name: 'BusEditor',

  components: {
    EditorMasterPage,
  },

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      bus: {},
    }
  },

  computed: {
    ...mapGetters('busses', ['getItemById']),

    actionButtonTitle() {
      return this.id ? 'Оновити' : 'Створити'
    },

    isFilled() {
      return this.bus.licensePlate ?? this.bus.seats
    },
  },

  methods: {
    ...mapActions('busses', ['addItem', 'updateItem']),

    onAction() {
      if (this.id) this.updateItem({ itemId: this.id, data: this.bus })
      else this.addItem(this.bus)

      this.$router.push({ name: 'busses' })
    },
  },

  created() {
    if (this.id) this.bus = { ...this.getItemById(this.id) }
  },
}
</script>

<style lang="scss" scoped>
.editor {
  display: grid;
  gap: 1.25rem 0;
}
.button {
  color: #fff;
  justify-self: center;
  padding: 0.625rem 1.25rem;
  background-color: #8dc149;
  border-radius: 0.3125rem;
  text-decoration: none;
  transition: background 0.3s ease 0s;
  @media (any-hover: hover) {
    &:hover {
      background-color: #3b5d4c;
    }
  }
}
</style>
