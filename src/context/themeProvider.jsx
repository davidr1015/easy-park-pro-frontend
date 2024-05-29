import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider ({ children }) {
  const [theme, setTheme] = useState(() => {
    const themeStorage = window.localStorage.getItem('theme')
    if (themeStorage) {
      return themeStorage
    }

    return 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    }

    return () => {
      document.body.classList.remove('dark')
    }
  }, [theme])

  const changeTheme = () => {
    const newTheme = theme === 'light'
      ? 'dark'
      : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)
  }

  return (
    <ThemeContext.Provider
      value={{ theme, changeTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
