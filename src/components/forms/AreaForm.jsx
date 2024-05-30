import { Tooltip } from 'flowbite-react'
import { InfoIcon } from '../ui/Icons'

export function AreaForm ({ label, type = 'text', name, className, description, value, onValueChange, helperText, color }) {
  return (
    <div className={className}>
      <label htmlFor='about' className='block text-sm font-medium leading-6 text-black dark:text-white'>{label}</label>
      <div className='mt-2 relative'>
        <textarea name={name} rows='3' className='block w-full bg-secondary dark:bg-secondary-dark rounded-md border-0 py-1 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white' value={value} onChange={onValueChange} />
        {
        helperText &&
          <div className='inline-block absolute right-2 top-0 bottom-0 my-auto max-h-min'>
            <Tooltip content={helperText} placement='bottom' className='z-20'>
              <div className={color === 'error' ? 'text-red-500' : 'text-black/60'}>
                <InfoIcon />
              </div>
            </Tooltip>
          </div>
      }
      </div>
      <p className='mt-3 text-xs leading-6 text-black/80 dark:text-white/80'>{description}</p>

    </div>
  )
}
