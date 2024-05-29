import { Link, useNavigate, useParams } from 'react-router-dom'
import { ENDPOINTS } from '../../constants/endpoints'
import { PATHS } from '../../constants/routePaths'
import toast, { Toaster } from 'react-hot-toast'

export function ConfirmEmail () {
  const { email, token } = useParams()
  const navigate = useNavigate()

  const handleClick = () => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('token')
      },
      body: JSON.stringify({ correo: email, token })
    }
    fetch(ENDPOINTS.CONFIRM_EMAIL, options)
      .then(response => response.json())
      .then(
        data => {
          toast.success(data.body.message)
          setTimeout(() => {
            navigate(PATHS.PUBLIC.LOGIN.path)
          }, 1000)
        }
      )
  }
  return (
    <>
      <div><Toaster /></div>
      <section className='flex mb-auto max-w-full mx-8 flex-col rounded-lg bg-secondary bg-noise shadow-md md:max-w-2xl dark:bg-primary-dark'>
        <div className='h-60 w-full p-5'>
          <img
            className='h-full w-full rounded-lg object-cover object-top'
            src='/confirmEmail.webp'
            alt=''
          />
        </div>

        <div className='w-full p-5'>
          <h2 className='text-2xl font-semibold text-tertiary dark:text-white mb-4'>
            Confirmar email
          </h2>
          <p className='mt-1 text-sm text-tertiary/60 dark:text-white/70' />
          <div
            className='flex flex-col gap-4'
          >
            <div className='flex justify-end gap-x-3'>
              <Button
                className='w-52 bg-tertiary'
                onClick={handleClick}
              >
                Confirmar
              </Button>
              <Link
                to={PATHS.PUBLIC.LOGIN.path}
                className='h-10 w-52 rounded-lg bg-transparent border border-gray-500 bg-gray-50 text-black p-2 px-1 text-center hover:bg-black/15 dark:text-white'
              >
                Cancelar
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
