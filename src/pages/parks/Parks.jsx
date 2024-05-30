import { DataTable, Card, EmployeesIcon, EquipmentIcon, LoanIcon } from '@/components'

import { DashboardICon } from '../../components/ui/Icons'
import { useEffect } from 'react'
import { ParkCard } from '../../components/ui/ParkCard'
import { Payment } from '../../components/ui/Payment'


export function Parks () {
 

  return (
    <>

      <h1 className='text-4xl font-semibold mb-7'>Explorar parqueaderos disponibles</h1>

      <div className='flex flex-col gap-4'>
        <div className='grid max-w-full auto-rows-min px-3 lg:grid-cols-4 gap-6 '>

          <ParkCard/>
          <ParkCard/>
          <ParkCard/>
          <ParkCard/>
          <ParkCard/>
          <ParkCard/>
          <ParkCard/>
          <ParkCard/>
          <ParkCard/>
          <ParkCard/>
        </div>

      <div className='max-w-3xl'>
      <Payment />
      </div>

        
      </div>

    </>
  )
}
