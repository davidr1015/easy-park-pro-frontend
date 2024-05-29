export const LoadingLayout = () => {
  return (
    <main className='bg-primary dark:bg-primary-dark dark:text-white w-full h-screen flex items-center'>
      <div className='flex justify-center items-center gap-3 mx-auto animate-bounce'>
        <span className='text-4xl text-tertiary dark:text-white font-medium'>L</span>
        <div className='rounded-md h-6 w-6 border-4 border-t-4 border-tertiary dark:border-white animate-spin ' />
        <span className='text-4xl text-tertiary dark:text-white font-medium'>ADING</span>
      </div>
    </main>
  )
}
