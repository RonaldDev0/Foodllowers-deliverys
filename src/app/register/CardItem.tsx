'use client'
import { useData } from '@/store'
import { cloneElement } from 'react'
import { Card, CardBody, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@nextui-org/react'
import { ChevronRight, Check } from 'lucide-react'

import type { IStep } from './registerSteps'

export function CardItem ({ icon, title, component, tableReference }: IStep) {
  const { delivery } = useData()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <div onClick={onOpen}>
        <Card className='relative group cursor-pointer w-96'>
          <CardBody>
            <div className='flex justify-between items-center relative'>
              <div className='flex items-center gap-5'>
                {icon}
                <p>{title}</p>
              </div>
              {delivery[tableReference] && (
                <div className='absolute top-0 right-0 h-full opacity-100 group-hover:opacity-0 transition-opacity duration-200 flex items-center'>
                  <Check size={25} />
                </div>
              )}
              <div className='absolute top-0 right-0 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center'>
                <ChevronRight size={20} />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex justify-center'>
                <div className='flex flex-col items-center gap-3'>
                  {icon}
                  {title}
                </div>
              </ModalHeader>
              <ModalBody className='mb-5'>
                {cloneElement(component, { onClose })}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
