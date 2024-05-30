import { useContext, useMemo } from 'react'
import { AuthContext } from '@/context'
import { Navigate } from 'react-router-dom'
import { PATHS } from '../constants/routePaths'

export const PublicRoute = ({ children }) => {
  const context = useContext(AuthContext)
  const isAuthenticated = useMemo(() => context?.user.status === 'authenticated', [context?.user.status])
  return !isAuthenticated ? children : <Navigate to={PATHS.PRIVATE.DASHBOARD.path} />
}
