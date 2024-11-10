'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useData } from '@/store'
import { useSupabase } from './providers'
import { Order, GpsNotification, SwitchState } from '@/components'

export default function Home () {
  const { user, currentPosition, delivery, setStore } = useData()
  const { supabase } = useSupabase()
  const loginCode = useSearchParams().get('code')
  const router = useRouter()

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

  if (!currentPosition && delivery) return <GpsNotification />

  return (
    <main className='flex flex-col gap-4 justify-center items-center'>
      <SwitchState />
      <Order />
    </main>
  )
}
