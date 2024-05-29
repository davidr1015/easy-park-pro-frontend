import { Link } from 'react-router-dom'
import { PATHS } from '../../constants/routePaths'

export function ErrorPage () {
  return (

    <div className='flex justify-center items-center h-screen w-full'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-gray-800 mb-4'>404</h1>
        <p className='text-lg text-gray-600 mb-8'>La página que estás buscando no se pudo encontrar.</p>
        <Link to={PATHS.PRIVATE.DASHBOARD.path} className='bg-tertiary hover:text-lg text-white font-semibold px-6 py-3 rounded-md shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
          Ir a la página de inicio
        </Link>
      </div>
    </div>

  )
}
