import { Card, CardHeader, CardBody, CardFooter, Button } from '@nextui-org/react'
import Image from 'next/image'
import { useData } from '@/store'
import { MapPin, CircleDollarSign, ShoppingBag } from 'lucide-react'

interface IProps {
  deliveryData: {
    earnings: number
    distance: string
  }
}

export function NewOrder ({ deliveryData }: IProps) {
  const { currentOrder } = useData()
  return (
    <div className='fixed w-screen h-screen flex top-0 left-0 justify-center items-center'>
      <Card className='p-2'>
        <CardHeader className='flex justify-center font-semibold'>
          Detalle de la entrega
        </CardHeader>
        <CardBody className='w-96 gap-8'>
          <div className='flex justify-around font-semibold text-xl'>
            <div className='flex justify-center items-center gap-1'>
              <CircleDollarSign size={28} />
              <p>{deliveryData.earnings.toLocaleString()}</p>
            </div>
            <p>{deliveryData.distance}</p>
          </div>
          <div className='flex gap-2 justify-center items-center'>
            <MapPin size={28} />
            <p>{currentOrder?.kitchen_address}</p>
          </div>
          <div className='flex items-center gap-2'>
            <Image src={currentOrder?.kitchen_logo!} alt='logo' width='50' height='50' />
            <p>{currentOrder?.product.influencers.full_name}</p>
          </div>
          <div className='flex items-center gap-2'>
            <ShoppingBag size={28} />
            <p>{currentOrder?.delivery_details}</p>
          </div>
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
