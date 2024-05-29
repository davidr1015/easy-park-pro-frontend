import { DataTable, Card, EmployeesIcon, EquipmentIcon, LoanIcon } from '../../components'


import { DashboardICon } from '../../components/ui/Icons'
import { useEffect } from 'react'

export function Dashboard () {
  

  return (
    <>

      <h1 className='text-4xl font-semibold mb-7'>Bienvenido</h1>

      <div className='flex flex-col gap-4'>
        <div className='grid max-w-full auto-rows-min px-3 lg:grid-cols-3 gap-6 '>

          <Card label='Equipos registrados' icon={<EquipmentIcon />}> 2</Card>
          <Card label='Empleados registrados' icon={<EmployeesIcon />}> 4</Card>
          <Card label='Prestamos registrados' icon={<LoanIcon />}> 8</Card>
        </div>


      

      </div>

    </>
  )
}
