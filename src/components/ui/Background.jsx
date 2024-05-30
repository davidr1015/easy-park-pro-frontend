import { useTheme } from '@/hooks'

const DarkBackground = () => {
  return (
    <div className='fixed -z-50 h-full w-full bg-primary-dark text-white'><div className='absolute bottom-0 left-[60%] right-0 top-[20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]' /></div>
  )
}

const LightBackground = () => {
  return (
    <div className='fixed top-0 -z-50 h-full w-full bg-primary'><div className='fixed bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-tertiary opacity-20 blur-[110px]' /></div>
  )
}
export function Background () {
  const { theme } = useTheme()
  return (
    <>
      {theme === 'light'
        ? <LightBackground />
        : <DarkBackground />}
    </>
  )
}
