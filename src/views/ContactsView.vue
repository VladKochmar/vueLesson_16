<template>
  <main-master-page>
    <div>
      <h1>Наші контакти</h1>
      <ul>
        <li>
          <a href="tel:+380999999999"><font-awesome-icon :icon="['fas', 'phone']" /> +380 99 999 99 99</a>
        </li>
        <li>
          <a href="mailto:support@gmail.com"><font-awesome-icon :icon="['fas', 'envelope']" /> support@gmail.com</a>
        </li>
      </ul>
    </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'

export default {
  name: 'ContactsView',

  components: {
    MainMasterPage,
  },
}
</script>

<style lang="scss" scoped></style>
