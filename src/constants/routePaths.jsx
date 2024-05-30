import {
  Login,
  Dashboard,
  SignUp,
  ResetPassword,
  ConfirmEmail,
  ChangePassword,
} from '@/pages'
import { Landing } from '../pages'
import { Parks } from '../pages/parks'
import { Cars } from '../pages/cars'

export const PATHS = {
  PUBLIC: {

    LANDING: { path: '/', element: <Landing/> },
    LOGIN: { path: '/login', element: <Login /> },
    SIGNUP: { path: '/signup', element: <SignUp /> },
    RESETPASSWORD: { path: '/reset-password', element: <ResetPassword /> },
    CHANGEPASSWORD: {
      path: '/reset-password/:email/:token',
      element: <ChangePassword />
    }
  },
  PRIVATE: {
    DASHBOARD: { path: '/dashboard', element: <Dashboard /> },
    PARKS: { path: '/parqueaderos', element: <Parks /> },
    CARS: { path: '/mis-autos', element: <Cars /> },
   
  },
  CONFIRM_EMAIL: {
    path: '/confirm-email/:email/:token',
    element: <ConfirmEmail />
  },
  DEFAULTPAGE: { path: '*', element: <Login /> }
}
