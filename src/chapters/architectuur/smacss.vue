<script setup lang="ts">

</script>

<template>
<p>
Maakt gebruik van 5 vershillende categorieën om je CSS in te verdelen.
</p>
<ol>
  <li>Base</li>
  <li>Layout</li>
  <li>Module</li>
  <li>State</li>
  <li>Theme</li>

  <strong>Base</strong>
  <p>
    Bevat standaardstijlen voor HTML-elementen (zoals h1, p, ul, a). Deze regels zijn elementgericht en beïnvloeden alle elementen van dat type.
      <highlightjs
        language="css"
        code="
        h1 { font-size: 2em; }
        p { line-height: 1.5; }
        "/>
  </p>
  <strong>Layout</strong>
  <p>
    Definieert de grote structuur van de pagina, zoals header, footer, sidebar en contentgebieden. Layouts bevatten meestal alleen positioneringsregels.
    <highlightjs
      language="css"
      code="
      .layout-header { height: 80px; }
      .layout-sidebar { float: left; width: 250px; }

      "/>
  </p>
  <strong>Module</strong>
  <p>
    Modules zijn herbruikbare componenten van de UI, zoals navigatiebalken, sliders, widgets of formulieren. Modules zijn zelfstandig en onafhankelijk van de rest van de layout.
    <highlightjs
      language="css"
      code="
      .module-card { border: 1px solid #ccc; padding: 1em; }
      .module-card-title { font-weight: bold; }
      "/>
  </p>
  <strong>State</strong>
  <p>
    Deze regels beschrijven de toestand van een component, zoals is-active, is-hidden, is-loading. Ze veranderen hoe een element zich gedraagt of eruitziet.
    <highlightjs
      language="css"
      code="
      .is-hidden { display: none; }
      .is-active { background-color: #eee; }
      "/>
  </p>
  <strong>Theme</strong>
  <p>
    Deze regels definiëren kleurenschema’s, lettertypes of andere stijlen die per thema kunnen verschillen. Dit maakt het makkelijk om bijvoorbeeld een “dark mode” te implementeren.
    <highlightjs
      language="css"
      code="
      .theme-dark .module-card { background-color: #333; color: #fff; }
      "/>
  </p>

</ol>
<strong>Voordelen van SMACSS</strong>
  <ul>
    <li>✅ Modulariteit: Componenten zijn herbruikbaar en onafhankelijk.</li>
    <li>✅ Consistentie: Door regels in categorieën te verdelen, blijft de CSS overzichtelijk.</li>
    <li>✅ Schaalbaarheid: Goed toepasbaar op zowel kleine als grote projecten.</li>
  </ul>

</template>

<style scoped lang="scss">

</style>
