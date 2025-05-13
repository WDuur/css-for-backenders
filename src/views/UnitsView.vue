<script setup lang="ts">
import { onMounted } from 'vue'
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'

import PxUnits from '@/chapters/units/pxUnits.vue'
import PxUnitsQuote from '@/chapters/units/pxUnitsQuote.vue'
import PxUnitsCode from '@/chapters/units/pxUnitsCode.vue'
import TextUnits from '@/chapters/units/textUnits.vue'
import ViewportUnits from '@/chapters/units/viewportUnits.vue'
import FlexUnits from '@/chapters/units/flexUnits.vue'
import WitchUnits from '@/chapters/units/witchUnits.vue'
import { useChapterNavigation } from '@/composables/useChapterNavigation'
const {} = useChapterNavigation('layout', 'variables')

const { scrollTo } = useAnchorNavigation([
  'title',
  'subtitle1',
  'px',
  'subtitle2',
  'Tekstgebaseerde eenheden',
  'Viewport-gebaseerde eenheden',
  'Flexibele eenheden',
  'Welke eenheid',
  'end',
])
onMounted(() => {
  scrollTo('title')
})
</script>
<template>
  <IndicatorLabel title="CSS units" />

  <div class="css-layout css-base-element-blocks">
    <h1 id="title">Begrijp CSS Eenheden: Wanneer gebruik je px, rem, vh en meer?</h1>
    <h2 id="subtitle1">
      <p>Absolute eenheden <sub> (vaste grootte, niet afhankelijk van viewport of parent)</sub></p>
    </h2>

    <!----- PxUnits -->
    <BaseElementBlock
      title="px"
      subtitle="is een vaste CSS-eenheid die één schermpixel vertegenwoordigt."
    >
      <template #description><PxUnits /></template>
      <template #quote><PxUnitsQuote /></template>
      <template #code><PxUnitsCode /></template>
    </BaseElementBlock>

    <h2 id="subtitle2">
      <p>Relative eenheden <sub> (afhankelijk van parent-element of viewport)</sub></p>
    </h2>

    <!----- TextUnits -->
    <BaseElementBlock
      title="Tekstgebaseerde eenheden"
      subtitle="Een tekstgebaseerde eenheid in CSS is een maat die afhankelijk is van de lettergrootte."
    >
      <template #description><TextUnits /></template>
    </BaseElementBlock>

    <!----- ViewportUnits -->
    <BaseElementBlock
      title="Viewport-gebaseerde eenheden"
      subtitle="bepaalt de ruimte buiten de rand van een element."
    >
      <template #description><ViewportUnits /></template>
    </BaseElementBlock>

    <!----- FlexUnits -->
    <BaseElementBlock title="Flexibele eenheden" subtitle="voor grids en layouts.">
      <template #description><FlexUnits /></template>
    </BaseElementBlock>

    <!----- WitchUnits -->
    <BaseElementBlock title="Welke eenheid" subtitle="moet je dan gebruiken?">
      <template #description><WitchUnits /></template>
    </BaseElementBlock>
  </div>
</template>
