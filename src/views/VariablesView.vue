<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import { useChapterNavigation } from '@/composables/useChapterNavigation'
// content
import CustomVariables from '@/chapters/variables/customVariables.vue'
import CustomVariablesCode from '@/chapters/variables/customVariablesCode.vue'
import ScssVariablesCode from '@/chapters/variables/scssVariablesCode.vue'
import tailwindVariables from '@/chapters/variables/tailwindVariables.vue'
import tailwindProsVariables from '@/chapters/variables/tailwindProsVariables.vue'
import PurgeCss from '@/chapters/variables/purgeCss.vue'
import PurgeCssCode from '@/chapters/variables/purgeCssCode.vue'

const chapterRoute = ['units', 'preprocessors']
const anchorRoute = [
  'title',
  'Variablen',
  'SCSS variabelen',
  'Tailwind',
  'Waarom Tailwind',
  'purgeCSS',
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
  <IndicatorLabel title="CSS Variabelen" />
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">CSS variabelen: maak je css dynamisch en makelijker</h1>

    <!----- custom variabelen -->
    <BaseElementBlock title="Variablen" subtitle="ook wel CSS Custom Properties genoemd.">
      <template #description><CustomVariables /></template>
      <template #code><CustomVariablesCode /></template>
    </BaseElementBlock>

    <!----- custom variabelen -->
    <BaseElementBlock title="SCSS variabelen" subtitle="ook wel CSS Custom Properties genoemd.">
      <template #code><ScssVariablesCode /></template>
    </BaseElementBlock>

    <!----- Tailwind -->
    <BaseElementBlock
      title="Tailwind"
      subtitle="een utility-first CSS-framework voor snelle en flexibele styling."
    >
      <template #description><tailwindVariables /></template>
    </BaseElementBlock>

    <BaseElementBlock title="Waarom Tailwind" subtitle="de Voor- en nadelen">
      <template #description><tailwindProsVariables /></template>
    </BaseElementBlock>

    <!----- purgeCSS -->
    <BaseElementBlock
      title="purgeCSS"
      subtitle="een tool die ongebruikte CSS uit je stylesheets verwijdert."
    >
      <template #description><PurgeCss /></template>
      <template #code><PurgeCssCode /></template>
    </BaseElementBlock>
  </div>
  <BaseElementButton @click="handleClick" />
  <BaseElementButton position="right" @click="handleClick" />
</template>
s
