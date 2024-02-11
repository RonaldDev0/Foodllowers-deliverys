'use client'
import { useData } from '@/store'
import { Card, CardHeader, CardBody } from '@nextui-org/react'
import { Ban, MapPin } from 'lucide-react'

export function GpsNotification () {
  const { currentPosition } = useData()

  if (currentPosition) {
    return
  }

  return (
    <div className='fixed z-50 w-full h-screen top-0 left-0 flex justify-center items-center'>
      <Card>
        <CardHeader className='justify-center font-semibold gap-3'>
          <Ban size={28} />
          <p>Error</p>
          <MapPin size={28} />
        </CardHeader>
        <CardBody className='gap-4'>
          <p>Necesitas activar tu ubicación GPS, para continuar</p>
          <p>activa tu ubicación y recarga la app</p>
        </CardBody>
      </Card>
    </div>
  )
}
