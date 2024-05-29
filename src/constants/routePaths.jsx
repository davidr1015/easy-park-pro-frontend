
import {Dashboard,  ErrorPage, ConfirmEmail } from '../pages'


export const PATHS = {
  PUBLIC: {
    LOGIN: { path: '/login', element: <Login /> },
    SIGNUP: { path: '/signup', element: <SignUp /> },
    RESETPASSWORD: { path: '/reset-password', element: <ResetPassword /> },
    CHANGEPASSWORD: {
      path: '/reset-password/:email/:token',
      element: <ChangePassword />
    }
  },
  PRIVATE: {
    DASHBOARD: { path: '/', element: <Dashboard /> },
  },
  CONFIRM_EMAIL: {
    path: '/confirm-email/:email/:token',
    element: <ConfirmEmail />
  },
  DEFAULTPAGE: { path: '*', element: <ErrorPage /> }
}
