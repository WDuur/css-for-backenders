<script setup lang="ts">
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'

import PaddingLayout from '@/chapters/layout/paddingLayout.vue'
import PaddingLayoutCode from '@/chapters/layout/paddingLayoutCode.vue'
import MarginLayout from '@/chapters/layout/marginLayout.vue'
import MarginLayoutCode from '@/chapters/layout/marginLayoutCode.vue'
import MarginLayoutQuote from '@/chapters/layout/marginLayoutQuote.vue'
import FlexLayout from '@/chapters/layout/flexLayout.vue'
import FlexLayoutCode from '@/chapters/layout/flexLayoutCode.vue'

const {} = useAnchorNavigation(['title', 'padding', 'margin', 'flex'])
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">Belangrijke elementen voor een goede html layout</h1>

    <!----- PaddingLayout -->
    <BaseElementBlock
      title="padding"
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
      title="margin"
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
    <BaseElementBlock
      title="flex"
      subtitle="bepaalt de ruimte buiten de rand van een element.(todo)"
    >
      <template #description><FlexLayout /></template>
      <template #code><FlexLayoutCode /></template>
    </BaseElementBlock>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
