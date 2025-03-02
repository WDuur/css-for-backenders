<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  title: string
  contents: string
  description: string
  code: string
  link: string | null
}>()
</script>
<template>
  <div class="base-element-block">
    <ul>
      <li>
        <p>
          <strong>{{ title }}</strong
          >: {{ contents }}
        </p>
        <p>{{ description }}</p>
        <pre><code class="language-css">{{code}}</code></pre>
        <a v-if="link" :href="link">link</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.base-element-block {
  ul {
    list-style: none;
    padding: 0;
    li {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      p {
        margin: 0;
        color: var(--color-text-secondary);
      }
      strong {
        font-weight: bold;
        color: var(--color-text-orange);
        font-size: clamp(0.8rem, 5vw, 1.2rem);
      }
      pre {
        overflow-x: scroll;
        padding: 0.5rem 1.5rem;
        background-color: hsla(30.6, 83.2%, 90%, 0.3);
        border-radius: 0.5rem;
        font-size: clamp(0.5rem, 5vw, 0.8rem);
      }
    }
  }
}
</style>
