'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useData } from '@/store'
import { useSupabase } from './providers'
import { Switch } from '@nextui-org/react'
import { NewOrder } from '@/components'

export default function Home () {
  const { user, active, currentOrder, setStore } = useData()
  const { supabase } = useSupabase()
  const loginCode = useSearchParams().get('code')
  const router = useRouter()

  const [coords, setCoords] = useState<any>(null)

  const setDeliveryState = () => {
    supabase
      .from('deliverys')
      .update({ active: !active })
      .eq('user_id', user.id)
      .select()
      .then(res => {
        if (res.data) {
          setStore('active', !active)
        }
      })
  }

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      console.log('La geolocalización no está disponible en tu navegador.')
      return
    }
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      // console.log(`Latitud: ${coords.latitude}`)
      // console.log(`Longitud: ${coords.longitude}`)
      setCoords(coords)
    }, error => console.log(error), { enableHighAccuracy: true })
  }, [])

  useEffect(() => {
    if (loginCode) {
      setTimeout(() => router.push('/'), 200)
    }
  }, [])

  useEffect(() => {
    if (user) {
      supabase
        .from('deliverys')
        .select('active')
        .eq('user_id', user.id)
        .then(res => {
          if (res.data) {
            setStore('active', res.data[0]?.active)
          }
        })
    }
  }, [user])

  return (
    <main className='flex flex-col gap-4 justify-center items-center'>
      {coords && (<p>{`latitude: ${coords.latitude} longitud: ${coords.longitude}`}</p>)}
      <div className='w-full flex justify-center gap-48'>
        <p>{active ? 'estas conectado' : 'no estas conectado'}</p>
        <Switch
          color='secondary'
          isSelected={!!active}
          onClick={setDeliveryState}
        />
      </div>
      {currentOrder && (
        <NewOrder
          deliveryData={{
            earnings: 10500,
            distance: '1.2km'
          }}
        />
      )}
    </main>
  )
}
