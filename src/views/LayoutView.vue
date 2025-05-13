<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import { useChapterNavigation } from '@/composables/useChapterNavigation'

import PaddingLayout from '@/chapters/layout/paddingLayout.vue'
import PaddingLayoutCode from '@/chapters/layout/paddingLayoutCode.vue'
import MarginLayout from '@/chapters/layout/marginLayout.vue'
import MarginLayoutCode from '@/chapters/layout/marginLayoutCode.vue'
import MarginLayoutQuote from '@/chapters/layout/marginLayoutQuote.vue'
import FlexLayout from '@/chapters/layout/flexLayout.vue'
import FlexLayoutCode from '@/chapters/layout/flexLayoutCode.vue'
import FlexBoxLayout from '@/chapters/layout/flexBoxLayout.vue'
import FlexBoxLayoutCode from '@/chapters/layout/flexBoxLayoutCode.vue'
import FlexBoxOptionsLayoutCode from '@/chapters/layout/flexBoxOptionsLayoutCode.vue'
import FlexBoxToolsLayout from '@/chapters/layout/flexBoxToolsLayout.vue'
import GridLayout from '@/chapters/layout/gridLayout.vue'
import GridLayoutCode from '@/chapters/layout/gridLayoutCode.vue'
import GridNamedLayout from '@/chapters/layout/gridNamedLayout.vue'
import GridNamedLayoutCode from '@/chapters/layout/gridNamedLayoutCode.vue'
import MediaQueryLayout from '@/chapters/layout/mediaQueryLayout.vue'
import MediaQueryLayoutCode from '@/chapters/layout/mediaQueryLayoutCode.vue'
import MediaQueryLayoutOperatorsCode from '@/chapters/layout/mediaQueryLayoutOperatorsCode.vue'
import ClampLayout from '@/chapters/layout/clampLayout.vue'
import ClampLayoutCode from '@/chapters/layout/clampLayoutCode.vue'
import CalcLayout from '@/chapters/layout/calcLayout.vue'
import CalcLayoutCode from '@/chapters/layout/calcLayoutCode.vue'
import BaseElementButton from '@/components/BaseElementButton.vue'

const {} = useChapterNavigation('important', 'units')

const anchorList = [
  'title',
  'Padding',
  'Margin',
  'Flex',
  'Flexbox',
  'Flexbox opties',
  'Flexbox tools',
  'Grid',
  'Named Grid',
  'Clamp',
  'Calc',
  '@media',
  'end',
]
const { scrollTo, handleClick } = useAnchorNavigation(anchorList)

onMounted(() => {
  scrollTo('title')
})
</script>
<template>
  <IndicatorLabel title="Layouts" />

  <div class="css-layout css-base-element-blocks">
    <h1 id="title">Belangrijke elementen voor een goede responsive layout</h1>

    <!----- PaddingLayout -->
    <BaseElementBlock
      title="Padding"
      subtitle="bepaalt de binnenruimte tussen de inhoud van een element en de rand ervan."
      :linkPens="[
        'https://codepen.io/WDuur/embed/gOyxYLp?default-tab=result&editable=true&theme-id=dark',
      ]"
    >
      <template #description><PaddingLayout /></template>
      <template #code><PaddingLayoutCode /></template>
    </BaseElementBlock>

    <!----- MarginLayout -->
    <BaseElementBlock
      title="Margin"
      subtitle="bepaalt de ruimte buiten de rand van een element."
      :linkPens="[
        'https://codepen.io/WDuur/embed/WbNdjbg?default-tab=result&editable=true&theme-id=dark',
        'https://codepen.io/WDuur/embed/zxYpwqG?default-tab=result&editable=true&theme-id=dark',
      ]"
    >
      <template #description><MarginLayout /></template>
      <template #code><MarginLayoutCode /></template>
      <template #quote><MarginLayoutQuote /></template>
    </BaseElementBlock>

    <!----- FlexLayout -->
    <BaseElementBlock title="Flex" subtitle="Maak moeiteloos flexibele en responsieve lay-outs!">
      <template #description><FlexLayout /></template>
      <template #code><FlexLayoutCode /></template>
    </BaseElementBlock>

    <!----- FlexBoxLayout -->
    <BaseElementBlock
      title="Flexbox"
      subtitle="is ideaal voor eenvoudige en dynamische lay-outs!"
      :linkPens="[
        'https://codepen.io/WDuur/embed/VYwBRPv?default-tab=result&editable=true&theme-id=dark',
      ]"
    >
      <template #description><FlexBoxLayout /></template>
      <template #code><FlexBoxLayoutCode /></template>
    </BaseElementBlock>

    <!----- FlexLayout options -->
    <BaseElementBlock title="Flexbox opties">
      <template #code><FlexBoxOptionsLayoutCode /></template>

      <!----- FlexLayout tools -->
    </BaseElementBlock>
    <BaseElementBlock title="Flexbox tools" subtitle="de gemakkelijke manier">
      <template #description><FlexBoxToolsLayout /></template>
    </BaseElementBlock>

    <!----- GridLayout -->
    <BaseElementBlock
      title="Grid"
      subtitle="is ideaal voor eenvoudige en dynamische lay-outs!"
      :linkPens="[
        'https://codepen.io/WDuur/embed/yyLqdyK?default-tab=result&editable=true&theme-id=dark',
      ]"
    >
      <template #description><GridLayout /></template>
      <template #code><GridLayoutCode /></template>
    </BaseElementBlock>

    <!----- GridNamedLayout -->
    <BaseElementBlock
      title="Named Grid"
      subtitle=""
      :linkPens="[
        'https://codepen.io/WDuur/embed/NPWBZba?default-tab=result&editable=false&theme-id=dark',
      ]"
    >
      <template #description><GridNamedLayout /></template>
      <template #code><GridNamedLayoutCode /></template>
    </BaseElementBlock>

    <!----- MediaQueryLayout -->
    <BaseElementBlock title="Clamp" subtitle="Dynamische grootte met minimale en maximale grenzen!">
      <template #description><ClampLayout /></template>
      <template #code><ClampLayoutCode /></template>
    </BaseElementBlock>

    <!----- MediaQueryLayout -->
    <BaseElementBlock title="Calc" subtitle="berekent dynamische CSS-waarden">
      <template #description><CalcLayout /></template>
      <template #code><CalcLayoutCode /></template>
    </BaseElementBlock>

    <!----- MediaQueryLayout -->
    <BaseElementBlock title="@media" subtitle="Wat zijn CSS Media Queries?">
      <template #description><MediaQueryLayout /></template>
      <template #code><MediaQueryLayoutCode /></template>
    </BaseElementBlock>

    <!----- MediaQueryLayout -->
    <BaseElementBlock title="@media" subtitle="logical operators">
      <template #code><MediaQueryLayoutOperatorsCode /></template>
    </BaseElementBlock>
  </div>
  <BaseElementButton @click="handleClick" />
</template>
