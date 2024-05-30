import { ENDPOINTS } from '../constants/endpoints'
import { createContext, useReducer } from 'react'
import { initialState, authReducer } from '@/context/reducers'

export const AuthContext = createContext({})

export function AuthProvider ({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = ({ email, password }) => {
    dispatch({ type: 'CHECKING' })
    const data = { correo: email, password }
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch(ENDPOINTS.LOGIN, options)
      .then(response => response.json())
      .then(
        data => {
          if (data.body.error) throw new Error(data.body.error)
          window.localStorage.setItem('token', data.body.token)
          window.localStorage.setItem('token-init-date', new Date().getTime())

          dispatch({
            type: 'LOGIN',
            payload: {
              id: data.body.user.id,
              cedula: data.body.user.cedula,
              nombre: data.body.user.nombre,
              apellido: data.body.user.apellido,
              rol: data.body.user.id_rol,
              correo: data.body.user.correo
            }
          })
        })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error })
        setTimeout(() => {
          logout()
        }, 5000)
      })
  }

  const signUp = (userData) => {
    dispatch({ type: 'CHECKING' })
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }

    fetch(ENDPOINTS.SIGNUP, options)
      .then(response => response.json())
      .then(
        data => {
          if (data.body.error) throw new Error(data.body.error)
          dispatch({
            type: 'SIGNUP',
            payload: {
              message: data.body.message
            }
          })
        }
      )
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error })
        setTimeout(() => {
          dispatch({ type: 'LOGOUT' })
        }, 5000)
      })
  }

  const logout = () => {
    window.localStorage.clear()
    dispatch({ type: 'LOGOUT' })
  }

  const checkingCredentials = () => {
    const token = window.localStorage.getItem('token')
    if (!token) return logout()

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    }
    fetch(ENDPOINTS.CHECK, options)
      .then(response => response.json())
      .then(data => {
        if (data.body.error) throw new Error(data.body.error)
        window.localStorage.setItem('token', data.body.token)
        window.localStorage.setItem('token-init-date', new Date().getTime())

        dispatch({
          type: 'LOGIN',
          payload: {
            id: data.body.responseData.empleado.id,
            cedula: data.body.responseData.empleado.cedula,
            nombre: data.body.responseData.empleado.nombre,
            apellido: data.body.responseData.empleado.apellido,
            correo: data.body.responseData.empleado.correo,
            rol: data.body.responseData.empleado.rol,
            permisos: data.body.responseData.rol_permisos
          }
        })
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error })
        window.localStorage.clear()
        logout()
      })
  }

  return (
    <AuthContext.Provider
      value={{
        user: state,
        login,
        signUp,
        logout,
        checkingCredentials
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
