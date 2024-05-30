import * as React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

export default function ComboBox ({
  label,
  name,
  placeholder,
  options,
  onValueChange,
  className
}) {
  const handleChange = (event, value) => {
    onValueChange(name, value ? value.id : '') // Mantenemos el mismo comportamiento para cuando el valor es seleccionado o no
  }

  return (
    <div className={className}>
      <label
        htmlFor='last-name'
        className='block text-sm font-medium leading-6 dark:text-white'
      >
        {label}
      </label>
      <div className='relative mt-2'>
        <div className='border-gray-300 bg-secondary dark:bg-secondary-dark'>
          {options.length > 0 && (
            <Autocomplete
              disablePortal
              isOptionEqualToValue={(option, value) => option.id === value.id}
              options={options}
              getOptionLabel={(option) => option.description}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  suppressHydrationWarning
                  suppressContentEditableWarning
                  {...params}
                  name={name}
                  placeholder={placeholder}
                  className='block w-full rounded-md border-0 bg-secondary py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:bg-secondary-dark dark:text-white sm:text-sm sm:leading-6'
                />
              )}
            />
          )}
        </div>
      </div>
    </div>
  )
}
