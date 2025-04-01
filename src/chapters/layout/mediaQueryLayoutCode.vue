<template>
  <highlightjs
    language="css"
    code="/* Standaard stijl voor grotere schermen */
.container {
  background-color: blue;
  font-size: 20px;
}

/* Voor schermen kleiner dan 768px (mobiele weergave) */
@media (max-width: 768px) {
  .container {
    background-color: red;
    font-size: 16px;
  }
}"
  />
    <highlightjs
    language="css"
    code="/* Standaard stijl voor grotere schermen */
.container {
  background-color: blue;
  font-size: 20px;
  @media (max-width: 768px) {
    background-color: red;
    font-size: 16px;
  }
}
"
  />
</template>
