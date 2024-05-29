import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '@/context'
import toast from 'react-hot-toast'

export function useSignup () {
  const { user, signUp, logout } = useContext(AuthContext)
  const { control, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      cedula: '',
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      direccion: '',
      ciudad: '',
      password: '',
      confirmPassword: '',
      terminos: '',
      estado: '0'
    }
  })

  useEffect(() => {
    if (user.info.message) {
      toast.success(user.info.message)
    }
  }, [user.info])

  const onSubmit = (data) => {
    signUp(data)
    reset()
  }

  const resetStatus = () => {
    logout()
  }

  return { onSubmit, resetStatus, user, formState: { control, handleSubmit, errors, watch } }
}
