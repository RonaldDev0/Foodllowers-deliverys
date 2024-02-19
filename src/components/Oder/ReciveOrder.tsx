'use client'
import { useData } from '@/store'
import { useSupabase } from '@/app/providers'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react'
import Image from 'next/image'

export function ReciveOrder () {
  const { supabase } = useSupabase()
  const { currentOrder, setStore } = useData()

  if (currentOrder === null) {
    return
  }

  function handleSubmit () {
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
          setStore('tripState', 'kitchen=>customer')
        }
      })
  }

  return (
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
            <Image src={currentOrder?.kitchen_logo!} alt='logo' width='50' height='50' />
            <div>
              <p>x1 {currentOrder?.product.name}</p>
              <p className='opacity-50'>{currentOrder?.product.influencers.full_name}</p>
            </div>
          </div>

        </CardBody>
        <CardFooter className='flex gap-2'>
          <Button
            color='secondary'
            className='w-full text-lg'
            onPress={handleSubmit}
          >
            Tengo el pedido
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
