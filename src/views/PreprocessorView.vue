<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import { useChapterNavigation } from '@/composables/useChapterNavigation'

import ScssPreprocessors from '@/chapters/preprocessors/scssPreprocessors.vue'
import ScssPreprocessorsCode from '@/chapters/preprocessors/scssPreprocessorsCode.vue'
import ScssPreprocessorsQuote from '@/chapters/preprocessors/scssPreprocessorsQuote.vue'

import ScssTipPreprocessors from '@/chapters/preprocessors/scssTipPreprocessors.vue'
import ScssTipPreprocessorsCode from '@/chapters/preprocessors/scssTipPreprocessorsCode.vue'
import LessPreprocessors from '@/chapters/preprocessors/lessPreprocessors.vue'
import postCssPreprocessors from '@/chapters/preprocessors/postCssPreprocessors.vue'
import postCssPreprocessorsCode from '@/chapters/preprocessors/postCssPreprocessorsCode.vue'

const chapterRoute = ['variables', 'architectuur']
const anchorRoute = [
  'title', // title do not remove
  'SCSS',
  'SCSS tip',
  'LESS',
  'PostCSS',
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
  <IndicatorLabel title="CSS Preprocessors" />
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
    <!----- SCSS -->
    <BaseElementBlock title="SCSS tip" subtitle="huidige selector">
      <template #description><ScssTipPreprocessors /></template>
      <template #code><ScssTipPreprocessorsCode /></template>
    </BaseElementBlock>

    <!----- LESS -->
    <BaseElementBlock
      title="LESS"
      subtitle="Een CSS-preprocessor met variabelen en functies voor herbruikbare en dynamische stijlen."
    >
      <template #description><LessPreprocessors /></template>
    </BaseElementBlock>

    <!----- postCss -->
    <BaseElementBlock
      title="PostCSS"
      subtitle="Een CSS-preprocessor met variabelen en functies voor herbruikbare en dynamische stijlen."
    >
      <template #description><postCssPreprocessors /></template>
      <template #code><postCssPreprocessorsCode /></template>
    </BaseElementBlock>
  </div>

  <BaseElementButton @click="handleClick" />
  <BaseElementButton position="right" @click="handleClick" />
</template>
