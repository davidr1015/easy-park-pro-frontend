import React from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
}

export default function MultipleSelectCheckmarks ({ value, onChange, options, className, label }) {
  const handleChange = (event) => {
    const {
      target: { value: selectedValues }
    } = event
    onChange(selectedValues)
  }

  const getSelectedNames = () => {
    return options.filter(option => value.includes(option.id)).map(option => option.nombre).join(', ')
  }

  return (
    <div className={className}>
      <label htmlFor='last-name' className='block text-sm font-medium leading-6 dark:text-white'>{label}</label>
      <div className='mt-2 relative'>
        <div className='bg-secondary dark:bg-secondary-dark border-gray-300 bg-red'>
          <FormControl style={{ width: '100%', margin: 0, padding: 0, height: 35, borderColor: 'inherit' }}>
            <Select
              labelId='demo-multiple-checkbox-label'
              id='demo-multiple-checkbox'
              multiple
              value={value}
              onChange={handleChange}
              renderValue={() => getSelectedNames()}
              MenuProps={MenuProps}
              style={{ display: 'flex', width: '100%', borderRadius: '6px', backgroundColor: 'inherit', alignItems: 'center', height: '100%', border: '1px solid black', borderColor: 'inherit' }}
            >
              {options.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  <Checkbox checked={value.indexOf(item.id) > -1} />
                  <ListItemText primary={item.nombre} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>

  )
}
