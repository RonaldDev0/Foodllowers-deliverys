'use client'
import { useData } from '@/store'
import { Card, CardHeader, CardBody, CardFooter, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'
import { Home, Info } from 'lucide-react'
import { useSupabase } from '@/app/providers'

export function CustomerTrip () {
  const { currentOrder, deliveryId, setStore } = useData()
  const { supabase } = useSupabase()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  if (currentOrder === null) {
    return
  }

  function handleSubmit (onClose: Function) {
    if (currentOrder === null) {
      return
    }

    supabase
      .from('shipments')
      .insert({ ...currentOrder, order_state: 'entregado' })
      .select('id')
      .then(({ data }) => {
        if (!data) {
          return
        }

        supabase
          .from('orders')
          .delete()
          .eq('id', currentOrder.id)
          .then(({ error }) => {
            if (error) {
              return
            }

            supabase
              .from('deliverys')
              .update({ free: true })
              .eq('id', deliveryId)
              .select('id')
              .then(({ error }) => {
                if (error) {
                  return
                }

                onClose()
                setStore('tripState', null)
              })
          })
      })
  }

  return (
    <>
      <div className='fixed w-screen h-screen flex top-0 left-0 justify-center items-center'>
        <Card className='p-2'>
          <CardHeader className='flex justify-center font-semibold'>
            Detalle de la entrega
          </CardHeader>
          <CardBody className='w-96 gap-8'>
            <div className='flex gap-2 items-center'>
              <Home size={28} />
              <p>{currentOrder.user_address?.complete}</p>
            </div>
            <div className='flex items-center gap-2'>
              <Info size={28} />
              <p>{currentOrder.user_address?.aditionalInfo}</p>
            </div>
          </CardBody>
          <CardFooter className='flex gap-2'>
            <Button
              color='primary'
              className='w-full text-lg'
              onClick={() => window.open(`https://waze.com/ul?q=${currentOrder.user_address?.complete}&navigate=yes`, '_blank')}
            >
              Como llegar?
            </Button>
            <Button
              color='secondary'
              className='w-full text-lg'
              onPress={onOpen}
            >
              Pedido entregado
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Confirmación de la entrega
              </ModalHeader>
              <ModalBody>
                <p>ya le entregaste el pedido al cliente?</p>
              </ModalBody>
              <ModalFooter className='flex justify-center'>
                <Button
                  color='danger'
                  variant='light'
                  className='w-full'
                  onPress={onClose}
                >
                  Cancelar
                </Button>
                <Button
                  color='primary'
                  className='w-full'
                  onPress={() => handleSubmit(onClose)}
                >
                  Confirmar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
