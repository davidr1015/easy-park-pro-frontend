import React, { useEffect, useState } from 'react'
import { Tooltip } from 'flowbite-react'
import { InfoIcon } from '../ui/Icons'

export const DatalistForm = ({ options, className, label, name, placeholder, onValueChange, defaultValue, helperText, color }) => {
  const [inputValue, setInputValue] = useState('')
  const [filteredOptions, setFilteredOptions] = useState([])

  useEffect(() => {
    setInputValue(defaultValue)
  }, [])

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)

    const filtered = options.filter((option) =>
      option.description.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredOptions(filtered)
  }

  const handleSelect = (e) => {
    setInputValue(e.target.value)
    onValueChange(e.target.value)
  }

  return (
    <div className={className}>
      <label htmlFor='last-name' className='block text-sm font-medium leading-6 dark:text-white'>{label}</label>
      <div className='w-full rounded-md py-1.5 bg-secondary shadow-sm sm:text-sm sm:leading-6 dark:text-white dark:bg-secondary-dark flex flex-wrap md:flex-nowrap'>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          name={name}
          className='md:w-[50%] w-full bg-transparent border-0 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:text-white'
        />
        <div className='relative md:w-[50%] w-full'>
          <select value={inputValue} onChange={handleSelect} className='w-full bg-transparent border-none'>
            <option key='0' className='bg-secondary text-black dark:bg-secondary-dark dark:text-white' value='' selected> Elige una opción</option>
            {filteredOptions.length > 0
              ? filteredOptions.map((option, index) => (
                <option key={index} value={option.id} className='bg-secondary text-black dark:bg-secondary-dark dark:text-white'>
                  {option.description}
                </option>
              ))
              : <option disabled>No hay opciones disponibles</option>}
          </select>
          {
        helperText &&
          <div className='inline-block absolute -right-4 top-0 bottom-0 my-auto max-h-min'>
            <Tooltip content={helperText} placement='bottom' className='z-20'>
              <div className={color === 'error' ? 'text-red-500' : 'text-black/60'}>
                <InfoIcon />
              </div>
            </Tooltip>
          </div>
      }
        </div>
      </div>
    </div>
  )
}
