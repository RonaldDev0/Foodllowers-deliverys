'use client'
import { useState } from 'react'
import { ImgItem } from '../ImgItem'
import { Button } from '@nextui-org/react'

export function UserPicture ({ onClose }: { onClose: any }) {
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
      <p>Estimado repartidor, para completar el registro en nuestra app, por favor envía una foto reciente de tu rostro. Esto nos ayudará a verificar tu identidad. ¡Gracias por tu colaboración!</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        {error && (
          <p className='font-semibold text-red-500'>
            {error}
          </p>
        )}
        <ImgItem
          label='Foto de tu rostro'
          value={img}
          setValue={setImg}
          bucketPath='user_picture/'
          tablePath='user_picture'
          nullTableValue={{ user_picture: null }}
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
