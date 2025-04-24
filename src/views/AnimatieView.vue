<script setup lang="ts">
import { onMounted } from 'vue'
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'

import { useChapterNavigation } from '@/composables/useChapterNavigation'
const {} = useChapterNavigation('variables', '')

const { scrollTo } = useAnchorNavigation([
  'title', // title do not remove
  'Animatie',
])
onMounted(() => {
  scrollTo('title')
})
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">CSS animaties</h1>

    <BaseElementBlock
      title="Ping Pong"
      :linkPens="[
        'https://codepen.io/amit_sheen/pen/PobQjMX',
      ]"
    >
    </BaseElementBlock>

    <BaseElementBlock
      title="Card"
      :linkPens="[
        'https://codepen.io/ivorjetski/pen/ExaKmjw',
      ]"
    />

    <BaseElementBlock
      title="Kaartenhuis"
      :linkPens="[
        'https://codepen.io/amit_sheen/pen/QWGjRKR',
      ]"
    />

    <BaseElementBlock
      title="Maze"
      :linkPens="[
        'https://codepen.io/ivorjetski/pen/poQpveN',
      ]"
    >
    </BaseElementBlock>
  </div>
</template>
