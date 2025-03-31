<script setup lang="ts">
import { onMounted } from 'vue'
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'

import { useChapterNavigation } from '@/composables/useChapterNavigation'
const {} = useChapterNavigation('variables', '')

const { scrollTo } = useAnchorNavigation([
  'title', // title do not remove
  'Debuggen',
])
onMounted(() => {
  scrollTo('title')
})
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">Oeiii.... CSS debuggen</h1>

    <!----- SCSS -->
    <BaseElementBlock title="Debuggen" subtitle=""> </BaseElementBlock>
  </div>
</template>
