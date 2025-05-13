<script setup lang="ts">
import { onMounted } from 'vue'
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import Important from '@/chapters/important/importantImportant.vue'
import { useChapterNavigation } from '@/composables/useChapterNavigation'

const { scrollTo } = useAnchorNavigation([
  'title', // title do not remove
  'important',
  'end',
])
onMounted(() => {
  scrollTo('title')
})
const {} = useChapterNavigation('', 'layout')
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <!----- Important -->
    <BaseElementBlock title="Important">
      <template #description><Important /></template>
    </BaseElementBlock>
  </div>
</template>
