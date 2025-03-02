<script lang="ts" setup></script>
<template>
  <nav class="css-navigation">
    <RouterLink to="/">Layouts</RouterLink>
    <ul>
      <li><RouterLink to="/box-model">Box model</RouterLink></li>
      <li><RouterLink to="/margin">Margin</RouterLink></li>
      <li><RouterLink to="/flex">Flex</RouterLink></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  color: var(--color-text);
  font-size: clamp(0.8rem, 5vw, 1.2rem);
  .css-navigation {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
