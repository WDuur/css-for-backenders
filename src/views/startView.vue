<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import { useChapterNavigation } from '@/composables/useChapterNavigation'
const {} = useChapterNavigation('', 'important')

const { scrollTo } = useAnchorNavigation([
  'title', // title do not remove
  'important',
])
onMounted(() => {
  scrollTo('title')
})
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">CSS FOR BACKENDERS <sub>- powerd by Pieter & Wietze -</sub></h1>
  </div>
</template>

<style scoped lang="scss">
.css-layout {
  width: 50vw;
  h1 {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
    & sub {
      font-size: 1rem;
    }
  }
}
</style>
