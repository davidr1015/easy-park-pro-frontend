import { Button } from 'flowbite-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FloatingInput } from '@/components'
import { PATHS } from '../../constants/routePaths'
import { Controller, useForm } from 'react-hook-form'
import { ENDPOINTS } from '../../constants/endpoints'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export function ChangePassword () {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: ''
    }
  })

  const { email, token } = useParams()
  const navigate = useNavigate()

  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  useEffect(() => {
    if (error) {
      toast.error(error)
    }
    if (success) {
      toast.success(success)
    }
  }, [error, success])

  const onSubmit = (Data) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('token')
      },
      body: JSON.stringify({ correo: email, token, nueva_contrasena: Data.password })
    }

    fetch(ENDPOINTS.CHANGE_PASSWORD, options)
      .then(response => response.json())
      .then(data => {
        if (data.body.error) {
          setError(data.body.error)
          setTimeout(() => {
            setError(null)
          })
          return
        }

        // reset()
        setSuccess(data.body.message)
        setTimeout(() => {
          navigate(PATHS.PUBLIC.LOGIN.path)
          setSuccess(null)
        }, 2000)
      }
      )
  }
  return (

    <section className='flex mb-auto max-w-full mx-8 flex-col rounded-lg bg-secondary bg-noise shadow-md md:max-w-2xl dark:bg-primary-dark'>

      <div className='w-full p-5'>
        <h2 className='text-2xl font-semibold text-tertiary dark:text-white'>
          Cambiar contraseña
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-4'
        >
          <div className='mt-4'>
            <Controller
              control={control}
              name='password'
              rules={{
                required: 'El campo contraseña es requerido',
                minLength: { value: 8, message: 'La contraseña debe tener al menos 8 caracteres de longitud' }
              }}
              render={({ field: { value, onChange } }) => (
                <FloatingInput
                  type='password'
                  className='sm:col-span-3'
                  label='Contraseña'
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
                  className='sm:col-span-3'
                  label='Confirmar contraseña'
                  value={value}
                  onValueChange={onChange}
                  color={errors.confirmPassword && 'error'}
                  helperText={errors?.confirmPassword?.message}
                />
              )}
            />
          </div>

          <div className='flex justify-end gap-x-3'>
            <Button
              type='submit'
              className='w-52 bg-tertiary'
            >
              Continuar
            </Button>
            <Link
              to={PATHS.PUBLIC.LOGIN.path}
              className='h-10 w-52 rounded-lg bg-transparent border border-gray-500 bg-gray-50 text-black p-2 px-1 text-center hover:bg-black/15 dark:text-white'
            >
              Cancelar
            </Link>
          </div>
        </form>

      </div>
    </section>
  )
}
