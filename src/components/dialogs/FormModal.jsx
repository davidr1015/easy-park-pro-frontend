'use client'

import { Modal } from 'flowbite-react'

export function FormModal ({ children, acceptClick, cancelClick, description }) {
  return (
    <>
      <Modal show size='md' onClose={cancelClick} className='z-[900]' popup>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>

            {children}

          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
