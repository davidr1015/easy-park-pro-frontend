import { useContext, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { LoginLayout, DashboardLayout, LoadingLayout } from '@/layout'
import { PublicRoute, PrivateRoute } from '@/Routes'
import { AuthContext } from '../context/authProvider'
import { PATHS } from '../constants/routePaths'

export const BrowserRoutes = () => {
  const { user, checkingCredentials } = useContext(AuthContext)
  useEffect(() => {
    checkingCredentials(user)
  }, [])
  if (user.status === 'checking') {
    return <LoadingLayout />
  }

  const renderRoutes = (routesObject) => {
    return Object.values(routesObject).map(route => {
      if (route.path && route.element) {
        return <Route key={route.path} path={route.path} element={route.element} />
      } else {
        return []
      }
    })
  }
  return (
    <HashRouter>
      <Routes>

        <Route element={
          <PublicRoute>
            <LoginLayout />
          </PublicRoute>
        }
        >
          {renderRoutes(PATHS.PUBLIC)}
        </Route>

        <Route element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
        >
          {renderRoutes(PATHS.PRIVATE)}
        </Route>

        <Route element={<LoginLayout />}>
          <Route path={PATHS.DEFAULTPAGE.path} element={PATHS.DEFAULTPAGE.element} />
          <Route path={PATHS.CONFIRM_EMAIL.path} element={PATHS.CONFIRM_EMAIL.element} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
