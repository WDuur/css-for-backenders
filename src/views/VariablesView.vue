<script setup lang="ts">
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'

const {} = useAnchorNavigation([
  'title', // title do not remove
  'Tailwind',
])
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
