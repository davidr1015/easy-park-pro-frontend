import { DarkIcon, LightIcon } from '../../components'
import { useTheme } from '../../hooks'

export function ToggleTheme () {
  const { theme, changeTheme } = useTheme()

  return (
    <button
      onClick={changeTheme}
      type='button'
      className='rounded-lg p-2 text-black hover:bg-gray-100 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700'
    >
      {theme === 'light' ? <LightIcon /> : <DarkIcon />}
    </button>
  )
}
