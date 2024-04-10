'use client'
import { useState } from 'react'
import { ImgItem } from '../ImgItem'
import { Input, Button } from '@nextui-org/react'

export function IdentificationCard ({ onClose }: { onClose: any }) {
  const [img1, setImg1] = useState<any>(null)
  const [img2, setImg2] = useState<any>(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    onClose()
  }

  return (
    <div className='flex flex-col gap-5'>
      <p>Estimado repartidor, para completar tu registro en nuestra plataforma, necesitamos que nos proporciones el número de tu cédula. Esta información será utilizada exclusivamente para fines de identificación. ¡Gracias por tu colaboración!</p>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-5'
      >
        <Input
          type='text'
          placeholder='Número de identificación'
        />
        <ImgItem
          label='Parte frontal'
          value={img1}
          setValue={setImg1}
          bucketPath='identification_card/front/'
        />
        <ImgItem
          label='Parte de atras'
          value={img2}
          setValue={setImg2}
          bucketPath='identification_card/back/'
        />
        <Button
          type='submit'
          color='secondary'
          className='text-lg font-semibold'
        >
          Siguiente
        </Button>
      </form>
    </div>
  )
}
