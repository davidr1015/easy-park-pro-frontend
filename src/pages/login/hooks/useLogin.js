import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '@/context'
export function useLogin () {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      correo: '',
      password: ''
    }
  })
  const { login } = useContext(AuthContext)
  const onSubmit = ({ correo, password }) => {
    login({ email: correo, password })
  }

  return { onSubmit, formState: { control, handleSubmit, errors } }
}
