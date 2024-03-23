'use client'
import { useData } from '@/store'
import { useSupabase } from '@/app/providers'
import { Card, CardHeader, CardBody, CardFooter, Button, Avatar, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'

export function ReciveOrder () {
  const { supabase } = useSupabase()
  const { currentOrder, setStore } = useData()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  if (currentOrder === null) {
    return
  }

  function handleSubmit (onClose: Function) {
    if (currentOrder === null) {
      return
    }

    supabase
      .from('orders')
      .update({ order_state: 'entregando...' })
      .eq('id', currentOrder.id)
      .select('id')
      .then(({ data }) => {
        if (data?.length) {
          onClose()
          setStore('tripState', 'kitchen=>customer')
        }
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
            <div className='flex gap-3 mb-2'>
              <p>ID del pedido:</p>
              <div className='flex justify-center items-center'>
                <p>{currentOrder.invoice_id.slice(0, 6)}-</p>
                <p className='font-bold text-lg'>{currentOrder.invoice_id.slice(6, 10)}</p>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <Avatar src={currentOrder.product?.influencers?.avatar} />
              <div>
                <p>x1 {currentOrder?.product?.name}</p>
                <p className='opacity-50'>{currentOrder?.product?.influencers?.full_name}</p>
              </div>
            </div>

          </CardBody>
          <CardFooter className='flex gap-2'>
            <Button
              color='secondary'
              className='w-full text-lg'
              onPress={onOpen}
            >
              Tengo el pedido
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Confirmación de recibido
              </ModalHeader>
              <ModalBody>
                <p>ya recibiste el pedido de la cocina?</p>
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
