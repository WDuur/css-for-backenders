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
  flex-direction: column;
  flex-direction: column-reverse;
  padding: 1rem 3rem;
  gap: 1rem;
  color: var(--color-text);

  &__content {
    flex: 1;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    &__navigation {
      min-width: 300px;
    }
  }
}
</style>
