import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  DashboardICon,
  EmployeesIcon,
  EquipmentIcon,
  LoanIcon,
  MaintanceIcon,
  MenuOpenICon,
  MenuCloseICon,
  AdminIcon
} from '@/components'
import { PATHS } from '../../constants/routePaths'
import { AuthContext } from '../../context/authProvider'
import { ReportIcon, ReportsIcon, ThirdIcon } from '../ui/Icons'

export function Sidebar () {
  const { user } = useContext(AuthContext)
  const [isAdmin, setIsAdmin] = useState(false)
  const [open, setOpen] = useState(() => {
    if (window.innerWidth < 768) {
      return false
    }
    return true
  })

  useEffect(() => {
    if (user.info.rol === 1) setIsAdmin(true)
  }, [])

  const handleClick = () => {
    setOpen(!open)
  }
  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      setOpen(false)
    }
  }
  const classNameNav = open
    ? 'ml-3'
    : ' -ml-72'

  const classNameButton = open
    ? ''
    : 'hover:w-10 hover:translate-x-4'

  return (
    <nav id='nav' className={`transition-transform duration-1000 dark:bg-secondary-dark dark:text-white fixed md:relative z-[100] w-72 h-[90%]  shadow-md rounded-lg bg-secondary ${classNameNav}`}>
      <button
        onClick={handleClick}
        id='menu-button'
        className={`absolute -right-6 rounded-r-2xl rounded-l-none top-1/3 flex h-10 w-6 items-center shadow-lg z-20  justify-end pr-1 bg-secondary dark:bg-secondary-dark text-black dark:text-white ${classNameButton}`}
      >{
        open
          ? <MenuOpenICon size={24} />
          : <MenuCloseICon size={24} />
      }

      </button>
      <ul className='text-md my-6 p-2 font-medium h-5/6' onClick={handleNavClick}>
        <li>
          <NavLink
            to={PATHS.PRIVATE.DASHBOARD.path}
            className='flex items-center gap-2 rounded-md px-4 py-3 hover:border hover:bg-secondary hover:bg-noise hover:shadow-lg dark:hover:border-secondary-dark dark:hover:bg-secondary-dark'
          >
            <DashboardICon />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to={PATHS.PRIVATE.PARKS.path}
            className='flex items-center gap-2 rounded-md px-4 py-3 hover:border hover:bg-secondary hover:bg-noise hover:shadow-lg dark:hover:border-secondary-dark dark:hover:bg-secondary-dark'
          >
            <DashboardICon />
            Explorar Parqueaderos
          </NavLink>
        </li>

        <li>
          <NavLink
            to={PATHS.PRIVATE.CARS.path}
            className='flex items-center gap-2 rounded-md px-4 py-3 hover:border hover:bg-secondary hover:bg-noise hover:shadow-lg dark:hover:border-secondary-dark dark:hover:bg-secondary-dark'
          >
            <DashboardICon />
            Mis autos
          </NavLink>
        </li>

        <li>
          <NavLink
            to={PATHS.PRIVATE.DASHBOARD.path}
            className='flex items-center gap-2 rounded-md px-4 py-3 hover:border hover:bg-secondary hover:bg-noise hover:shadow-lg dark:hover:border-secondary-dark dark:hover:bg-secondary-dark'
          >
            <DashboardICon />
            Mis parqueaderos favoritos
          </NavLink>
        </li>
        

      </ul>
    </nav>
  )
}
