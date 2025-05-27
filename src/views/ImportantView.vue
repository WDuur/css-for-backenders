<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import { useChapterNavigation } from '@/composables/useChapterNavigation'
//content
import Important from '@/chapters/important/importantImportant.vue'

const chapterRoute = ['start', 'layout']
const anchorRoute = [
  'title', // title do not remove
  'important',
  'end',
]
const { setRoute } = useChapterNavigation()
const { scrollTo, handleClick } = useAnchorNavigation(anchorRoute)

onMounted(() => {
  setRoute(chapterRoute)
  scrollTo('title')
})
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <!----- Important -->
    <BaseElementBlock title="Important">
      <template #description><Important /></template>
    </BaseElementBlock>
  </div>
  <BaseElementButton @click="handleClick" />
  <BaseElementButton position="right" @click="handleClick" />
</template>
