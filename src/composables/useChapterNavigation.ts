import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'
const prevRoute = ref('')
const nextRoute = ref('')

export function useChapterNavigation() {
  const router = useRouter()

  const handleKeydown = (event: KeyboardEvent) => {
    if (router) {
      if (event.key === 'ArrowLeft') {
        router.push(`/${prevRoute.value}`)
      }
      if (event.key === 'ArrowRight') {
        router.push(`/${nextRoute.value}`)
      }
    }
  }

  const setRoute = (route: string[]) => {
    prevRoute.value = route[0]
    nextRoute.value = route[1]
  }

  const goNextChapter = () => {
    window.scrollTo({ top: 0 })
    nextTick(() => {
      router.push(`/${nextRoute.value}`)
    })
  }
  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  return {
    setRoute,
    goNextChapter,
  }
}
