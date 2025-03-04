<script setup lang="ts">
import BaseElementBlock from '@/components/BaseElementBlock.vue'
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <h1>Belangrijke elementen voor een goede html layout</h1>
    <BaseElementBlock
      title="padding"
      contents="bepaalt de binnenruimte tussen de inhoud van een element en de rand ervan."
      description="Met de padding-eigenschap kun je ruimte toevoegen binnen een element, waardoor de inhoud niet direct tegen de rand aan staat. Je kunt afzonderlijke waarden instellen voor boven, rechts, onder en links of één enkele waarde voor alle zijden."
      code="element {
  padding: 10px; /* Gelijktijdig voor alle zijden */
  padding: 10px 20px; /* 10px boven/onder, 20px links/rechts */
  padding: 10px 15px 5px 20px; /* Specifiek per zijde: top, rechts, onder, links */
}"
    />
    <BaseElementBlock
      title="margin"
      contents="bepaalt de ruimte buiten de rand van een element."
      description="Met de margin-eigenschap kun je de ruimte rondom een element instellen, zodat het niet direct tegen andere elementen aanstaat. Net als bij padding kun je afzonderlijke waarden instellen voor boven, rechts, onder en links of één enkele waarde voor alle zijden."
      code="element {
  margin: 10px; /* Gelijktijdig voor alle zijden */
  margin: 10px 20px; /* 10px boven/onder, 20px links/rechts */
  margin: 10px 15px 5px 20px; /* Specifiek per zijde: top, rechts, onder, links */
  margin: auto; /* Centraal uitlijnen (horizontaal, bij block-elementen) */
}"
      linkPen="gOyxYLp"
    />
  </div>
</template>
