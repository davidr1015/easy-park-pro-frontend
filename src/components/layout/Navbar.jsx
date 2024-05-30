import { Navbar as NavbarComponent } from 'flowbite-react'
import { ToggleTheme } from '@/components'
import { Link } from 'react-router-dom'
import { PATHS } from '../../constants/routePaths'

export function Navbar ({ className, children }) {
  const fullClassName = `w-full  h-16 ${className}`

  return (
    <NavbarComponent className={fullClassName}>
      <div className='w-full max-w-8xl  justify-between flex mx-auto'>

      <NavbarComponent.Brand>
        <Link to={PATHS.PUBLIC.LANDING.path} className='font-black text-3xl'>EasyPark PRO</Link>
      </NavbarComponent.Brand>

      <div className='flex gap-x-2 items-center'>
        <ToggleTheme />

        {children}

      </div>
      </div>
    </NavbarComponent>
  )
}
