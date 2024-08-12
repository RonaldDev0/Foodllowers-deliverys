'use client'
import { useState } from 'react'
import { ImgItem } from '../ImgItem'
import { Button } from '@nextui-org/react'

export function BagPicture ({ onClose }: { onClose: any }) {
  const [img, setImg] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!img) {
      setError('Ingresa la parte frontal de la licencia')
      return
    }
    onClose()
  }

  return (
    <div className='flex flex-col gap-5'>
      <p>Estimado repartidor, para finalizar tu registro en nuestra app, necesitamos que nos envíes una foto clara de tu mochila de delivery. Esto es para asegurarnos de que cumples con los requisitos de nuestra plataforma. ¡Gracias por tu colaboración!</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        {error && (
          <p className='font-semibold text-red-500'>
            {error}
          </p>
        )}
        <ImgItem
          label='Foto de tu mochila'
          value={img}
          setValue={setImg}
          bucketPath='bag_picture/'
          tablePath='bag_picture'
          nullTableValue={{ bag_picture: null }}
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
