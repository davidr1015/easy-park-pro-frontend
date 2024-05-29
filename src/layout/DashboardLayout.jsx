import { Outlet, Link } from 'react-router-dom'
import { Sidebar, Navbar, LogoutIcon } from '../components'
import { Dropdown, MenuButton, Menu, MenuItem } from '@mui/base'
import { useContext } from 'react'
import { AuthContext } from '../context/authProvider'
import { PATHS } from '../constants/routePaths'
import { AccountIcon, CompanyIcon, DropdownIcon } from '../components/ui/Icons'

export function DashboardLayout () {
  const { logout, user } = useContext(AuthContext)

  return (
    <>
      <Navbar className='bg-primary dark:bg-primary-dark'>
        <Dropdown>
          <MenuButton className='dark:text-white flex items-center gap-x-4 capitalize'>{`${user.info.nombre.toLowerCase()} ${user.info.apellido.toLowerCase()}`}<DropdownIcon size={16} /></MenuButton>
          <Menu
            className='bg-secondary rounded-lg shadow-md dark:bg-secondary-dark dark:text-white p-2 w-64 mt-4'
          >

            <MenuItem><Link to={PATHS.PRIVATE.EDIT_ACCOUNT.path} className='flex gap-2 bg-secondary rounded-lg hover:shadow-lg dark:bg-secondary-dark hover:bg-noise px-2 py-1'><AccountIcon /> Mi perfil</Link></MenuItem>
            {user.info.rol === 1 &&
              <MenuItem><Link to={PATHS.PRIVATE.COMPANY.path} className='flex gap-2 bg-secondary rounded-lg hover:shadow-lg dark:bg-secondary-dark hover:bg-noise px-2 py-1'><CompanyIcon /> Empresa</Link></MenuItem>}
            <MenuItem><Link to={PATHS.PUBLIC.LOGIN.path} className='flex gap-2 bg-secondary rounded-lg hover:shadow-lg dark:bg-secondary-dark hover:bg-noise px-2 py-1' onClick={logout}><LogoutIcon /> Cerrar sesión</Link></MenuItem>
          </Menu>
        </Dropdown>
      </Navbar>

      <div className='w-full h-[calc(100vh_-_4rem)] flex bg-[#F1F2F5] dark:bg-[#1B2029] dark:text-white'>
        <Sidebar className='m-5' />

        <main className='py-3 px-6 lg:px-12 w-full h-full overflow-y-auto'>
          <Outlet />
        </main>
      </div>
    </>
  )
}
