import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react'
import Image from 'next/image'

const order = {
  Address: '110911, Fontibón, Bogotá',
  KitchenLogo: '../icons/logo-burger-king.svg',
  DeliveryDetails: '2 pedidos'
}

const deliveryData = {
  earnings: 10500,
  distance: '1.2km'
}

export function NewOrder () {
  return (
    <div className='fixed w-screen h-screen flex top-0 left-0 justify-center items-center'>
      <Card>
        <CardHeader className='flex justify-center font-semibold'>
          Detalle de la entrega
        </CardHeader>
        <CardBody className='w-96 gap-10'>
          <div className='flex justify-around font-semibold text-xl'>
            <p>${deliveryData.earnings.toLocaleString()}</p>
            <p>{deliveryData.distance}</p>
          </div>
          <p>{order.Address}</p>
          <Image src={order.KitchenLogo} alt='logo' width='70' height='50' />
          <p>{order.DeliveryDetails}</p>
        </CardBody>
        <CardFooter className='flex flex-col'>
          <Button color='secondary' className='w-full text-lg'>
            Comenzar
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
