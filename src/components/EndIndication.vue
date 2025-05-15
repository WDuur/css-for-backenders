<script setup lang="ts">
import { ref } from 'vue'
import { useChapterNavigation } from '@/composables/useChapterNavigation'

defineProps<{ nextChapter?: string }>()

const { goNextChapter } = useChapterNavigation()
const isAnimating = ref(false)

function triggerPulse() {
  isAnimating.value = false

  requestAnimationFrame(() => {
    isAnimating.value = true
  })
  goNextChapter()
}
</script>

<template>
  <div id="end" class="end-chapter-wrapper">
    <button :class="['end-chapter', { pulse: isAnimating }]" @click="triggerPulse">end</button>
  </div>
</template>

<style scoped lang="scss">
.end-chapter {
  &-wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  font-size: 2.4rem;
  color: var(--vt-c-orange);
}

.end-chapter {
  position: relative;
  margin: auto;
  background-color: transparent;
  border-radius: 50%;
  border: 2px var(--vt-c-orange-light) dotted;
  opacity: 0.4;
  cursor: pointer;
  color: var(--vt-c-white);
  width: 150px;
  height: 150px;
  font-size: 26px;
  padding: 16px 31px;
  text-decoration: none;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: orange;
    opacity: 0.5;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  &.pulse::after {
    animation: pulse-ring 0.6s ease-out;
  }
}

@keyframes pulse-ring {
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }
  50% {
    width: 200%;
    height: 200%;
    opacity: 0.2;
  }
  100% {
    width: 300%;
    height: 300%;
    opacity: 0;
  }
}
</style>
