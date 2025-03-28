<template>
  <highlightjs
    language="css"
    code="
body {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Layout (pagina-indeling) */
.l-container {
    width: 80%;
    margin: 0 auto;
}

.l-header, .l-footer {
    background-color: #f8f8f8;
    padding: 20px;
    text-align: center;
}

/* Module (herbruikbare componenten) */
.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.card {
    border: 1px solid #ddd;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
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
