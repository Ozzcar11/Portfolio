import { computed } from "vue"
import { defineStore } from "pinia"

type Theme = "light" | "dark"

export const themeStore = defineStore("theme", () => {
  let theme: Ref<Theme> = ref("light")
  function changeTheme() {
    theme.value = theme.value === "light" ? "dark" : "light"
  }

  const getCurrentTheme = computed(() => {
    console.log(theme.value)
    return theme
  })

  return { getCurrentTheme, changeTheme }
})
