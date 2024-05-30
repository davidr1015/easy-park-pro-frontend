import { Link } from 'react-router-dom'
import { FloatingInput } from '@/components'
import { Button } from 'flowbite-react'
import { useLogin } from './hooks/useLogin'
import { Controller } from 'react-hook-form'
import { PATHS } from '../../constants/routePaths'
import { Toaster } from 'react-hot-toast'

export function Login () {
  const { onSubmit, formState } = useLogin()
  const { control, handleSubmit, errors } = formState

  return (
    <>
      <div><Toaster /></div>
      <section className='mb-auto flex w-11/12 flex-col gap-y-6 rounded-lg bg-secondary bg-noise p-4 shadow-md dark:bg-secondary-dark md:w-auto md:min-w-[500px] md:py-4 md:pr-4 lg:flex-row xl:min-w-[900px]'>
        <div className='h-36 w-full lg:order-1 lg:h-full lg:w-2/3 lg:pl-4 xl:w-1/2'>
          <img
            className='max-h-full w-full rounded-lg object-cover object-center lg:h-[25rem] xl:h-[30rem]'
            src='https://images.unsplash.com/photo-1542128962-9d50ad7bf014?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </div>

        <div className='lg:w-2/3 lg:px-5 xl:w-1/2'>
          <h2 className='text-2xl font-semibold text-tertiary dark:text-white xl:text-3xl'>
            Iniciar sesión
          </h2>

          <p className='mt-1text-sm text-tertiary/60 dark:text-white/70'>
            Ingresa tus datos para iniciar sesión
          </p>

          <form
            className='flex flex-col gap-2 xl:gap-4'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className=' mt-4 flex flex-col gap-2'>
              <Controller
                control={control}
                name='correo'
                rules={{
                  required: 'El email es requerido',
                  pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'Email inválido' }
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='email'
                    label='Correo Electrónico'
                    value={value}
                    onValueChange={onChange}
                    color={errors.correo && 'error'}
                    helperText={errors?.correo?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='password'
                rules={{
                  required: 'La contraseña es requerida'
                  // minLength: 'La contaseña debe tener minimo 8 caracteres',
                  // pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, message: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un dígito numérico.' }
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='password'
                    label='Contraseña'
                    value={value}
                    onValueChange={onChange}
                    color={errors.password && 'error'}
                    helperText={errors?.password?.message}
                  />
                )}
              />

            </div>

            <Button type='submit' className='bg-tertiary'>
              Ingresar
            </Button>
          </form>

          <Link
            to={PATHS.PUBLIC.RESETPASSWORD.path}
            className='mt-3 inline-block text-sm text-gray-600 hover:underline dark:text-white/70'
          >
            ¿Olvidaste tu contraseña?
          </Link>

          <div className='mt-5 flex items-center justify-center text-gray-500 lg:my-4 xl:my-8'>
            <hr className='flex-1 border-gray-500' />
            <span className='mx-3 inline-block w-5 text-center'>ó</span>
            <hr className='flex-1 border-gray-500' />
          </div>

          <div className='mt-auto flex flex-col items-center justify-between gap-4 text-sm lg:flex-row'>
            <p>¿Aún no tienes una cuenta?</p>
            <Link
              to={PATHS.PUBLIC.SIGNUP.path}
              className='w-1/2 rounded-lg border border-tertiary p-2 text-center hover:bg-tertiary hover:text-white'
            >
              Registrate
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
