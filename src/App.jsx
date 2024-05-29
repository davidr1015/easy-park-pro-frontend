import LandingPage from './components/LandingPage'
import { AuthProvider } from './context/authProvider'
import {BrowserRoutes} from './Routes/routes'

function App() {

  return (
    <AuthProvider>
    <BrowserRoutes />
  </AuthProvider>
  )
}

export default App
