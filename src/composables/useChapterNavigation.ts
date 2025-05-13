import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

export function useChapterNavigation(prevUrl: string, nextUrl: string) {
  const router = useRouter()

  console.log('url', prevUrl, nextUrl)
  const handleKeydown = (event: KeyboardEvent) => {
    if (router) {
      if (event.key === 'ArrowLeft') {
        router.push(`/${prevUrl}`)
      }
      if (event.key === 'ArrowRight') {
        console.log('nextUrl', nextUrl)
        //router.push(`/${nextUrl}`)
      }
    }
  }

  const goNextChapter = (nextChapter: string) => {
    router.push(`/${nextChapter}`)
  }
  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  return {
    goNextChapter,
  }
}
