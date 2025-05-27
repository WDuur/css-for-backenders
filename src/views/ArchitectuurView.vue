<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import { useChapterNavigation } from '@/composables/useChapterNavigation'
//content
import Bem from '@/chapters/architectuur/bem.vue'
import Oocss from '@/chapters/architectuur/oocss.vue'
import Smacss from '@/chapters/architectuur/smacss.vue'
import BemCode from '@/chapters/architectuur/bemCode.vue'
import OocssCode from '@/chapters/architectuur/oocssCode.vue'
import SmacssBase from '@/chapters/architectuur/smacss-base.vue'
import SmacssLayout from '@/chapters/architectuur/smacss-layout.vue'
import SmacssModule from '@/chapters/architectuur/smacss-module.vue'
import SmacssState from '@/chapters/architectuur/smacss-state.vue'
import SmacssTheme from '@/chapters/architectuur/smacss-theme.vue'

const chapterRoute = ['preprocessors', 'debugging']
const anchorRoute = [
  'title',
  'subtitle1',
  'BEM',
  'OOCSS',
  'SMACSS',
  'SMACSS base',
  'SMACSS layout',
  'SMACSS module',
  'SMACSS state',
  'SMACSS theme',
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
  <IndicatorLabel title="Architectuur" />
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">
      Hoe kan je je CSS file inrichten om je styling modulair, geincapsuleert en Seperation of
      concerns
    </h1>
    <h2 id="subtitle1">
      <p>Voor CSS zijn er 3 bekende architecturen waarvan gebruik gemaakt kan worden:</p>
    </h2>

    <BaseElementBlock
      title="BEM"
      subtitle="BEM is de afkorting van Block Element Modifier. Het is een CSS-naming convention die helpt bij het structureren van CSS-code."
    >
      <template #description><bem /></template>
      <template #code><bem-code /></template>
    </BaseElementBlock>

    <BaseElementBlock
      title="OOCSS"
      subtitle="OOCSS is de afkorting van Object Oriented CSS. Het is een CSS-architectuur die zich richt op het scheiden van structuur en stijl."
    >
      <template #description><oocss /></template>
      <template #code><oocss-code /></template>
    </BaseElementBlock>

    <BaseElementBlock
      title="SMACSS"
      subtitle="SMACSS is de afkroting van Scalable and Modular Architecture for CSS. Het is een CSS-architectuur die zich richt op het maken van schaalbare en modulaire CSS-code door onderdelen te spitsen in categorieën."
    >
      <template #description><smacss /></template>
    </BaseElementBlock>
    <BaseElementBlock title="SMACSS base" subtitle="">
      <template #description><SmacssBase /></template>
    </BaseElementBlock>
    <BaseElementBlock title="SMACSS layout" subtitle="">
      <template #description><SmacssLayout /></template>
    </BaseElementBlock>
    <BaseElementBlock title="SMACSS module" subtitle="">
      <template #description><SmacssModule /></template>
    </BaseElementBlock>
    <BaseElementBlock title="SMACSS state" subtitle="">
      <template #description><SmacssState /></template>
    </BaseElementBlock>
    <BaseElementBlock title="SMACSS theme" subtitle="">
      <template #description><SmacssTheme /></template>
    </BaseElementBlock>
  </div>
  <BaseElementButton @click="handleClick" />
  <BaseElementButton position="right" @click="handleClick" />
</template>
