<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import { useChapterNavigation } from '@/composables/useChapterNavigation'

const chapterRoute = ['variables', 'opdracht']
const anchorRoute = ['title', 'Ping Pong', 'Card', 'Kaartenhuis', 'Maze', 'Kaart', 'end']
const { setRoute } = useChapterNavigation()
const { scrollTo, handleClick } = useAnchorNavigation(anchorRoute)

onMounted(() => {
  setRoute(chapterRoute)
  scrollTo('title')
})
</script>
<template>
  <IndicatorLabel title="CSS Animaties " />
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">CSS animaties</h1>

    <BaseElementBlock
      title="Ping Pong"
      :outside="true"
      :linkPens="['https://codepen.io/amit_sheen/pen/PobQjMX']"
    >
      <template #description>
        <img src="/images/tennis.png" />
      </template>
    </BaseElementBlock>

    <BaseElementBlock
      title="Card"
      :outside="true"
      :linkPens="['https://codepen.io/ivorjetski/pen/ExaKmjw']"
    >
      <template #description>
        <img class="portret" src="/images/kaart.png" />
      </template>
    </BaseElementBlock>

    <BaseElementBlock
      title="Kaartenhuis"
      :outside="true"
      :linkPens="['https://codepen.io/amit_sheen/pen/QWGjRKR']"
    >
      <template #description>
        <img src="/images/kaarthuis.png" />
      </template>
    </BaseElementBlock>

    <BaseElementBlock
      title="Maze"
      :outside="true"
      :linkPens="['https://codepen.io/ivorjetski/pen/poQpveN']"
    >
      <template #description>
        <img src="/images/maze.png" />
      </template>
    </BaseElementBlock>

    <BaseElementBlock
      title="Kaart"
      :outside="true"
      :linkPens="['https://codepen.io/pieter19998/pen/VYYxzgm']"
    >
      <template #description>
        <img src="/images/visitekaart.png" />
      </template>
    </BaseElementBlock>
  </div>
  <BaseElementButton @click="handleClick" />
  <BaseElementButton position="right" @click="handleClick" />
</template>

<style scoped lang="scss">
img {
  height: auto;
  position: relative;
  min-height: 80%;
  max-width: 50%;
  object-fit: cover;
  bottom: 4rem;
  border-radius: 1rem;
  &.portret {
    max-width: 30%;
  }
}
</style>
