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
    <RouterLink to="/">Start!</RouterLink>
    <br />
    <RouterLink to="/important">Important!</RouterLink>
    <br />
    <RouterLink to="/layout">Layouts</RouterLink>
    <ul>
      <li><a href="#" @click.prevent="scrollTo('Padding')">Padding</a></li>
      <li><a href="#" @click.prevent="scrollTo('Margin')">Margin</a></li>
      <li><a href="#" @click.prevent="scrollTo('Flex')">Flex</a></li>
      <li><a href="#" @click.prevent="scrollTo('Flexbox')">Flexbox</a></li>
      <li><a href="#" @click.prevent="scrollTo('Grid')">Grid</a></li>
      <li><a href="#" @click.prevent="scrollTo('Clamp')">Clamp</a></li>
      <li><a href="#" @click.prevent="scrollTo('Calc')">Calc</a></li>
      <li><a href="#" @click.prevent="scrollTo('@media')">Media query's</a></li>
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
      <li><a href="#" @click.prevent="scrollTo('Variablen')">Variabelen</a></li>
      <li><a href="#" @click.prevent="scrollTo('SCSS variabelen')">Scss variabelen</a></li>
      <li><a href="#" @click.prevent="scrollTo('Tailwind')">Tailwind</a></li>
    </ul>
    <RouterLink to="/preprocessors">CSS preprocessors</RouterLink>
    <ul>
      <li><a href="#" @click.prevent="scrollTo('SCSS')">SCSS</a></li>
      <li><a href="#" @click.prevent="scrollTo('LESS')">LESS</a></li>
    </ul>
    <RouterLink to="/architectuur">Architectuur</RouterLink>
    <ul>
      <li><a href="#" @click.prevent="scrollTo('BEM')">BEM</a></li>
      <li><a href="#" @click.prevent="scrollTo('OOCSS')">OOCSS</a></li>
      <li><a href="#s" @click.prevent="scrollTo('SMACSS')">SMACSS</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 400px;
  left: -300px;
  padding-left: 20px;
  transition: left 0.5s ease-in-out;
  color: var(--color-text);
  font-size: clamp(0.8rem, 5vw, 1.3rem);
  ul {
    padding-left: 1rem;
    li {
      display: flex;
      flex-direction: column;
      width: fit-content;
      gap: 0.5rem;
      font-size: clamp(0.8rem, 5vw, 0.8rem);
      opacity: 0.6;
    }
  }

  &:hover {
    left: 0;
  }
}
</style>
