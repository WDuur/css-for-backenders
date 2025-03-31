<template>
  <highlightjs
    language="css"
    code="
.grid-container {
  display: grid;
  grid-template-columns: [col1-start] 1fr [col2-start] 1fr [col2-end];
  grid-template-rows: [row1-start] auto [row2-start] auto [row2-end];
}

.item1 {
  grid-column: col1-start / col2-start; /* Gebruikt named lines */
  grid-row: row1-start / row2-start;
}"
  />

  1fr = 1 "fractional unit"
</template>
