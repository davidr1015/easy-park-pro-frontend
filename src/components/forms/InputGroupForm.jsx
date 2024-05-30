import { useId } from 'react'
import { Tooltip } from 'flowbite-react'
import { InfoIcon } from '../ui/Icons'

export function InputGroupForm ({ label, type = 'text', name, className, options, helperText, color, onValueChange, defaultValue }) {
  const id = useId()
  return (

    <div className={className}>
      <label htmlFor='last-name' className='block text-sm font-medium leading-6 dark:text-white'>{label}</label>
      <div className='mt-2 relative'>

        <ul className='max-w-full rounded-lg grid grid-cols-2 lg:grid-cols-4 gap-4'>
          {options.map((option) => (
            <li key={option.id} className='col-span-1 bg-secondary dark:bg-secondary-dark rounded-lg shadow-md py-2 pl-2 flex  '>
              <div className=' flex items-center justify-between w-full px-2'>
                <label htmlFor={`${id}${option.id}`} className='text-sm font-medium dark:text-white w-full capitalize overflow-ellipsis'>{(option.description).toLowerCase()} </label>
                <input id={`${id}${option.id}`} type='radio' value={option.id} onChange={onValueChange} name={name} checked={defaultValue === option.id} className='w-4 h-4 text-tertiary border-gray-300 focus:text-tertiary dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500' />
              </div>
            </li>

          ))}
        </ul>
        {
        helperText &&
          <div className='inline-block absolute -right-6 top-3 max-h-min'>
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
