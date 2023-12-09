<template>
  <main-master-page>
    <div class="home">
      <h1>Вітаємо вас на сторінці автопарку</h1>
      <font-awesome-icon :icon="['fas', 'handshake']" size="2x" color="#2C3E50" />
    </div>
  </main-master-page>
</template>

<script>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'

export default {
  name: 'HomeView',

  components: {
    MainMasterPage,
  },
}
</script>

<style lang="scss" scoped>
.home {
  padding: 2.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 1.25rem;
}
</style>
