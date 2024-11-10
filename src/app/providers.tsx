'use client'
import { NextUIProvider } from '@nextui-org/react'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useData } from '@/store'
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs'

type Database = {
  public: {
    Tables: {
      movies: {
        Row: {}
        Insert: {}
        Update: {}
      }
    }
  }
}

type SupabaseContext = {
  supabase: SupabaseClient<Database>
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export function Providers ({ children }: { children: ReactNode }) {
  const [supabase] = useState(() => createPagesBrowserClient())
  const router = useRouter()
  const { deliveryId, delivery, active, setStore } = useData()

  function assignOrderStatus (data: any) {
    setStore('currentOrder', data)

    switch (data?.order_state) {
      case 'entregando...':
        setStore('tripState', 'kitchen=>customer')
        break
      case 'recogiendo...':
        setStore('tripState', 'reciveOrder')
        break
      case 'buscando delivery...':
        setStore('tripState', '=>kitchen')
        break
      default:
        setStore('tripState', null)
        break
    }
  }

  useEffect(() => {
    if ('serviceWorker' in navigator && 'Notification' in window) Notification.requestPermission()
  }, [])

  useEffect(() => {
    if (deliveryId === null) return

    const watcher = navigator.geolocation.watchPosition(({ coords: { latitude, longitude, speed, altitude } }) => {
      setStore('currentPosition', { latitude, longitude, speed, altitude })
      supabase
        .from('deliverys')
        .update({ current_location: { latitude, longitude, speed, altitude } })
        .eq('id', deliveryId)
        .select('id')
        .then(({ error }) => {
          if (error) setStore('currentPosition', null)
        })
    },
    () => setStore('currentPosition', null))

    if (active === false) {
      return () => navigator.geolocation.clearWatch(watcher)
    }
  }, [deliveryId, active])

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => router.refresh())

    return () => subscription.unsubscribe()
  }, [router, supabase])

  useEffect(() => {
    if (!delivery) return
    if (!delivery.register_complete) {
      switch (delivery.register_step) {
        case 'data_collection':
          router.push('/register')
          break
        case 'data_validation':
          router.push('/validation')
          break
      }
    }
  }, [delivery])

  useEffect(() => {
    supabase.auth.getSession()
      .then(({ data: { session } }: any) => {
        if (session) {
          setStore('user', session.user)
          supabase
            .from('deliverys')
            .select('*')
            .eq('user_id', session.user.id)
            .then(({ data }) => {
              if (!data?.length) {
                const { name, email } = session.user.user_metadata
                supabase
                  .from('deliverys')
                  .insert([{ user_id: session.user.id, name, email }])
                  .select('*')
                  .then(({ data, error }) => {
                    if (error) return
                    setStore('delivery', data[0])
                    setStore('deliveryId', data[0].id)
                  })
              }
              if (data?.length) {
                const deliveryId = data[0].id
                setStore('deliveryId', deliveryId)
                setStore('delivery', data[0])
                supabase
                  .from('orders')
                  .select('*')
                  .eq('delivery_id', deliveryId)
                  .in('order_state', ['entregando...', 'recogiendo...', 'buscando delivery...'])
                  .then(({ data, error }) => {
                    if (error) return
                    if (data.length) assignOrderStatus(data[0])

                    supabase.channel('orders').on(
                      'postgres_changes',
                      {
                        event: 'UPDATE',
                        schema: 'public',
                        table: 'orders',
                        filter: `delivery_id=eq.${deliveryId}`
                      },
                      ({ new: data }) => {
                        if (data.order_state === 'buscando delivery...') {
                          setStore('soundAlert', true)
                          if (Notification.permission === 'granted') {
                            const notificacion = new Notification('Tienes una nueva orden', {
                              requireInteraction: true
                            })
                            notificacion.onclick = () => window.focus()
                          } else {
                            Notification.requestPermission()
                          }
                        }

                        if (data && data.kitchen_address && data.product) {
                          assignOrderStatus(data)
                          return
                        }

                        supabase
                          .from('orders')
                          .select('*')
                          .eq('delivery_id', deliveryId)
                          .in('order_state', ['entregando...', 'recogiendo...', 'buscando delivery...'])
                          .then(({ data, error }) => {
                            if (error || !data.length) return
                            assignOrderStatus(data[0])
                          })
                      }).subscribe()
                  })
              }
            })
        }
      })
  }, [])

  return (
    <Context.Provider value={{ supabase }}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </Context.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(Context)

  if (context === undefined) {
    throw new Error('useSupabase must be used inside SupabaseProvider')
  }

  return context
}
