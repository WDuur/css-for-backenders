<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import { useChapterNavigation } from '@/composables/useChapterNavigation'

const chapterRoute = ['architectuur', 'animaties']
const anchorRoute = ['title', 'Debuggen', 'end']
const { setRoute } = useChapterNavigation()
const { scrollTo, handleClick } = useAnchorNavigation(anchorRoute)

onMounted(() => {
  setRoute(chapterRoute)
  scrollTo('title')
})
</script>
<template>
  <IndicatorLabel title="Debuggen" />
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">Oeiii.... CSS debuggen</h1>

    <!----- SCSS -->
    <BaseElementBlock title="Debuggen" subtitle=""> </BaseElementBlock>
  </div>
  <BaseElementButton @click="handleClick" />
</template>
