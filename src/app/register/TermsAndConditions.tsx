'use client'
import { Checkbox, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@nextui-org/react'
import { ClipboardList } from 'lucide-react'

export function TermsAndConditions () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div className='flex justify-center items-center '>
        <Checkbox color='secondary' />
        <p onClick={onOpen} className='cursor-pointer hover:opacity-75 transition-all'>
          Términos y condiciones
        </p>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader>
                <div className='flex flex-col gap-3 justify-center items-center w-full'>
                  <ClipboardList size={30} />
                  <p className='font-semibold text-lg'>
                    Términos y condiciones
                  </p>
                </div>
              </ModalHeader>
              <ModalBody>
                <p>Terminos y condiciones</p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
