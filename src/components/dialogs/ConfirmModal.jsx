'use client'

import { Button, Modal } from 'flowbite-react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

export function ConfirmModal ({ acceptClick, cancelClick, description, acceptMessage = 'Si, eliminar' }) {
  return (
    <>
      <Modal show size='md' onClose={cancelClick} className='z-[900]' popup>
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              {description}
            </h3>
            <div className='flex justify-center gap-4'>
              <Button color='failure' onClick={acceptClick}>
                {acceptMessage}
              </Button>
              <Button color='gray' onClick={cancelClick}>
                No, cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
