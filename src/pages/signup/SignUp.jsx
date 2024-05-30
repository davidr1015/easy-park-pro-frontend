import { Link } from 'react-router-dom'
import { Button, Checkbox } from 'flowbite-react'
import { FloatingInput, AlertDialog } from '@/components'
import { useSignup } from './hooks/useSignup'
import { Controller } from 'react-hook-form'
import { Toaster } from 'react-hot-toast'
import { PATHS } from '../../constants/routePaths'
import { CheckboxForm } from '../../components'

export function SignUp () {
  const { user, onSubmit, resetStatus, formState } = useSignup()
  const { control, handleSubmit, errors, watch } = formState

  return (
    <>
      <div className='capitalize'><Toaster /></div>
      <section className='mb-auto w-11/12 max-w-4xl rounded-lg bg-secondary bg-noise p-4 shadow-md md:mt-4 md:min-w-[500px] md:py-4 md:pr-4 dark:bg-secondary-dark'>

        <div className='px-10 py-5'>
          <h2 className='text-2xl font-semibold text-tertiary dark:text-white'>Solicita tu cuenta</h2>
          <p className='mt-1 text-sm text-dark/4. dark:text-white/70'>
            ¡Bienvenido! Por favor, ingresa tus datos para registrarte.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete='off'
            className='grid grid-cols-1 gap-3'
          >

            <div className='mt-3 grid md:grid-cols-2 gap-3'>
              <Controller
                control={control}
                name='cedula'
                rules={{
                  required: 'El campo numero de identificación es requerido'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='number'
                    label='*Numero de identificación'
                    value={value}
                    onValueChange={onChange}
                    color={errors.cedula && 'error'}
                    helperText={errors?.cedula?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='nombre'
                rules={{
                  required: 'El campo nombres es requerido'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='text'
                    label='*Nombres'
                    value={value.toUpperCase()}
                    onValueChange={onChange}
                    color={errors.nombre && 'error'}
                    helperText={errors?.nombre?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name='apellido'
                rules={{
                  required: 'El campo apellidos es obligatorio'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='text'
                    label='*Apellidos'
                    value={value.toUpperCase()}
                    onValueChange={onChange}
                    color={errors.apellido && 'error'}
                    helperText={errors?.apellido?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='correo'
                rules={{
                  required: 'El campo correo electrónico es requerido'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='email'
                    label='*Correo Electronico'
                    value={value}
                    onValueChange={onChange}
                    color={errors.correo && 'error'}
                    helperText={errors?.correo?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='telefono'
                rules={{
                  required: 'El campo telefono es requerido'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='number'
                    label='*Teléfono'
                    value={value}
                    onValueChange={onChange}
                    color={errors.telefono && 'error'}
                    helperText={errors?.telefono?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='direccion'
                rules={{
                  required: 'El campo dirección es requerido'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='text'
                    label='*Dirección'
                    value={value.toUpperCase()}
                    onValueChange={onChange}
                    color={errors.direccion && 'error'}
                    helperText={errors?.direccion?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='ciudad'
                rules={{
                  required: 'El campo ciudad es requerido'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='text'
                    label='*Ciudad'
                    value={value.toUpperCase()}
                    onValueChange={onChange}
                    color={errors.ciudad && 'error'}
                    helperText={errors?.ciudad?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='password'
                rules={{
                  required: 'El campo contraseña es requerido',
                  minLength: { value: 8, message: 'La contrasela debe tener al menos 8 caracteres de longitud' }
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='password'
                    label='*Contraseña'
                    value={value}
                    onValueChange={onChange}
                    color={errors.password && 'error'}
                    helperText={errors?.password?.message}
                  />
                )}
              />

              <Controller
                control={control}
                name='confirmPassword'
                rules={{
                  required: 'El campo confirmar contraseña es requerido',
                  validate: value => value === watch('password') || 'Las contraseñas no coinciden'
                }}
                render={({ field: { value, onChange } }) => (
                  <FloatingInput
                    type='password'
                    label='*Confirmar contraseña'
                    value={value}
                    onValueChange={onChange}
                    color={errors.confirmPassword && 'error'}
                    helperText={errors?.confirmPassword?.message}
                  />
                )}
              />

            </div>

            <Controller
              control={control}
              name='terminos'
              rules={{
                required: 'El campo terminos y condiciones'
              }}
              render={({ field: { value, onChange } }) => (
                <CheckboxForm
                  type='password'
                  className='flex flex-row-reverse gap-2 text-gray-800'
                  label={<span>Acepto terminos y condiciones y autorizo el tratamiento de mis datos personales conforme a la politica de privacidad y tratamiento de datos personales</span>}
                  value={value}
                  onValueChange={onChange}
                  color={errors.terminos && 'error'}
                  helperText={errors?.terminos?.message}
                />
              )}
            />

            {/* <Controller
              control={control}
              name='terminos'
              rules={{
                required: 'El campo terminos y condiciones',
                validate: value => value === watch('password') || 'Las contraseñas no coinciden'
              }}
              render={({ field: { value, onChange } }) => (
                <CheckboxForm
                  type='password'
                  className='flex flex-row-reverse gap-2'
                  label='*Acepto terminos y condiciones y autorizo el tratamiento de mis datos personales conforme a la politica de privacidad y tratamiento de datos personales'
                  value={value}
                  onValueChange={onChange}
                  color={errors.confirmPassword && 'error'}
                  helperText={errors?.confirmPassword?.message}
                />
              )}
            /> */}

            <Button
              className='w-full bg-tertiary  col-span-1'
              type='submit'
            >
              Registrar
            </Button>
          </form>

          <div className='mt-5 flex items-center justify-center text-gray-500'>
            <hr className=' border-gray-500 flex-1' />
            <span className='inline-block w-10 text-center'>ó</span>
            <hr className=' border-gray-500 flex-1' />
          </div>

          <div className='mt-4 flex flex-col items-center justify-end gap-5 text-xs md:flex-row md:justify-end'>
            <div className='flex  flex-col items-center justify-end gap-4 md:order-2 md:flex-row'>
              <p>¿Ya tienes una cuenta?</p>
              <Link
                to={PATHS.PUBLIC.LOGIN.path}
                className='w-32 rounded-lg border border-tertiary py-2 px-3 text-center hover:bg-tertiary hover:text-white hover:font-semibold'
              >
                Inicia sesión
              </Link>
            </div>
          </div>
        </div>
      </section>

      {user.info.message &&
        <AlertDialog>
          <div className='h-60 w-full p-5'>
            <img
              className='h-full w-full rounded-lg object-cover object-top'
              src='/thanks.webp'
              alt=''
            />
          </div>

          <div className='w-full p-5 text-center max-w-[70%] mx-auto'>
            <h2 className='text-2xl font-semibold text-tertiary dark:text-white mb-4 text-center'>
              ¡Gracias por registrarte!
            </h2>
            <p className='mt-1 text-md text-black dark:text-white'>Hemos enviado un correo electrónico a su cuenta.</p>
            <p className='mt-1 text-md text-black dark:text-white'>Revisa tu bandeja de entrada para completar el proceso de registro. Después de verificar su correo electrónico,
              puede iniciar sesión en la aplicación.
            </p>
            <div
              className='flex flex-col gap-4 mt-6'
            >
              <div className='flex justify-center gap-x-3'>
                <Button
                  onClick={resetStatus}
                  className='w-52 bg-tertiary'
                >
                  Aceptar
                </Button>

              </div>
            </div>

          </div>
        </AlertDialog>}
    </>
  )
}
