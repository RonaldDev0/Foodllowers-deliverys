'use client'
import { Switch, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@nextui-org/react'
import { useData } from '@/store'
import { useSupabase } from '@/app/providers'
import { Ban } from 'lucide-react'

export function SwitchState () {
  const { supabase } = useSupabase()
  const { user, active, setStore } = useData()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const setDeliveryState = () => {
    supabase
      .from('deliverys')
      .select('*')
      .eq('user_id', user.id)
      .then(({ data, error }) => {
        if (error) {
          return
        }

        setStore('delivery', data[0])
        if (data[0].active) {
          if (!data[0].free) {
            onOpen()
            return
          }

          supabase
            .from('deliverys')
            .update({ active: false })
            .eq('user_id', user.id)
            .select()
            .then(res => {
              if (res.data) {
                setStore('delivery', res.data[0])
                setStore('active', false)
              }
            })
          return
        }

        supabase
          .from('deliverys')
          .update({ active: true, free: true })
          .eq('user_id', user.id)
          .select()
          .then(res => {
            if (res.data) {
              setStore('delivery', res.data[0])
              setStore('active', true)
            }
          })
      })
  }

  return (
    <>
      <div className='w-full flex justify-center gap-48'>
        <p>{!active && 'no'} estas conectado</p>
        <Switch
          color='secondary'
          isSelected={!!active}
          onClick={setDeliveryState}
        />
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                <div className='w-full flex flex-col gap-4 items-center'>
                  <Ban size={45} />
                  <p className='font-semibold'>
                    Tienes un pedido pendiente
                  </p>
                </div>
              </ModalHeader>
              <ModalBody>
                <p>Recuerda que no puedes cambiar tu estado a no activo si tienes un pedido pendiente. Debes entregar todos los pedidos antes de poder hacerlo.</p>
                <p>¡Gracias por tu cooperación!</p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
