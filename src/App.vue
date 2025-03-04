<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationView from './views/NavigationView.vue'
</script>

<template>
  <div class="css-flex-container">
    <asside class="css-flex-container__navigation">
      <NavigationView />
    </asside>

    <div class="css-flex-container__content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.css-flex-container {
  display: flex;
  padding: 1rem 3rem;
  gap: 1rem;
  color: var(--color-text);
  &__navigation {
    min-width: 300px;
  }
  &__content {
    flex: 1;
  }
}
</style>
