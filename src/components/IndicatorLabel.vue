<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="header-indicator">
    <div class="header-indicator__label">
      {{ title }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-indicator {
  background-image: linear-gradient(to right, var(--vt-c-orange), rgba(255, 165, 0, 0));
  position: fixed;
  top: 0;
  left: 0;
  width: 30%;

  &__label {
    display: flex;
    font-size: 1.9rem;
    font-weight: bold;
    padding-left: 2rem;
    color: var(--vt-c-black-soft);
  }
}
</style>
