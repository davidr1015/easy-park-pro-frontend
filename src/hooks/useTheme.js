import { useContext } from 'react'
import { ThemeContext } from '../context/themeProvider'

export function useTheme () {
  const { theme, changeTheme } = useContext(ThemeContext)

  return { theme, changeTheme }
}
