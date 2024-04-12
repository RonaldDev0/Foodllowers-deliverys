'use client'
import { useState } from 'react'
import { useSupabase } from '@/app/providers'
import { useData } from '@/store'
import { ImgItem } from '../ImgItem'
import { Button } from '@nextui-org/react'

export function PropertyCard ({ onClose }: { onClose: any }) {
  const { supabase } = useSupabase()
  const { deliveryId, setStore } = useData()

  const [img, setImg] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (!img) {
      setError('Ingresa la parte frontal de la licencia')
      return
    }

    supabase
      .from('deliverys')
      .update({ property_card: img })
      .eq('id', deliveryId)
      .select()
      .then(({ data, error }) => {
        if (error) {
          return
        }
        setStore('delivery', data[0])
        onClose()
      })
  }

  return (
    <div className='flex flex-col gap-5'>
      <p>Estimado repartidor, para confirmar que el vehículo que utilizas para las entregas es de tu propiedad, necesitamos que nos proporciones los detalles de tu tarjeta de propiedad. Esta información será utilizada exclusivamente para fines de verificación. ¡Gracias por tu colaboración!</p>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        {error && (
          <p className='font-semibold text-red-500'>
            {error}
          </p>
        )}
        <ImgItem
          label='Parte frontal'
          value={img}
          setValue={setImg}
          bucketPath='property_card'
          nullTableValue={{ property_card: null }}
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
