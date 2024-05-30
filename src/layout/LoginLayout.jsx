import { Outlet } from 'react-router'
import { Navbar, Background } from '@/components'
import { AuthContext } from '@/context/authProvider'
import { useContext, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export const LoginLayout = () => {
  const context = useContext(AuthContext)

  useEffect(() => {
    if (context?.user.errorMessage) {
      toast.error(context?.user.errorMessage.message)
    }
  }, [context?.user.errorMessage])

  return (
    <>
      <div className='capitalize'><Toaster /></div>
      <Background />
      <main className='flex min-h-screen flex-col items-center  justify-center pb-4 dark:text-white'>
        <Navbar className='mb-auto bg-transparent dark:bg-transparent' />
        <Outlet />
      </main>
    </>
  )
}
