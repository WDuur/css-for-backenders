<template>
  <highlightjs
    language="css"
    code=".button {
  $self: &;

  color: white;

  &:hover {
    background-color: blue;
  }

  .icon {
    // Verwijst terug naar .button wordt dan .button--with-icon
    #{$self}--with-icon & {
      margin-right: 8px;
    }
  }
}"
/>
</template>

