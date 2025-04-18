<script setup lang="ts">
import { onMounted } from 'vue'
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'

import ScssPreprocessors from '@/chapters/preprocessors/scssPreprocessors.vue'
import ScssPreprocessorsCode from '@/chapters/preprocessors/scssPreprocessorsCode.vue'
import ScssPreprocessorsQuote from '@/chapters/preprocessors/scssPreprocessorsQuote.vue'
import { useChapterNavigation } from '@/composables/useChapterNavigation'
const {} = useChapterNavigation('variables', 'architectuur')

const { scrollTo } = useAnchorNavigation([
  'title', // title do not remove
  'SCSS',
  'LESS',
])
onMounted(() => {
  scrollTo('title')
})
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">CSS preprocessors</h1>

    <!----- SCSS -->
    <BaseElementBlock
      title="SCSS"
      subtitle="een uitbreidingssyntaxis van CSS met variabelen, nesting en mixins voor gestructureerde styling."
    >
      <template #description><ScssPreprocessors /></template>
      <template #quote><ScssPreprocessorsCode /></template>
      <template #code><ScssPreprocessorsQuote /></template>
    </BaseElementBlock>

    <!----- LESS -->
    <BaseElementBlock
      title="LESS"
      subtitle="Een CSS-preprocessor met variabelen en functies voor herbruikbare en dynamische stijlen."
    >
    </BaseElementBlock>
  </div>
</template>
