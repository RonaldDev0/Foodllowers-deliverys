'use client'
import { useData } from '@/store'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react'
import { MapPin, ShoppingBag } from 'lucide-react'

export function CustomerTrip () {
  const { currentOrder } = useData()

  if (currentOrder === null) {
    return
  }

  return (
    <div className='fixed w-screen h-screen flex top-0 left-0 justify-center items-center'>
      <Card className='p-2'>
        <CardHeader className='flex justify-center font-semibold'>
          Detalle de la entrega
        </CardHeader>
        <CardBody className='w-96 gap-8'>
          <div className='flex gap-2 items-center'>
            <MapPin size={28} />
            <p>{currentOrder.user_address?.complete}</p>
          </div>
          <div className='flex items-center gap-2'>
            <ShoppingBag size={28} />
            <p>{currentOrder.delivery_details}</p>
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
            // onPress={}
          >
            Pedido entregado
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
