import { FloatingLabel, Tooltip } from 'flowbite-react'
import { InfoIcon } from '../ui/Icons'
export function FloatingInput ({
  label,
  type,
  required = false,
  onValueChange,
  helperText,
  color,
  ...props
}) {
  return (
    <div className='relative'>

      <FloatingLabel
        label={label}
        type={type}
        required={required}
        variant='outlined'
        sizing='sm'
        className='bg-secondary dark:bg-secondary-dark dark:text-white m-0'
        onChange={onValueChange}
        color={color}
        {...props}
      />
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
  )
}
