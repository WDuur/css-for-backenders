<script setup lang="ts">
import { onMounted } from 'vue'
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'

import { useChapterNavigation } from '@/composables/useChapterNavigation'
const {} = useChapterNavigation('variables', '')

const { scrollTo } = useAnchorNavigation([
  'title', // title do not remove
  'Ping Pong',
  'Card',
  'Kaartenhuis',
  'Maze',
])
onMounted(() => {
  scrollTo('title')
})
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">CSS animaties</h1>

    <BaseElementBlock title="Ping Pong" :linkPens="['https://codepen.io/amit_sheen/pen/PobQjMX']">
      <template #description>
        <img src="/images/tennis.png" />
      </template>
    </BaseElementBlock>

    <BaseElementBlock title="Card" :linkPens="['https://codepen.io/ivorjetski/pen/ExaKmjw']">
      <template #description>
        <img class="portret" src="/images/kaart.png" />
      </template>
    </BaseElementBlock>

    <BaseElementBlock title="Kaartenhuis" :linkPens="['https://codepen.io/amit_sheen/pen/QWGjRKR']">
      <template #description>
        <img src="/images/kaarthuis.png" />
      </template>
    </BaseElementBlock>

    <BaseElementBlock title="Maze" :linkPens="['https://codepen.io/ivorjetski/pen/poQpveN']">
      <template #description>
        <img src="/images/maze.png" />
      </template>
    </BaseElementBlock>
  </div>
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
