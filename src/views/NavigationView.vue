<script lang="ts" setup>
const scrollTo = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<template>
  <nav class="css-navigation">
    <RouterLink to="/layout">Layouts</RouterLink>
    <ul>
      <li><a href="#padding" @click.prevent="scrollTo('padding')">Padding</a></li>
      <li><a href="#margin" @click.prevent="scrollTo('margin')">Margin</a></li>
      <li><a href="#flex" @click.prevent="scrollTo('flex')">Flexbox </a></li>
      <li><a href="#flex" @click.prevent="scrollTo('grid')">Grid </a></li>
    </ul>
    <RouterLink to="/units">CSS units</RouterLink>
    <ul>
      <li><a href="#padding" @click.prevent="scrollTo('px')">px</a></li>
      <li><a href="#margin" @click.prevent="scrollTo('em')">em</a></li>
      <li><a href="#flex" @click.prevent="scrollTo('rem')">rem </a></li>
      <li><a href="#flex" @click.prevent="scrollTo('vh')">vh </a></li>
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
