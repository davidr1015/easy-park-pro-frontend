
import { ToggleTheme } from '../../components'

export function Navbar ({ className, children }) {
  const fullClassName = `w-full h-16 ${className}`

  return (
    <NavbarComponent className={fullClassName}>
      <NavbarComponent.Brand>
        <h1 className='font-black'> EasyPark PRO</h1>
      </NavbarComponent.Brand>

      <div className='flex gap-x-2 items-center mr-5'>
        <ToggleTheme />

        {children}

      </div>
    </NavbarComponent>
  )
}
