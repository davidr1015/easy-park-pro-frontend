export const MODULES = Object.freeze({
  DASHBOARD: 1,
  EQUIPMENTS: 2,
  EMPLOYEES: 3,
  LOANS: 4,
  CATEGORIES: 5
})

export const EQUIPMENT_STATES = {
  1: 'DISPONIBLE',
  2: 'EN PRESTAMO',
  3: 'EN MANTENIMIENTO'
}

export const LOAN_STATES = {
  1: 'EN PRESTAMO',
  2: 'DEVUELTO',
  3: 'ATRASADO'
}

export const MAINTENANCES_STATES = {
  1: 'EN MANTENIMIENTO',
  2: 'FINALIZADO'
}

export const MAINTENANCES_TYPES = {
  1: 'PREVENTIVO',
  2: 'REPARACIÓN'
}
