import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { FloatingInput } from '@/components'
import { PATHS } from '../../constants/routePaths'
import { Controller, useForm } from 'react-hook-form'
import { ENDPOINTS } from '../../constants/endpoints'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export function ResetPassword () {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      correo: ''
    }
  })

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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Data)
    }

    fetch(ENDPOINTS.RECOVER_PASSWORD, options)
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
          reset()
          setSuccess(null)
        }, 2000)
      }
      )
  }
  return (

    <section className='flex mb-auto max-w-full mx-8 flex-col rounded-lg bg-secondary bg-noise shadow-md md:max-w-2xl dark:bg-primary-dark'>
      <div className='h-60 w-full p-5'>
        <img
          className='h-full w-full rounded-lg object-cover object-top'
          src='/resetPassword.webp'
          alt=''
        />
      </div>

      <div className='w-full p-5'>
        <h2 className='text-2xl font-semibold text-tertiary dark:text-white'>
          Recupera tu contraseña
        </h2>
        <p className='mt-1 text-sm text-tertiary/60 dark:text-white/70'>
          Ingresa tu correo electrónico y te enviaremos un enlace para que
          recuperes el acceso a tu cuenta.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col gap-4'
        >
          <div className='mt-4'>
            <Controller
              control={control}
              name='correo'
              rules={{
                required: 'El campo correo electrónico es requerido'
              }}
              render={({ field: { value, onChange } }) => (
                <FloatingInput
                  type='email'
                  className='sm:col-span-3'
                  label='Correo Electrónico'
                  value={value}
                  onValueChange={onChange}
                  color={errors.correo && 'error'}
                  helperText={errors?.correo?.message}
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
