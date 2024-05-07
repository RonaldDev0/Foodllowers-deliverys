/* eslint-disable camelcase */
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

  const { delivery_id, kitchen_id, influencer_id, transaction_amount } = currentOrder

  function updateBalace (table: string, id: string, amount: number) {
    supabase
      .from(table)
      .select('balance')
      .eq('id', id)
      .then(({ data, error }) => {
        if (error) {
          return
        }
        const balance = data[0].balance
        supabase
          .from(table)
          .update({ balance: balance + amount })
          .eq('id', id)
      })
  }

  function handleSubmit (onClose: Function) {
    if (currentOrder === null) {
      return
    }

    supabase
      .from('shipments')
      .insert({ ...currentOrder, order_state: 'entregado' })
      .select('id')
      .then(({ data, error }) => {
        if (error) {
          return
        }
        const shipment_id = data[0].id

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

                supabase
                  .from('transactions')
                  .insert([
                    { shipment_id, influencer_id, amount: transaction_amount.influencer, transaction_type: 'payment to influencer' },
                    { shipment_id, kitchen_id, amount: transaction_amount.kitchen, transaction_type: 'payment to kitchen' },
                    { shipment_id, delivery_id, amount: transaction_amount.delivery.tip + transaction_amount.delivery.service, transaction_type: 'payment to delivery' }
                  ])
                  .then(({ error }) => {
                    if (error) {
                      return
                    }
                    updateBalace('influencers', influencer_id, transaction_amount.influencer)
                    updateBalace('kitchens', kitchen_id, transaction_amount.kitchen)
                    updateBalace('deliverys', delivery_id, transaction_amount.delivery.tip + transaction_amount.delivery.service)

                    onClose()
                    setStore('tripState', null)

                    fetch('/api/send_email', {
                      cache: 'no-store',
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        customerEmail: currentOrder.user_email,
                        nombre: currentOrder.user_name,
                        direccion: currentOrder.user_address.formatted_address,
                        numeroDePedido: currentOrder.invoice_id,
                        detallesDelPedido: currentOrder.product.name,
                        marcaDelRestaurante: currentOrder.product.influencers.full_name,
                        transacction: currentOrder.transaction_amount
                      })
                    })
                  })
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
              <p>{currentOrder.user_address?.formatted_address}</p>
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
              onClick={() => {
                const { lat, lng } = currentOrder.user_address.geometry.location
                window.open(`https://waze.com/ul?ll=${lat},${lng}&navigate=yes`, '_blank')
              }}
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
