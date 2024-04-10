'use client'
import { useState } from 'react'
import { ImgItem } from '../ImgItem'
import { Button } from '@nextui-org/react'

export function PropertyCard ({ onClose }: { onClose: any }) {
  const [img, setImg] = useState<any>(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className='flex flex-col gap-5'>
      <p>Estimado repartidor, para confirmar que el vehículo que utilizas para las entregas es de tu propiedad, necesitamos que nos proporciones los detalles de tu tarjeta de propiedad. Esta información será utilizada exclusivamente para fines de verificación. ¡Gracias por tu colaboración!</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <ImgItem
          label='Parte frontal'
          value={img}
          setValue={setImg}
          bucketPath='property_card/'
        />
        <Button
          type='submit'
          color='secondary'
          className='text-lg font-semibold'
        >
          Guardar
        </Button>
      </form>
    </div>
  )
}
