<template>
  <div class="container">
    <nav>
      <router-link :to="{ name: 'home' }">На головну</router-link>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EditorMasterPage',
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
