import { useEffect, useState } from 'react'
import { ENDPOINTS } from '../constants/endpoints'
import { LOAN_STATES } from '../constants/enumerators'

export function useStatistics () {
  const [loansByEmployees, setLoansByEmployees] = useState({ xAxis: [], series: [] })
  const [loansByMonth, setLoansByMonth] = useState({ xAxis: [], series: [] })
  const [loanStates, setLoansStates] = useState([])

  useEffect(() => {
    getLoansStates()
    getLoansByEmployees()
    getLoansByMonth()
  }, [])

  const getLoansByMonth = () => {
    fetch(ENDPOINTS.STATISTICS_LOANS_MONTHS, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.body?.error) {
          return []
        }
        const xAxis = data.map(item => `${item.mes}/${item.anio}`)

        // Crear el objeto series
        const series = data.map(item => parseInt(item.cantidad_prestamos))
        setLoansByMonth({ xAxis, series })
      })
  }
  const getLoansByEmployees = () => {
    fetch(ENDPOINTS.STATISTICS_LOANS_EMPLOYEE, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.body?.error) {
          return []
        }
        const xAxis = data.map(item => `${(item.nombre.split(' ')[0])}`)
        const series = data.map(item => parseInt(item.cantidad_prestamos))
        setLoansByEmployees({ xAxis, series })
      })
  }
  const getLoansStates = () => {
    fetch(ENDPOINTS.STATISTICS_LOANS_STATE, {
      headers: {
        Authorization: window.localStorage.getItem('token')
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.body?.error) {
          return []
        }
        const result = data.map(obj => ({
          id: data.indexOf(obj),
          value: parseInt(obj.cantidad_prestamos),
          label: LOAN_STATES[obj.estado]
        }))
        setLoansStates(result)
      })
  }

  return {
    loansByEmployees, loansByMonth, loanStates
  }
}
