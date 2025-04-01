<template>
  <highlightjs
    language="css"
    code="h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}"
  />
  <ul>
    <li>Minimale grootte: 1.5rem (kleinere schermen).</li>
    <li>Voorkeursgrootte: 5% van de viewport-breedte.</li>
    <li>Maximale grootte: 3rem (grotere schermen).</li>
  </ul>

    <highlightjs
    language="css"
    code=".container {
  padding: clamp(10px, 2vw, 40px);
  width: clamp(200px, 50vw, 600px);
}"
  />
</template>
