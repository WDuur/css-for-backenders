<template>
  <highlightjs
    language="scss"
    code="
$primary-color: #3498db;
$secondary-color: #2ecc71;
$text-color: #333;
$font-size: 16px;
$spacing: 10px;

body {
  background-color: $primary-color;
  color: $text-color;
  font-size: $font-size;
  padding: $spacing;
}

button {
  background-color: $secondary-color;
  padding: $spacing * 1.5;

  &:hover {
    background-color: darken($secondary-color, 10%);
  }
}"
  />
</template>
