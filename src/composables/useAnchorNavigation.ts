import { ref, onMounted, onUnmounted } from 'vue'

export function useAnchorNavigation(initialAnchors: string[]) {
  const currentAnchor = ref<string>('')
  const anchors = ref<string[]>(initialAnchors)
  console.log(anchors.value)
  let currentAnchorIndex = 0

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      currentAnchor.value = id === 'title' ? '' : `: ${id}`
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      event.preventDefault()
      currentAnchorIndex = (currentAnchorIndex + 1) % anchors.value.length
      scrollTo(anchors.value[currentAnchorIndex])
    }
  }

  const handleClick = () => {
    currentAnchorIndex = (currentAnchorIndex + 1) % anchors.value.length
    scrollTo(anchors.value[currentAnchorIndex])
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  return {
    anchors,
    currentAnchor,
    scrollTo,
    handleKeydown,
    handleClick,
  }
}
