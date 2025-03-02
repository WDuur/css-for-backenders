<script setup lang="ts">
import BaseElementBlock from '@/components/BaseElementBlock.vue'
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <h1>Belangrijke elementen voor een goede html layout</h1>
    <BaseElementBlock
      title="Box model"
      contents="padding, border, margin"
      description="Voorbeeld: Gebruik padding om ruimte binnen een element te creëren."
      code="element {
  padding: 10px;
}"
      :link="null"
    />
    <BaseElementBlock
      title="Display"
      contents="block, inline, inline-block, flex, grid"
      description="Voorbeeld: Gebruik flex voor flexibele layouts."
      code=".container {
  display: flex;
}"
      link="null"
    />
  </div>
</template>
