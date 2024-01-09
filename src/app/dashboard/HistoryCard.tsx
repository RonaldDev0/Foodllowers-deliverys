'use client'
import { Card, CardBody, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from '@nextui-org/react'
import { ArrowRight } from 'lucide-react'

export function HistoryCard ({ item }: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Card className='w-full hover:bg-purple-950 transition-all cursor-pointer h-14 my-2'>
        <CardBody onClick={onOpen}>
          <div className='flex justify-between'>
            <p>{item.date}</p>
            <div className='flex gap-4'>
              <p>$ {item.earnings.toLocaleString()}</p>
              <ArrowRight size={28} />
            </div>
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className=''>
                Detalles de las ganancias
              </ModalHeader>
              <ModalBody>
                {JSON.stringify(item, null, 2)}
              </ModalBody>
              <ModalFooter>
                <Button color='secondary' onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
