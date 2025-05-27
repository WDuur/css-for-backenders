<template>
  <highlightjs
    language="css"
    code="

/* Layout (pagina-indeling) */
.l-container {
    width: 80%;
    margin: 0 auto;
}

.l-header, .l-footer {
    background-color: #f8f8f8;
}

/* Module (herbruikbare componenten) */
.btn {
    background-color: #007BFF;
}

.card {
    border: 1px solid #ddd;
}

/* State (statusspecifieke stijlen) */
.is-hidden {
    display: none;
}

.is-active {
    font-weight: bold;
}

/* Theme (verschillende thema's) */
.theme-dark {
    background-color: #222;
    color: #fff;
}"
  />
</template>
<script setup lang="ts"></script>
