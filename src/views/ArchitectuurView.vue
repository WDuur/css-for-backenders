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

const chapterRoute = ['preprocessors', 'debugging']
const anchorRoute = ['title', 'subtitle1', 'BEM', 'OOCSS', 'SMACSS', 'end']
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
  </div>
  <BaseElementButton @click="handleClick" />
</template>
