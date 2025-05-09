<script setup lang="ts">
import { onMounted } from 'vue'
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import { useChapterNavigation } from '@/composables/useChapterNavigation'
import CustomVariables from '@/chapters/variables/customVariables.vue'
import CustomVariablesCode from '@/chapters/variables/customVariablesCode.vue'
import ScssVariablesCode from '@/chapters/variables/scssVariablesCode.vue'
import tailwindVariables from '@/chapters/variables/tailwindVariables.vue'
import tailwindProsVariables from '@/chapters/variables/tailwindProsVariables.vue'

const {} = useChapterNavigation('units', 'preprocessors')

const { scrollTo } = useAnchorNavigation([
  'title', // title do not remove
  'Variablen',
  'SCSS variabelen',
  'Tailwind',
  'Waarom Tailwind',
])
onMounted(() => {
  scrollTo('title')
})
</script>
<template>
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
  </div>
</template>
