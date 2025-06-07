import { resolveComponent, onMounted } from 'vue'

export default function useInput() {
  const inputRef = ref()

  onMounted(() => {
    inputRef.value?.focus()
  })

  return {
    inputRef,
  }
}
