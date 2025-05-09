<script setup lang="ts">
import { useChapterNavigation } from '@/composables/useChapterNavigation'

defineProps<{ nextChapter: string }>()

const { goNextChapter } = useChapterNavigation('preprocessors', 'debugging')
</script>
<template>
  <div id="end" class="next-chapter-wrapper">
    <button class="next-chapter" @click="goNextChapter(nextChapter)">Volgende</button>
  </div>
</template>

<style scoped lang="scss">
.next-chapter {
  &-wrapper {
    height: 100vh;
    display: flex;
  }
  margin: auto;
  background-color: var(--vt-c-orange);
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
  color: var(--vt-c-white);
  border: 0px solid;
  font-size: 26px;
  padding: 16px 31px;
  text-decoration: none;
}
.next-chapter:hover {
  color: var(--vt-c-text-dark-2);
  background-color: var(--vt-c-orange-light);
}
</style>
