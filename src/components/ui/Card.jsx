export function Card ({ icon, label, children }) {
  return (
    <div
      className='bg-secondary bg-noise min-h-28 rounded-lg shadow-md dark:bg-secondary-dark overflow-hidden'
    >
      <div className='w-full h-full p-3 flex flex-col justify-between items-start'>
        <header>
          <div className='bg-tertiary text-gray-200 dark:bg-purple-950 dark:text-white w-10 h-10 p-2 rounded-full shadow-md'>
            {icon}
          </div>
        </header>
        <div className='text-3xl self-center font-bold my-3 w-full text-center flex justify-center'>{children}</div>
        <h2 className='text-md font-semibold text-gray-600 dark:text-white/90'>{label}</h2>
      </div>
    </div>
  )
}
