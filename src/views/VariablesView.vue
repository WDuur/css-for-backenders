<script setup lang="ts">
import { onMounted } from 'vue'
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import { useChapterNavigation } from '@/composables/useChapterNavigation'
const {} = useChapterNavigation('units', 'preprocessors')

const { scrollTo } = useAnchorNavigation([
  'title', // title do not remove
  'Tailwind',
])
onMounted(() => {
  scrollTo('title')
})
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">CSS variabelen: maak je css dynamisch en makelijker</h1>

    <!----- Tailwind -->
    <BaseElementBlock
      title="Tailwind"
      subtitle="een utility-first CSS-framework voor snelle en flexibele styling."
    >
    </BaseElementBlock>
  </div>
</template>
