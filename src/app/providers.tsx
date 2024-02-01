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
  const { setStore } = useData()

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      return
    }
    navigator.geolocation.watchPosition(({ coords: { latitude, longitude } }) => {
      setStore('currentPosition', { latitude, longitude })
    })
  }, [])

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => router.refresh())

    return () => subscription.unsubscribe()
  }, [router, supabase])

  useEffect(() => {
    supabase.auth.getSession()
      .then(({ data: { session } }: any) => {
        if (session) {
          setStore('user', session.user)
        }
      })
  }, [])

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
              if (data?.length) {
                const deliveryId = data[0].id
                setStore('deliveryId', deliveryId)
                supabase
                  .from('orders')
                  .select('*')
                  .eq('delivery_id', deliveryId)
                  .then(({ data }) => {
                    setStore('currentOrder', data?.filter(order => order.order_state === 'recogiendo...')[0])
                    supabase.channel('orders').on(
                      'postgres_changes',
                      {
                        event: 'UPDATE',
                        schema: 'public',
                        table: 'orders',
                        filter: `delivery_id=eq.${deliveryId}`
                      },
                      payload => {
                        setStore('currentOrder', payload.new)
                      }
                    ).subscribe()
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
