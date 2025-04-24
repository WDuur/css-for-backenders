<script setup lang="ts">

</script>

<template>
  <p>
    (Block, Element, Modifier) is een conventie voor het structureren van je CSS code.
    Door het gebruiken van deze benamingen is het makkelijker om de CSS code te lezen en begrijpen, vooral in grotere codebases.
  </p>
  <strong>🟦 Block</strong>
  <p>Block is de container en representeert een op zichzelf staande entiteit, denk hierbij aan:</p>
  <ul>
    <li>knop</li>
    <li>menu</li>
    <li>formulier</li>
  </ul>
  <strong>🧩 Element</strong>
  <p>Een element is een onderdeel van een blok, een element kan niet op zichzelf staan en moet onderdeel zijn van een blok. Denk hierbij aan:</p>
  <ul>
    <li>button__icon</li>
    <li>form__input</li>
    <li>menu__item</li>
  </ul>
  <strong>🎨 Modifier</strong>
  <p>Een Modifier modificeert een blok of element die het uiterlijk, gedrag of de status aanpast, Denk hierbij aan:</p>
  <ul>
    <li>De grot van een button: button--small</li>
    <li>in een input veld: form__input--disabled</li>
    <li>fonts: text--bold</li>
  </ul>
  <strong>NaamGeving:</strong>

  <p>Gebruik: <b>__</b> Voor Block en Element</p>
  <p>Gebruik: <b>--</b> Voor  Block/Element en Modifier</p>

  <strong>Voordelen van BEM</strong>
  <ul>
    <li>✅ Voorkom conflicten</li>
    <li>✅ Schaalt in grotere codebases</li>
    <li>✅ Makkelijk te lezen.</li>
  </ul>


</template>

<style scoped lang="scss">

</style>
