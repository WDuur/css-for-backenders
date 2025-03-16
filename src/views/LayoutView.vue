<script setup lang="ts">
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'

const {} = useAnchorNavigation(['title', 'padding', 'margin', 'flex'])
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">Belangrijke elementen voor een goede html layout</h1>
    <BaseElementBlock
      title="padding"
      contents="bepaalt de binnenruimte tussen de inhoud van een element en de rand ervan."
      description="Met de padding-eigenschap kun je ruimte toevoegen binnen een element, waardoor de inhoud niet direct tegen de rand aan staat. Je kunt afzonderlijke waarden instellen voor boven, rechts, onder en links of één enkele waarde voor alle zijden."
      code="element {
  padding: 10px; /* Gelijktijdig voor alle zijden */
  padding: 10px 20px; /* 10px boven/onder, 20px links/rechts */
  padding: 10px 15px 5px 20px; /* Specifiek per zijde: top, rechts, onder, links */
}"
      :linkPens="[
        'https://codepen.io/WDuur/embed/gOyxYLp?default-tab=result&editable=true&theme-id=dark',
      ]"
    />

    <BaseElementBlock
      title="margin"
      contents="bepaalt de ruimte buiten de rand van een element."
      description="Met de margin-eigenschap kun je de ruimte rondom een element instellen, zodat het niet direct tegen andere elementen aanstaat. Net als bij padding kun je afzonderlijke waarden instellen voor boven, rechts, onder en links of één enkele waarde voor alle zijden."
      quote="Het gebruik van margin lijkt eenvoudig, en dat is het ook. Maar bij herbruikbare componenten kan het een uitdaging zijn om een consistente layout te behouden. Daarom is het beter om de parent te laten bepalen hoeveel ruimte er tussen zichzelf en het child component zit. Dit zorgt voor een flexibeler en beter beheersbaar ontwerp."
      code="element {
  margin: 10px; /* Gelijktijdig voor alle zijden */
  margin: 10px 20px; /* 10px boven/onder, 20px links/rechts */
  margin: 10px 15px 5px 20px; /* Specifiek per zijde: top, rechts, onder, links */
  margin: auto; /* Centraal uitlijnen (horizontaal, bij block-elementen) */
}"
      :linkPens="[
        'https://codepen.io/WDuur/embed/WbNdjbg?default-tab=result&editable=true&theme-id=dark',
        'https://codepen.io/WDuur/embed/zxYpwqG?default-tab=result&editable=true&theme-id=dark',
      ]"
    />
    <BaseElementBlock
      title="flex"
      contents="bepaalt de ruimte buiten de rand van een element."
      description="Met de margin-eigenschap kun je de ruimte rondom een element instellen, zodat het niet direct tegen andere elementen aanstaat. Net als bij padding kun je afzonderlijke waarden instellen voor boven, rechts, onder en links of één enkele waarde voor alle zijden."
      code="element {
  margin: 10px; /* Gelijktijdig voor alle zijden */
  margin: 10px 20px; /* 10px boven/onder, 20px links/rechts */
  margin: 10px 15px 5px 20px; /* Specifiek per zijde: top, rechts, onder, links */
  margin: auto; /* Centraal uitlijnen (horizontaal, bij block-elementen) */
}"
    />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
