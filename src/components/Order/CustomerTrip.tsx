/* eslint-disable camelcase */
'use client'
import { useData } from '@/store'
import { Card, CardHeader, CardBody, CardFooter, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react'
import { Home, User, Phone, Clipboard } from 'lucide-react'
import { useSupabase } from '@/app/providers'
import { useRouter } from 'next/navigation'
import { Toaster, toast } from 'sonner'

export function CustomerTrip () {
  const { currentOrder, deliveryId, darkMode, setStore } = useData()
  const { supabase } = useSupabase()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const router = useRouter()

  if (currentOrder === null) {
    return
  }

  const { delivery_id, transaction_amount } = currentOrder

  function updateBalace (table: string, id: string, amount: number) {
    supabase
      .from(table)
      .select('balance')
      .eq('id', id)
      .single()
      .then(({ data, error }) => {
        if (error) {
          return
        }
        supabase
          .from(table)
          .update({ balance: data.balance + amount })
          .eq('id', id)
          .then(() => {})
      })
  }

  function handleSubmit (onClose: Function) {
    if (currentOrder === null) return

    supabase
      .from('shipments')
      .insert({ ...currentOrder, order_state: 'entregado' })
      .select('id')
      .then(({ data, error }) => {
        if (error) {
          router.refresh()
          return
        }
        const shipment_id = data[0].id

        supabase
          .from('orders')
          .delete()
          .eq('id', currentOrder.id)
          .then(({ error }) => {
            if (error) return

            supabase
              .from('deliverys')
              .update({ free: true })
              .eq('id', deliveryId)
              .select('id')
              .then(({ error }) => {
                if (error) return

                supabase
                  .from('earnings')
                  .insert([
                    { shipment_id, delivery_id, amount: transaction_amount.delivery.tip + transaction_amount.delivery.service, transaction_type: 'payment to delivery' }
                  ])
                  .then(({ error }) => {
                    if (error) return
                    updateBalace('deliverys', delivery_id, transaction_amount.delivery.tip + transaction_amount.delivery.service)

                    onClose()
                    setStore('tripState', null)

                    supabase
                      .from('earnings')
                      .select('*')
                      .eq('delivery_id', deliveryId)
                      .order('created_at', { ascending: false })
                      .range(0, 10)
                      .then(({ data, error }) => {
                        if (error) return

                        setStore('balanceFetched', true)
                        setStore('balanceHistory', data)
                      })

                    if (currentOrder.user_email === 'Desconocido') return

                    fetch('/api/send_email', {
                      cache: 'no-store',
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        customerEmail: currentOrder.user_email,
                        nombre: currentOrder.user_name,
                        direccion: currentOrder.user_address.formatted_address,
                        numeroDePedido: currentOrder.invoice_id,
                        detallesDelPedido: currentOrder.product.name || 'Desconocido',
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
      <Toaster
        expand
        richColors
        theme={darkMode ? 'dark' : 'light'}
      />
      <div className='fixed w-screen h-screen flex top-0 left-0 justify-center items-center'>
        <Card className='p-2'>
          <CardHeader className='flex justify-center font-semibold'>
            Detalle de la entrega
          </CardHeader>
          <CardBody className='w-96 [@media(max-width:365px)]:!w-80 gap-8'>
            <div className='flex gap-2 items-center'>
              <User size={28} />
              <p>{currentOrder.user_name}</p>
            </div>
            <div className='flex gap-2 items-center'>
              <Phone size={28} />
              <div className='flex gap-2 items-center'>
                <p
                  className='text-purple-800 font-bold cursor-pointer'
                  onClick={() => window.open(`tel:${currentOrder.user_address?.number}`, '_blank')}
                >
                  {currentOrder.user_address?.number}
                </p>
                <Clipboard
                  size={28}
                  className='opacity-60 cursor-pointer'
                  onClick={() => {
                    navigator.clipboard.writeText(currentOrder.user_address?.number.toString())
                    toast.info('Número copiado en el portapapeles')
                  }}
                />
              </div>
            </div>
            <div className='flex gap-2 items-center'>
              <Home size={28} />
              <div>
                <p>{currentOrder.user_address?.formatted_address}</p>
                <p className='opacity-60'>
                  {currentOrder.user_address?.aditionalInfo}
                </p>
              </div>
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
