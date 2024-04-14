'use client'
import { useState } from 'react'
import { useSupabase } from '@/app/providers'
import { useData } from '@/store'
import { ImgItem } from '../ImgItem'
import { Input, Button } from '@nextui-org/react'

export function IdentificationCard ({ onClose }: { onClose: any }) {
  const { supabase } = useSupabase()
  const { deliveryId, delivery, setStore } = useData()

  const [input, setInput] = useState(delivery?.identification_card ? delivery?.identification_card : '')
  const [img1, setImg1] = useState<any>(null)
  const [img2, setImg2] = useState<any>(null)

  const [error, setError] = useState<any>(null)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (input.length <= 1) {
      setError('Ingresa el número de tu cedula')
      return
    }
    if (!img1) {
      setError('Ingresa la parte frontal de la cedula')
      return
    }
    if (!img2) {
      setError('Ingresa la parte de atras de la cedula')
      return
    }

    supabase
      .from('deliverys')
      .update({ identification_card: input })
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
      <p>Estimado repartidor, para completar tu registro en nuestra plataforma, necesitamos que nos proporciones el número de tu cédula. Esta información será utilizada exclusivamente para fines de identificación. ¡Gracias por tu colaboración!</p>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-5'
      >
        {error && (
          <p className='font-semibold text-red-500'>
            {error}
          </p>
        )}
        <Input
          type='number'
          placeholder='Número de identificación'
          value={input}
          onChange={({ target: { value } }) => {
            setError(null)
            setInput(value)
          }}
        />
        <ImgItem
          label='Parte frontal'
          value={img1}
          setValue={setImg1}
          bucketPath='identification_card/front/'
          tablePath='identification_card_front'
          nullTableValue={{ identification_card_front: null }}
        />
        <ImgItem
          label='Parte de atras'
          value={img2}
          setValue={setImg2}
          bucketPath='identification_card/back/'
          tablePath='identification_card_back'
          nullTableValue={{ identification_card_back: null }}
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
