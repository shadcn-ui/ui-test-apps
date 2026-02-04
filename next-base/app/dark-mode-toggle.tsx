"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      // Ignore if typing in an input or textarea.
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return
      }

      if (event.key === "d" || event.key === "D") {
        setTheme(theme === "dark" ? "light" : "dark")
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [theme, setTheme])

  return null
}
