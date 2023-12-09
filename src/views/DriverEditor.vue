<template>
  <editor-master-page>
    <div class="editor">
      <v-text-field v-model="driver.name" label="ПІБ" variant="solo"></v-text-field>
      <v-text-field v-model="driver.exp" label="Стаж" variant="solo"></v-text-field>
      <v-btn :disabled="!isFilled" @click="onAction">{{ actionButtonTitle }}</v-btn>
      <router-link :to="{ name: 'drivers' }" class="button">Скасувати</router-link>
    </div>
  </editor-master-page>
</template>

<script>
import EditorMasterPage from '@/masterpages/EditorMasterPage.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DriverEditor',

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
      driver: {},
    }
  },

  computed: {
    ...mapGetters('drivers', ['getItemById']),

    actionButtonTitle() {
      return this.id ? 'Оновити' : 'Створити'
    },

    isFilled() {
      return this.driver.name && this.driver.exp
    },
  },

  methods: {
    ...mapActions('drivers', ['addItem', 'updateItem']),

    onAction() {
      if (this.id) this.updateItem({ itemId: this.id, data: this.driver })
      else this.addItem(this.driver)

      this.$router.push({ name: 'drivers' })
    },
  },

  created() {
    if (this.id) this.driver = { ...this.getItemById(this.id) }
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
