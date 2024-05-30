import * as React from 'react'
import { DataGrid, GridActionsCellItem, GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid'
import { AcceptIcon, DeleteIcon, EditIcon, RejectIcon, ReportIcon } from './Icons'

export function DataTable ({ actions, view, edit, accept, reject, columns, rows, className, handleEdit, handleDelete, handleView, handleAccept, handleReject }) {
  function CustomToolbar () {
    return (
      <GridToolbarContainer>
        <GridToolbarQuickFilter />
      </GridToolbarContainer>
    )
  }
  if (actions || view || edit || accept || reject) {
    columns.push({
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 150,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const actionsButton = []
        if (edit) {
          actionsButton.push(
            <GridActionsCellItem
              key='1'
              icon={<EditIcon />}
              onClick={handleEditClick(id)}
              label='Edit'
            />
          )
        }

        if (actions) {
          actionsButton.push(

            <GridActionsCellItem
              key='2'
              icon={<DeleteIcon />}
              onClick={handleDeleteClick(id)}
              label='Delete'
            />)
        }

        if (view) {
          actionsButton.push(
            <GridActionsCellItem
              key='3'
              icon={<ReportIcon />}
              onClick={handleViewClick(id)}
              label='View'
            />
          )
        }

        if (accept) {
          actionsButton.push(
            <GridActionsCellItem
              key='4'
              icon={<AcceptIcon />}
              onClick={handleAcceptClick(id)}
              label='Accept'
            />
          )
        }
        if (reject) {
          actionsButton.push(
            <GridActionsCellItem
              key='5'
              icon={<RejectIcon />}
              onClick={handleRejectClick(id)}
              label='Reject'
            />
          )
        }

        return actionsButton
      }
    })
  }

  const handleEditClick = (id) => () => {
    handleEdit(id)
  }

  const handleDeleteClick = (id) => () => {
    handleDelete(id)
  }

  const handleViewClick = (id) => () => {
    handleView(id)
  }

  const handleAcceptClick = (id) => () => {
    handleAccept(id)
  }

  const handleRejectClick = (id) => () => {
    handleReject(id)
  }
  return (
    <div style={{ minHeight: 250, width: '100%' }}>
      <DataGrid
        className={`dark:bg-gray-800 dark:text-white bg-noise ${className}`}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 }
          }
        }}
        pageSizeOptions={[5, 10, 15]}
        slots={{ toolbar: CustomToolbar }}
      />
    </div>
  )
}
