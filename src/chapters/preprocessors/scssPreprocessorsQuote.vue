<template>
  <pre>
    <code>
      // Variabelen
      $primary-color: #3498db;
      $font-stack: Arial, sans-serif;

      // Mixin (herbruikbare stijl)
      @mixin button-style {
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
      }

      // Gebruik van nesting
      .button {
        background-color: $primary-color;
        color: white;
        font-family: $font-stack;
        @include button-style;

        &:hover {
          background-color: darken($primary-color, 10%);
        }
      }
    </code>
  </pre>
</template>
