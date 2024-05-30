import { Tooltip } from 'flowbite-react'
import { InfoIcon } from '../ui/Icons'

export function CheckboxForm ({ label, type = 'text', name, className, onValueChange, value, helperText, color }) {
  return (
    <div className={className}>
      <label htmlFor='last-name' className='block text-sm font-medium leading-6 dark:text-white'>{label}</label>
      <div className='mt-2 relative'>
        <input type='checkbox' checked={value} name={name} onChange={onValueChange} value={value} className='w-6 h-6 rounded-md border-0 py-1.5  bg-secondary shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white dark:bg-secondary-dark' />
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

    </div>

  )
}
