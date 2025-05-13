<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  title: string
  subtitle?: string
  contents?: string
  description?: string | null
  code?: string | null
  quote?: string | null
  linkPens?: string[] | null
  outside?: boolean
}>()

const state = ref('closed')
const computedLinkPens = computed(() => props.linkPens ?? undefined)
const openPen = () => {
  console.log('state  s', state.value)
  if (state.value === 'open') {
    state.value = 'closed'
  } else {
    state.value = 'open'
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.code === 'Enter') {
    event.preventDefault()
    openPen()
  } else {
    state.value = 'closed'
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
<template>
  <div :id="title" class="base-element-block">
    <ul>
      <li>
        <p>
          <strong>{{ title }}</strong
          >: {{ subtitle || contents }}
        </p>
        <slot name="description"></slot>
        <slot name="code"></slot>
        <slot name="quote" class="quote"></slot>
        <p v-if="quote" class="quote" v-html="quote" />

        <span
          class="demo"
          v-if="computedLinkPens && !outside"
          @click="openPen()"
          @keydown.enter="openPen()"
          >#demo</span
        >
        <div v-else-if="computedLinkPens && outside">
          <span v-for="(link, index) in computedLinkPens" :key="index" class="pen"
            ><a :href="link" target="_blank">pen {{ index + 1 }}</a></span
          >
        </div>

        <div v-if="state === 'open'">
          <iframe
            v-for="(linkPen, index) in computedLinkPens"
            :key="index"
            height="400"
            style="width: 100%"
            scrolling="no"
            :src="linkPen"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true"
          ></iframe>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.base-element-block {
  min-height: 100vh;
  padding: 1rem 0;
  ul {
    list-style: none;
    padding: 0;
    padding-top: 8rem;
    font-weight: 300;
    li {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      font-size: clamp(1.2rem, 5vw, 1.5rem);
      p {
        margin: 0;
        padding: 1rem 0;
        color: var(--color-text-secondary);
        &.quote {
          font-style: italic;
        }
        &.orange {
          color: yellow;
        }
      }
      strong {
        font-weight: bold;
        font-size: clamp(1.2rem, 5vw, 2.2rem);
      }
      &:deep(pre) {
        width: clamp(300px, 60vw, 900px);
        border-radius: 0.5rem;
        font-size: clamp(0.2rem, 100%, 1rem);
        overflow: hidden;
      }
      .demo {
        cursor: pointer;
        color: var(--color-text-orange);
      }
    }
  }
}
</style>
