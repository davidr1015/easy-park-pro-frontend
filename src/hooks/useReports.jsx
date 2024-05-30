import { useState } from 'react'
import { ENDPOINTS } from '../constants/endpoints'

export function useReports () {
  const [EmployeesXLoan, setEmployeesXLoan] = useState([])
  const [EquipmentsXLoan, setEquipmentsXLoan] = useState([])
  const [EquipmentsConsolidated, setEquipmentsConsolidated] = useState([])

  const getEmployeesxLoan = (filters = { empleados: [] }) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('token')
      },
      body: JSON.stringify(filters)
    }
    fetch(ENDPOINTS.EMPLOYEES + 'all', options)
      .then((response) => response.json())
      .then((data) => {
        setEmployeesXLoan(data)
      })
  }

  const getEquipmentsxLoan = (filters = { equipos: [] }) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('token')
      },
      body: JSON.stringify(filters)
    }
    fetch(ENDPOINTS.EQUIPMENTS + '/all', options)
      .then((response) => response.json())
      .then((data) => {
        setEquipmentsXLoan(data)
      })
  }

  const getEquipmentsConsolidated = () => {
    fetch(ENDPOINTS.EQUIPMENTS_CONSOLIDATED, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('token')
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setEquipmentsConsolidated(data)
      })
  }

  return {
    getEmployeesxLoan, EmployeesXLoan, getEquipmentsxLoan, EquipmentsXLoan, getEquipmentsConsolidated, EquipmentsConsolidated
  }
}
