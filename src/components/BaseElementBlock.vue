<script setup lang="ts">
import { defineProps, ref } from 'vue'

defineProps<{
  title: string
  contents: string
  description: string
  code: string
  linkPen?: string | null
}>()

const state = ref('closed')
const openPen = () => {
  if (state.value === 'open') {
    state.value = 'closed'
  } else {
    state.value = 'open'
  }
}
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
        <span class="demo" v-if="linkPen" @click="openPen()">#demo</span>

        <iframe
          v-if="state === 'open'"
          height="300"
          style="width: 100%"
          scrolling="no"
          title="box model"
          :src="`https://codepen.io/WDuur/embed/${linkPen}?default-tab=result&editable=true&theme-id=dark`"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        ></iframe>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.base-element-block {
  ul {
    list-style: none;
    padding: 0;
    font-weight: 300;
    li {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-size: clamp(1.2rem, 5vw, 1.5rem);
      p {
        margin: 0;
        color: var(--color-text-secondary);
      }
      strong {
        font-weight: bold;
        color: var(--color-text-orange);
        font-size: clamp(1.2rem, 5vw, 2.2rem);
      }
      pre {
        width: clamp(300px, 100%, 900px);
        overflow-x: scroll;
        padding: 0.5rem 1.5rem;
        background-color: hsla(30.6, 83.2%, 90%, 0.3);
        border-radius: 0.5rem;
        font-size: 1rem;
      }
      .demo {
        cursor: pointer;
      }
    }
  }
}
</style>
