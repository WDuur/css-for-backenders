<template>
      <highlightjs
        language="css"
        code="
.card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
}

.card__title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.card__description {
  font-size: 16px;
  color: #666;
}

/* Element styles */
.card__button {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
}

/* Modifier styles */
  .card__button--primary {
  background-color: blue;
  color: white;
}

.card__button--secondary {
  background-color: gray;
  color: white;
}"
      />
</template>
<script setup lang="ts"></script>
