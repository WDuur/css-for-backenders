<template>
  LET OP!: met dynamische classnames kan PurgeCSS niet verwerken.
  <p>
    <code>:class="`text-${color}`"></code>
  </p>
  <p>
    <code>:class="['text', state === 'closed' ? 'text-red' : 'text-blue']"</code>
  </p>
</template>
