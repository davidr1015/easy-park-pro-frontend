const URL_LOCAL = 'http://localhost:4000'

const URL_SERVER = import.meta.env.VITE_BACK_API_URL
const PORT_SERVER = import.meta.env.VITE_BACK_API_PORT

export const URL = `${URL_SERVER}:${PORT_SERVER}`

export const ENDPOINTS = {
  EMPLOYEES: `${URL}/api/employees/`,
  THIRDS: `${URL}/api/third_parties/`,
  EQUIPMENTS: `${URL}/api/equipments`,
  CATEGORIES: `${URL}/api/categories`,
  COMPANY: `${URL}/api/company`,
  LOANS: `${URL}/api/loans`,
  LOGIN: `${URL}/api/login`,
  SIGNUP: `${URL}/api/signup`,
  CONFIRM_EMAIL: `${URL}/api/validation_email`,
  RECOVER_PASSWORD: `${URL}/api/recover_password`,
  CHANGE_PASSWORD: `${URL}/api/recover_password/reset-password`,
  UPDATE_PASSWORD: `${URL}/api/employees/actualizar-password`,
  ROLES: `${URL}/api/roles`,
  POSITIONS: `${URL}/api/positions`,
  ROOMS: `${URL}/api/rooms`,
  MAINTENANCES: `${URL}/api/maintenance`,
  CHECK: `${URL}/api/validate-token`,
  STATISTICS_LOANS_MONTHS: `${URL}/api/statistics/prestamos_mes`,
  STATISTICS_LOANS_EMPLOYEE: `${URL}/api/statistics/prestamos_empleado`,
  STATISTICS_LOANS_STATE: `${URL}/api/statistics/estados_prestamo`,
  EQUIPMENTS_CONSOLIDATED: `${URL}/api/reports`
}
