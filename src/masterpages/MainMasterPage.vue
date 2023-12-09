<template>
  <div class="container">
    <nav>
      <router-link :to="{ name: 'home' }">Головна</router-link> |
      <router-link :to="{ name: 'drivers' }">Водії</router-link> |
      <router-link :to="{ name: 'busses' }">Автобуси</router-link> |
      <router-link :to="{ name: 'assignments' }">Призначення</router-link> |
      <router-link :to="{ name: 'contacts' }">Контакти</router-link>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MainMasterPage',
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: 2.5rem 0;
  max-width: 76.875rem;
  padding: 0 1.875rem;
}
</style>
