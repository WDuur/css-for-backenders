<script setup lang="ts">
import { ref } from 'vue'

const isAnimating = ref(false)

defineProps<{ position?: string }>()
function triggerPulse() {
  isAnimating.value = false

  requestAnimationFrame(() => {
    isAnimating.value = true
  })
}
</script>

<template>
  <div :class="['next-chapter-wrapper', { 'next-chapter-wrapper--right': position === 'right' }]">
    <button :class="['next-chapter', { pulse: isAnimating }]" @click="triggerPulse"></button>
  </div>
</template>

<style scoped lang="scss">
.next-chapter-wrapper {
  position: fixed;
  bottom: 2rem;
  left: 2rem;

  &--right {
    left: unset;
    right: 2rem;
  }
}

.next-chapter {
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
