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
      <li>
        <a href="#" @click.prevent="scrollTo('Flexibele eenheden')">Flexibele eenheden </a>
      </li>
      <li>
        <a href="#" @click.prevent="scrollTo('Welke eenheid')">Welke eenheden</a>
      </li>
    </ul>
    <RouterLink to="/variables">CSS variabelen</RouterLink>
    <ul>
      <li><a href="#padding" @click.prevent="scrollTo('Tailwind')">Tailwind</a></li>
    </ul>
    <RouterLink to="/preprocessors">CSS preprocessors</RouterLink>
    <ul>
      <li><a href="#padding" @click.prevent="scrollTo('SCSS')">SCSS</a></li>
      <li><a href="#padding" @click.prevent="scrollTo('LESS')">LESS</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 400px;
  left: -300px;
  padding-left: 20px;
  transition: left 1s ease-in-out;
  color: var(--color-text);
  font-size: clamp(0.8rem, 5vw, 1.6rem);
  li {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 1rem;
    font-size: clamp(0.8rem, 5vw, 1rem);
    opacity: 0.6;
  }
  &:hover {
    left: 0;
  }
}
</style>
