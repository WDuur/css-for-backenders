<script setup lang="ts">

</script>

<template>
  <p>
    BEM (Block, Element, Modifier) is een conventie voor het structureren van je CSS code.
    Door het gebruiken van deze benamingen is het makkelijker om de CSS code te lezen en begrijpen, vooral in grotere codebases.
  </p>
  <h2>🟦 Block</h2>
  <p>Block is de container en representeert een op zichzelf staande entiteit, denk hierbij aan:</p>
  <ul>
    <li>knop</li>
    <li>menu</li>
    <li>formulier</li>
  </ul>
  <h2>🧩 Element</h2>
  <p>Een element is een onderdeel van een blok, een element kan niet op zichzelf staan en moet onderdeel zijn van een blok. Denk hierbij aan:</p>
  <ul>
    <li>button__icon</li>
    <li>form__input</li>
    <li>menu__item</li>
  </ul>
  <h2>🎨 Modifier</h2>
  <p>Een Modifier modificeert een blok of element die het uiterlijk, gedrag of de status aanpast, Denk hierbij aan:</p>
  <ul>
    <li>De grot van een button: button--small</li>
    <li>in een input veld: form__input--disabled</li>
    <li>fonts: text--bold</li>
  </ul>
  <h2>NaamGeving:</h2>

  <p>Gebruik: <b>__</b> Voor Block en Element</p>
  <p>Gebruik: <b>--</b> Voor  Block/Element en Modifier</p>

  //TODO insert code voorbeeld

  <h2>Voordelen van BEM</h2>
  <ul>
    <li>✅ Voorkom conflicten</li>
    <li>✅ Schaalt in grotere codebases</li>
    <li>✅ Makkelijk te lezen.</li>
  </ul>


</template>

<style scoped lang="scss">

</style>
