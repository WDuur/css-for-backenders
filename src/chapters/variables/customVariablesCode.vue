<template>
  <highlightjs
    language="css"
    code=":root {
  --primary-color: #3498db;
  --font-size: 16px;
}

button {
  background-color: var(--primary-color);
  font-size: var(--font-size);
  color: white;
}"
  />
  <ul>
    <li><strong>Herbruikbaarheid</strong>: Je definieert een variabele één keer en gebruikt deze overal.</li>
    <li><strong>Onderhoudbaarheid</strong>: Bij wijzigingen hoef je alleen de variabele aan te passen in plaats van meerdere CSS-regels.</li>
    <li><strong>Dynamisch aanpasbaar</strong>:  CSS-variabelen kunnen met JavaScript worden gewijzigd om live styling-updates toe te passen.</li>
  </ul>

    <highlightjs
    language="JavaScript"
    code="const changeColor = (color) => {
  return document.documentElement.style.setProperty('--primary-color', color)
}"
  />
</template>
