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
    </ul>
    <RouterLink to="/units">CSS units</RouterLink>
    <ul>
      <li><a href="#" @click.prevent="scrollTo('px')">px</a></li>
      <li>
        <a href="#" @click.prevent="scrollTo('Tekstgebaseerde eenheden')"
          >Tekstgebaseerde eenheden</a
        >
      </li>
      <li>
        <a href="#" @click.prevent="scrollTo('Viewport-gebaseerde eenheden')"
          >Viewport-gebaseerde eenheden
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  color: var(--color-text);
  font-size: clamp(0.8rem, 5vw, 2.2rem);
  li {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: clamp(0.8rem, 5vw, 1.2rem);
  }
}
</style>
