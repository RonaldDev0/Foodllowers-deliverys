'use client'
import { useState } from 'react'
import { ImgItem } from '../ImgItem'
import { Button } from '@nextui-org/react'

export function LicensePlatePhoto ({ onClose }: { onClose: any }) {
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
      <p>Estimado repartidor, para completar tu registro en nuestra app, por favor envía una foto clara de la placa de tu vehículo. Esto es necesario para verificar la información de tu vehículo. ¡Gracias por tu colaboración!</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        {error && (
          <p className='font-semibold text-red-500'>
            {error}
          </p>
        )}
        <ImgItem
          label='Foto de la placa'
          value={img}
          setValue={setImg}
          bucketPath='license_plate_photo/'
          tablePath='license_plate_photo'
          nullTableValue={{ license_plate_photo: null }}
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
